
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PaymentModal from './PaymentModal';
import { ShoppingCart } from 'lucide-react';

interface CoursePaymentButtonProps {
  courseId: number;
  courseName: string;
  price: number;
  onPurchaseSuccess?: () => void;
}

const CoursePaymentButton = ({ 
  courseId, 
  courseName, 
  price, 
  onPurchaseSuccess 
}: CoursePaymentButtonProps) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleSuccess = (paymentId: string) => {
    console.log('Course purchase successful:', paymentId);
    onPurchaseSuccess?.();
  };

  return (
    <>
      <Button 
        onClick={() => setIsPaymentModalOpen(true)}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Buy Course - KES {price.toLocaleString()}
      </Button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={price}
        title={`Purchase ${courseName}`}
        description={`Complete your purchase of ${courseName} course`}
        paymentType="course_purchase"
        referenceId={courseId.toString()}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default CoursePaymentButton;
