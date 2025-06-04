import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import MpesaPayment from './MpesaPayment';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  title: string;
  description: string;
  paymentType: 'course_purchase' | 'mentorship_booking' | 'subscription';
  referenceId?: string;
  onSuccess?: (paymentId: string) => void;
}

const PaymentModal = ({
  isOpen,
  onClose,
  amount,
  title,
  description,
  paymentType,
  referenceId,
  onSuccess
}: PaymentModalProps) => {
  const handleSuccess = (paymentId: string) => {
    onSuccess?.(paymentId);
    onClose();
  };

  const handleError = (error: string) => {
    console.error('Payment error:', error);
    // Keep modal open so user can retry
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center py-4">
          <MpesaPayment
            amount={amount}
            paymentType={paymentType}
            referenceId={referenceId}
            description={description}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
