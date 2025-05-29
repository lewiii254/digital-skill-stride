
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { BookOpen, Clock, Users, Star, Search, Filter, Award, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
    "Digital Marketing",
    "Copywriting", 
    "Virtual Assistant",
    "Platform Training",
    "Freelancing",
    "E-commerce"
  ];

  const courses = [
    {
      id: 1,
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
      thumbnail: "/placeholder.svg",
      skills: ["SEO", "Social Media", "Email Marketing", "Analytics"],
      platform: "General"
    },
    {
      id: 2,
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
      thumbnail: "/placeholder.svg",
      skills: ["Profile Optimization", "Proposal Writing", "Client Relations"],
      platform: "Upwork"
    },
    {
      id: 3,
      title: "Professional Copywriting Course",
      description: "Learn to write compelling copy that converts for websites, ads, and emails",
      category: "Copywriting",
      level: "Beginner",
      duration: "8 hours",
      lessons: 32,
      students: 2156,
      rating: 4.7,
      price: "Free",
      progress: 25,
      instructor: "Maria Santos",
      thumbnail: "/placeholder.svg",
      skills: ["Sales Copy", "Email Copy", "Web Copy", "Ad Copy"],
      platform: "General"
    },
    {
      id: 4,
      title: "Virtual Assistant Essentials",
      description: "Everything you need to know to become a successful virtual assistant",
      category: "Virtual Assistant",
      level: "Beginner",
      duration: "5 hours",
      lessons: 20,
      students: 1567,
      rating: 4.6,
      price: "Free",
      progress: 90,
      instructor: "David Kim",
      thumbnail: "/placeholder.svg",
      skills: ["Admin Tasks", "Communication", "Time Management", "Tools"],
      platform: "General"
    },
    {
      id: 5,
      title: "Jumia Seller Success Guide",
      description: "Step-by-step guide to selling successfully on Jumia marketplace",
      category: "Platform Training",
      level: "Beginner",
      duration: "3 hours",
      lessons: 12,
      students: 634,
      rating: 4.5,
      price: "Free",
      progress: 0,
      instructor: "Grace Ochieng",
      thumbnail: "/placeholder.svg",
      skills: ["Product Listing", "Inventory Management", "Customer Service"],
      platform: "Jumia"
    },
    {
      id: 6,
      title: "Advanced Freelance Strategies",
      description: "Scale your freelance business with advanced marketing and pricing strategies",
      category: "Freelancing",
      level: "Advanced",
      duration: "7 hours",
      lessons: 28,
      students: 445,
      rating: 4.9,
      price: "Free",
      progress: 0,
      instructor: "Michael Brown",
      thumbnail: "/placeholder.svg",
      skills: ["Business Strategy", "Pricing", "Client Acquisition", "Scaling"],
      platform: "General"
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
            Master in-demand digital skills with our comprehensive courses designed for platform workers
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
