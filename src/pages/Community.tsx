
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  ThumbsUp, 
  Clock, 
  Users, 
  Star, 
  Search,
  Plus,
  TrendingUp,
  Award,
  Heart
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const forumTopics = [
    {
      id: 1,
      title: "Getting Started on Fiverr",
      description: "Tips and strategies for new freelancers on Fiverr",
      posts: 245,
      lastActivity: "2 hours ago",
      category: "Freelancing",
      isPopular: true
    },
    {
      id: 2,
      title: "Upwork Success Stories",
      description: "Share your wins and learn from others",
      posts: 189,
      lastActivity: "4 hours ago",
      category: "Success Stories",
      isPopular: true
    },
    {
      id: 3,
      title: "Digital Marketing Strategies",
      description: "Discuss latest trends and techniques",
      posts: 156,
      lastActivity: "1 day ago",
      category: "Skills",
      isPopular: false
    },
    {
      id: 4,
      title: "Jumia Seller Tips",
      description: "Platform-specific advice for Jumia sellers",
      posts: 98,
      lastActivity: "3 hours ago",
      category: "E-commerce",
      isPopular: false
    }
  ];

  const qaQuestions = [
    {
      id: 1,
      title: "How to write effective Upwork proposals?",
      author: "Sarah M.",
      votes: 23,
      answers: 8,
      views: 445,
      tags: ["upwork", "proposals", "freelancing"],
      timeAgo: "2 hours ago",
      isAnswered: true
    },
    {
      id: 2,
      title: "Best practices for client communication on Fiverr",
      author: "James K.",
      votes: 15,
      answers: 5,
      views: 287,
      tags: ["fiverr", "communication", "clients"],
      timeAgo: "5 hours ago",
      isAnswered: true
    },
    {
      id: 3,
      title: "How to optimize Jumia product listings?",
      author: "Alice N.",
      votes: 12,
      answers: 3,
      views: 156,
      tags: ["jumia", "seo", "products"],
      timeAgo: "1 day ago",
      isAnswered: false
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "From Zero to $3,000/month on Upwork in 6 months",
      author: "Michael O.",
      avatar: "/placeholder.svg",
      excerpt: "I started with no experience and built a thriving copywriting business...",
      likes: 89,
      comments: 23,
      timeAgo: "3 days ago",
      category: "Freelancing"
    },
    {
      id: 2,
      title: "Built a successful Jumia store selling handmade crafts",
      author: "Grace W.",
      avatar: "/placeholder.svg",
      excerpt: "My traditional craft business went digital and tripled revenue...",
      likes: 67,
      comments: 15,
      timeAgo: "5 days ago",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "How I became a top-rated Fiverr graphic designer",
      author: "David L.",
      avatar: "/placeholder.svg",
      excerpt: "The journey from amateur to professional designer on Fiverr...",
      likes: 54,
      comments: 12,
      timeAgo: "1 week ago",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
          <p className="text-xl text-gray-600 mb-6">
            Connect, learn, and grow with fellow digital entrepreneurs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">12,500+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">8,900+</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="forums" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="forums">Discussion Forums</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Forums Tab */}
          <TabsContent value="forums">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Discussion Forums</h2>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Topic
                </Button>
              </div>
              
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{topic.title}</h3>
                          {topic.isPopular && (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{topic.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {topic.posts} posts
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {topic.lastActivity}
                          </div>
                          <Badge variant="outline">{topic.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Q&A Tab */}
          <TabsContent value="qa">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Questions & Answers</h2>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Ask Question
                </Button>
              </div>
              
              {qaQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center space-y-2 min-w-[80px]">
                        <div className="text-center">
                          <div className="text-lg font-semibold">{question.votes}</div>
                          <div className="text-xs text-gray-500">votes</div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs ${
                          question.isAnswered 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {question.answers} answers
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{question.views}</div>
                          <div className="text-xs text-gray-500">views</div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                          {question.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Asked by {question.author}</span>
                          <span>{question.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="stories">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Success Stories</h2>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Share Your Story
                </Button>
              </div>
              
              {successStories.map((story) => (
                <Card key={story.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={story.avatar} />
                        <AvatarFallback>{story.author[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg hover:text-blue-600">
                            {story.title}
                          </h3>
                          <Badge variant="outline">{story.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">by {story.author}</p>
                        <p className="text-gray-700 mb-4">{story.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <button className="flex items-center gap-1 hover:text-red-500">
                              <Heart className="h-4 w-4" />
                              {story.likes}
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-500">
                              <MessageSquare className="h-4 w-4" />
                              {story.comments}
                            </button>
                          </div>
                          <span className="text-sm text-gray-500">{story.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Community Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      Featured Content
                    </CardTitle>
                    <CardDescription>
                      Top-rated tips and guides from community members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium">Ultimate Upwork Profile Guide</h4>
                        <p className="text-sm text-gray-600">By Sarah M. • 4.9★ rating</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium">Fiverr Gig Optimization Checklist</h4>
                        <p className="text-sm text-gray-600">By James K. • 4.8★ rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Study Groups
                    </CardTitle>
                    <CardDescription>
                      Join or create study groups with other learners
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium">Digital Marketing Beginners</h4>
                        <p className="text-sm text-gray-600">23 members • Meets weekly</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium">Freelancer Accountability Group</h4>
                        <p className="text-sm text-gray-600">45 members • Daily check-ins</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
