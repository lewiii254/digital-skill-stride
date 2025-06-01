import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { BookOpen, Clock, Users, Star, Award, PlayCircle, CheckCircle, Lock, FileText, Video, HelpCircle, Code, Database, TestTube, Palette, Brain, Smartphone, Shield, TrendingUp } from "lucide-react";

const Course = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(1);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  
  // Comprehensive course data with detailed modules
  const coursesData = {
    1: {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, and build responsive websites from scratch. This comprehensive course will take you from beginner to professional web developer.",
      category: "Web Development",
      level: "Beginner",
      duration: "40 hours",
      lessons: 120,
      students: 15420,
      rating: 4.9,
      reviews: 2856,
      progress: 0,
      instructor: {
        name: "John Smith",
        bio: "Senior Full-Stack Developer with 10+ years experience at Google and Facebook",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        rating: 4.9,
        students: 25420
      },
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "Bootstrap", "jQuery"],
      learningOutcomes: [
        "Build responsive websites from scratch",
        "Master HTML5, CSS3, and modern JavaScript",
        "Create interactive web applications",
        "Use Git for version control",
        "Deploy websites to the web",
        "Build portfolio projects for job applications"
      ],
      modules: [
        {
          id: 1,
          title: "HTML Fundamentals",
          lessons: [
            { id: 1, title: "Introduction to HTML", type: "video", duration: "12 min", completed: false },
            { id: 2, title: "HTML Document Structure", type: "video", duration: "15 min", completed: false },
            { id: 3, title: "HTML Elements and Tags", type: "text", duration: "18 min", completed: false },
            { id: 4, title: "Forms and Input Elements", type: "video", duration: "20 min", completed: false },
            { id: 5, title: "HTML5 Semantic Elements", type: "text", duration: "14 min", completed: false },
            { id: 6, title: "HTML Basics Quiz", type: "quiz", duration: "10 min", completed: false }
          ]
        },
        {
          id: 2,
          title: "CSS Styling and Layout",
          lessons: [
            { id: 7, title: "CSS Basics and Selectors", type: "video", duration: "16 min", completed: false },
            { id: 8, title: "CSS Box Model", type: "video", duration: "18 min", completed: false },
            { id: 9, title: "Flexbox Layout", type: "video", duration: "25 min", completed: false },
            { id: 10, title: "CSS Grid System", type: "video", duration: "22 min", completed: false },
            { id: 11, title: "Responsive Design Principles", type: "text", duration: "20 min", completed: false },
            { id: 12, title: "CSS Animations", type: "video", duration: "15 min", completed: false },
            { id: 13, title: "CSS Layout Quiz", type: "quiz", duration: "12 min", completed: false }
          ]
        },
        {
          id: 3,
          title: "JavaScript Programming",
          lessons: [
            { id: 14, title: "JavaScript Fundamentals", type: "video", duration: "20 min", completed: false },
            { id: 15, title: "Variables and Data Types", type: "video", duration: "18 min", completed: false },
            { id: 16, title: "Functions and Scope", type: "video", duration: "22 min", completed: false },
            { id: 17, title: "DOM Manipulation", type: "video", duration: "25 min", completed: false },
            { id: 18, title: "Event Handling", type: "video", duration: "20 min", completed: false },
            { id: 19, title: "Asynchronous JavaScript", type: "video", duration: "28 min", completed: false },
            { id: 20, title: "JavaScript Project", type: "project", duration: "60 min", completed: false }
          ]
        },
        {
          id: 4,
          title: "Advanced Web Development",
          lessons: [
            { id: 21, title: "ES6+ Features", type: "video", duration: "25 min", completed: false },
            { id: 22, title: "Working with APIs", type: "video", duration: "30 min", completed: false },
            { id: 23, title: "Local Storage and Session Storage", type: "video", duration: "18 min", completed: false },
            { id: 24, title: "Performance Optimization", type: "text", duration: "22 min", completed: false },
            { id: 25, title: "Web Security Basics", type: "video", duration: "20 min", completed: false },
            { id: 26, title: "Final Portfolio Project", type: "project", duration: "120 min", completed: false }
          ]
        }
      ]
    },
    2: {
      id: 2,
      title: "MERN Stack Full-Stack Development",
      description: "Master MongoDB, Express.js, React, and Node.js to build modern web applications. Learn to create scalable full-stack applications.",
      category: "Web Development",
      level: "Advanced",
      duration: "60 hours",
      lessons: 180,
      students: 8934,
      rating: 4.8,
      reviews: 1234,
      progress: 0,
      instructor: {
        name: "Sarah Chen",
        bio: "Full-Stack MERN Developer and Tech Lead at Meta",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100",
        rating: 4.9,
        students: 18934
      },
      skills: ["MongoDB", "Express.js", "React", "Node.js", "RESTful APIs", "Authentication", "Deployment"],
      learningOutcomes: [
        "Build full-stack web applications",
        "Master the MERN stack technologies",
        "Create RESTful APIs with Express.js",
        "Build dynamic UIs with React",
        "Work with MongoDB databases",
        "Deploy applications to cloud platforms"
      ],
      modules: [
        {
          id: 1,
          title: "Node.js Backend Development",
          lessons: [
            { id: 1, title: "Node.js Fundamentals", type: "video", duration: "20 min", completed: false },
            { id: 2, title: "NPM and Package Management", type: "video", duration: "15 min", completed: false },
            { id: 3, title: "Express.js Framework", type: "video", duration: "25 min", completed: false },
            { id: 4, title: "Middleware and Routing", type: "video", duration: "22 min", completed: false },
            { id: 5, title: "Error Handling", type: "video", duration: "18 min", completed: false }
          ]
        },
        {
          id: 2,
          title: "MongoDB and Database Design",
          lessons: [
            { id: 6, title: "MongoDB Basics", type: "video", duration: "20 min", completed: false },
            { id: 7, title: "Mongoose ODM", type: "video", duration: "25 min", completed: false },
            { id: 8, title: "Database Schema Design", type: "video", duration: "22 min", completed: false },
            { id: 9, title: "CRUD Operations", type: "video", duration: "28 min", completed: false }
          ]
        },
        {
          id: 3,
          title: "React Frontend Development",
          lessons: [
            { id: 10, title: "React Fundamentals", type: "video", duration: "25 min", completed: false },
            { id: 11, title: "Components and Props", type: "video", duration: "20 min", completed: false },
            { id: 12, title: "State Management with Hooks", type: "video", duration: "30 min", completed: false },
            { id: 13, title: "React Router", type: "video", duration: "22 min", completed: false },
            { id: 14, title: "API Integration", type: "video", duration: "25 min", completed: false }
          ]
        }
      ]
    }
    // Add more course data as needed...
  };

  // Fix the type conversion issue
  const courseId = Number(id) || 1;
  const course = coursesData[courseId as keyof typeof coursesData] || coursesData[1];
  const isEnrolled = enrolledCourses.includes(course.id);
  
  const completedLessons = course.modules.flatMap(module => module.lessons).filter(lesson => lesson.completed).length;
  const totalLessons = course.modules.flatMap(module => module.lessons).length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleEnroll = () => {
    setEnrolledCourses([...enrolledCourses, course.id]);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "text": return <FileText className="h-4 w-4" />;
      case "quiz": return <HelpCircle className="h-4 w-4" />;
      case "project": return <Code className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development": return <Code className="h-5 w-5" />;
      case "Database Management": return <Database className="h-5 w-5" />;
      case "Software Testing": return <TestTube className="h-5 w-5" />;
      case "Graphics Design": return <Palette className="h-5 w-5" />;
      case "Artificial Intelligence": return <Brain className="h-5 w-5" />;
      case "Mobile Development": return <Smartphone className="h-5 w-5" />;
      case "Cybersecurity": return <Shield className="h-5 w-5" />;
      case "Data Science": return <TrendingUp className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
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
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {getCategoryIcon(course.category)}
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
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
                {isEnrolled && (
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
                )}
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
                                  : isEnrolled
                                  ? "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                  : "bg-gray-50 border-gray-200 opacity-60"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`flex-shrink-0 ${lesson.completed ? "text-green-600" : "text-gray-400"}`}>
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5" />
                                  ) : isEnrolled ? (
                                    getIcon(lesson.type)
                                  ) : (
                                    <Lock className="h-5 w-5" />
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
                                disabled={!isEnrolled}
                              >
                                {lesson.completed ? "Review" : isEnrolled ? "Start" : "Enroll"}
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
                {!isEnrolled ? (
                  <Button className="w-full mb-4" size="lg" onClick={handleEnroll}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Enroll Now - Free
                  </Button>
                ) : (
                  <Button className="w-full mb-4" size="lg">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Continue Learning
                  </Button>
                )}
                
                {isEnrolled && progressPercentage === 100 && (
                  <Button variant="outline" className="w-full mb-4">
                    <Award className="mr-2 h-4 w-4" />
                    Get Certificate
                  </Button>
                )}
                
                <div className="space-y-3 text-sm">
                  {isEnrolled && (
                    <>
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
                        <span className="font-medium">0h 0m</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Language</span>
                    <span className="font-medium">English</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Course Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Video className="mr-2 h-4 w-4 text-blue-600" />
                  On-demand video content
                </div>
                <div className="flex items-center text-sm">
                  <FileText className="mr-2 h-4 w-4 text-green-600" />
                  Downloadable resources
                </div>
                <div className="flex items-center text-sm">
                  <Award className="mr-2 h-4 w-4 text-yellow-600" />
                  Certificate of completion
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4 text-purple-600" />
                  Community support
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
