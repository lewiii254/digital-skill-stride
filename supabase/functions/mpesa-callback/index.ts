
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('M-Pesa callback received:', req.method, req.url)

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const url = new URL(req.url)
    const paymentId = url.searchParams.get('payment_id')
    
    if (!paymentId) {
      console.error('No payment_id in callback URL')
      return new Response('Missing payment_id', { status: 400 })
    }

    const callbackData = await req.json()
    console.log('M-Pesa callback data:', JSON.stringify(callbackData, null, 2))

    const { Body } = callbackData
    const { stkCallback } = Body

    const resultCode = stkCallback.ResultCode
    const resultDesc = stkCallback.ResultDesc
    const checkoutRequestId = stkCallback.CheckoutRequestID

    let updateData: any = {
      result_code: resultCode,
      result_desc: resultDesc,
      checkout_request_id: checkoutRequestId,
    }

    if (resultCode === 0) {
      // Payment successful
      updateData.status = 'completed'
      updateData.transaction_date = new Date().toISOString()

      // Extract callback metadata
      const callbackMetadata = stkCallback.CallbackMetadata?.Item || []
      
      for (const item of callbackMetadata) {
        switch (item.Name) {
          case 'Amount':
            updateData.amount = item.Value
            break
          case 'MpesaReceiptNumber':
            updateData.mpesa_receipt_number = item.Value
            break
          case 'TransactionDate':
            updateData.transaction_date = new Date(item.Value.toString()).toISOString()
            break
          case 'PhoneNumber':
            updateData.phone_number = item.Value.toString()
            break
        }
      }
    } else {
      // Payment failed
      updateData.status = 'failed'
    }

    console.log('Updating payment:', paymentId, updateData)

    // Update payment record
    const { data: payment, error: updateError } = await supabaseClient
      .from('payments')
      .update(updateData)
      .eq('id', paymentId)
      .select('*, user_id, payment_type, reference_id')
      .single()

    if (updateError) {
      console.error('Failed to update payment:', updateError)
      return new Response('Database update failed', { status: 500 })
    }

    // If payment successful, grant access based on payment type
    if (resultCode === 0 && payment) {
      console.log('Processing successful payment:', payment.payment_type)

      switch (payment.payment_type) {
        case 'course_purchase':
          if (payment.reference_id) {
            await supabaseClient
              .from('course_purchases')
              .update({ access_granted: true })
              .eq('payment_id', payment.id)
          }
          break

        case 'mentorship_booking':
          if (payment.reference_id) {
            await supabaseClient
              .from('mentorship_bookings')
              .update({ status: 'confirmed' })
              .eq('payment_id', payment.id)
          }
          break

        case 'subscription':
          // Create or update subscription
          const endDate = new Date()
          endDate.setMonth(endDate.getMonth() + 1) // 1 month subscription

          await supabaseClient
            .from('subscriptions')
            .upsert({
              user_id: payment.user_id,
              plan_type: 'premium',
              status: 'active',
              amount: payment.amount,
              current_period_end: endDate.toISOString(),
              payment_id: payment.id
            })
          break
      }

      console.log('Access granted for payment type:', payment.payment_type)
    }

    return new Response('OK', { status: 200 })

  } catch (error) {
    console.error('Callback processing error:', error)
    return new Response('Internal error', { status: 500 })
  }
})
