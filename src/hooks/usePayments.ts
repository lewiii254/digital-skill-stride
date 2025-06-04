
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const usePayments = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get user's payment history
  const { data: payments, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Get user's subscriptions
  const { data: subscriptions } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Get course purchases
  const { data: coursePurchases } = useQuery({
    queryKey: ['course-purchases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('course_purchases')
        .select('*')
        .eq('access_granted', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Create subscription payment
  const createSubscriptionPayment = useMutation({
    mutationFn: async (planType: string) => {
      const amount = planType === 'premium' ? 2000 : planType === 'pro' ? 5000 : 1000;
      
      const { data, error } = await supabase.functions.invoke('mpesa-payment', {
        body: {
          amount,
          paymentType: 'subscription',
          description: `${planType} subscription payment`
        }
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['subscriptions'] });
      toast({
        title: "Subscription payment initiated",
        description: "Please complete the M-Pesa payment on your phone."
      });
    },
    onError: (error) => {
      toast({
        title: "Payment failed",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  return {
    payments,
    subscriptions,
    coursePurchases,
    isLoading,
    createSubscriptionPayment
  };
};
