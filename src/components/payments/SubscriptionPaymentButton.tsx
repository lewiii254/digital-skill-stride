
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PaymentModal from './PaymentModal';
import { Crown, Star, Zap } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const SubscriptionPaymentButton = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const plans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 1000,
      icon: <Star className="h-6 w-6" />,
      features: [
        'Access to basic courses',
        'Community forum access',
        'Basic job listings',
        'Email support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 2000,
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: [
        'Access to all courses',
        'Priority community support',
        'Premium job listings',
        'Monthly mentorship session',
        'Certificate of completion',
        'Priority support'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 5000,
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Everything in Premium',
        'Unlimited mentorship sessions',
        'Exclusive masterclasses',
        'Job placement assistance',
        'Personal career advisor',
        '24/7 support'
      ]
    }
  ];

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  const handleSuccess = (paymentId: string) => {
    console.log('Subscription payment successful:', paymentId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600">Upgrade your learning experience with our premium plans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                {plan.icon}
              </div>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-gray-900">
                  KES {plan.price.toLocaleString()}
                </span>
                <span className="text-gray-500">/month</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePlanSelect(plan)}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-800 hover:bg-gray-900'
                }`}
              >
                Subscribe to {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false);
            setSelectedPlan(null);
          }}
          amount={selectedPlan.price}
          title={`Subscribe to ${selectedPlan.name} Plan`}
          description={`Monthly subscription for ${selectedPlan.name} plan features`}
          paymentType="subscription"
          referenceId={selectedPlan.id}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default SubscriptionPaymentButton;
