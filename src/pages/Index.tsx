import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Trophy, Star, Smartphone, Globe, Zap, Shield, Award, TrendingUp, MessageSquare, Phone, Mail, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Grow Your Digital Skills.<br />Shape Your Future.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands learning in-demand digital skills through expert mentorship and hands-on training. 
              Start earning on platforms like Upwork, Fiverr, and Jumia today with our innovative USSD-based learning system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/onboarding">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Start Learning Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/mentorship">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Find a Mentor
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Free courses available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>USSD learning - no internet needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Active Learners</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Expert Mentors</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Skill Courses</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Learning Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience digital skills training like never before - accessible through multiple channels including our groundbreaking USSD technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-3">USSD Learning Platform</CardTitle>
                <CardDescription className="text-base">
                  Revolutionary learning system that works on any mobile phone. Just dial <strong>*123#</strong> to access courses without internet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Works on any mobile phone</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>No internet connection needed</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Progress tracking via SMS</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Affordable per-session pricing</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Try USSD Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-3">Web & Mobile Platform</CardTitle>
                <CardDescription className="text-base">
                  Full-featured online learning experience with interactive content, live sessions, and community features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>HD video lessons & tutorials</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Live mentorship sessions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Interactive community forums</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Detailed progress analytics</span>
                  </li>
                </ul>
                <Link to="/courses">
                  <Button variant="outline" className="w-full mt-6 border-green-600 text-green-600 hover:bg-green-50">
                    Browse Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-3">AI-Powered Coaching</CardTitle>
                <CardDescription className="text-base">
                  Get personalized guidance from our AI coach, available 24/7 to answer questions and provide career advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>24/7 AI assistance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Career guidance & tips</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Smart skill assessments</span>
                  </li>
                </ul>
                <Link to="/ai-coach">
                  <Button variant="outline" className="w-full mt-6 border-purple-600 text-purple-600 hover:bg-purple-50">
                    Try AI Coach
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our platform offers a wide range of courses, expert mentorship, and innovative learning technologies to help you achieve your digital goals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                <CardDescription>
                  We prioritize your privacy and security, ensuring that your personal information is protected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">24/7 Support</Badge>
                  <Badge variant="secondary">Secure Payment</Badge>
                  <Badge variant="secondary">Data Privacy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Certified Mentors</CardTitle>
                <CardDescription>
                  Our mentors are industry experts with proven track records of success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Certified</Badge>
                  <Badge variant="secondary">Verified</Badge>
                  <Badge variant="secondary">Experience</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Continuous Improvement</CardTitle>
                <CardDescription>
                  Our platform is constantly evolving to provide the latest digital skills training and support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Regular Updates</Badge>
                  <Badge variant="secondary">New Courses</Badge>
                  <Badge variant="secondary">Feedback Loop</Badge>
                </div>
              </CardContent>
            </Card>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Ready to transform your career? Choose how you want to learn and start your journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div className="group hover:scale-105 transition-transform">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">+254 700 123 456</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">hello@kuzaskills.com</p>
              <p className="text-sm text-gray-500">Response within 24hrs</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform">
              <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">USSD Code</h3>
              <p className="text-gray-600 mb-2">Dial *123#</p>
              <p className="text-sm text-gray-500">Start learning instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of learners who are already building successful digital careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                Get Started Today - It's Free!
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
