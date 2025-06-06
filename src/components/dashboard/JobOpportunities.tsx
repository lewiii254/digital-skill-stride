
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";

interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  budget: string;
  duration: string;
  skills: string[];
  postedAt: string;
  urgency: 'low' | 'medium' | 'high';
}

export const JobOpportunities = () => {
  const jobs: JobOpportunity[] = [
    {
      id: '1',
      title: 'Content Writer for Tech Blog',
      company: 'TechStartup Kenya',
      location: 'Nairobi',
      type: 'Remote',
      budget: 'KES 25,000 - 35,000',
      duration: '3 months',
      skills: ['Content Writing', 'SEO', 'Tech Knowledge'],
      postedAt: '2 hours ago',
      urgency: 'high'
    },
    {
      id: '2',
      title: 'Digital Marketing Specialist',
      company: 'E-commerce Solutions',
      location: 'Mombasa',
      type: 'Hybrid',
      budget: 'KES 40,000 - 50,000',
      duration: '6 months',
      skills: ['Facebook Ads', 'Google Ads', 'Analytics'],
      postedAt: '1 day ago',
      urgency: 'medium'
    },
    {
      id: '3',
      title: 'Virtual Assistant',
      company: 'International Consultant',
      location: 'Global',
      type: 'Remote',
      budget: 'USD 5 - 8/hour',
      duration: 'Long-term',
      skills: ['Admin Support', 'Email Management', 'CRM'],
      postedAt: '3 days ago',
      urgency: 'low'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[urgency as keyof typeof colors];
  };

  const getTypeIcon = (type: string) => {
    if (type === 'Remote') return '🌍';
    if (type === 'Hybrid') return '🏢';
    return '📍';
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
              Job Opportunities
            </CardTitle>
            <CardDescription>Curated opportunities matching your skills</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            View All Jobs
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-sm">{job.title}</h4>
                  <Badge className={getUrgencyColor(job.urgency)} variant="secondary">
                    {job.urgency} priority
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                  <div className="flex items-center">
                    <span className="mr-1">{getTypeIcon(job.type)}</span>
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {job.duration}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-sm text-green-600">{job.budget}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className="text-xs text-gray-500">{job.postedAt}</span>
                <Button size="sm">
                  Apply Now
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
