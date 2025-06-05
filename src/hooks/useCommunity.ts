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
  user_id?: string;
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
  user_id?: string;
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

// Sample forum topics related to digital entrepreneurship and USSD
const sampleForumTopics: ForumTopic[] = [
  {
    id: 'sample-1',
    title: 'Best USSD Codes for Freelancers in Kenya',
    description: 'Share your favorite USSD codes that help with freelancing, banking, and business operations.',
    category: 'Platform Tips',
    post_count: 15,
    is_popular: true,
    created_at: '2024-01-10T10:00:00Z',
    user_id: 'sample-user-1',
    profiles: { full_name: 'John Kamau' }
  },
  {
    id: 'sample-2',
    title: 'How to Get Started with Upwork in Africa',
    description: 'Tips and tricks for African freelancers to succeed on Upwork platform.',
    category: 'Freelancing',
    post_count: 23,
    is_popular: true,
    created_at: '2024-01-08T14:30:00Z',
    user_id: 'sample-user-2',
    profiles: { full_name: 'Grace Wanjiku' }
  },
  {
    id: 'sample-3',
    title: 'Mobile Money Integration for Small Businesses',
    description: 'Discuss how to integrate M-Pesa and other mobile money services into your business.',
    category: 'E-commerce',
    post_count: 8,
    created_at: '2024-01-12T09:15:00Z',
    user_id: 'sample-user-3',
    profiles: { full_name: 'Peter Ochieng' }
  },
  {
    id: 'sample-4',
    title: 'Building Your First Website: A Beginner\'s Guide',
    description: 'Step-by-step guide for beginners to create their first professional website.',
    category: 'Skills',
    post_count: 31,
    is_popular: true,
    created_at: '2024-01-05T16:45:00Z',
    user_id: 'sample-user-4',
    profiles: { full_name: 'Mary Akinyi' }
  },
  {
    id: 'sample-5',
    title: 'Digital Marketing on a Budget',
    description: 'Cost-effective digital marketing strategies for small businesses and startups.',
    category: 'Career Advice',
    post_count: 12,
    created_at: '2024-01-14T11:20:00Z',
    user_id: 'sample-user-5',
    profiles: { full_name: 'David Mwangi' }
  }
];

// Sample Q&A questions
const sampleQAQuestions: QAQuestion[] = [
  {
    id: 'qa-sample-1',
    title: 'How do I access freelance jobs via USSD without internet?',
    content: 'I live in a rural area with poor internet. Are there ways to find and apply for jobs using USSD codes?',
    tags: ['USSD', 'freelancing', 'offline'],
    votes: 12,
    views: 156,
    is_answered: true,
    created_at: '2024-01-11T08:30:00Z',
    user_id: 'qa-user-1',
    profiles: { full_name: 'James Kiprotich' },
    qa_answers: [{}]
  },
  {
    id: 'qa-sample-2',
    title: 'Which mobile money service is best for receiving international payments?',
    content: 'I work with clients from the US and Europe. What\'s the most reliable way to receive payments in Kenya?',
    tags: ['payments', 'international', 'mobile-money'],
    votes: 8,
    views: 89,
    is_answered: false,
    created_at: '2024-01-13T15:45:00Z',
    user_id: 'qa-user-2',
    profiles: { full_name: 'Sarah Njeri' },
    qa_answers: []
  },
  {
    id: 'qa-sample-3',
    title: 'Best laptop specifications for graphic design work under 50K?',
    content: 'I want to start offering graphic design services. What laptop specs should I look for within my budget?',
    tags: ['equipment', 'graphic-design', 'budget'],
    votes: 15,
    views: 203,
    is_answered: true,
    created_at: '2024-01-09T12:15:00Z',
    user_id: 'qa-user-3',
    profiles: { full_name: 'Michael Otieno' },
    qa_answers: [{}]
  },
  {
    id: 'qa-sample-4',
    title: 'How to handle taxes as a freelancer in Kenya?',
    content: 'I\'m earning from freelancing. What are my tax obligations and how do I file returns?',
    tags: ['taxes', 'legal', 'freelancing'],
    votes: 20,
    views: 178,
    is_answered: true,
    created_at: '2024-01-07T10:30:00Z',
    user_id: 'qa-user-4',
    profiles: { full_name: 'Ruth Muthoni' },
    qa_answers: [{}]
  }
];

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
    ? [...forumTopicsData.map(topic => ({
        ...topic,
        profiles: undefined
      })), ...sampleForumTopics]
    : [...sampleData.forumTopics, ...sampleForumTopics];

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
    ? [...qaQuestionsData.map(question => ({
        ...question,
        profiles: undefined
      })), ...sampleQAQuestions]
    : [...sampleData.qaQuestions, ...sampleQAQuestions];

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
        profiles: undefined
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
        profiles: undefined
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

  const deleteForumTopic = useMutation({
    mutationFn: async (topicId: string) => {
      if (!user) throw new Error('User not authenticated');
      
      const { error } = await supabase
        .from('forum_topics')
        .delete()
        .eq('id', topicId)
        .eq('user_id', user.id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['forum-topics'] });
      toast({
        title: "Success",
        description: "Forum topic deleted successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete forum topic. Please try again.",
        variant: "destructive"
      });
      console.error('Error deleting forum topic:', error);
    }
  });

  const deleteQuestion = useMutation({
    mutationFn: async (questionId: string) => {
      if (!user) throw new Error('User not authenticated');
      
      const { error } = await supabase
        .from('qa_questions')
        .delete()
        .eq('id', questionId)
        .eq('user_id', user.id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['qa-questions'] });
      toast({
        title: "Success",
        description: "Question deleted successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete question. Please try again.",
        variant: "destructive"
      });
      console.error('Error deleting question:', error);
    }
  });

  const toggleVote = useMutation({
    mutationFn: async (data: { targetType: string; targetId: string; voteType: string }) => {
      if (!user) throw new Error('User not authenticated');
      
      const { data: existingVote } = await supabase
        .from('votes')
        .select('*')
        .eq('user_id', user.id)
        .eq('target_type', data.targetType)
        .eq('target_id', data.targetId)
        .single();

      if (existingVote) {
        const { error } = await supabase
          .from('votes')
          .delete()
          .eq('id', existingVote.id);
        if (error) throw error;
      } else {
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
    deleteForumTopic,
    deleteQuestion,
    toggleVote,
    
    // Auth
    user
  };
};
