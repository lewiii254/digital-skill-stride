import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, TrendingUp, Clock, BookOpen, Trophy, Target, Calendar, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Analytics = () => {
  const stats = {
    totalLearningTime: 156,
    coursesCompleted: 8,
    averageScore: 87,
    currentStreak: 12,
    weeklyGoal: 15,
    weeklyProgress: 12,
  };

  const weeklyActivity = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 2.9 },
    { day: "Fri", hours: 2.1 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 0.8 },
  ];

  const courseProgress = [
    { name: "Web Development", progress: 85, timeSpent: 42 },
    { name: "Digital Marketing", progress: 100, timeSpent: 35 },
    { name: "React Advanced", progress: 65, timeSpent: 28 },
    { name: "Content Writing", progress: 45, timeSpent: 18 },
  ];

  const skillsProgress = [
    { skill: "JavaScript", level: 85, growth: "+15%" },
    { skill: "React", level: 75, growth: "+20%" },
    { skill: "SEO", level: 90, growth: "+10%" },
    { skill: "Content Writing", level: 70, growth: "+25%" },
    { skill: "Digital Marketing", level: 88, growth: "+12%" },
  ];

  const monthlyGoals = [
    { goal: "Complete 5 courses", current: 3, target: 5, progress: 60 },
    { goal: "Learn 20 hours", current: 15, target: 20, progress: 75 },
    { goal: "Score 90%+ on quizzes", current: 7, target: 10, progress: 70 },
    { goal: "Help 10 peers", current: 6, target: 10, progress: 60 },
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Analytics</h1>
          <p className="text-gray-600">Track your progress and insights</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Total Learning Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.totalLearningTime}h</div>
              <p className="text-sm text-gray-600 mt-1">+12h this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Courses Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.coursesCompleted}</div>
              <p className="text-sm text-gray-600 mt-1">+2 this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{stats.averageScore}%</div>
              <p className="text-sm text-gray-600 mt-1">+3% improvement</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{stats.currentStreak} days</div>
              <p className="text-sm text-gray-600 mt-1">Keep it up! 🔥</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Activity Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Activity</CardTitle>
                  <CardDescription>Learning hours per day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyActivity.map((day) => (
                      <div key={day.day} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{day.day}</span>
                          <span className="text-gray-600">{day.hours}h</span>
                        </div>
                        <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-lg transition-all"
                            style={{ width: `${(day.hours / maxHours) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Goal Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Goal Progress</CardTitle>
                  <CardDescription>Target: {stats.weeklyGoal} hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            Progress
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            {stats.weeklyProgress}/{stats.weeklyGoal}h
                          </span>
                        </div>
                      </div>
                      <Progress value={(stats.weeklyProgress / stats.weeklyGoal) * 100} className="h-4" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{stats.weeklyProgress}h</div>
                        <p className="text-sm text-gray-600 mt-1">Completed</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{stats.weeklyGoal - stats.weeklyProgress}h</div>
                        <p className="text-sm text-gray-600 mt-1">Remaining</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        You're {Math.round((stats.weeklyProgress / stats.weeklyGoal) * 100)}% of the way to your weekly goal. 
                        Keep up the great work! 🎉
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Your learning journey across different courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseProgress.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{course.name}</h4>
                          <p className="text-sm text-gray-600">{course.timeSpent} hours spent</p>
                        </div>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills Development</CardTitle>
                <CardDescription>Track your skill proficiency over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsProgress.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium">{skill.skill}</h4>
                          <span className="text-sm text-green-600 font-medium">{skill.growth}</span>
                        </div>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Goals</CardTitle>
                <CardDescription>Track your progress towards monthly objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {monthlyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-gray-500" />
                          <h4 className="font-medium">{goal.goal}</h4>
                        </div>
                        <span className="text-sm text-gray-600">
                          {goal.current}/{goal.target}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Analytics;
