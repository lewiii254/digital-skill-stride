
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { BookOpen, Clock, Users, Star, Search, Award, PlayCircle, Code, Database, TestTube, Video, Palette, Brain, Smartphone, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import CoursePaymentButton from "@/components/payments/CoursePaymentButton";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
    "Web Development",
    "Mobile Development", 
    "Database Management",
    "Digital Marketing",
    "Copywriting",
    "Virtual Assistant",
    "Platform Training",
    "Freelancing",
    "E-commerce",
    "Video Editing",
    "Graphics Design",
    "Software Testing",
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "UI/UX Design",
    "Content Creation",
    "Social Media Marketing"
  ];

  const courses = [
    // Free Courses
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, and build responsive websites from scratch",
      category: "Web Development",
      level: "Beginner",
      duration: "40 hours",
      lessons: 120,
      students: 15420,
      rating: 4.9,
      price: 0,
      isPaid: false,
      progress: 0,
      instructor: "John Smith",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      platform: "General",
      icon: <Code className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing including SEO, social media, and email marketing",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "6 hours",
      lessons: 24,
      students: 1247,
      rating: 4.8,
      price: 0,
      isPaid: false,
      progress: 65,
      instructor: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      skills: ["SEO", "Social Media", "Email Marketing", "Analytics"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },
    
    // Paid Courses
    {
      id: 3,
      title: "Advanced React & Node.js Development",
      description: "Build full-stack applications with React, Node.js, Express, and MongoDB. Industry-level project included.",
      category: "Web Development",
      level: "Advanced",
      duration: "80 hours",
      lessons: 240,
      students: 3420,
      rating: 4.9,
      price: 15000,
      isPaid: true,
      progress: 0,
      instructor: "Michael Chen",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
      skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication"],
      platform: "General",
      icon: <Code className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Professional UI/UX Design Masterclass",
      description: "Complete UI/UX design course with Figma, user research, wireframing, and portfolio projects",
      category: "UI/UX Design",
      level: "Intermediate",
      duration: "60 hours",
      lessons: 180,
      students: 2890,
      rating: 4.8,
      price: 12000,
      isPaid: true,
      progress: 0,
      instructor: "Emma Wilson",
      thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      platform: "General",
      icon: <Palette className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Advanced Digital Marketing & Analytics",
      description: "Master advanced marketing strategies, Google Ads, Facebook Ads, and analytics for business growth",
      category: "Digital Marketing",
      level: "Advanced",
      duration: "50 hours",
      lessons: 150,
      students: 1890,
      rating: 4.7,
      price: 18000,
      isPaid: true,
      progress: 0,
      instructor: "David Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      skills: ["Google Ads", "Facebook Ads", "Analytics", "Conversion Optimization", "Email Automation"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android with React Native and publish to app stores",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "70 hours",
      lessons: 210,
      students: 2340,
      rating: 4.8,
      price: 16000,
      isPaid: true,
      progress: 0,
      instructor: "Lisa Park",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      skills: ["React Native", "JavaScript", "Mobile UI", "API Integration", "App Store Publishing"],
      platform: "General",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Data Science & Machine Learning with Python",
      description: "Complete data science course with Python, pandas, machine learning, and real-world projects",
      category: "Data Science",
      level: "Advanced",
      duration: "90 hours",
      lessons: 270,
      students: 1560,
      rating: 4.9,
      price: 22000,
      isPaid: true,
      progress: 0,
      instructor: "Dr. Ahmed Hassan",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      skills: ["Python", "Pandas", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      platform: "General",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Professional Video Production & Editing",
      description: "Master video production, editing with Premiere Pro, DaVinci Resolve, and YouTube monetization",
      category: "Video Editing",
      level: "Intermediate",
      duration: "55 hours",
      lessons: 165,
      students: 3670,
      rating: 4.8,
      price: 14000,
      isPaid: true,
      progress: 0,
      instructor: "Carlos Martinez",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
      skills: ["Adobe Premiere", "DaVinci Resolve", "Color Grading", "Audio Editing", "YouTube SEO"],
      platform: "General",
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 9,
      title: "Advanced Cybersecurity & Ethical Hacking",
      description: "Learn penetration testing, network security, and ethical hacking with hands-on labs",
      category: "Cybersecurity",
      level: "Advanced",
      duration: "85 hours",
      lessons: 255,
      students: 1290,
      rating: 4.9,
      price: 25000,
      isPaid: true,
      progress: 0,
      instructor: "Jessica Brown",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
      skills: ["Penetration Testing", "Network Security", "Kali Linux", "Security Auditing", "Risk Assessment"],
      platform: "General",
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 10,
      title: "E-commerce Business & Dropshipping Mastery",
      description: "Build profitable e-commerce stores, master dropshipping, and scale your online business",
      category: "E-commerce",
      level: "Intermediate",
      duration: "45 hours",
      lessons: 135,
      students: 4560,
      rating: 4.7,
      price: 13000,
      isPaid: true,
      progress: 0,
      instructor: "Maria Santos",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      skills: ["Shopify", "Dropshipping", "Product Research", "Facebook Ads", "Email Marketing"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 11,
      title: "Content Creation & Social Media Monetization",
      description: "Master content creation, grow social media following, and monetize your online presence",
      category: "Content Creation",
      level: "Beginner",
      duration: "35 hours",
      lessons: 105,
      students: 5670,
      rating: 4.6,
      price: 9000,
      isPaid: true,
      progress: 0,
      instructor: "Alex Johnson",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      skills: ["Content Strategy", "Instagram Growth", "TikTok Marketing", "Brand Partnerships", "Influencer Marketing"],
      platform: "General",
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 12,
      title: "Advanced Copywriting & Sales Funnels",
      description: "Master persuasive copywriting, sales funnels, and conversion optimization for high-paying clients",
      category: "Copywriting",
      level: "Advanced",
      duration: "40 hours",
      lessons: 120,
      students: 2340,
      rating: 4.8,
      price: 17000,
      isPaid: true,
      progress: 0,
      instructor: "Ryan Taylor",
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
      skills: ["Sales Copy", "Email Sequences", "Landing Pages", "Conversion Optimization", "Client Acquisition"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },

    // Free courses continued
    {
      id: 13,
      title: "Database Design and SQL Mastery",
      description: "Learn database fundamentals, SQL queries, and database optimization techniques",
      category: "Database Management",
      level: "Intermediate",
      duration: "25 hours",
      lessons: 75,
      students: 5678,
      rating: 4.7,
      price: 0,
      isPaid: false,
      progress: 0,
      instructor: "Michael Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      skills: ["SQL", "MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
      platform: "General",
      icon: <Database className="h-5 w-5" />
    },
    {
      id: 14,
      title: "Software Testing Fundamentals",
      description: "Learn manual and automated testing techniques for web and mobile applications",
      category: "Software Testing",
      level: "Beginner",
      duration: "30 hours",
      lessons: 90,
      students: 3421,
      rating: 4.6,
      price: 0,
      isPaid: false,
      progress: 0,
      instructor: "Lisa Wang",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      skills: ["Manual Testing", "Selenium", "Test Cases", "Bug Reporting", "API Testing"],
      platform: "General",
      icon: <TestTube className="h-5 w-5" />
    },
    {
      id: 15,
      title: "Upwork Success Masterclass",
      description: "Complete guide to building a successful freelance career on Upwork",
      category: "Platform Training",
      level: "Intermediate",
      duration: "4.5 hours",
      lessons: 18,
      students: 892,
      rating: 4.9,
      price: 0,
      isPaid: false,
      progress: 0,
      instructor: "John Davis",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400",
      skills: ["Profile Optimization", "Proposal Writing", "Client Relations"],
      platform: "Upwork",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const inProgressCourses = courses.filter(course => course.progress > 0 && course.progress < 100);
  const completedCourses = courses.filter(course => course.progress === 100);

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Skills Training</h1>
          <p className="text-xl text-gray-600 mb-6">
            Master in-demand digital skills with our comprehensive courses designed for platform workers and tech professionals
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Courses ({filteredCourses.length})</TabsTrigger>
            <TabsTrigger value="progress">In Progress ({inProgressCourses.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

const CourseCard = ({ course }: { course: any }) => {
  const handlePurchaseSuccess = () => {
    console.log(`Course ${course.id} purchased successfully!`);
    // You can add logic here to update the course access status
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Advanced" ? "destructive" : "default"}>
            {course.level}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white">
            {course.platform}
          </Badge>
        </div>
        {course.isPaid && (
          <div className="absolute top-12 right-4">
            <Badge className="bg-yellow-500 text-white">
              Premium
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2 text-white">
            {course.icon}
            <span className="text-sm font-medium">{course.category}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg line-clamp-2 mb-2">{course.title}</CardTitle>
            <CardDescription className="line-clamp-2">{course.description}</CardDescription>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            {course.rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            {course.students.toLocaleString()} students
          </div>
          <div className="text-lg font-bold">
            {course.isPaid ? (
              <span className="text-green-600">KES {course.price.toLocaleString()}</span>
            ) : (
              <span className="text-green-600">Free</span>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {course.progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} />
          </div>
        )}
        
        <div className="flex flex-wrap gap-1 mb-4">
          {course.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {course.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{course.skills.length - 3} more
            </Badge>
          )}
        </div>
        
        {course.isPaid ? (
          <CoursePaymentButton
            courseId={course.id}
            courseName={course.title}
            price={course.price}
            onPurchaseSuccess={handlePurchaseSuccess}
          />
        ) : (
          <Link to={`/courses/${course.id}`}>
            <Button className="w-full">
              {course.progress > 0 ? (
                <>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continue Learning
                </>
              ) : (
                <>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Course
                </>
              )}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default Courses;
