
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Mail, Phone } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Learning progress and course completion data",
        "Payment information for course purchases and subscriptions",
        "Communication preferences and support interactions",
        "Device information and usage analytics to improve our platform",
        "USSD session data for mobile learning platform optimization"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "Provide and improve our educational services and platform features",
        "Process payments and manage your account and subscriptions",
        "Send course updates, learning reminders, and important announcements",
        "Provide customer support and respond to your inquiries",
        "Analyze platform usage to enhance user experience and educational outcomes",
        "Comply with legal obligations and protect against fraud"
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Course instructors and mentors may access your learning progress for educational purposes",
        "Payment processors receive necessary information to process transactions securely",
        "We may share aggregated, non-personally identifiable data for research purposes",
        "Legal authorities may receive information when required by law or to protect our users",
        "Service providers who assist us in operating our platform under strict confidentiality agreements"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We use industry-standard encryption to protect your data in transit and at rest",
        "Regular security audits and monitoring to detect and prevent unauthorized access",
        "Secure payment processing through PCI-compliant payment processors",
        "Employee access to personal data is limited and governed by strict privacy policies",
        "Regular backups and disaster recovery procedures to protect against data loss",
        "Two-factor authentication available for enhanced account security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <CardTitle className="text-2xl">Our Commitment to Your Privacy</CardTitle>
              <CardDescription className="text-base">
                At KuzaSkills, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                platform, including our web application, mobile app, and USSD-based learning system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By using KuzaSkills, you agree to the collection and use of information in accordance with this policy. 
                We encourage you to read this policy carefully and contact us if you have any questions.
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

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Contact Us</CardTitle>
              <CardDescription>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-600">privacy@kuzaskills.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-600">+254 700 123 456</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
