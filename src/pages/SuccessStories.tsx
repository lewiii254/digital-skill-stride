
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, TrendingUp, DollarSign, Clock, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "Freelance Content Writer",
      location: "Nairobi, Kenya",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      monthlyEarning: "$2,500",
      timeToSuccess: "3 months",
      rating: 4.9,
      completedProjects: 150,
      story: "I was a fresh graduate with no work experience. Through KuzaSkills' writing course and mentorship, I learned how to create compelling content and landed my first client within 2 weeks. Now I work with international clients and earn more than most office jobs in Kenya.",
      skills: ["Content Writing", "SEO", "Social Media"],
      platform: "Upwork",
      featured: true
    },
    {
      id: 2,
      name: "James Ochieng",
      role: "Digital Marketing Specialist",
      location: "Kisumu, Kenya",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      monthlyEarning: "$3,200",
      timeToSuccess: "4 months",
      rating: 5.0,
      completedProjects: 85,
      story: "After losing my job during COVID, I discovered KuzaSkills. The digital marketing course taught me everything from Facebook ads to email campaigns. My mentor helped me build a strong portfolio, and now I manage marketing for 5 different companies.",
      skills: ["Facebook Ads", "Google Ads", "Email Marketing"],
      platform: "Fiverr",
      featured: false
    },
    {
      id: 3,
      name: "Grace Mwangi",
      role: "Virtual Assistant",
      location: "Mombasa, Kenya",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      monthlyEarning: "$1,800",
      timeToSuccess: "2 months",
      rating: 4.8,
      completedProjects: 200,
      story: "As a single mother, I needed flexible work. The VA course at KuzaSkills taught me administrative skills, communication, and time management. I now support 3 entrepreneurs and have the flexibility to care for my children while earning a steady income.",
      skills: ["Admin Support", "Customer Service", "Data Entry"],
      platform: "Upwork",
      featured: false
    }
  ];

  const stats = [
    { label: "Success Rate", value: "85%", icon: TrendingUp },
    { label: "Average Monthly Earnings", value: "$2,800", icon: DollarSign },
    { label: "Average Time to First Gig", value: "3.5 months", icon: Clock },
    { label: "Student Satisfaction", value: "4.8/5", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Success Stories
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Discover how our students transformed their lives through digital skills training
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Story</h2>
          {successStories.filter(story => story.featured).map((story) => (
            <Card key={story.id} className="overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-green-100 p-8 flex flex-col items-center justify-center text-center">
                  <Avatar className="h-32 w-32 mb-6">
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-gray-600 mb-2">{story.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {story.monthlyEarning}/month
                    </Badge>
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{story.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start mb-6">
                    <Quote className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-gray-700 leading-relaxed">{story.story}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {story.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• {story.completedProjects}+ completed projects</li>
                        <li>• Success in {story.timeToSuccess}</li>
                        <li>• Active on {story.platform}</li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/onboarding">
                    <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                      Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.filter(story => !story.featured).map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.role}</CardDescription>
                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <Badge className="bg-green-100 text-green-800">{story.monthlyEarning}/mo</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{story.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{story.story.substring(0, 120)}...</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {story.skills.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                    {story.skills.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{story.skills.length - 2} more</Badge>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>{story.completedProjects}+ projects • Success in {story.timeToSuccess}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of students who have transformed their lives through digital skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Learning Free
              </Button>
            </Link>
            <Link to="/mentorship">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Find a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
