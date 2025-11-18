
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Certificate } from "@/components/Certificate";
import CoursePaymentButton from "@/components/payments/CoursePaymentButton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Clock, Users, Star, Award, PlayCircle, CheckCircle, Lock, FileText, Video, HelpCircle, Code, Database, TestTube, Palette, Brain, Smartphone, Shield, TrendingUp } from "lucide-react";

const Course = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [currentLesson, setCurrentLesson] = useState(1);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [purchasedCourses, setPurchasedCourses] = useState<number[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  
  // Load user data and course progress
  useEffect(() => {
    loadUserData();
  }, [id]);

  const loadUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Load user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setUserProfile(profile);

      // Load purchased courses
      const { data: purchases } = await supabase
        .from('course_purchases')
        .select('course_id')
        .eq('user_id', user.id)
        .eq('access_granted', true);
      
      if (purchases) {
        const courseIds = purchases.map(p => p.course_id);
        setPurchasedCourses(courseIds);
        setEnrolledCourses(courseIds);
      }

    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

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
      price: 0, // Free course
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
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing including SEO, social media, and email marketing",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "6 hours",
      lessons: 24,
      students: 1247,
      rating: 4.8,
      reviews: 456,
      price: 0, // Free course
      progress: 0,
      instructor: {
        name: "Sarah Johnson",
        bio: "Digital Marketing Expert with 8+ years experience helping businesses grow online",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100",
        rating: 4.8,
        students: 8420
      },
      skills: ["SEO", "Social Media", "Email Marketing", "Analytics", "Content Marketing"],
      learningOutcomes: [
        "Understand digital marketing fundamentals",
        "Create effective SEO strategies",
        "Master social media marketing",
        "Build successful email campaigns",
        "Analyze marketing performance"
      ],
      modules: [
        {
          id: 1,
          title: "Introduction to Digital Marketing",
          lessons: [
            { id: 1, title: "What is Digital Marketing?", type: "video", duration: "10 min", completed: false },
            { id: 2, title: "Digital Marketing Channels Overview", type: "video", duration: "15 min", completed: false },
            { id: 3, title: "Setting Marketing Goals", type: "text", duration: "12 min", completed: false },
            { id: 4, title: "Understanding Your Audience", type: "video", duration: "18 min", completed: false }
          ]
        },
        {
          id: 2,
          title: "Search Engine Optimization (SEO)",
          lessons: [
            { id: 5, title: "SEO Basics", type: "video", duration: "20 min", completed: false },
            { id: 6, title: "Keyword Research", type: "video", duration: "25 min", completed: false },
            { id: 7, title: "On-Page SEO", type: "video", duration: "22 min", completed: false },
            { id: 8, title: "Link Building Strategies", type: "text", duration: "18 min", completed: false }
          ]
        },
        {
          id: 3,
          title: "Social Media Marketing",
          lessons: [
            { id: 9, title: "Social Media Strategy", type: "video", duration: "16 min", completed: false },
            { id: 10, title: "Content Creation for Social Media", type: "video", duration: "20 min", completed: false },
            { id: 11, title: "Facebook & Instagram Marketing", type: "video", duration: "25 min", completed: false },
            { id: 12, title: "Twitter & LinkedIn Marketing", type: "video", duration: "18 min", completed: false }
          ]
        }
      ]
    },
    3: {
      id: 3,
      title: "Advanced React & Node.js Development",
      description: "Build full-stack applications with React, Node.js, Express, and MongoDB. Industry-level project included.",
      category: "Web Development",
      level: "Advanced",
      duration: "80 hours",
      lessons: 240,
      students: 3420,
      rating: 4.9,
      reviews: 890,
      price: 15000,
      progress: 0,
      instructor: {
        name: "Michael Chen",
        bio: "Full-Stack Developer and Tech Lead with expertise in modern web technologies",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 4.9,
        students: 12340
      },
      skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication"],
      learningOutcomes: [
        "Build full-stack web applications",
        "Master React advanced concepts",
        "Create RESTful APIs with Node.js",
        "Implement authentication systems",
        "Deploy applications to production"
      ],
      modules: [
        {
          id: 1,
          title: "Advanced React Concepts",
          lessons: [
            { id: 1, title: "React Hooks Deep Dive", type: "video", duration: "30 min", completed: false },
            { id: 2, title: "Context API and State Management", type: "video", duration: "25 min", completed: false },
            { id: 3, title: "React Performance Optimization", type: "video", duration: "35 min", completed: false }
          ]
        },
        {
          id: 2,
          title: "Node.js Backend Development",
          lessons: [
            { id: 4, title: "Express.js Advanced Features", type: "video", duration: "28 min", completed: false },
            { id: 5, title: "Database Integration with MongoDB", type: "video", duration: "32 min", completed: false },
            { id: 6, title: "Authentication with JWT", type: "video", duration: "30 min", completed: false }
          ]
        }
      ]
    }
  };

  // Fix the type conversion issue and get the correct course
  const courseId = Number(id) || 1;
  const course = coursesData[courseId as keyof typeof coursesData];
  
  // If course doesn't exist, show error
  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/courses">
              <Button>← Back to Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Check if course is free or purchased
  const isFree = course.price === 0;
  const isPurchased = purchasedCourses.includes(course.id);
  const hasAccess = isFree || isPurchased;
  
  const totalLessons = course.modules.flatMap(module => module.lessons).length;
  const completedLessonsCount = completedLessons.size;
  const progressPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  const handleLessonComplete = (lessonId: number) => {
    const newCompletedLessons = new Set(completedLessons);
    newCompletedLessons.add(lessonId);
    setCompletedLessons(newCompletedLessons);

    // Check if course is completed
    if (newCompletedLessons.size === totalLessons) {
      toast({
        title: "🎉 Congratulations!",
        description: "You've completed the course! Your certificate is ready.",
      });
      setShowCertificate(true);
    } else {
      toast({
        title: "Lesson completed!",
        description: `Progress: ${Math.round((newCompletedLessons.size / totalLessons) * 100)}%`,
      });
    }
  };

  const handleLessonStart = (lessonId: number) => {
    setCurrentLesson(lessonId);
    
    // Simulate lesson completion after 2 seconds
    setTimeout(() => {
      handleLessonComplete(lessonId);
    }, 2000);
  };

  const handlePurchaseSuccess = () => {
    loadUserData();
    toast({
      title: "Purchase successful!",
      description: "You now have access to this course.",
    });
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
      case "Digital Marketing": return <TrendingUp className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  // Show certificate if course is completed
  if (showCertificate && progressPercentage === 100) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowCertificate(false)}
            >
              ← Back to Course
            </Button>
          </div>
          
          <Certificate
            courseName={course.title}
            studentName={userProfile?.full_name || "Student"}
            completionDate={new Date().toLocaleDateString()}
            instructorName={course.instructor.name}
            certificateId={`CERT-${course.id}-${Date.now()}`}
          />
        </div>
      </div>
    );
  }

  return (
    <LMSLayout>
      <div className="space-y-6">
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
                      {isFree && <Badge className="bg-green-500">Free</Badge>}
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
                {hasAccess && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Your Progress</span>
                      <span className="text-sm text-gray-600">{completedLessonsCount}/{totalLessons} lessons completed</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <div className="text-right mt-1">
                      <span className="text-sm font-medium text-blue-600">{progressPercentage}%</span>
                    </div>
                    {progressPercentage === 100 && (
                      <Button 
                        onClick={() => setShowCertificate(true)}
                        className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Award className="mr-2 h-4 w-4" />
                        View Your Certificate
                      </Button>
                    )}
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
                          {module.lessons.map((lesson, lessonIndex) => {
                            const isCompleted = completedLessons.has(lesson.id);
                            return (
                              <div
                                key={lesson.id}
                                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                                  isCompleted
                                    ? "bg-green-50 border-green-200"
                                    : hasAccess
                                    ? "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                    : "bg-gray-50 border-gray-200 opacity-60"
                                }`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`flex-shrink-0 ${isCompleted ? "text-green-600" : "text-gray-400"}`}>
                                    {isCompleted ? (
                                      <CheckCircle className="h-5 w-5" />
                                    ) : hasAccess ? (
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
                                  variant={isCompleted ? "outline" : "default"}
                                  disabled={!hasAccess}
                                  onClick={() => !isCompleted && handleLessonStart(lesson.id)}
                                >
                                  {isCompleted ? "Completed" : hasAccess ? "Start" : "Locked"}
                                </Button>
                              </div>
                            );
                          })}
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
                {!hasAccess ? (
                  <>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        KES {course.price?.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600">One-time purchase</p>
                    </div>
                    <CoursePaymentButton
                      courseId={course.id}
                      courseName={course.title}
                      price={course.price || 0}
                      onPurchaseSuccess={handlePurchaseSuccess}
                    />
                  </>
                ) : (
                  <Button className="w-full mb-4" size="lg">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Continue Learning
                  </Button>
                )}
                
                {hasAccess && progressPercentage === 100 && (
                  <Button 
                    variant="outline" 
                    className="w-full mb-4"
                    onClick={() => setShowCertificate(true)}
                  >
                    <Award className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                )}
                
                <div className="space-y-3 text-sm">
                  {hasAccess && (
                    <>
                      <div className="flex justify-between">
                        <span>Completion</span>
                        <span className="font-medium">{progressPercentage}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lessons</span>
                        <span className="font-medium">{completedLessonsCount}/{totalLessons}</span>
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
    </LMSLayout>
  );
};

export default Course;
