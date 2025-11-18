import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  ThumbsUp, 
  Clock, 
  Users, 
  Search,
  Heart,
  Briefcase,
  ExternalLink,
  DollarSign,
  Eye,
  Smartphone,
  Star,
  TrendingUp,
  Trash2
} from "lucide-react";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Footer } from "@/components/Footer";
import { CreateQuestionModal } from "@/components/community/CreateQuestionModal";
import { CreateStoryModal } from "@/components/community/CreateStoryModal";
import { USSDJobBoard } from "@/components/community/USSDJobBoard";
import { CommunityStats } from "@/components/community/CommunityStats";
import { ForumTopicsSection } from "@/components/community/ForumTopicsSection";
import { useCommunity } from "@/hooks/useCommunity";
import { useAuth } from "@/contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const {
    forumTopics,
    qaQuestions,
    successStories,
    jobListings,
    loadingTopics,
    loadingQuestions,
    loadingStories,
    loadingJobs,
    createForumTopic,
    createQuestion,
    createSuccessStory,
    deleteForumTopic,
    deleteQuestion,
    toggleVote
  } = useCommunity();

  const handleCreateTopic = (data: { title: string; description: string; category: string }) => {
    createForumTopic.mutate(data);
  };

  const handleCreateQuestion = (data: { title: string; content: string; tags: string[] }) => {
    createQuestion.mutate(data);
  };

  const handleCreateStory = (data: { title: string; content: string; excerpt: string; category: string }) => {
    createSuccessStory.mutate(data);
  };

  const handleDeleteTopic = (topicId: string) => {
    if (window.confirm('Are you sure you want to delete this topic?')) {
      deleteForumTopic.mutate(topicId);
    }
  };

  const handleDeleteQuestion = (questionId: string) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      deleteQuestion.mutate(questionId);
    }
  };

  const handleVote = (targetType: string, targetId: string, voteType: string) => {
    if (!user) return;
    toggleVote.mutate({ targetType, targetId, voteType });
  };

  const filteredTopics = forumTopics?.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredQuestions = qaQuestions?.filter(question =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStories = successStories?.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredJobs = jobListings?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <LMSLayout>
      <div className="space-y-6">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-5xl font-bold mb-2">Community Hub</h1>
            <TrendingUp className="h-10 w-10 text-blue-600 ml-3" />
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Connect, learn, and find opportunities with fellow digital entrepreneurs
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold text-lg">Featured: USSD Job Board</span>
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-gray-700">
              📱 Discover job opportunities accessible via USSD codes - no internet required!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <CommunityStats 
          forumTopicsCount={forumTopics?.length || 0}
          qaQuestionsCount={qaQuestions?.length || 0}
          jobListingsCount={jobListings?.length || 0}
          successStoriesCount={successStories?.length || 0}
        />

        {/* Main Content Tabs - USSD Jobs as default */}
        <Tabs defaultValue="ussd-jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="ussd-jobs" className="flex items-center gap-1 font-semibold">
              <Smartphone className="h-4 w-4" />
              📱 USSD Jobs
              <Badge variant="secondary" className="ml-1 bg-green-100 text-green-800">Hot</Badge>
            </TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
            <TabsTrigger value="jobs">Job Board</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
          </TabsList>

          {/* USSD Job Board Tab - Enhanced */}
          <TabsContent value="ussd-jobs">
            <USSDJobBoard />
          </TabsContent>

          {/* Forums Tab */}
          <TabsContent value="forums">
            <ForumTopicsSection 
              topics={forumTopics || []}
              filteredTopics={filteredTopics || []}
              loading={loadingTopics}
              user={user}
              onCreateTopic={handleCreateTopic}
              onDeleteTopic={handleDeleteTopic}
              isCreating={createForumTopic.isPending}
              isDeleting={deleteForumTopic.isPending}
            />
          </TabsContent>

          {/* Q&A Tab */}
          <TabsContent value="qa">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Questions & Answers</h2>
                {user && (
                  <CreateQuestionModal
                    onSubmit={handleCreateQuestion}
                    isLoading={createQuestion.isPending}
                  />
                )}
              </div>
              
              {loadingQuestions ? (
                renderLoadingCards(3)
              ) : filteredQuestions && filteredQuestions.length > 0 ? (
                filteredQuestions.map((question) => (
                  <Card key={question.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center space-y-2 min-w-[80px]">
                          <div className="text-center">
                            <button
                              onClick={() => handleVote('question', question.id, 'up')}
                              className="block text-lg font-semibold hover:text-blue-600"
                              disabled={!user}
                            >
                              {question.votes || 0}
                            </button>
                            <div className="text-xs text-gray-500">votes</div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs ${
                            question.is_answered 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {(question as any).qa_answers?.length || 0} answers
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium">{question.views || 0}</div>
                            <div className="text-xs text-gray-500">views</div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg hover:text-blue-600">
                              {question.title}
                            </h3>
                            {user && user.id === question.user_id && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteQuestion(question.id);
                                }}
                                disabled={deleteQuestion.isPending}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          {question.tags && question.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {question.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Asked by {(question as any).profiles?.full_name || 'Anonymous'}</span>
                            <span>{formatDistanceToNow(new Date(question.created_at), { addSuffix: true })}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No questions found. Ask the first question!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Job Board Tab */}
          <TabsContent value="jobs">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Beginner-Friendly Jobs</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Filter by Platform</Button>
                  <Button variant="outline" size="sm">Filter by Skill Level</Button>
                </div>
              </div>
              
              {loadingJobs ? (
                renderLoadingCards(3)
              ) : filteredJobs && filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <Badge variant="outline">{job.platform}</Badge>
                            <Badge variant="secondary" className={
                              job.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }>
                              {job.difficulty}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{job.description}</p>
                          {job.skills && job.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {job.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              {job.budget}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {job.applicants_count || 0} applicants
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="ml-4">
                          Apply Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No job listings found. Check back later for new opportunities!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="stories">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Success Stories</h2>
                {user && (
                  <CreateStoryModal
                    onSubmit={handleCreateStory}
                    isLoading={createSuccessStory.isPending}
                  />
                )}
              </div>
              
              {loadingStories ? (
                renderLoadingCards(3)
              ) : filteredStories && filteredStories.length > 0 ? (
                filteredStories.map((story) => (
                  <Card key={story.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{(story as any).profiles?.full_name?.[0] || 'A'}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg hover:text-blue-600">
                              {story.title}
                            </h3>
                            <Badge variant="outline">{story.category}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">by {(story as any).profiles?.full_name || 'Anonymous'}</p>
                          <p className="text-gray-700 mb-4">{story.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <button 
                                className="flex items-center gap-1 hover:text-red-500"
                                onClick={() => handleVote('success_story', story.id, 'like')}
                                disabled={!user}
                              >
                                <Heart className="h-4 w-4" />
                                {story.likes || 0}
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-500">
                                <MessageSquare className="h-4 w-4" />
                                {story.comments_count || 0}
                              </button>
                            </div>
                            <span className="text-sm text-gray-500">
                              {formatDistanceToNow(new Date(story.created_at), { addSuffix: true })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No success stories found. Share your journey to inspire others!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Community;
