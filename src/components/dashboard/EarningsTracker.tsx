
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Plus, ExternalLink } from "lucide-react";

interface EarningSource {
  platform: string;
  amount: number;
  currency: string;
  period: string;
  status: 'active' | 'pending' | 'completed';
  icon: string;
}

export const EarningsTracker = () => {
  const earnings: EarningSource[] = [
    {
      platform: 'Upwork',
      amount: 12500,
      currency: 'KES',
      period: 'This Month',
      status: 'active',
      icon: '💼'
    },
    {
      platform: 'Fiverr',
      amount: 8200,
      currency: 'KES',
      period: 'This Month',
      status: 'active',
      icon: '🎯'
    },
    {
      platform: 'Local Client',
      amount: 15000,
      currency: 'KES',
      period: 'This Month',
      status: 'completed',
      icon: '🤝'
    },
    {
      platform: 'Content Writing',
      amount: 5500,
      currency: 'KES',
      period: 'This Month',
      status: 'pending',
      icon: '✍️'
    }
  ];

  const totalEarnings = earnings.reduce((sum, earning) => sum + earning.amount, 0);

  const getStatusColor = (status: string) => {
    const colors = {
      'active': 'bg-green-100 text-green-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'completed': 'bg-blue-100 text-blue-800'
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Earnings Tracker
            </CardTitle>
            <CardDescription>Monitor your income streams</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-1" />
            Add Source
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Total Earnings */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total This Month</p>
              <p className="text-2xl font-bold text-green-600">
                KES {totalEarnings.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm ml-1">+23%</span>
            </div>
          </div>
        </div>

        {/* Earnings Sources */}
        <div className="space-y-3">
          {earnings.map((earning, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{earning.icon}</span>
                <div>
                  <div className="font-medium text-sm">{earning.platform}</div>
                  <div className="text-xs text-gray-600">{earning.period}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="font-medium text-sm">
                    {earning.currency} {earning.amount.toLocaleString()}
                  </div>
                  <Badge className={getStatusColor(earning.status)} variant="secondary">
                    {earning.status}
                  </Badge>
                </div>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
