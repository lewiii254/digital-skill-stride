
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, TrendingUp, Trash2 } from "lucide-react";
import { CreateTopicModal } from "./CreateTopicModal";
import { formatDistanceToNow } from "date-fns";

interface ForumTopic {
  id: string;
  title: string;
  description?: string;
  category: string;
  post_count?: number;
  is_popular?: boolean;
  created_at: string;
  user_id?: string;
  profiles?: { full_name?: string };
}

interface ForumTopicsSectionProps {
  topics: ForumTopic[];
  filteredTopics: ForumTopic[];
  loading: boolean;
  user: any;
  onCreateTopic: (data: { title: string; description: string; category: string }) => void;
  onDeleteTopic: (topicId: string) => void;
  isCreating: boolean;
  isDeleting: boolean;
}

export const ForumTopicsSection = ({
  topics,
  filteredTopics,
  loading,
  user,
  onCreateTopic,
  onDeleteTopic,
  isCreating,
  isDeleting
}: ForumTopicsSectionProps) => {
  const renderLoadingCards = (count: number) => (
    Array.from({ length: count }).map((_, i) => (
      <Card key={i}>
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
            <div className="h-16 bg-gray-200 rounded animate-pulse w-full"></div>
          </div>
        </CardContent>
      </Card>
    ))
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Discussion Forums</h2>
        {user && (
          <CreateTopicModal
            onSubmit={onCreateTopic}
            isLoading={isCreating}
          />
        )}
      </div>
      
      {loading ? (
        renderLoadingCards(3)
      ) : filteredTopics && filteredTopics.length > 0 ? (
        filteredTopics.map((topic) => (
          <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{topic.title}</h3>
                    {topic.is_popular && (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{topic.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {topic.post_count || 0} posts
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatDistanceToNow(new Date(topic.created_at), { addSuffix: true })}
                    </div>
                    <Badge variant="outline">{topic.category}</Badge>
                    <span>by {topic.profiles?.full_name || 'Anonymous'}</span>
                  </div>
                </div>
                {user && user.id === topic.user_id && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTopic(topic.id);
                    }}
                    disabled={isDeleting}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No forum topics found. Be the first to start a discussion!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
