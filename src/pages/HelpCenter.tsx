
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, MessageCircle, Phone, Mail, HelpCircle, Users, CreditCard, Settings, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const HelpCenter = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Learn the basics of using KuzaSkills",
      articles: 15
    },
    {
      title: "Courses & Learning",
      icon: Users,
      description: "Everything about our courses and learning platform",
      articles: 23
    },
    {
      title: "Payments & Billing",
      icon: CreditCard,
      description: "Payment methods, billing, and refund policies",
      articles: 12
    },
    {
      title: "Technical Support",
      icon: Settings,
      description: "Technical issues and troubleshooting guides",
      articles: 18
    }
  ];

  const faqs = [
    {
      question: "How do I access courses through USSD?",
      answer: "Simply dial *123# from any mobile phone. You'll see a menu with available courses. Follow the prompts to select a course and start learning. No internet connection is required, and you can progress through lessons step by step."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa for Kenyan users, as well as major credit cards (Visa, Mastercard) and PayPal for international students. All payments are secure and processed through encrypted channels."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid courses. If you're not satisfied with your learning experience, contact our support team within 30 days of purchase for a full refund."
    },
    {
      question: "How does the mentorship program work?",
      answer: "Our mentorship program connects you with industry experts who have proven success in their fields. You can book 1-on-1 sessions, join group coaching calls, and get personalized feedback on your work and career development."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are industry-recognized and showcase the practical skills you've gained. Many of our graduates have successfully used these certificates to land jobs and freelance opportunities."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Course duration varies depending on the subject and your learning pace. Most courses can be completed in 4-8 weeks with 1-2 hours of daily study. You can learn at your own pace and access materials 24/7."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Find answers to your questions and get the support you need
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, FAQs, or topics..."
              className="pl-12 pr-4 py-4 text-lg rounded-lg border-0 focus:ring-2 focus:ring-white bg-white text-gray-900"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <category.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-500">{category.articles} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Still Need Help?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="text-center">
                <Ticket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="dark:text-white">Support Ticket</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Submit and track your support requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/support-tickets">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Open Ticket
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="dark:text-white">Live Chat</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Get instant help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="dark:text-white">Email Support</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Send us a detailed message about your issue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900">
                  Send Email
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">hello@kuzaskills.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="dark:text-white">Phone Support</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Speak directly with our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900">
                  Call Now
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">+254 700 123 456</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
