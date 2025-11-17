import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Award, Target, Zap, Star, Lock, CheckCircle, Crown, Medal, Flame } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: <Star className="h-8 w-8" />,
      unlocked: true,
      progress: 100,
      points: 10,
      category: "Getting Started",
      unlockedDate: "Jan 15, 2024"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Learn for 7 consecutive days",
      icon: <Flame className="h-8 w-8" />,
      unlocked: true,
      progress: 100,
      points: 50,
      category: "Consistency",
      unlockedDate: "Jan 22, 2024"
    },
    {
      id: 3,
      title: "Course Conqueror",
      description: "Complete your first course",
      icon: <Trophy className="h-8 w-8" />,
      unlocked: true,
      progress: 100,
      points: 100,
      category: "Milestones",
      unlockedDate: "Feb 5, 2024"
    },
    {
      id: 4,
      title: "Quiz Master",
      description: "Score 100% on 5 quizzes",
      icon: <Target className="h-8 w-8" />,
      unlocked: false,
      progress: 60,
      points: 75,
      category: "Excellence",
      unlockedDate: null
    },
    {
      id: 5,
      title: "Speed Learner",
      description: "Complete a course in under 1 week",
      icon: <Zap className="h-8 w-8" />,
      unlocked: false,
      progress: 0,
      points: 150,
      category: "Speed",
      unlockedDate: null
    },
    {
      id: 6,
      title: "Knowledge Seeker",
      description: "Enroll in 10 courses",
      icon: <Award className="h-8 w-8" />,
      unlocked: false,
      progress: 30,
      points: 200,
      category: "Exploration",
      unlockedDate: null
    },
    {
      id: 7,
      title: "Community Leader",
      description: "Help 50 other learners in forums",
      icon: <Crown className="h-8 w-8" />,
      unlocked: false,
      progress: 14,
      points: 300,
      category: "Community",
      unlockedDate: null
    },
    {
      id: 8,
      title: "Master Student",
      description: "Complete 20 courses with 95%+ score",
      icon: <Medal className="h-8 w-8" />,
      unlocked: false,
      progress: 5,
      points: 500,
      category: "Mastery",
      unlockedDate: null
    },
  ];

  const stats = {
    totalPoints: 2450,
    totalAchievements: achievements.length,
    unlockedAchievements: achievements.filter(a => a.unlocked).length,
    level: 12,
    nextLevelPoints: 3000,
  };

  const categories = ["All", "Getting Started", "Consistency", "Milestones", "Excellence", "Speed", "Exploration", "Community", "Mastery"];

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Achievements & Badges</h1>
          <p className="text-gray-600">Track your learning milestones and earn rewards</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">{stats.totalPoints}</div>
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-600">
                  {stats.unlockedAchievements}/{stats.totalAchievements}
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-600">{stats.level}</div>
                <Star className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Next Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  {stats.nextLevelPoints - stats.totalPoints} pts needed
                </div>
                <Progress value={(stats.totalPoints / stats.nextLevelPoints) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <Tabs defaultValue="All" className="space-y-4">
          <TabsList className="flex-wrap h-auto gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {achievements
                  .filter(a => category === "All" || a.category === category)
                  .map((achievement) => (
                    <Card 
                      key={achievement.id}
                      className={`relative overflow-hidden transition-all duration-300 ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-br from-white to-blue-50 hover:shadow-lg border-blue-200' 
                          : 'bg-gray-50 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`p-3 rounded-lg ${
                            achievement.unlocked 
                              ? 'bg-gradient-to-br from-blue-500 to-green-500 text-white' 
                              : 'bg-gray-300 text-gray-500'
                          }`}>
                            {achievement.unlocked ? achievement.icon : <Lock className="h-8 w-8" />}
                          </div>
                          <Badge variant={achievement.unlocked ? "default" : "secondary"} className="text-xs">
                            {achievement.points} pts
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mt-3">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {achievement.unlocked ? (
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span>Unlocked {achievement.unlockedDate}</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>Progress</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </CardContent>
                      {achievement.unlocked && (
                        <div className="absolute top-2 right-2 w-16 h-16 bg-yellow-300 rounded-full opacity-20 blur-xl" />
                      )}
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Achievements;
