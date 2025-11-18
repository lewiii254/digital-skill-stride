import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Download, Share2, ExternalLink, CheckCircle, Clock, FileText, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Certifications = () => {
  const completedCertifications = [
    {
      id: 1,
      title: "Digital Marketing Professional",
      course: "Digital Marketing Fundamentals",
      issueDate: "February 15, 2024",
      credentialId: "DM-2024-15420",
      verificationUrl: "#",
      skills: ["SEO", "Social Media Marketing", "Email Marketing", "Analytics"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
    {
      id: 2,
      title: "Web Development Specialist",
      course: "Complete Web Development Bootcamp",
      issueDate: "January 28, 2024",
      credentialId: "WD-2024-12358",
      verificationUrl: "#",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
  ];

  const inProgressCertifications = [
    {
      id: 3,
      title: "Advanced React Development",
      course: "Advanced React & Node.js Development",
      progress: 75,
      estimatedCompletion: "March 20, 2024",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400",
    },
    {
      id: 4,
      title: "Content Writing Mastery",
      course: "Freelance Writing Mastery",
      progress: 45,
      estimatedCompletion: "April 5, 2024",
      skills: ["Copywriting", "SEO Writing", "Blog Writing"],
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
    },
  ];

  const availableCertifications = [
    {
      id: 5,
      title: "Mobile App Development",
      course: "Flutter Mobile Development",
      requirements: "Complete all modules and score 80%+ on final exam",
      duration: "60 hours",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    },
    {
      id: 6,
      title: "Data Science Fundamentals",
      course: "Python for Data Science",
      requirements: "Complete all modules and capstone project",
      duration: "80 hours",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
  ];

  const stats = {
    totalCertificates: completedCertifications.length,
    inProgress: inProgressCertifications.length,
    skills: 12,
    verifications: 245,
  };

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Certifications</h1>
          <p className="text-gray-600">Showcase your achievements with industry-recognized certificates</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Earned Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-blue-600">{stats.totalCertificates}</div>
                <Award className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-green-600">{stats.inProgress}</div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Skills Certified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-purple-600">{stats.skills}</div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Verifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-orange-600">{stats.verifications}</div>
                <ExternalLink className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Tabs */}
        <Tabs defaultValue="earned" className="space-y-6">
          <TabsList>
            <TabsTrigger value="earned">Earned</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
          </TabsList>

          {/* Earned Certifications */}
          <TabsContent value="earned" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedCertifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-green-500 text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Issue Date:</span>
                        <p className="font-medium">{cert.issueDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Credential ID:</span>
                        <p className="font-medium text-xs">{cert.credentialId}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button variant="link" size="sm" className="w-full text-xs p-0">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Verify Certificate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* In Progress Certifications */}
          <TabsContent value="in-progress" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {inProgressCertifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-blue-500 text-white">
                        <Clock className="h-3 w-3 mr-1" />
                        {cert.progress}% Complete
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                          style={{ width: `${cert.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="text-gray-500">Estimated Completion:</span>
                      <p className="font-medium">{cert.estimatedCompletion}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Link to="/courses">
                      <Button className="w-full">
                        Continue Learning
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Available Certifications */}
          <TabsContent value="available" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {availableCertifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm">
                      <span className="text-gray-500">Requirements:</span>
                      <p className="mt-1">{cert.requirements}</p>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {cert.duration}
                    </div>

                    <Link to="/courses">
                      <Button className="w-full" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        View Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Certifications;
