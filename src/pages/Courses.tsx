
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { BookOpen, Clock, Users, Star, Search, Award, PlayCircle, Code, Database, TestTube, Video, Palette, Brain, Smartphone, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

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
    "Data Science"
  ];

  const courses = [
    // Web Development Courses
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
      price: "Free",
      progress: 0,
      instructor: "John Smith",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      platform: "General",
      icon: <Code className="h-5 w-5" />
    },
    {
      id: 2,
      title: "MERN Stack Full-Stack Development",
      description: "Master MongoDB, Express.js, React, and Node.js to build modern web applications",
      category: "Web Development",
      level: "Advanced",
      duration: "60 hours",
      lessons: 180,
      students: 8934,
      rating: 4.8,
      price: "Free",
      progress: 0,
      instructor: "Sarah Chen",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "RESTful APIs"],
      platform: "General",
      icon: <Code className="h-5 w-5" />
    },
    
    // Database Courses
    {
      id: 3,
      title: "Database Design and SQL Mastery",
      description: "Learn database fundamentals, SQL queries, and database optimization techniques",
      category: "Database Management",
      level: "Intermediate",
      duration: "25 hours",
      lessons: 75,
      students: 5678,
      rating: 4.7,
      price: "Free",
      progress: 0,
      instructor: "Michael Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      skills: ["SQL", "MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
      platform: "General",
      icon: <Database className="h-5 w-5" />
    },
    
    // Software Testing
    {
      id: 4,
      title: "Software Testing Fundamentals",
      description: "Learn manual and automated testing techniques for web and mobile applications",
      category: "Software Testing",
      level: "Beginner",
      duration: "30 hours",
      lessons: 90,
      students: 3421,
      rating: 4.6,
      price: "Free",
      progress: 0,
      instructor: "Lisa Wang",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      skills: ["Manual Testing", "Selenium", "Test Cases", "Bug Reporting", "API Testing"],
      platform: "General",
      icon: <TestTube className="h-5 w-5" />
    },
    
    // Video Editing
    {
      id: 5,
      title: "Professional Video Editing Masterclass",
      description: "Master Adobe Premiere Pro, DaVinci Resolve, and create stunning video content",
      category: "Video Editing",
      level: "Intermediate",
      duration: "35 hours",
      lessons: 105,
      students: 7892,
      rating: 4.8,
      price: "Free",
      progress: 0,
      instructor: "Carlos Martinez",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400",
      skills: ["Adobe Premiere", "DaVinci Resolve", "Color Grading", "Audio Editing", "Motion Graphics"],
      platform: "General",
      icon: <Video className="h-5 w-5" />
    },
    
    // Graphics Design
    {
      id: 6,
      title: "Complete Graphics Design Course",
      description: "Learn Adobe Photoshop, Illustrator, and design principles for digital media",
      category: "Graphics Design",
      level: "Beginner",
      duration: "45 hours",
      lessons: 135,
      students: 12340,
      rating: 4.9,
      price: "Free",
      progress: 0,
      instructor: "Emma Thompson",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      skills: ["Adobe Photoshop", "Illustrator", "Logo Design", "Branding", "Typography"],
      platform: "General",
      icon: <Palette className="h-5 w-5" />
    },
    
    // AI & Machine Learning
    {
      id: 7,
      title: "Introduction to Artificial Intelligence",
      description: "Explore AI fundamentals, machine learning basics, and practical AI applications",
      category: "Artificial Intelligence",
      level: "Intermediate",
      duration: "50 hours",
      lessons: 150,
      students: 6789,
      rating: 4.7,
      price: "Free",
      progress: 0,
      instructor: "Dr. Ahmed Hassan",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks", "Data Analysis"],
      platform: "General",
      icon: <Brain className="h-5 w-5" />
    },
    
    // Mobile Development
    {
      id: 8,
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile apps for iOS and Android using React Native",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "55 hours",
      lessons: 165,
      students: 4567,
      rating: 4.6,
      price: "Free",
      progress: 0,
      instructor: "Kevin Park",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
      skills: ["React Native", "JavaScript", "Mobile UI", "API Integration", "App Store Deployment"],
      platform: "General",
      icon: <Smartphone className="h-5 w-5" />
    },
    
    // Cybersecurity
    {
      id: 9,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, and cybersecurity best practices",
      category: "Cybersecurity",
      level: "Intermediate",
      duration: "40 hours",
      lessons: 120,
      students: 3456,
      rating: 4.8,
      price: "Free",
      progress: 0,
      instructor: "Jessica Brown",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Auditing", "Risk Assessment"],
      platform: "General",
      icon: <Shield className="h-5 w-5" />
    },
    
    // Data Science
    {
      id: 10,
      title: "Data Science with Python",
      description: "Master data analysis, visualization, and statistical modeling with Python",
      category: "Data Science",
      level: "Advanced",
      duration: "65 hours",
      lessons: 195,
      students: 5432,
      rating: 4.9,
      price: "Free",
      progress: 0,
      instructor: "Dr. Maria Santos",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Statistics"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },
    
    // Digital Marketing
    {
      id: 11,
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing including SEO, social media, and email marketing",
      category: "Digital Marketing",
      level: "Beginner",
      duration: "6 hours",
      lessons: 24,
      students: 1247,
      rating: 4.8,
      price: "Free",
      progress: 65,
      instructor: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      skills: ["SEO", "Social Media", "Email Marketing", "Analytics"],
      platform: "General",
      icon: <TrendingUp className="h-5 w-5" />
    },
    
    // Platform Training
    {
      id: 12,
      title: "Upwork Success Masterclass",
      description: "Complete guide to building a successful freelance career on Upwork",
      category: "Platform Training",
      level: "Intermediate",
      duration: "4.5 hours",
      lessons: 18,
      students: 892,
      rating: 4.9,
      price: "Free",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
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
    </div>
  );
};

const CourseCard = ({ course }: { course: any }) => {
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
          <div className="text-lg font-bold text-green-600">{course.price}</div>
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
      </CardContent>
    </Card>
  );
};

export default Courses;
