
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Video, 
  MessageSquare, 
  Calendar,
  MapPin,
  Award,
  Heart,
  Share2,
  CheckCircle,
  ArrowLeft,
  Globe,
  BookOpen,
  Target
} from "lucide-react";

const MentorProfile = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState("basic");

  // Mock mentor data - in real app, this would come from API
  const mentor = {
    id: 1,
    name: "Sarah Johnson",
    title: "Freelance Writing Expert",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    responseTime: "Within 2 hours",
    location: "Nairobi, Kenya",
    experience: "5+ years",
    specialties: ["Content Writing", "Copywriting", "SEO Writing", "Technical Writing"],
    platforms: ["Upwork", "Fiverr", "Contently"],
    bio: "I've helped 200+ freelancers build successful writing careers on major platforms. From $0 to $50/hour in 6 months. My proven system has helped students land their first clients within 30 days and scale to full-time income within 6 months.",
    languages: ["English", "Swahili"],
    totalMentees: 89,
    successRate: 95,
    nextAvailable: "Today, 3:00 PM",
    sessionTypes: ["1-on-1 Coaching", "Portfolio Review", "Platform Setup"],
    achievements: [
      "Top Rated Plus on Upwork",
      "Fiverr Pro Seller",
      "Published Author",
      "6-Figure Freelancer",
      "Featured in Forbes"
    ],
    education: [
      "MA in Journalism - University of Nairobi",
      "Certificate in Digital Marketing - Google",
      "Copywriting Specialist - AWAI"
    ],
    workExperience: [
      "Senior Content Manager at Tech Startup (2019-2022)",
      "Freelance Writer on Upwork (2018-Present)",
      "Content Marketing Consultant (2020-Present)"
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "John Kimani",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "2 weeks ago",
      comment: "Sarah helped me go from complete beginner to landing my first $500 writing gig in just 3 weeks! Her guidance on Upwork proposals was game-changing.",
      verified: true
    },
    {
      id: 2,
      author: "Grace Wanjiru",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "1 month ago",
      comment: "Amazing mentor! She reviewed my portfolio and gave specific feedback that helped me increase my rates by 150%. Worth every penny!",
      verified: true
    },
    {
      id: 3,
      author: "David Mwangi",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "2 months ago",
      comment: "Sarah's 1-on-1 coaching sessions are incredibly valuable. She shares real strategies that actually work. Highly recommend!",
      verified: true
    }
  ];

  const packages = [
    {
      id: "basic",
      name: "Quick Consultation",
      price: 45,
      duration: "30 minutes",
      description: "Perfect for specific questions or quick advice",
      features: [
        "30-minute video call",
        "Portfolio quick review",
        "Q&A session",
        "Action plan summary"
      ]
    },
    {
      id: "standard",
      name: "Strategy Session",
      price: 85,
      duration: "60 minutes",
      description: "Comprehensive career planning and strategy",
      features: [
        "60-minute video call",
        "Detailed portfolio review",
        "Platform optimization",
        "Custom action plan",
        "Follow-up email support"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Complete Mentorship",
      price: 200,
      duration: "3 sessions",
      description: "Full mentorship package for serious career growth",
      features: [
        "3 x 60-minute sessions",
        "Complete portfolio overhaul",
        "Platform setup assistance",
        "Proposal templates",
        "30-day email support",
        "Success tracking"
      ]
    }
  ];

  const availability = [
    { day: "Today", slots: ["3:00 PM", "5:00 PM", "7:00 PM"] },
    { day: "Tomorrow", slots: ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"] },
    { day: "Friday", slots: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/mentorship" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Mentors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-2xl">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900">{mentor.name}</h1>
                        <p className="text-xl text-gray-600 mt-1">{mentor.title}</p>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{mentor.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Globe className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{mentor.languages.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-bold">{mentor.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{mentor.reviews} reviews</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-bold">${mentor.hourlyRate}</span>
                        </div>
                        <div className="text-sm text-gray-600">per hour</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="font-bold">{mentor.totalMentees}</span>
                        </div>
                        <div className="text-sm text-gray-600">mentees</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Target className="h-4 w-4 text-purple-600" />
                          <span className="font-bold">{mentor.successRate}%</span>
                        </div>
                        <div className="text-sm text-gray-600">success rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="availability">Schedule</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Platforms I Can Help You With</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mentor.platforms.map((platform, index) => (
                        <Badge key={index} variant="outline">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mentor.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="grid gap-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.author} />
                            <AvatarFallback>{review.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{review.author}</h4>
                                <div className="flex items-center space-x-2">
                                  <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-600">{review.date}</span>
                                  {review.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="mt-2 text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="packages" className="space-y-6">
                <div className="grid gap-6">
                  {packages.map((pkg) => (
                    <Card key={pkg.id} className={`relative ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold">{pkg.name}</h3>
                            <p className="text-gray-600 mt-1">{pkg.description}</p>
                            <div className="flex items-center space-x-4 mt-3">
                              <div className="text-2xl font-bold text-green-600">${pkg.price}</div>
                              <div className="text-gray-600">{pkg.duration}</div>
                            </div>
                            <ul className="mt-4 space-y-2">
                              {pkg.features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button 
                            className={`ml-4 ${selectedPackage === pkg.id ? 'bg-blue-600' : ''}`}
                            onClick={() => setSelectedPackage(pkg.id)}
                          >
                            Select Package
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="availability" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Time Slots</CardTitle>
                    <CardDescription>Book a session that works for your schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {availability.map((day, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-2">{day.day}</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {day.slots.map((slot, slotIndex) => (
                              <Button key={slotIndex} variant="outline" size="sm">
                                {slot}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Responds {mentor.responseTime}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Session
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  <Video className="mr-2 h-4 w-4" />
                  Video Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Usually responds within 2 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Next Available */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>Next available: Today, 3:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
