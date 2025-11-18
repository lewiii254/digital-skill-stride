
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { BookOpen, Users, Trophy, Clock, ArrowRight, Star, Play, Bell, MessageSquare, FileText, Brain, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LearningProgress } from "@/components/dashboard/LearningProgress";
import { GoalTracker } from "@/components/dashboard/GoalTracker";
import { SkillsRadar } from "@/components/dashboard/SkillsRadar";
import { EarningsTracker } from "@/components/dashboard/EarningsTracker";
import { NetworkingHub } from "@/components/dashboard/NetworkingHub";
import { JobOpportunities } from "@/components/dashboard/JobOpportunities";

const Dashboard = () => {
  const { user } = useAuth();

  // Fetch user profile data
  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.log('Profile fetch error:', error);
        return null;
      }
      return data;
    },
    enabled: !!user?.id,
  });

  // Use profile data or fallback to user data
  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const userLevel = profile?.experience_level || "Beginner";
  const userRole = profile?.role || "student";

  const userStats = {
    points: 2450,
    completedCourses: 8,
    activeMentorships: 2,
    learningTime: "42h"
  };

  const recentCourses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      category: "Marketing",
      duration: "4h 30m",
      nextLesson: "Email Marketing Strategies"
    },
    {
      id: 2,
      title: "Freelance Writing Mastery",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      category: "Writing",
      duration: "6h 15m",
      nextLesson: "Creating Compelling Headlines"
    }
  ];

  const upcomingMentorships = [
    {
      id: 1,
      mentor: "John Davis",
      topic: "Upwork Profile Optimization",
      date: "Today, 3:00 PM",
      avatar: "/placeholder.svg",
      expertise: "Freelance Success"
    },
    {
      id: 2,
      mentor: "Maria Santos",
      topic: "Digital Marketing Strategy",
      date: "Tomorrow, 10:00 AM",
      avatar: "/placeholder.svg",
      expertise: "Marketing Expert"
    }
  ];

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={profile?.avatar_url || "/placeholder.svg"} alt={displayName} />
                <AvatarFallback className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  {displayName.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {displayName}! 👋</h1>
                <p className="text-gray-600 mt-1">Continue your digital skills journey</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="outline" className="capitalize">
                    {userLevel} Level
                  </Badge>
                  <Badge variant="secondary" className="capitalize">
                    {userRole}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{userStats.completedCourses}</div>
              <div className="text-sm text-gray-600">Courses Completed</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{userStats.activeMentorships}</div>
              <div className="text-sm text-gray-600">Active Mentorships</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Badges Earned</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{userStats.learningTime}</div>
              <div className="text-sm text-gray-600">Learning Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-blue-600" />
                  Continue Learning
                </CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                      <Progress value={course.progress} className="mb-2" />
                      <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                    </div>
                    <Button size="sm" className="ml-4">
                      Continue
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Link to="/courses">
                  <Button variant="outline" className="w-full mt-4">
                    Browse All Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <LearningProgress 
              totalCourses={15}
              completedCourses={userStats.completedCourses}
              totalHours={userStats.learningTime}
              currentStreak={7}
            />

            {/* Job Opportunities */}
            <JobOpportunities />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Goals & Milestones */}
            <GoalTracker />

            {/* Skills Assessment */}
            <SkillsRadar />

            {/* Upcoming Mentorships */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMentorships.map((session) => (
                  <div key={session.id} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={session.avatar} alt={session.mentor} />
                      <AvatarFallback>{session.mentor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{session.mentor}</h4>
                      <p className="text-xs text-gray-600 mb-1">{session.expertise}</p>
                      <p className="text-sm font-medium">{session.topic}</p>
                      <p className="text-xs text-gray-600">{session.date}</p>
                    </div>
                  </div>
                ))}
                
                <Link to="/mentorship">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Sessions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/mentorship">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Find a Mentor
                  </Button>
                </Link>
                <Link to="/community">
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="mr-2 h-4 w-4" />
                    Join Community
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Additional Features */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
          <EarningsTracker />
          <NetworkingHub />
        </div>
        
        {/* New Features Section */}
        <div className="mt-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enhance Your Career</h2>
            <p className="text-gray-600">Explore our advanced tools to accelerate your professional growth</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Quick Tools</h3>
                <Badge variant="outline">New Features</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/resume-builder">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Resume Builder</h4>
                      <p className="text-sm text-gray-600">Create professional resumes with AI assistance</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Card className="border-0 shadow-lg cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Skill Assessment</h4>
                    <p className="text-sm text-gray-600">Test your skills and get personalized recommendations</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">AI Career Advisor</h4>
                    <p className="text-sm text-gray-600">Get intelligent career guidance and planning</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LMSLayout>
  );
};

export default Dashboard;
