
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Video, 
  MessageSquare, 
  Calendar,
  Filter,
  MapPin,
  Award,
  Heart,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const mentors = [
    {
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
      bio: "I've helped 200+ freelancers build successful writing careers on major platforms. From $0 to $50/hour in 6 months.",
      languages: ["English", "Swahili"],
      totalMentees: 89,
      successRate: 95,
      nextAvailable: "Today, 3:00 PM",
      sessionTypes: ["1-on-1 Coaching", "Portfolio Review", "Platform Setup"],
      achievements: ["Top Rated Plus on Upwork", "Fiverr Pro Seller", "Published Author"]
    },
    {
      id: 2,
      name: "David Mburu",
      title: "Digital Marketing Strategist",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 55,
      responseTime: "Within 1 hour",
      location: "Lagos, Nigeria",
      experience: "7+ years",
      specialties: ["Social Media Marketing", "Facebook Ads", "Google Ads", "E-commerce"],
      platforms: ["Facebook", "Google", "Shopify", "Jumia"],
      bio: "Former Facebook Marketing Partner. I help businesses and freelancers master digital advertising for African markets.",
      languages: ["English", "Yoruba"],
      totalMentees: 156,
      successRate: 92,
      nextAvailable: "Tomorrow, 10:00 AM",
      sessionTypes: ["Strategy Session", "Campaign Review", "Platform Training"],
      achievements: ["Facebook Marketing Expert", "Google Ads Certified", "1M+ Ad Spend Managed"]
    },
    {
      id: 3,
      name: "Amina Hassan",
      title: "Virtual Assistant Pro",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 203,
      hourlyRate: 35,
      responseTime: "Within 30 minutes",
      location: "Dar es Salaam, Tanzania",
      experience: "4+ years",
      specialties: ["Administrative Support", "Customer Service", "Data Entry", "Email Management"],
      platforms: ["Upwork", "Belay", "Time Etc"],
      bio: "From struggling job seeker to top-rated VA earning $3000/month. I'll show you the exact systems I use.",
      languages: ["English", "Swahili", "Arabic"],
      totalMentees: 134,
      successRate: 97,
      nextAvailable: "Today, 6:00 PM",
      sessionTypes: ["Skills Assessment", "Client Communication", "Tool Training"],
      achievements: ["Upwork Top Rated", "99% Client Satisfaction", "Certified VA"]
    },
    {
      id: 4,
      name: "John Kimani",
      title: "E-commerce Specialist",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviews: 78,
      hourlyRate: 60,
      responseTime: "Within 4 hours",
      location: "Accra, Ghana",
      experience: "6+ years",
      specialties: ["Shopify Development", "Product Sourcing", "Amazon FBA", "Dropshipping"],
      platforms: ["Shopify", "Amazon", "eBay", "Jumia"],
      bio: "Built and sold 3 successful e-commerce stores. Now I help others start their online businesses from scratch.",
      languages: ["English", "Twi"],
      totalMentees: 67,
      successRate: 89,
      nextAvailable: "This Weekend",
      sessionTypes: ["Business Setup", "Store Optimization", "Marketing Strategy"],
      achievements: ["Shopify Expert", "7-Figure Store Owner", "Amazon Best Seller"]
    },
    {
      id: 5,
      name: "Grace Wanjiku",
      title: "Content Creator & Influencer",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 112,
      hourlyRate: 40,
      responseTime: "Within 2 hours",
      location: "Kampala, Uganda",
      experience: "3+ years",
      specialties: ["Instagram Marketing", "TikTok Content", "Brand Partnerships", "Video Editing"],
      platforms: ["Instagram", "TikTok", "YouTube", "LinkedIn"],
      bio: "From 0 to 100K followers in 18 months. I teach authentic content creation and monetization strategies.",
      languages: ["English", "Luganda"],
      totalMentees: 198,
      successRate: 94,
      nextAvailable: "Today, 8:00 PM",
      sessionTypes: ["Content Strategy", "Growth Hacking", "Monetization"],
      achievements: ["100K+ Followers", "Brand Ambassador", "Viral Content Creator"]
    },
    {
      id: 6,
      name: "Michael Ochieng",
      title: "Web Development Mentor",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 145,
      hourlyRate: 75,
      responseTime: "Within 1 hour",
      location: "Cape Town, South Africa",
      experience: "8+ years",
      specialties: ["React Development", "Node.js", "WordPress", "Mobile Apps"],
      platforms: ["Upwork", "Toptal", "Freelancer"],
      bio: "Senior developer at tech startup. I help aspiring developers land their first freelance clients and build portfolios.",
      languages: ["English", "Afrikaans"],
      totalMentees: 87,
      successRate: 98,
      nextAvailable: "Tomorrow, 2:00 PM",
      sessionTypes: ["Code Review", "Portfolio Building", "Interview Prep"],
      achievements: ["Toptal Top 3%", "Open Source Contributor", "Tech Speaker"]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "writing", label: "Writing & Content" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "virtual-assistant", label: "Virtual Assistant" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "social-media", label: "Social Media" },
    { value: "development", label: "Web Development" }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === "all" || 
                           mentor.specialties.some(specialty => 
                             specialty.toLowerCase().includes(selectedCategory.toLowerCase())
                           );
    
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (mentorId: number) => {
    setFavorites(prev => 
      prev.includes(mentorId) 
        ? prev.filter(id => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Mentor
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with successful professionals who've built thriving careers on digital platforms. 
            Get personalized guidance and accelerate your journey to success.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search by name, skill, or platform..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedExperience} onValueChange={setSelectedExperience}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="beginner">1-2 years</SelectItem>
                <SelectItem value="intermediate">3-5 years</SelectItem>
                <SelectItem value="expert">5+ years</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Under $40/hr</SelectItem>
                <SelectItem value="medium">$40-60/hr</SelectItem>
                <SelectItem value="premium">$60+ /hr</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600">
              {filteredMentors.length} mentors found
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{mentor.name}</h3>
                        <p className="text-gray-600 text-sm">{mentor.title}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{mentor.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(mentor.id)}
                        className={favorites.includes(mentor.id) ? "text-red-500" : "text-gray-400"}
                      >
                        <Heart className={`h-4 w-4 ${favorites.includes(mentor.id) ? "fill-current" : ""}`} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{mentor.rating}</span>
                      <span className="text-gray-500 text-sm">({mentor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-semibold">${mentor.hourlyRate}/hr</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-3">{mentor.bio}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Responds {mentor.responseTime}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>{mentor.totalMentees} mentees • {mentor.successRate}% success rate</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span>Next available: {mentor.nextAvailable}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {mentor.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Platforms:</div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.platforms.map((platform, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Link to={`/mentorship/${mentor.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        View Profile
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="mr-1 h-3 w-3" />
                        Book Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No mentors found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedExperience("all");
                setSelectedPrice("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Become a Mentor?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Share your expertise and help others succeed while earning extra income
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            Apply to be a Mentor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;
