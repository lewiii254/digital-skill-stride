
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Users, Lightbulb, Globe, Heart, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "David Ochieng",
      role: "Founder & CEO",
      bio: "Former software engineer turned education entrepreneur. Passionate about making digital skills accessible to everyone in Africa.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Grace Wanjiku",
      role: "Head of Education",
      bio: "Educational technologist with 10+ years experience designing curricula for digital skills training.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Kimani",
      role: "CTO",
      bio: "Technology leader focused on building scalable platforms that work across all devices and network conditions.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Mwangi",
      role: "Head of Mentorship",
      bio: "Career coach and mentor who has helped hundreds of professionals transition to digital careers.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Globe,
      title: "Accessibility",
      description: "We believe digital skills education should be accessible to everyone, regardless of their location or economic situation."
    },
    {
      icon: Users,
      title: "Community",
      description: "Learning is better together. We foster a supportive community where students and mentors help each other succeed."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to find new ways to make learning more effective, engaging, and accessible."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We measure our success by the positive impact we have on our students' lives and careers."
    }
  ];

  const stats = [
    { label: "Students Trained", value: "15,000+", icon: Users },
    { label: "Success Rate", value: "85%", icon: Award },
    { label: "Countries Served", value: "8", icon: Globe },
    { label: "Expert Mentors", value: "500+", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About KuzaSkills
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Empowering Africa's next generation of digital professionals through accessible, practical skills training
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

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  To democratize access to digital skills education across Africa by providing high-quality, 
                  practical training that empowers individuals to build sustainable careers in the digital economy. 
                  We believe that everyone deserves the opportunity to participate in the global digital marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Lightbulb className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  To become Africa's leading platform for digital skills education, creating a generation of 
                  digitally empowered professionals who contribute to economic growth and innovation across the continent. 
                  We envision a future where geographical and economic barriers don't limit educational opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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

export default About;
