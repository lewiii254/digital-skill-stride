
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Heart, Zap, Globe, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Nairobi, Kenya / Remote",
      type: "Full-time",
      description: "Lead our frontend development efforts and help build the next generation of our learning platform.",
      requirements: ["5+ years React experience", "TypeScript expertise", "Mobile-first design"],
      featured: true
    },
    {
      id: 2,
      title: "Educational Content Designer",
      department: "Education",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Design and develop engaging educational content for our digital skills courses.",
      requirements: ["Instructional design background", "Digital marketing knowledge", "Content creation skills"],
      featured: false
    },
    {
      id: 3,
      title: "Regional Partnerships Manager",
      department: "Business Development",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Expand our presence across West Africa through strategic partnerships and local initiatives.",
      requirements: ["5+ years partnership experience", "Education sector knowledge", "Fluent in English"],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family"
    },
    {
      icon: Zap,
      title: "Professional Development",
      description: "Annual learning budget and access to all KuzaSkills courses and mentorship"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with passionate, talented people who care about making an impact"
    },
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Flexible work arrangements with opportunities for travel and in-person collaboration"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Help us democratize access to digital skills education across Africa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Users className="h-5 w-5" />
              <span>50+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Globe className="h-5 w-5" />
              <span>8 Countries</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Heart className="h-5 w-5" />
              <span>Impact-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          
          {/* Featured Position */}
          {openPositions.filter(job => job.featured).map((job) => (
            <Card key={job.id} className="mb-12 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    Featured Position
                  </Badge>
                  <Badge variant="outline">{job.department}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.requirements.map((req, i) => (
                    <Badge key={i} variant="secondary">{req}</Badge>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}

          {/* All Other Positions */}
          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.filter(job => !job.featured).map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{job.department}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.requirements.slice(0, 2).map((req, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{req}</Badge>
                    ))}
                    {job.requirements.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{job.requirements.length - 2} more</Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
