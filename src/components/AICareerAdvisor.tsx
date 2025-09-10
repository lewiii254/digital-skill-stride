import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Bot, Send, Lightbulb, TrendingUp, Target, BookOpen, Users, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CareerAdvice {
  type: 'career-path' | 'skill-gap' | 'opportunity' | 'learning';
  title: string;
  description: string;
  actionItems: string[];
  priority: 'high' | 'medium' | 'low';
  timeframe: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
  advice?: CareerAdvice[];
}

export const AICareerAdvisor = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      message: "Hello! I'm your AI Career Advisor. I can help you with career planning, skill development, and finding the right opportunities. What would you like to discuss today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const sampleAdvice: CareerAdvice[] = [
    {
      type: 'skill-gap',
      title: 'Develop React Skills',
      description: 'Based on current job market trends, React development skills are in high demand and align with your JavaScript background.',
      actionItems: [
        'Complete our React Fundamentals course',
        'Build 2-3 portfolio projects using React',
        'Learn React ecosystem tools (Redux, React Router)',
        'Contribute to open source React projects'
      ],
      priority: 'high',
      timeframe: '2-3 months'
    },
    {
      type: 'opportunity',
      title: 'Freelance Frontend Development',
      description: 'With your current skills, you could start taking on freelance projects to build experience and earn income.',
      actionItems: [
        'Create profiles on Upwork and Fiverr',
        'Build a portfolio website showcasing your work',
        'Start with smaller projects to build reviews',
        'Network with local businesses needing web services'
      ],
      priority: 'medium',
      timeframe: '1-2 months'
    },
    {
      type: 'career-path',
      title: 'Full Stack Development Path',
      description: 'Consider expanding to backend technologies to become a full-stack developer, increasing your market value.',
      actionItems: [
        'Learn Node.js and Express.js',
        'Understand database concepts (MongoDB, PostgreSQL)',
        'Practice API development and integration',
        'Build full-stack applications for your portfolio'
      ],
      priority: 'medium',
      timeframe: '4-6 months'
    }
  ];

  const generateAIResponse = (userInput: string): { message: string; advice?: CareerAdvice[] } => {
    const input = userInput.toLowerCase();
    
    if (input.includes('skill') || input.includes('learn') || input.includes('improve')) {
      return {
        message: "Based on your query about skills, I've analyzed the current job market and your profile. Here are my recommendations for skill development:",
        advice: [sampleAdvice[0], sampleAdvice[2]]
      };
    }
    
    if (input.includes('job') || input.includes('career') || input.includes('opportunity')) {
      return {
        message: "I've identified several career opportunities that match your profile and goals. Here's what I recommend:",
        advice: [sampleAdvice[1], sampleAdvice[0]]
      };
    }
    
    if (input.includes('freelance') || input.includes('work') || input.includes('income')) {
      return {
        message: "Freelancing can be a great way to build experience and earn income. Here's my strategic advice:",
        advice: [sampleAdvice[1]]
      };
    }
    
    if (input.includes('portfolio') || input.includes('project')) {
      return {
        message: "A strong portfolio is crucial for your career growth. Here are specific recommendations:",
        advice: [
          {
            type: 'learning',
            title: 'Portfolio Enhancement',
            description: 'Your portfolio should showcase diverse projects that demonstrate your problem-solving abilities.',
            actionItems: [
              'Create a responsive personal website',
              'Include 3-5 diverse projects showing different skills',
              'Add case studies explaining your problem-solving process',
              'Include testimonials and project outcomes'
            ],
            priority: 'high',
            timeframe: '3-4 weeks'
          }
        ]
      };
    }
    
    return {
      message: "I understand you're looking for career guidance. Could you be more specific about what area you'd like help with? For example:\n\n• Skill development and learning paths\n• Job opportunities and career transitions\n• Portfolio and project recommendations\n• Freelancing and income strategies\n• Industry trends and market insights"
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message: aiResponse.message,
        timestamp: new Date(),
        advice: aiResponse.advice
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const getAdviceIcon = (type: string) => {
    switch (type) {
      case 'career-path': return <TrendingUp className="h-4 w-4" />;
      case 'skill-gap': return <BookOpen className="h-4 w-4" />;
      case 'opportunity': return <Briefcase className="h-4 w-4" />;
      case 'learning': return <Target className="h-4 w-4" />;
      default: return <Lightbulb className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-0 shadow-lg h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="h-5 w-5 mr-2 text-blue-600" />
          AI Career Advisor
        </CardTitle>
        <CardDescription>
          Get personalized career guidance and strategic recommendations
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                
                {msg.advice && (
                  <div className="mt-4 space-y-3">
                    {msg.advice.map((advice, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getAdviceIcon(advice.type)}
                            <h4 className="font-semibold text-gray-900">{advice.title}</h4>
                          </div>
                          <div className="flex space-x-2">
                            <Badge className={getPriorityColor(advice.priority)} variant="secondary">
                              {advice.priority} priority
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {advice.timeframe}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{advice.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="text-xs font-medium text-gray-700">Action Items:</h5>
                          <ul className="space-y-1">
                            {advice.actionItems.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-xs text-gray-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-xs opacity-70 mt-2">
                  {msg.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input Area */}
        <div className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about career paths, skills to learn, job opportunities, or any career-related question..."
            className="flex-1 resize-none"
            rows={2}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            size="sm"
            className="self-end"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};