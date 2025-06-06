
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, CreditCard, BookOpen, Users, Scale } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "Platform Usage",
      icon: BookOpen,
      content: [
        "You must be at least 16 years old to create an account and use our services",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You agree to provide accurate, current, and complete information during registration",
        "You may not use our platform for any illegal or unauthorized purposes",
        "You are responsible for all activities that occur under your account",
        "We reserve the right to suspend or terminate accounts that violate these terms"
      ]
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: [
        "All course content, materials, and platform features are owned by KuzaSkills or our content partners",
        "You receive a limited, non-exclusive license to access and use course materials for personal learning",
        "You may not reproduce, distribute, or create derivative works from our content without permission",
        "User-generated content remains your property, but you grant us license to use it on our platform",
        "Our trademarks, logos, and brand elements may not be used without written permission",
        "We respect intellectual property rights and expect our users to do the same"
      ]
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: [
        "Course fees are clearly displayed and must be paid before accessing paid content",
        "All payments are processed securely through our certified payment processors",
        "Refunds are available within 30 days of purchase if you're not satisfied with a course",
        "Subscription fees are billed in advance and automatically renewed unless cancelled",
        "Price changes will be communicated at least 30 days in advance",
        "Failed payments may result in suspension of access to paid features"
      ]
    },
    {
      title: "Code of Conduct",
      icon: Users,
      content: [
        "Treat all community members, instructors, and staff with respect and professionalism",
        "Do not share inappropriate, offensive, or discriminatory content",
        "Respect the learning environment and avoid disrupting classes or discussions",
        "Do not spam, solicit, or promote unrelated products or services",
        "Report any violations of community guidelines to our support team",
        "Violations may result in warnings, content removal, or account termination"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl opacity-90 mb-4">
            Please read these terms carefully before using KuzaSkills platform and services.
          </p>
          <p className="text-sm opacity-80">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
              <CardDescription className="text-base">
                Welcome to KuzaSkills! These Terms of Service ("Terms") govern your use of our website, mobile application, 
                USSD platform, and all related services (collectively, the "Service") operated by KuzaSkills Limited.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Important Notice</h4>
                    <p className="text-blue-800 text-sm">
                      By accessing or using our Service, you agree to be bound by these Terms. If you disagree with 
                      any part of these terms, then you may not access the Service.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                These Terms apply to all visitors, users, and others who access or use the Service. Please read these 
                Terms carefully before using our Service.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
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

export default Terms;
