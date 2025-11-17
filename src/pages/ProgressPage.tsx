import React from 'react';
import { LMSLayout } from '@/components/layouts/LMSLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressTracker from '@/components/progress/ProgressTracker';
import { TrendingUp } from 'lucide-react';

const ProgressPage = () => {
  return (
    <LMSLayout>
      <div className="space-y-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Progress Tracker</h1>
          </div>
          <p className="text-muted-foreground">
            Set goals, track achievements, and monitor your learning journey
          </p>
        </div>

        <ProgressTracker />
      </div>
    </LMSLayout>
  );
};

export default ProgressPage;