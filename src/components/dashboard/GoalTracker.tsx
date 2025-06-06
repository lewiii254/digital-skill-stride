
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, Calendar } from "lucide-react";
import { useState } from "react";

interface Goal {
  id: string;
  title: string;
  progress: number;
  target: number;
  deadline: string;
  category: string;
}

export const GoalTracker = () => {
  const [goals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Complete 5 Digital Marketing Courses',
      progress: 3,
      target: 5,
      deadline: '2024-12-31',
      category: 'Learning'
    },
    {
      id: '2',
      title: 'Earn $500 from Freelancing',
      progress: 250,
      target: 500,
      deadline: '2024-11-30',
      category: 'Income'
    },
    {
      id: '3',
      title: 'Network with 10 Mentors',
      progress: 4,
      target: 10,
      deadline: '2024-12-15',
      category: 'Networking'
    }
  ]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Learning': 'bg-blue-100 text-blue-800',
      'Income': 'bg-green-100 text-green-800',
      'Networking': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              Goals & Milestones
            </CardTitle>
            <CardDescription>Track your career objectives</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-1" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = Math.round((goal.progress / goal.target) * 100);
          
          return (
            <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-sm">{goal.title}</h4>
                <Badge className={getCategoryColor(goal.category)} variant="secondary">
                  {goal.category}
                </Badge>
              </div>
              
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span>{goal.progress} / {goal.target}</span>
                <span className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(goal.deadline).toLocaleDateString()}
                </span>
              </div>
              
              <Progress value={progressPercentage} className="h-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
