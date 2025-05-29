
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock, Award } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const Quiz = ({ title, questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    onComplete(score);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const passed = score >= 70;

    return (
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${
            passed ? "bg-green-100" : "bg-red-100"
          }`}>
            {passed ? (
              <Award className="h-8 w-8 text-green-600" />
            ) : (
              <XCircle className="h-8 w-8 text-red-600" />
            )}
          </div>
          <CardTitle className="text-2xl">
            {passed ? "Congratulations!" : "Keep Learning!"}
          </CardTitle>
          <CardDescription>
            {passed 
              ? "You've successfully completed the quiz"
              : "You need 70% to pass. Review the material and try again."
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-gray-900">{score}%</div>
            <div className="text-gray-600">
              {correctAnswers} out of {questions.length} questions correct
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Review Your Answers:</h3>
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">Question {index + 1}</h4>
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <p className="text-sm mb-3">{question.question}</p>
                  <div className="space-y-2 text-sm">
                    <div className={`p-2 rounded ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                      <strong>Your answer:</strong> {question.options[userAnswer]}
                    </div>
                    {!isCorrect && (
                      <div className="p-2 rounded bg-green-50 border border-green-200">
                        <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                      </div>
                    )}
                    <div className="p-2 rounded bg-blue-50 border border-blue-200">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex space-x-4">
            {!passed && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswers([]);
                  setShowResults(false);
                }}
              >
                Retake Quiz
              </Button>
            )}
            <Button className="flex-1">
              Continue to Next Lesson
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{currentQ.question}</h3>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left border rounded-lg transition-colors ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
