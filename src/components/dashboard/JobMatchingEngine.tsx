import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Briefcase, Star, ExternalLink, Filter, TrendingUp, MapPin, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  matchScore: number;
  skills: string[];
  postedDate: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
  platform: 'Upwork' | 'Fiverr' | 'Freelancer' | 'LinkedIn' | 'Direct';
}

export const JobMatchingEngine = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('match');

  const jobMatches: JobMatch[] = [
    {
      id: '1',
      title: 'React Developer for E-commerce Platform',
      company: 'TechStart Inc.',
      location: 'San Francisco, CA',
      type: 'Remote',
      salary: '$5,000 - $8,000',
      matchScore: 95,
      skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      postedDate: '2 hours ago',
      description: 'Looking for an experienced React developer to build modern e-commerce features...',
      urgency: 'high',
      platform: 'Upwork'
    },
    {
      id: '2',
      title: 'Digital Marketing Specialist',
      company: 'Marketing Pro LLC',
      location: 'New York, NY',
      type: 'Hybrid',
      salary: '$3,500 - $5,500',
      matchScore: 87,
      skills: ['SEO', 'Google Ads', 'Content Marketing', 'Analytics'],
      postedDate: '5 hours ago',
      description: 'Seeking a creative digital marketer to manage campaigns across multiple channels...',
      urgency: 'medium',
      platform: 'LinkedIn'
    },
    {
      id: '3',
      title: 'Content Writer for Tech Blog',
      company: 'BlogCorp',
      location: 'Austin, TX',
      type: 'Remote',
      salary: '$2,000 - $3,500',
      matchScore: 78,
      skills: ['Content Writing', 'SEO', 'Research', 'WordPress'],
      postedDate: '1 day ago',
      description: 'Write engaging tech articles and tutorials for our growing audience...',
      urgency: 'low',
      platform: 'Freelancer'
    },
    {
      id: '4',
      title: 'UI/UX Designer for Mobile App',
      company: 'AppDesign Studio',
      location: 'Los Angeles, CA',
      type: 'Remote',
      salary: '$4,000 - $6,500',
      matchScore: 82,
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      postedDate: '3 hours ago',
      description: 'Design intuitive interfaces for our revolutionary mobile application...',
      urgency: 'high',
      platform: 'Fiverr'
    }
  ];

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Upwork': return 'bg-green-100 text-green-800';
      case 'Fiverr': return 'bg-blue-100 text-blue-800';
      case 'Freelancer': return 'bg-purple-100 text-purple-800';
      case 'LinkedIn': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredJobs = jobMatches.filter(job => {
    if (filter === 'all') return true;
    if (filter === 'high-match') return job.matchScore >= 85;
    if (filter === 'remote') return job.type === 'Remote';
    if (filter === 'urgent') return job.urgency === 'high';
    return true;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'match') return b.matchScore - a.matchScore;
    if (sortBy === 'salary') return parseInt(b.salary.replace(/[^0-9]/g, '')) - parseInt(a.salary.replace(/[^0-9]/g, ''));
    if (sortBy === 'recent') return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    return 0;
  });

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              AI Job Matching Engine
            </CardTitle>
            <CardDescription>
              Personalized job recommendations based on your skills and preferences
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-blue-600">
            {filteredJobs.length} matches found
          </Badge>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="high-match">High Match (85%+)</SelectItem>
              <SelectItem value="remote">Remote Only</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Match Score</SelectItem>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {sortedJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <Badge className={getUrgencyColor(job.urgency)} variant="secondary">
                    {job.urgency} priority
                  </Badge>
                  <Badge className={getPlatformColor(job.platform)} variant="secondary">
                    {job.platform}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.postedDate}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="text-right ml-4">
                <div className={`text-2xl font-bold ${getMatchColor(job.matchScore)} mb-1`}>
                  {job.matchScore}%
                </div>
                <div className="text-xs text-gray-500 mb-2">Match Score</div>
                <Progress value={job.matchScore} className="w-20 mb-2" />
                <div className="text-sm font-semibold text-green-600">{job.salary}</div>
                <div className="text-xs text-gray-500">{job.type}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  Perfect match for your profile
                </span>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Save Job
                </Button>
                <Button size="sm" className="flex items-center">
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-4">
          <Button variant="outline" className="w-full">
            Load More Opportunities
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};