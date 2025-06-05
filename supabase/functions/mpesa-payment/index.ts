
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

    console.log('Processing M-Pesa payment:', { amount, phoneNumber, paymentType, userId: user.id, referenceId })

    // Create payment record in database - store referenceId as text, not UUID
    const { data: payment, error: paymentError } = await supabaseClient
      .from('payments')
      .insert({
        user_id: user.id,
        amount,
        phone_number: phoneNumber,
        payment_type: paymentType,
        reference_id: referenceId, // This can be null or a string
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

    // For testing purposes with only consumer key and secret, simulate STK push
    // In production, you would make actual M-Pesa API calls
    
    // Simulate successful payment after 3 seconds
    setTimeout(async () => {
      try {
        console.log('Simulating payment completion for:', payment.id)
        
        const { error: updateError } = await supabaseClient
          .from('payments')
          .update({
            status: 'completed',
            result_code: 0,
            result_desc: 'Payment completed successfully',
            mpesa_receipt_number: `TEST${Date.now()}`,
            transaction_date: new Date().toISOString()
          })
          .eq('id', payment.id)

        if (updateError) {
          console.error('Error updating payment:', updateError)
          return
        }

        // Grant access based on payment type
        if (paymentType === 'course_purchase' && referenceId) {
          await supabaseClient
            .from('course_purchases')
            .insert({
              user_id: user.id,
              course_id: parseInt(referenceId),
              payment_id: payment.id,
              access_granted: true
            })
          console.log('Course access granted for course:', referenceId)
        } else if (paymentType === 'mentorship_booking' && referenceId) {
          // Create mentorship booking record
          await supabaseClient
            .from('mentorship_bookings')
            .insert({
              user_id: user.id,
              mentor_id: user.id, // For now, use same user
              payment_id: payment.id,
              status: 'confirmed',
              amount: amount,
              session_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
              duration_minutes: 60
            })
          console.log('Mentorship booking confirmed')
        }

        console.log('Payment processing completed successfully')
      } catch (error) {
        console.error('Error in simulated payment completion:', error)
      }
    }, 3000)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Payment initiated successfully (Test Mode)',
        paymentId: payment.id,
        checkoutRequestId: `TEST_${payment.id}`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

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
