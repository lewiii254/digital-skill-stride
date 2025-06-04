
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PaymentModal from './PaymentModal';
import { Calendar } from 'lucide-react';

interface MentorshipPaymentButtonProps {
  mentorId: string;
  mentorName: string;
  sessionPrice: number;
  sessionDate: string;
  onBookingSuccess?: () => void;
}

const MentorshipPaymentButton = ({ 
  mentorId, 
  mentorName, 
  sessionPrice, 
  sessionDate,
  onBookingSuccess 
}: MentorshipPaymentButtonProps) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleSuccess = (paymentId: string) => {
    console.log('Mentorship booking successful:', paymentId);
    onBookingSuccess?.();
  };

  return (
    <>
      <Button 
        onClick={() => setIsPaymentModalOpen(true)}
        className="w-full bg-green-600 hover:bg-green-700"
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book Session - KES {sessionPrice.toLocaleString()}
      </Button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={sessionPrice}
        title={`Book Mentorship with ${mentorName}`}
        description={`Pay for your mentorship session on ${new Date(sessionDate).toLocaleDateString()}`}
        paymentType="mentorship_booking"
        referenceId={mentorId}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default MentorshipPaymentButton;
