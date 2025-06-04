
import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useSampleCommunityData } from './useSampleCommunityData';

interface ForumTopic {
  id: string;
  title: string;
  description?: string;
  category: string;
  post_count?: number;
  is_popular?: boolean;
  created_at: string;
  profiles?: { full_name?: string };
}

interface QAQuestion {
  id: string;
  title: string;
  content?: string;
  tags?: string[];
  votes?: number;
  views?: number;
  is_answered?: boolean;
  created_at: string;
  profiles?: { full_name?: string };
  qa_answers?: any[];
}

interface SuccessStory {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  likes?: number;
  comments_count?: number;
  created_at: string;
  profiles?: { full_name?: string };
}

interface JobListing {
  id: string;
  title: string;
  description: string;
  platform: string;
  difficulty: string;
  budget: string;
  skills?: string[];
  applicants_count?: number;
  created_at: string;
  profiles?: { full_name?: string };
}

export const useCommunity = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const sampleData = useSampleCommunityData();

  // Forum Topics
  const { data: forumTopicsData, isLoading: loadingTopics } = useQuery({
    queryKey: ['forum-topics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_topics')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.log('Error fetching forum topics:', error);
        return [];
      }
      return data || [];
    }
  });

  // Transform and combine real data with sample data
  const forumTopics: ForumTopic[] = forumTopicsData && forumTopicsData.length > 0 
    ? forumTopicsData.map(topic => ({
        ...topic,
        profiles: undefined // Will be populated later when we have proper user data
      }))
    : sampleData.forumTopics;

  // Q&A Questions
  const { data: qaQuestionsData, isLoading: loadingQuestions } = useQuery({
    queryKey: ['qa-questions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_questions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.log('Error fetching QA questions:', error);
        return [];
      }
      return data || [];
    }
  });

  const qaQuestions: QAQuestion[] = qaQuestionsData && qaQuestionsData.length > 0 
    ? qaQuestionsData.map(question => ({
        ...question,
        profiles: undefined // Will be populated later when we have proper user data
      }))
    : sampleData.qaQuestions;

  // Success Stories
  const { data: successStoriesData, isLoading: loadingStories } = useQuery({
    queryKey: ['success-stories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.log('Error fetching success stories:', error);
        return [];
      }
      return data || [];
    }
  });

  const successStories: SuccessStory[] = successStoriesData && successStoriesData.length > 0 
    ? successStoriesData.map(story => ({
        ...story,
        profiles: undefined // Will be populated later when we have proper user data
      }))
    : sampleData.successStories;

  // Job Listings
  const { data: jobListingsData, isLoading: loadingJobs } = useQuery({
    queryKey: ['job-listings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_listings')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.log('Error fetching job listings:', error);
        return [];
      }
      return data || [];
    }
  });

  const jobListings: JobListing[] = jobListingsData && jobListingsData.length > 0 
    ? jobListingsData.map(job => ({
        ...job,
        profiles: undefined // Will be populated later when we have proper user data
      }))
    : sampleData.jobListings;

  // Mutations
  const createForumTopic = useMutation({
    mutationFn: async (data: { title: string; description: string; category: string }) => {
      if (!user) throw new Error('User not authenticated');
      
      const { data: result, error } = await supabase
        .from('forum_topics')
        .insert({
          ...data,
          user_id: user.id
        })
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['forum-topics'] });
      toast({
        title: "Success",
        description: "Forum topic created successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create forum topic. Please try again.",
        variant: "destructive"
      });
      console.error('Error creating forum topic:', error);
    }
  });

  const createQuestion = useMutation({
    mutationFn: async (data: { title: string; content: string; tags: string[] }) => {
      if (!user) throw new Error('User not authenticated');
      
      const { data: result, error } = await supabase
        .from('qa_questions')
        .insert({
          ...data,
          user_id: user.id
        })
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-questions'] });
      toast({
        title: "Success",
        description: "Question posted successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to post question. Please try again.",
        variant: "destructive"
      });
      console.error('Error creating question:', error);
    }
  });

  const createSuccessStory = useMutation({
    mutationFn: async (data: { title: string; content: string; excerpt: string; category: string }) => {
      if (!user) throw new Error('User not authenticated');
      
      const { data: result, error } = await supabase
        .from('success_stories')
        .insert({
          ...data,
          user_id: user.id
        })
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['success-stories'] });
      toast({
        title: "Success",
        description: "Success story shared successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to share success story. Please try again.",
        variant: "destructive"
      });
      console.error('Error creating success story:', error);
    }
  });

  const toggleVote = useMutation({
    mutationFn: async (data: { targetType: string; targetId: string; voteType: string }) => {
      if (!user) throw new Error('User not authenticated');
      
      // Check if user already voted
      const { data: existingVote } = await supabase
        .from('votes')
        .select('*')
        .eq('user_id', user.id)
        .eq('target_type', data.targetType)
        .eq('target_id', data.targetId)
        .single();

      if (existingVote) {
        // Remove existing vote
        const { error } = await supabase
          .from('votes')
          .delete()
          .eq('id', existingVote.id);
        if (error) throw error;
      } else {
        // Add new vote
        const { error } = await supabase
          .from('votes')
          .insert({
            user_id: user.id,
            target_type: data.targetType,
            target_id: data.targetId,
            vote_type: data.voteType
          });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['qa-questions'] });
      queryClient.invalidateQueries({ queryKey: ['success-stories'] });
    }
  });

  return {
    // Data
    forumTopics,
    qaQuestions,
    successStories,
    jobListings,
    
    // Loading states
    loadingTopics,
    loadingQuestions,
    loadingStories,
    loadingJobs,
    
    // Mutations
    createForumTopic,
    createQuestion,
    createSuccessStory,
    toggleVote,
    
    // Auth
    user
  };
};
