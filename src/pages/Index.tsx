
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Trophy, Star, Smartphone, Globe, Zap, Shield, Award, TrendingUp, MessageSquare, Phone, Mail, Briefcase, MapPin, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Grow Your Digital Skills.<br />Shape Your Future.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Active Learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Skill Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About KuzaSkills</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm opacity-80">Freelance Writer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90">
                  "I went from zero experience to earning $2,000/month on Upwork in just 3 months. The mentorship was game-changing!"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">James K.</div>
                    <div className="text-sm opacity-80">Digital Marketer</div>
                  </div>
                </div>
                <CardDescription className="text-white/90">
                  "The platform-specific training helped me understand exactly what clients want. Now I'm booked solid!"
                </CardDescription>
              </CardHeader>
            </Card>
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

      <Footer />
    </div>
  );
};

export default Index;
