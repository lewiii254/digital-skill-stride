
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

interface MpesaPaymentProps {
  amount: number;
  paymentType: 'course_purchase' | 'mentorship_booking' | 'subscription';
  referenceId?: string;
  description?: string;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
}

const MpesaPayment = ({ 
  amount, 
  paymentType, 
  referenceId, 
  description,
  onSuccess,
  onError 
}: MpesaPaymentProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const { toast } = useToast();
  const { user, session } = useAuth();

  const formatPhoneNumber = (phone: string) => {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Handle Kenyan phone numbers
    if (digits.startsWith('0')) {
      return '254' + digits.slice(1);
    } else if (digits.startsWith('254')) {
      return digits;
    } else if (digits.length === 9) {
      return '254' + digits;
    }
    
    return digits;
  };

  const handlePayment = async () => {
    if (!user || !session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make payments",
        variant: "destructive"
      });
      return;
    }

    if (!phoneNumber) {
      toast({
        title: "Phone number required",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive"
      });
      return;
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    if (formattedPhone.length !== 12 || !formattedPhone.startsWith('254')) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Kenyan phone number (e.g., 0712345678)",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setPaymentInitiated(false);

    try {
      console.log('Initiating M-Pesa payment:', {
        amount,
        phoneNumber: formattedPhone,
        paymentType,
        referenceId,
        description
      });

      const { data, error } = await supabase.functions.invoke('mpesa-payment', {
        body: {
          amount,
          phoneNumber: formattedPhone,
          paymentType,
          referenceId,
          description
        },
        headers: session?.access_token ? {
          Authorization: `Bearer ${session.access_token}`
        } : undefined
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        setPaymentInitiated(true);
        toast({
          title: "Payment initiated successfully!",
          description: "Please check your phone for the M-Pesa prompt and enter your PIN to complete the payment.",
          duration: 10000
        });

        // Start polling for payment status
        if (data.paymentId) {
          pollPaymentStatus(data.paymentId);
        }
      } else {
        throw new Error(data?.error || 'Payment initiation failed');
      }

    } catch (error: unknown) {
      console.error('Payment error:', error);
      let errorMessage = 'Payment failed. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (error && typeof error === 'object' && 'error' in error) {
        errorMessage = String((error as { error: unknown }).error);
      }
      
      toast({
        title: "Payment failed",
        description: errorMessage,
        variant: "destructive"
      });

      onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const pollPaymentStatus = async (paymentId: string) => {
    let attempts = 0;
    const maxAttempts = 60; // Poll for 5 minutes (5-second intervals)

    const poll = async () => {
      attempts++;
      
      try {
        const { data: payment, error } = await supabase
          .from('payments')
          .select('status, result_desc')
          .eq('id', paymentId)
          .single();

        if (error) {
          console.error('Error checking payment status:', error);
          return;
        }

        if (payment.status === 'completed') {
          toast({
            title: "🎉 Payment successful!",
            description: "Your payment has been confirmed and access has been granted.",
          });
          onSuccess?.(paymentId);
          return;
        } else if (payment.status === 'failed') {
          toast({
            title: "Payment failed",
            description: payment.result_desc || "The payment was not completed.",
            variant: "destructive"
          });
          onError?.(payment.result_desc || 'Payment failed');
          return;
        }

        // Continue polling if still pending and within attempt limit
        if (payment.status === 'pending' && attempts < maxAttempts) {
          setTimeout(poll, 5000); // Check again in 5 seconds
        } else if (attempts >= maxAttempts) {
          toast({
            title: "Payment status unknown",
            description: "Please check your M-Pesa messages. If you completed the payment, access will be granted shortly.",
            variant: "destructive"
          });
        }

      } catch (error) {
        console.error('Polling error:', error);
      }
    };

    // Start polling after 3 seconds
    setTimeout(poll, 3000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-green-600" />
          Pay with M-Pesa
        </CardTitle>
        <CardDescription>
          Pay KES {amount.toLocaleString()} using your M-Pesa account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!user ? (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertCircle className="h-12 w-12 text-amber-500" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-800">Authentication Required</h3>
              <p className="text-sm text-gray-600">
                Please sign in to your account to make payments.
              </p>
            </div>
          </div>
        ) : !paymentInitiated ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="phone">M-Pesa Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0712345678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isProcessing}
              />
              <p className="text-sm text-gray-500">
                Enter your Safaricom M-Pesa number
              </p>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                You will receive an M-Pesa prompt on your phone. Enter your M-Pesa PIN to complete the payment.
              </p>
            </div>

            <Button 
              onClick={handlePayment}
              disabled={isProcessing || !phoneNumber}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Initiating Payment...
                </>
              ) : (
                `Pay KES ${amount.toLocaleString()}`
              )}
            </Button>
          </>
        ) : paymentInitiated ? (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-green-800">Payment Request Sent!</h3>
              <p className="text-sm text-gray-600">
                Check your phone for the M-Pesa prompt and enter your PIN to complete the payment.
              </p>
              <p className="text-xs text-gray-500">
                We're monitoring your payment status and will notify you once it's confirmed.
              </p>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default MpesaPayment;
