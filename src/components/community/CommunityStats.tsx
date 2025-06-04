
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  TrendingUp,
  Smartphone
} from "lucide-react";

interface CommunityStatsProps {
  forumTopicsCount: number;
  qaQuestionsCount: number;
  jobListingsCount: number;
  successStoriesCount: number;
}

export const CommunityStats = ({ 
  forumTopicsCount, 
  qaQuestionsCount, 
  jobListingsCount, 
  successStoriesCount 
}: CommunityStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <Card>
        <CardContent className="p-4 text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">{forumTopicsCount}+</div>
          <div className="text-sm text-gray-600">Forum Topics</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">{qaQuestionsCount}+</div>
          <div className="text-sm text-gray-600">Q&A Questions</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">{jobListingsCount}+</div>
          <div className="text-sm text-gray-600">Job Opportunities</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold">{successStoriesCount}+</div>
          <div className="text-sm text-gray-600">Success Stories</div>
        </CardContent>
      </Card>
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4 text-center">
          <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-700">📱</div>
          <div className="text-sm text-green-700 font-medium">USSD Jobs</div>
        </CardContent>
      </Card>
    </div>
  );
};
