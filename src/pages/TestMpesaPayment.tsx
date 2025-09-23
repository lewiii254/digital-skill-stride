import React, { useState } from 'react';
import MpesaPayment from '../components/payments/MpesaPayment';
import { Button } from '../components/ui/button';

const TestMpesaPayment = () => {
  const [mockAuth, setMockAuth] = useState(false);

  // Create a mock context provider for testing
  const MockAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const mockAuthContext = {
      user: mockAuth ? { id: 'mock-user', email: 'test@example.com' } : null,
      session: mockAuth ? { access_token: 'mock-token' } : null,
      loading: false,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
      resendConfirmation: async () => ({ error: null })
    };

    return (
      <div>
        {React.cloneElement(children as React.ReactElement, {
          // Mock the useAuth hook context
          mockAuthContext
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">M-Pesa Payment Test</h1>
        
        <div className="flex gap-2 justify-center mb-6">
          <Button 
            variant={mockAuth ? "outline" : "default"}
            onClick={() => setMockAuth(false)}
          >
            Signed Out
          </Button>
          <Button 
            variant={mockAuth ? "default" : "outline"}
            onClick={() => setMockAuth(true)}
          >
            Signed In
          </Button>
        </div>
        
        <MockAuthProvider>
          <MpesaPayment
            amount={3500}
            paymentType="mentorship_booking"
            referenceId="sarah-chen"
            description="1-hour session with Sarah Chen - Senior Full-Stack Developer"
            onSuccess={(paymentId) => {
              alert(`Payment successful! Payment ID: ${paymentId}`);
            }}
            onError={(error) => {
              alert(`Payment failed: ${error}`);
            }}
          />
        </MockAuthProvider>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Test Instructions:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Click "Signed In" to simulate authentication</li>
            <li>• Enter a valid Kenyan phone number (e.g., 0712345678)</li>
            <li>• Click the payment button</li>
            <li>• Check browser console for detailed logs</li>
            <li>• In production, you would receive an M-Pesa prompt</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">✅ Fixed Issues:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Authentication token properly passed to backend</li>
            <li>• Improved error handling with proper TypeScript types</li>
            <li>• Fixed all linting errors in callback functions</li>
            <li>• Enhanced phone number validation</li>
            <li>• Dynamic callback URL configuration</li>
            <li>• Better user feedback and error messages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestMpesaPayment;