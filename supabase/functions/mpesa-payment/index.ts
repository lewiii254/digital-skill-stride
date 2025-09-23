
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PaymentRequest {
  amount: number
  phoneNumber: string
  paymentType: 'course_purchase' | 'mentorship_booking' | 'subscription'
  referenceId?: string
  description?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Get user from request - try multiple auth methods
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.error('No authorization header provided')
      throw new Error('Authentication required - please sign in to make payments')
    }
    
    const token = authHeader.replace('Bearer ', '')
    
    // Try to get user with the provided token
    const { data: { user: initialUser }, error: authError } = await supabaseClient.auth.getUser(token)
    let user = initialUser
    
    if (authError || !user) {
      console.error('Authentication error:', authError)
      // Try with the anon key to verify the token
      const supabaseAuth = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      )
      
      const authResult = await supabaseAuth.auth.getUser(token)
      
      if (authResult.error || !authResult.data.user) {
        console.error('Retry authentication failed:', authResult.error)
        throw new Error('Unauthorized - please sign in to make payments')
      }
      
      // Use the authenticated user
      user = authResult.data.user
    }

    const requestBody = await req.json()
    const { amount, phoneNumber, paymentType, referenceId, description }: PaymentRequest = requestBody

    // Validate required fields
    if (!amount || amount <= 0) {
      throw new Error('Invalid amount - must be greater than 0')
    }
    
    if (!phoneNumber) {
      throw new Error('Phone number is required')
    }
    
    if (!paymentType || !['course_purchase', 'mentorship_booking', 'subscription'].includes(paymentType)) {
      throw new Error('Invalid payment type')
    }

    console.log('Processing M-Pesa payment:', { amount, phoneNumber, paymentType, userId: user.id, referenceId })

    // Create payment record in database
    const { data: payment, error: paymentError } = await supabaseClient
      .from('payments')
      .insert({
        user_id: user.id,
        amount,
        currency: 'KES',
        payment_method: 'mpesa',
        phone_number: phoneNumber,
        payment_type: paymentType,
        reference_id: referenceId || null,
        payment_description: description || `Payment for ${paymentType}`,
        status: 'pending'
      })
      .select()
      .single()

    if (paymentError) {
      console.error('Payment record error:', paymentError)
      throw new Error(`Failed to create payment record: ${paymentError.message}`)
    }

    console.log('Payment record created:', payment.id)

    // Get M-Pesa credentials from environment
    const consumerKey = Deno.env.get('MPESA_CONSUMER_KEY')
    const consumerSecret = Deno.env.get('MPESA_CONSUMER_SECRET')
    
    if (!consumerKey || !consumerSecret) {
      console.error('M-Pesa credentials not configured')
      throw new Error('M-Pesa credentials not configured')
    }
    
    // Get M-Pesa access token
    const authResponse = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
      }
    })

    if (!authResponse.ok) {
      console.error('M-Pesa auth failed:', await authResponse.text())
      throw new Error('Failed to authenticate with M-Pesa')
    }

    const authData = await authResponse.json()
    const accessToken = authData.access_token

    console.log('M-Pesa access token obtained')

    // Format phone number for M-Pesa (ensure it starts with 254)
    let formattedPhone = phoneNumber.replace(/\D/g, '')
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.slice(1)
    } else if (!formattedPhone.startsWith('254')) {
      formattedPhone = '254' + formattedPhone
    }

    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
    
    // Get M-Pesa configuration from environment
    const businessShortCode = Deno.env.get('MPESA_BUSINESS_SHORT_CODE') || '174379'
    const passkey = Deno.env.get('MPESA_PASSKEY')
    
    if (!passkey) {
      console.error('M-Pesa passkey not configured')
      throw new Error('M-Pesa passkey not configured')
    }
    
    // Generate password
    const password = btoa(businessShortCode + passkey + timestamp)

    // Get callback URL - use environment variable or fallback to Supabase URL
    const baseUrl = Deno.env.get('SUPABASE_URL') || 'https://qrjwrbbngvxlvcczxxss.supabase.co'
    const callbackUrl = `${baseUrl}/functions/v1/mpesa-callback?payment_id=${payment.id}`

    // Prepare STK Push request
    const stkPushPayload = {
      BusinessShortCode: businessShortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: businessShortCode,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: `PAY-${payment.id}`,
      TransactionDesc: description || `Payment for ${paymentType}`
    }

    console.log('Initiating STK Push:', stkPushPayload)

    // Send STK Push request
    const stkResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stkPushPayload)
    })

    const stkData = await stkResponse.json()
    console.log('STK Push response:', stkData)

    if (stkData.ResponseCode === '0') {
      // Update payment with checkout request ID
      await supabaseClient
        .from('payments')
        .update({
          checkout_request_id: stkData.CheckoutRequestID,
          merchant_request_id: stkData.MerchantRequestID
        })
        .eq('id', payment.id)

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Payment initiated successfully',
          paymentId: payment.id,
          checkoutRequestId: stkData.CheckoutRequestID
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          } 
        }
      )
    } else {
      // Update payment status to failed
      await supabaseClient
        .from('payments')
        .update({
          status: 'failed',
          result_desc: stkData.errorMessage || 'STK Push failed'
        })
        .eq('id', payment.id)

      throw new Error(stkData.errorMessage || 'Failed to initiate payment')
    }

  } catch (error) {
    console.error('Payment processing error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
