
import { useState, useEffect } from 'react';

// Sample data to make the community look active
const sampleForumTopics = [
  {
    id: 'sample-1',
    title: 'Best platforms for beginners to start freelancing?',
    description: 'I\'m new to digital entrepreneurship and looking for advice on which platforms are most beginner-friendly.',
    category: 'General Discussion',
    post_count: 15,
    is_popular: true,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Sarah M.' }
  },
  {
    id: 'sample-2',
    title: 'How to price your services as a new freelancer',
    description: 'Struggling with setting competitive rates. What strategies have worked for you?',
    category: 'Business Tips',
    post_count: 8,
    is_popular: false,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'John K.' }
  },
  {
    id: 'sample-3',
    title: 'Mobile money integration for small businesses',
    description: 'Discussion about integrating M-Pesa and other mobile payment solutions.',
    category: 'Technology',
    post_count: 23,
    is_popular: true,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Grace W.' }
  }
];

const sampleQAQuestions = [
  {
    id: 'qa-1',
    title: 'How do I get my first client on Upwork?',
    content: 'I\'ve been applying to jobs for weeks but no responses. Any tips?',
    tags: ['upwork', 'freelancing', 'beginners'],
    votes: 12,
    views: 156,
    is_answered: true,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'David L.' },
    qa_answers: [{ id: '1' }, { id: '2' }]
  },
  {
    id: 'qa-2',
    title: 'Best tools for managing multiple social media accounts?',
    content: 'Looking for affordable tools to help manage client social media accounts.',
    tags: ['social-media', 'tools', 'management'],
    votes: 8,
    views: 89,
    is_answered: false,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Mary N.' },
    qa_answers: []
  }
];

const sampleSuccessStories = [
  {
    id: 'story-1',
    title: 'From Zero to 50K Monthly Income in 6 Months',
    excerpt: 'How I built my graphic design business using skills learned here...',
    content: 'Full story about the journey...',
    category: 'Graphic Design',
    likes: 34,
    comments_count: 12,
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Peter M.' }
  },
  {
    id: 'story-2',
    title: 'Building a Successful Virtual Assistant Business',
    excerpt: 'Started with just basic admin skills, now managing 10+ clients...',
    content: 'Full story about VA business...',
    category: 'Virtual Assistant',
    likes: 28,
    comments_count: 8,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Linda A.' }
  }
];

const sampleJobListings = [
  {
    id: 'job-1',
    title: 'Social Media Content Creator - Remote',
    description: 'Looking for a creative individual to manage Instagram and TikTok accounts for small businesses.',
    platform: 'Upwork',
    difficulty: 'Beginner',
    budget: '20,000 - 35,000 KSH/month',
    skills: ['Social Media', 'Content Creation', 'Canva'],
    applicants_count: 5,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'TechStart Kenya' }
  },
  {
    id: 'job-2',
    title: 'Data Entry Specialist',
    description: 'Help digitize business records and maintain customer databases.',
    platform: 'Freelancer',
    difficulty: 'Beginner',
    budget: '15,000 - 25,000 KSH/month',
    skills: ['Excel', 'Data Entry', 'Attention to Detail'],
    applicants_count: 12,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    profiles: { full_name: 'Business Solutions Ltd' }
  }
];

export const useSampleCommunityData = () => {
  const [sampleData, setSampleData] = useState({
    forumTopics: sampleForumTopics,
    qaQuestions: sampleQAQuestions,
    successStories: sampleSuccessStories,
    jobListings: sampleJobListings
  });

  return sampleData;
};
