import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MessageCenter from '@/components/messaging/MessageCenter';
import { MessageCircle } from 'lucide-react';

const MessagesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Messages</h1>
          </div>
          <p className="text-muted-foreground">
            Connect with your mentors and mentees through real-time messaging
          </p>
        </div>

        <MessageCenter />
      </div>
    </div>
  );
};

export default MessagesPage;