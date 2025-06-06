
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, TrendingUp, BookOpen, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Land Your First Freelance Writing Gig on Upwork",
      excerpt: "A step-by-step guide to creating a winning profile and landing your first client on the world's largest freelancing platform.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Freelancing",
      readTime: "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Complete Guide to Digital Marketing for Beginners",
      excerpt: "Learn the fundamentals of digital marketing, from social media to email campaigns, and start earning online.",
      author: "Mark Wilson",
      date: "2024-01-12",
      category: "Digital Marketing",
      readTime: "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Building a Successful Virtual Assistant Business",
      excerpt: "Discover the essential skills and strategies needed to become a highly sought-after virtual assistant.",
      author: "Grace Mwangi",
      date: "2024-01-10",
      category: "Virtual Assistant",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      title: "USSD Learning: Revolutionizing Education in Africa",
      excerpt: "How USSD technology is making digital skills training accessible to everyone, regardless of internet connectivity.",
      author: "David Ochieng",
      date: "2024-01-08",
      category: "Technology",
      readTime: "4 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Top 10 High-Paying Digital Skills in 2024",
      excerpt: "Explore the most in-demand digital skills that can help you earn a sustainable income online.",
      author: "Emma Roberts",
      date: "2024-01-05",
      category: "Career",
      readTime: "7 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Success Story: From Unemployed to $3000/month Freelancer",
      excerpt: "Read how John transformed his life through our mentorship program and built a thriving online business.",
      author: "John Kamau",
      date: "2024-01-03",
      category: "Success Story",
      readTime: "3 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Freelancing", "Digital Marketing", "Virtual Assistant", "Technology", "Career", "Success Story"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Skills Blog
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Expert insights, tips, and strategies to accelerate your digital career journey
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="h-5 w-5" />
              <span>Weekly Articles</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5" />
              <span>Expert Authors</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="h-5 w-5" />
              <span>Career Growth</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-12 pr-4 py-4 text-lg rounded-lg border-0 focus:ring-2 focus:ring-white bg-white/90 text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-8 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-600 border-gray-300">
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 mb-8">
            Get the latest digital skills insights and career tips delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white border-0"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
