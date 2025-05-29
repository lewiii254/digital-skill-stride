
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { BookOpen, Users, Trophy, Clock, ArrowRight, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    level: "Intermediate",
    points: 2450,
    completedCourses: 8,
    activeMentorships: 2
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
    },
    {
      id: 3,
      title: "Virtual Assistant Skills",
      progress: 90,
      totalLessons: 10,
      completedLessons: 9,
      category: "Administrative",
      duration: "3h 45m",
      nextLesson: "Client Communication"
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

  const achievements = [
    { icon: "🎯", title: "First Course Completed", earned: true },
    { icon: "🔥", title: "7-Day Streak", earned: true },
    { icon: "📚", title: "Knowledge Seeker", earned: true },
    { icon: "🤝", title: "Mentor Meeting", earned: true },
    { icon: "⭐", title: "Top Learner", earned: false },
    { icon: "🏆", title: "Course Master", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
              <p className="text-gray-600 mt-2">Continue your digital skills journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1">
                {user.level} Learner
              </Badge>
              <div className="text-right">
                <div className="text-sm text-gray-600">Points</div>
                <div className="text-2xl font-bold text-blue-600">{user.points}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{user.completedCourses}</div>
              <div className="text-sm text-gray-600">Courses Completed</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{user.activeMentorships}</div>
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
              <div className="text-2xl font-bold text-orange-600">42h</div>
              <div className="text-sm text-gray-600">Learning Time</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
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

            {/* Achievements */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-purple-600" />
                  Your Achievements
                </CardTitle>
                <CardDescription>Track your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-center transition-all ${
                        achievement.earned
                          ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200"
                          : "bg-gray-50 border-2 border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <div className="text-xs font-medium">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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
      </div>
    </div>
  );
};

export default Dashboard;
