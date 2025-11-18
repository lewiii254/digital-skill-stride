
import { useState } from "react";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, User, Briefcase, BookOpen, Target } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const AICoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI Career Coach. I'm here to help you navigate your digital skills journey. What would you like to know about building a career in the digital space?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "How do I start as a Virtual Assistant?",
    "What skills do I need for digital marketing?",
    "How to build a portfolio for freelancing?",
    "Which platform is best for beginners?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("virtual assistant") || lowerQuestion.includes("va")) {
      return "Great choice! To start as a Virtual Assistant: 1) Develop core skills like email management, scheduling, and basic admin tasks. 2) Learn tools like Google Workspace, Slack, and project management platforms. 3) Create a portfolio showcasing your organizational skills. 4) Start with platforms like Belay, Time Etc, or Upwork. Would you like specific course recommendations?";
    }
    
    if (lowerQuestion.includes("digital marketing")) {
      return "Digital marketing is a fantastic field! Key skills include: 1) Social media management 2) Content creation 3) Email marketing 4) Basic analytics 5) Paid advertising basics. I recommend starting with our Social Media Marketing course and then progressing to Email Marketing. Which area interests you most?";
    }
    
    if (lowerQuestion.includes("portfolio")) {
      return "Building a strong portfolio is crucial! Here's how: 1) Create sample work even before getting clients 2) Document your process and results 3) Use platforms like Behance, LinkedIn, or create a simple website 4) Include testimonials and case studies 5) Keep it updated regularly. What type of work will your portfolio showcase?";
    }
    
    return "That's a great question! Based on your interests, I'd recommend exploring our course catalog and connecting with a mentor who specializes in that area. Each career path has unique requirements, but the key is to start with foundational skills and build from there. What specific area are you most interested in pursuing?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <LMSLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Bot className="mr-3 h-8 w-8 text-blue-600" />
            AI Career Coach
          </h1>
          <p className="text-gray-600">Get personalized guidance for your digital career journey</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
                Career Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Get help choosing the right digital career path</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                Learning Path
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Discover personalized course recommendations</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Target className="mr-2 h-5 w-5 text-purple-600" />
                Goal Setting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Set and track your professional goals</p>
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              Chat with AI Coach
            </CardTitle>
            <CardDescription>
              Ask questions about digital skills, career paths, and learning strategies
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-gray-900 text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot ? (
                        <Bot className="h-4 w-4 mt-1 text-blue-600" />
                      ) : (
                        <User className="h-4 w-4 mt-1" />
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about digital careers..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LMSLayout>
  );
};

export default AICoach;
