
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { BookOpen, Clock, Users, Star, Award, PlayCircle, CheckCircle, Lock, FileText, Video, HelpCircle } from "lucide-react";

const Course = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(1);
  
  // Mock course data - in real app this would come from API
  const course = {
    id: 1,
    title: "Digital Marketing Fundamentals",
    description: "Master the basics of digital marketing including SEO, social media, and email marketing. This comprehensive course will take you from beginner to confident digital marketer.",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "6 hours",
    lessons: 24,
    students: 1247,
    rating: 4.8,
    reviews: 156,
    progress: 65,
    instructor: {
      name: "Sarah Johnson",
      bio: "Digital Marketing Expert with 8+ years experience",
      avatar: "/placeholder.svg",
      rating: 4.9,
      students: 5420
    },
    skills: ["SEO", "Social Media Marketing", "Email Marketing", "Google Analytics", "Content Marketing"],
    learningOutcomes: [
      "Create effective digital marketing strategies",
      "Optimize websites for search engines",
      "Build engaging social media campaigns",
      "Design high-converting email campaigns",
      "Analyze marketing performance with tools"
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to Digital Marketing",
        lessons: [
          { id: 1, title: "What is Digital Marketing?", type: "video", duration: "8 min", completed: true },
          { id: 2, title: "Digital Marketing Landscape", type: "text", duration: "12 min", completed: true },
          { id: 3, title: "Knowledge Check", type: "quiz", duration: "5 min", completed: true }
        ]
      },
      {
        id: 2,
        title: "Search Engine Optimization (SEO)",
        lessons: [
          { id: 4, title: "SEO Fundamentals", type: "video", duration: "15 min", completed: true },
          { id: 5, title: "Keyword Research", type: "text", duration: "20 min", completed: true },
          { id: 6, title: "On-Page SEO", type: "video", duration: "18 min", completed: false },
          { id: 7, title: "SEO Quiz", type: "quiz", duration: "10 min", completed: false }
        ]
      },
      {
        id: 3,
        title: "Social Media Marketing",
        lessons: [
          { id: 8, title: "Platform Overview", type: "video", duration: "12 min", completed: false },
          { id: 9, title: "Content Strategy", type: "text", duration: "15 min", completed: false },
          { id: 10, title: "Engagement Tactics", type: "video", duration: "20 min", completed: false },
          { id: 11, title: "Social Media Quiz", type: "quiz", duration: "8 min", completed: false }
        ]
      }
    ]
  };

  const completedLessons = course.modules.flatMap(module => module.lessons).filter(lesson => lesson.completed).length;
  const totalLessons = course.modules.flatMap(module => module.lessons).length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "text": return <FileText className="h-4 w-4" />;
      case "quiz": return <HelpCircle className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/courses" className="text-blue-600 hover:underline">Courses</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">{course.level}</Badge>
                    <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {totalLessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {course.rating} ({course.reviews} reviews)
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Your Progress</span>
                    <span className="text-sm text-gray-600">{completedLessons}/{totalLessons} lessons completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium text-blue-600">{progressPercentage}%</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Course Content */}
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="mt-6">
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <Card key={module.id} className="border-0 shadow-md">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">
                          Module {moduleIndex + 1}: {module.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lesson.id}
                              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                                lesson.completed
                                  ? "bg-green-50 border-green-200"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`flex-shrink-0 ${lesson.completed ? "text-green-600" : "text-gray-400"}`}>
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5" />
                                  ) : (
                                    getIcon(lesson.type)
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-medium">{lesson.title}</h4>
                                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Badge variant="outline" className="text-xs">
                                      {lesson.type}
                                    </Badge>
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                variant={lesson.completed ? "outline" : "default"}
                                disabled={!lesson.completed && lessonIndex > 0 && !module.lessons[lessonIndex - 1]?.completed}
                              >
                                {lesson.completed ? "Review" : "Start"}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <h3 className="font-semibold mb-4">Skills You'll Gain</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <CardTitle>{course.instructor.name}</CardTitle>
                        <CardDescription>{course.instructor.bio}</CardDescription>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {course.instructor.rating} rating
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {course.instructor.students.toLocaleString()} students
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Actions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Button className="w-full mb-4" size="lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Continue Learning
                </Button>
                
                {progressPercentage === 100 && (
                  <Button variant="outline" className="w-full mb-4">
                    <Award className="mr-2 h-4 w-4" />
                    Get Certificate
                  </Button>
                )}
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Completion</span>
                    <span className="font-medium">{progressPercentage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lessons</span>
                    <span className="font-medium">{completedLessons}/{totalLessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time spent</span>
                    <span className="font-medium">2h 30m</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Download Materials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Join Discussion
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  Rate Course
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
