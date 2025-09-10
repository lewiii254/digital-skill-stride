import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, Brain, Trophy, ArrowRight, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface SkillResult {
  category: string;
  score: number;
  level: string;
  recommendations: string[];
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: 'JavaScript',
    question: 'What is the correct way to declare a variable in JavaScript?',
    options: ['variable myVar = 5;', 'var myVar = 5;', 'v myVar = 5;', 'declare myVar = 5;'],
    correct: 1,
    difficulty: 'beginner'
  },
  {
    id: 2,
    category: 'React',
    question: 'What is JSX in React?',
    options: [
      'A JavaScript library',
      'A syntax extension that allows HTML-like code in JavaScript',
      'A database query language',
      'A CSS framework'
    ],
    correct: 1,
    difficulty: 'intermediate'
  },
  {
    id: 3,
    category: 'Digital Marketing',
    question: 'What does CTR stand for in digital marketing?',
    options: ['Cost To Revenue', 'Click Through Rate', 'Customer Tracking Report', 'Content Target Reach'],
    correct: 1,
    difficulty: 'beginner'
  },
  {
    id: 4,
    category: 'SEO',
    question: 'Which factor is most important for on-page SEO?',
    options: ['Backlinks', 'Title tags and meta descriptions', 'Social media shares', 'Website speed only'],
    correct: 1,
    difficulty: 'intermediate'
  },
  {
    id: 5,
    category: 'Content Writing',
    question: 'What is the ideal length for a blog post title for SEO?',
    options: ['10-20 characters', '30-60 characters', '70-100 characters', 'Over 100 characters'],
    correct: 1,
    difficulty: 'intermediate'
  }
];

export const SkillAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<SkillResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();

  const categories = ['all', ...Array.from(new Set(sampleQuestions.map(q => q.category)))];
  const filteredQuestions = selectedCategory === 'all' 
    ? sampleQuestions 
    : sampleQuestions.filter(q => q.category === selectedCategory);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeAssessment();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeAssessment = () => {
    const categoryScores: {[key: string]: {correct: number, total: number}} = {};
    
    filteredQuestions.forEach(question => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0 };
      }
      categoryScores[question.category].total += 1;
      
      if (selectedAnswers[question.id] === question.correct) {
        categoryScores[question.category].correct += 1;
      }
    });

    const skillResults: SkillResult[] = Object.entries(categoryScores).map(([category, scores]) => {
      const percentage = (scores.correct / scores.total) * 100;
      let level = 'Beginner';
      let recommendations: string[] = [];

      if (percentage >= 80) {
        level = 'Advanced';
        recommendations = [
          `Excellent work in ${category}! Consider mentoring others.`,
          `Explore advanced ${category} frameworks and tools.`,
          `Take on leadership roles in ${category} projects.`
        ];
      } else if (percentage >= 60) {
        level = 'Intermediate';
        recommendations = [
          `Good foundation in ${category}. Focus on practical projects.`,
          `Consider taking an advanced ${category} course.`,
          `Practice building real-world applications.`
        ];
      } else {
        level = 'Beginner';
        recommendations = [
          `Start with basic ${category} fundamentals.`,
          `Take our beginner-friendly ${category} course.`,
          `Practice with guided tutorials and exercises.`
        ];
      }

      return {
        category,
        score: Math.round(percentage),
        level,
        recommendations
      };
    });

    setResults(skillResults);
    setIsComplete(true);
    
    toast({
      title: "Assessment Complete!",
      description: `You've completed the skill assessment. Check your results below.`,
    });
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setIsComplete(false);
    setResults([]);
  };

  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  if (isComplete) {
    return (
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center">
            <Trophy className="h-6 w-6 mr-2 text-yellow-600" />
            Assessment Results
          </CardTitle>
          <CardDescription>
            Here's how you performed across different skill categories
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {results.map((result) => (
            <div key={result.category} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{result.category}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{result.score}%</div>
                  <Badge 
                    variant={result.level === 'Advanced' ? 'default' : result.level === 'Intermediate' ? 'secondary' : 'outline'}
                    className="mt-1"
                  >
                    {result.level}
                  </Badge>
                </div>
              </div>
              
              <Progress value={result.score} className="mb-4" />
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Recommendations:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          <div className="flex space-x-4 pt-4">
            <Button onClick={resetAssessment} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Assessment
            </Button>
            <Button className="flex-1">
              View Recommended Courses
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="text-center py-8">
          <Brain className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No questions available for the selected category.</p>
        </CardContent>
      </Card>
    );
  }

  const currentQ = filteredQuestions[currentQuestion];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-blue-600" />
            Skill Assessment
          </CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} of {filteredQuestions.length}
          </Badge>
        </div>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{currentQ.category}</Badge>
            <Badge 
              variant={currentQ.difficulty === 'advanced' ? 'destructive' : 
                      currentQ.difficulty === 'intermediate' ? 'default' : 'outline'}
            >
              {currentQ.difficulty}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold">{currentQ.question}</h3>
          
          <RadioGroup 
            value={selectedAnswers[currentQ.id]?.toString() || ''} 
            onValueChange={(value) => handleAnswerSelect(currentQ.id, parseInt(value))}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={selectedAnswers[currentQ.id] === undefined}
          >
            {currentQuestion === filteredQuestions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};