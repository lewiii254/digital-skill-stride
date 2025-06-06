
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, Target } from "lucide-react";

interface LearningProgressProps {
  totalCourses: number;
  completedCourses: number;
  totalHours: string;
  currentStreak: number;
}

export const LearningProgress = ({ 
  totalCourses, 
  completedCourses, 
  totalHours, 
  currentStreak 
}: LearningProgressProps) => {
  const completionRate = Math.round((completedCourses / totalCourses) * 100);

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="h-5 w-5 mr-2 text-blue-600" />
          Learning Progress
        </CardTitle>
        <CardDescription>Track your learning journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Completion</span>
            <span className="text-sm text-gray-600">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-3" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <div>
              <div className="text-sm font-medium">{completedCourses}/{totalCourses}</div>
              <div className="text-xs text-gray-600">Courses</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-600" />
            <div>
              <div className="text-sm font-medium">{totalHours}</div>
              <div className="text-xs text-gray-600">Hours</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <div>
              <div className="text-sm font-medium">{currentStreak}</div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{completionRate >= 80 ? "🔥 On Fire!" : "📈 Growing"}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
