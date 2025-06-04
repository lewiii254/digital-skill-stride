
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
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get user from request
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')
    const { data: { user } } = await supabaseClient.auth.getUser(token)
    
    if (!user) {
      throw new Error('Unauthorized')
    }

    const { amount, phoneNumber, paymentType, referenceId, description }: PaymentRequest = await req.json()

    console.log('Processing M-Pesa payment:', { amount, phoneNumber, paymentType, userId: user.id })

    // Get M-Pesa access token
    const authUrl = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    const consumerKey = Deno.env.get('MPESA_CONSUMER_KEY')
    const consumerSecret = Deno.env.get('MPESA_CONSUMER_SECRET')
    
    const credentials = btoa(`${consumerKey}:${consumerSecret}`)
    
    const authResponse = await fetch(authUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`,
      },
    })
    
    const authData = await authResponse.json()
    const accessToken = authData.access_token

    // Create payment record in database
    const { data: payment, error: paymentError } = await supabaseClient
      .from('payments')
      .insert({
        user_id: user.id,
        amount,
        phone_number: phoneNumber,
        payment_type: paymentType,
        reference_id: referenceId,
        payment_description: description || `Payment for ${paymentType}`,
        status: 'pending'
      })
      .select()
      .single()

    if (paymentError) {
      throw new Error(`Failed to create payment record: ${paymentError.message}`)
    }

    // Prepare STK Push request
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14)
    const businessShortCode = Deno.env.get('MPESA_BUSINESS_SHORT_CODE')
    const passkey = Deno.env.get('MPESA_PASSKEY')
    const password = btoa(`${businessShortCode}${passkey}${timestamp}`)
    const callbackUrl = Deno.env.get('MPESA_CALLBACK_URL')

    const stkPushPayload = {
      BusinessShortCode: businessShortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: businessShortCode,
      PhoneNumber: phoneNumber,
      CallBackURL: `${callbackUrl}?payment_id=${payment.id}`,
      AccountReference: payment.id,
      TransactionDesc: description || `Payment for ${paymentType}`
    }

    console.log('Sending STK Push request:', stkPushPayload)

    // Send STK Push request
    const stkResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stkPushPayload),
    })

    const stkData = await stkResponse.json()
    console.log('STK Push response:', stkData)

    if (stkData.ResponseCode === '0') {
      // Update payment with M-Pesa details
      await supabaseClient
        .from('payments')
        .update({
          mpesa_checkout_request_id: stkData.CheckoutRequestID,
          merchant_request_id: stkData.MerchantRequestID,
        })
        .eq('id', payment.id)

      return new Response(
        JSON.stringify({
          success: true,
          message: 'STK Push sent successfully',
          checkoutRequestId: stkData.CheckoutRequestID,
          paymentId: payment.id
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
        .update({ status: 'failed', result_desc: stkData.errorMessage })
        .eq('id', payment.id)

      throw new Error(`STK Push failed: ${stkData.errorMessage}`)
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
