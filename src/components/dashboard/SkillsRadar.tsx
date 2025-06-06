
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  trend: 'up' | 'down' | 'stable';
  certificates: number;
}

export const SkillsRadar = () => {
  const skills: Skill[] = [
    { name: 'Digital Marketing', level: 85, trend: 'up', certificates: 3 },
    { name: 'Content Writing', level: 72, trend: 'up', certificates: 2 },
    { name: 'Virtual Assistant', level: 90, trend: 'stable', certificates: 4 },
    { name: 'Data Analysis', level: 45, trend: 'up', certificates: 1 },
    { name: 'Graphic Design', level: 38, trend: 'up', certificates: 0 },
    { name: 'Social Media', level: 78, trend: 'stable', certificates: 2 }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return '📈';
    if (trend === 'down') return '📉';
    return '➡️';
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
          Skills Assessment
        </CardTitle>
        <CardDescription>Your current skill levels and progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{skill.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{getTrendIcon(skill.trend)}</span>
                  <Badge variant="outline" className="text-xs">
                    {skill.level}%
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                {skill.certificates > 0 && (
                  <div className="flex items-center text-xs text-gray-600">
                    <Award className="h-3 w-3 mr-1" />
                    {skill.certificates}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
