
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Trophy, Star, Smartphone, Globe, Zap, Shield, Award, TrendingUp, MessageSquare, Phone, Mail, Briefcase, MapPin, Clock, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  const featuredJobs = [
    {
      title: "Content Writer",
      company: "Digital Marketing Agency",
      location: "Remote",
      salary: "$1,500 - $2,500/month",
      type: "Full-time",
      urgent: true
    },
    {
      title: "Virtual Assistant",
      company: "E-commerce Startup",
      location: "Remote",
      salary: "$800 - $1,200/month",
      type: "Part-time",
      urgent: false
    },
    {
      title: "Social Media Manager",
      company: "Tourism Company",
      location: "Nairobi, Kenya",
      salary: "$1,000 - $1,800/month",
      type: "Full-time",
      urgent: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main id="main-content">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4" aria-labelledby="hero-heading">
        <div className="max-w-6xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Grow Your Digital Skills.<br />Shape Your Future.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands learning in-demand digital skills through expert mentorship and hands-on training. 
            Start earning on platforms like Upwork, Fiverr, and Jumia today with our USSD-based learning system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg">
                Start Learning Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/mentorship">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Find a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Expert Mentors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Skill Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">85%</div>
            <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
          </div>
        </div>
      </section>

      {/* What We Offer - Prominent Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">What We Offer</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Everything You Need to Launch Your Digital Career</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From learning to earning - we provide comprehensive tools and support for your journey in the digital economy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">50+ Skill Courses</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Master in-demand skills with our comprehensive course library covering digital marketing, web development, content creation, and more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 dark:text-green-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">500+ Expert Mentors</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Connect with successful professionals for 1-on-1 guidance, portfolio reviews, and career advice tailored to your goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-purple-600 dark:text-purple-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">USSD Learning</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Learn from any phone, even without internet. Our USSD platform makes education accessible to everyone across Africa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
              <CardHeader className="text-center">
                <MessageSquare className="h-12 w-12 text-orange-600 dark:text-orange-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">AI Career Coach</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Get 24/7 personalized guidance from our AI-powered coach for skill development, career planning, and job preparation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800">
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 text-pink-600 dark:text-pink-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">Certifications</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Earn industry-recognized certificates that prove your skills and help you stand out to employers and clients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800">
              <CardHeader className="text-center">
                <Briefcase className="h-12 w-12 text-teal-600 dark:text-teal-300 mx-auto mb-4" />
                <CardTitle className="text-xl dark:text-white">Job Opportunities</CardTitle>
                <CardDescription className="dark:text-gray-200">
                  Access exclusive job listings and connect directly with employers looking for digital talent like you.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">About KuzaSkills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            KuzaSkills is East Africa's premier digital skills learning platform, designed to bridge the gap between traditional education and the digital economy. 
            We make professional digital skills training accessible to everyone, whether you have high-speed internet or just a basic mobile phone.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Universal Access</CardTitle>
                <CardDescription>
                  Learn anywhere, anytime with our multi-platform approach. From USSD codes on basic phones to full web applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Industry-Relevant Skills</CardTitle>
                <CardDescription>
                  Master in-demand skills like digital marketing, content writing, virtual assistance, and web development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Community</CardTitle>
                <CardDescription>
                  Connect with successful professionals, get mentored by industry experts, and join a thriving community of learners.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To democratize access to digital skills education across Africa, empowering individuals to build sustainable careers 
              in the global digital economy through innovative, accessible, and practical learning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Key Services</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive digital skills training accessible through multiple channels including USSD, web, and mobile.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">USSD Learning Platform</CardTitle>
                <CardDescription>
                  Learn on any phone with our innovative USSD-based system. No internet required - just dial *123# to access courses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Works on any mobile phone</li>
                  <li>• No internet connection needed</li>
                  <li>• Progress tracking via SMS</li>
                  <li>• Affordable per-session pricing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Web & Mobile Platform</CardTitle>
                <CardDescription>
                  Full-featured online learning experience with interactive content, live sessions, and community features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interactive video lessons</li>
                  <li>• Live mentorship sessions</li>
                  <li>• Community forums</li>
                  <li>• Progress analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <MessageSquare className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">AI-Powered Coaching</CardTitle>
                <CardDescription>
                  Get personalized guidance from our AI coach, available 24/7 to answer questions and provide career advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 AI assistance</li>
                  <li>• Personalized learning paths</li>
                  <li>• Career guidance</li>
                  <li>• Skill assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <Briefcase className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Digital Jobs Board</CardTitle>
                <CardDescription>
                  Access exclusive job opportunities from our partner companies and connect directly with employers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Curated job opportunities</li>
                  <li>• Direct employer connections</li>
                  <li>• Skills-matched positions</li>
                  <li>• Career placement support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">AI-Powered Career Tools</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Get personalized guidance and assessment with our cutting-edge AI tools designed to accelerate your career growth.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-6">
                <MessageSquare className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">AI Career Advisor</CardTitle>
                <CardDescription className="text-base">
                  Get personalized career guidance, skill recommendations, and job market insights from our intelligent AI advisor.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Personalized career path recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Job market analysis and trends</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Skills gap analysis and improvement plans</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">24/7 career counseling support</span>
                  </div>
                </div>
                <Link to="/ai-career-advisor">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Try AI Career Advisor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-6">
                <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">Skills Assessment</CardTitle>
                <CardDescription className="text-base">
                  Evaluate your current skill level and get customized learning recommendations to reach your career goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Comprehensive skill evaluation tests</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Personalized learning path creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Progress tracking and benchmarking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Industry-standard certification preparation</span>
                  </div>
                </div>
                <Link to="/skill-assessment">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Take Skills Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jobs Board Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Job Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get hired by top companies looking for digital skills talent. Our job board connects you with opportunities that match your training.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                {job.urgent && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    Urgent Hiring
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="font-medium text-gray-700">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="font-semibold text-green-600">
                      {job.salary}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:bg-blue-50 hover:text-blue-600">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/community">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                View All Jobs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Learning Paths</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose from our most successful career tracks, each designed to get you earning income within 30-90 days.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Most Popular</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">$500-2500</div>
                    <div className="text-sm text-gray-500">Monthly Potential</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Digital Marketing</CardTitle>
                <CardDescription>
                  Master social media marketing, content creation, and paid advertising to help businesses grow online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>6-8 weeks to complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>2,500+ successful graduates</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Facebook Ads</Badge>
                  <Badge variant="outline" className="text-xs">Google Ads</Badge>
                  <Badge variant="outline" className="text-xs">SEO</Badge>
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-800">High Demand</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">$300-1500</div>
                    <div className="text-sm text-gray-500">Monthly Potential</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Virtual Assistant</CardTitle>
                <CardDescription>
                  Provide administrative, technical, and creative support to businesses and entrepreneurs remotely.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>4-6 weeks to complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>1,800+ successful graduates</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Admin Support</Badge>
                  <Badge variant="outline" className="text-xs">Data Entry</Badge>
                  <Badge variant="outline" className="text-xs">Email Management</Badge>
                  <Badge variant="outline" className="text-xs">Research</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">Quick Start</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">$400-2000</div>
                    <div className="text-sm text-gray-500">Monthly Potential</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Content Writing</CardTitle>
                <CardDescription>
                  Create compelling articles, blogs, and marketing copy for websites and businesses worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>3-5 weeks to complete</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>3,200+ successful graduates</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Blog Writing</Badge>
                  <Badge variant="outline" className="text-xs">Copywriting</Badge>
                  <Badge variant="outline" className="text-xs">SEO Writing</Badge>
                  <Badge variant="outline" className="text-xs">Technical Writing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Explore All Learning Paths <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            From beginner tutorials to expert mentorship, we provide comprehensive support for your digital career journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Interactive Learning</CardTitle>
                <CardDescription>
                  Master skills through hands-on courses, quizzes, and real-world projects designed for platform success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Digital Marketing</Badge>
                  <Badge variant="secondary">Copywriting</Badge>
                  <Badge variant="secondary">Virtual Assistant</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Expert Mentorship</CardTitle>
                <CardDescription>
                  Connect with successful professionals who've built thriving careers on digital platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">1-on-1 Sessions</Badge>
                  <Badge variant="secondary">Group Coaching</Badge>
                  <Badge variant="secondary">24/7 Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <Trophy className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Track Progress</CardTitle>
                <CardDescription>
                  Earn certificates, unlock achievements, and showcase your growing expertise to potential clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Certificates</Badge>
                  <Badge variant="secondary">Badges</Badge>
                  <Badge variant="secondary">Portfolio</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose KuzaSkills?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Track Learning</h3>
              <p className="text-gray-600 text-sm">Get job-ready in weeks, not years with our accelerated programs.</p>
            </div>
            
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trusted Platform</h3>
              <p className="text-gray-600 text-sm">Secure, reliable, and used by thousands of successful freelancers.</p>
            </div>
            
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Industry Recognition</h3>
              <p className="text-gray-600 text-sm">Certificates recognized by top employers and platforms.</p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">85% of our students land their first gig within 30 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Start your journey to digital success in 4 simple steps
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up Free</h3>
              <p className="text-gray-600">
                Create your account in under 2 minutes. No credit card required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Path</h3>
              <p className="text-gray-600">
                Select a learning path based on your interests and career goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn & Practice</h3>
              <p className="text-gray-600">
                Complete courses, work on projects, and get feedback from mentors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Earning</h3>
              <p className="text-gray-600">
                Apply for jobs, build your portfolio, and land your first clients.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/onboarding">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3">
                Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of learners who've transformed their careers with KuzaSkills
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm opacity-80">Content Writer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "I went from zero experience to earning $2,000/month on Upwork in just 3 months. The mentorship was game-changing!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">James K.</div>
                    <div className="text-sm opacity-80">Digital Marketer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "The platform-specific training helped me understand exactly what clients want. Now I'm running campaigns for 5 businesses!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Lucy W.</div>
                    <div className="text-sm opacity-80">Virtual Assistant</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "Started learning during my maternity leave. Now I work from home and earn enough to support my family. Life-changing!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Peter O.</div>
                    <div className="text-sm opacity-80">Web Developer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "Transitioned from construction work to web development. The AI coach guided me every step. Best decision ever!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Grace N.</div>
                    <div className="text-sm opacity-80">Social Media Manager</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "Landed my dream job at a startup after completing the digital marketing course. The certificate was recognized instantly!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">David M.</div>
                    <div className="text-sm opacity-80">Graphic Designer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90 text-base">
                  "The practical projects in my portfolio got me my first 10 clients. Now I have a waiting list. Thank you KuzaSkills!"
                </CardDescription>
                <div className="mt-4 flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/success-stories">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Read More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your learning goals. All plans include access to our core features.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-gray-200 text-gray-700">Free</Badge>
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <div className="text-4xl font-bold mb-2">KES 0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Access to 20+ free courses</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Community forum access</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Basic progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">AI Career Advisor (limited)</span>
                  </li>
                </ul>
                <Link to="/auth">
                  <Button variant="outline" className="w-full">Get Started Free</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
              <CardHeader className="text-center pb-8 pt-8">
                <Badge className="mx-auto mb-4 bg-blue-500">Premium</Badge>
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <div className="text-4xl font-bold mb-2">
                  KES 2,500
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>For serious learners</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Access to ALL 100+ courses</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">2 mentorship sessions/month</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Industry certificates</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Job placement assistance</span>
                  </li>
                </ul>
                <Link to="/auth">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600">Start Premium Trial</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-purple-500">Pro</Badge>
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold mb-2">
                  KES 5,000
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>For professionals & teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Unlimited mentorship sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">1-on-1 career coaching</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Custom learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Portfolio review service</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">Direct employer connections</span>
                  </li>
                </ul>
                <Link to="/auth">
                  <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include 14-day money-back guarantee</p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 mr-1 text-blue-600" />
                <span>M-Pesa Accepted</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-purple-600" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Have questions? We're here to help you start your digital career journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+254 700 123 456</p>
            </div>
            
            <div>
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@kuzaskills.com</p>
            </div>
            
            <div>
              <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">USSD Code</h3>
              <p className="text-gray-600">Dial *123# to start learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are already building successful digital careers.
          </p>
          <Link to="/onboarding">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-lg">
              Get Started Today - It's Free!
            </Button>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
