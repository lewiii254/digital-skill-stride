
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Smartphone, MapPin, DollarSign, Clock, Users, Plus, Signal, Phone, Search, Filter, Star, Briefcase, TrendingUp, CheckCircle } from "lucide-react";
import { useCommunity } from "@/hooks/useCommunity";
import { formatDistanceToNow } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface USSDJob {
  id: string;
  title: string;
  description: string;
  location: string;
  phone_contact: string;
  ussd_code: string;
  category: string;
  payment_type: 'daily' | 'weekly' | 'monthly' | 'per_task';
  payment_amount: string;
  requirements: string[];
  is_rural_friendly: boolean;
  is_featured: boolean;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  applications_count: number;
  company_name: string;
  created_at: string;
}

export const USSDJobBoard = () => {
  const { user } = useCommunity();
  const { toast } = useToast();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [paymentTypeFilter, setPaymentTypeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Enhanced mock data for demonstration - in real app this would come from database
  const ussdJobs: USSDJob[] = [
    {
      id: '1',
      title: 'Mobile Money Agent',
      description: 'Help community members with mobile money transactions. Training provided. Handle deposits, withdrawals, and transfers.',
      location: 'Kitui County',
      phone_contact: '+254712345678',
      ussd_code: '*123*1#',
      category: 'financial',
      payment_type: 'daily',
      payment_amount: '500-800 KSH',
      requirements: ['Basic literacy', 'Mobile phone', 'Trustworthy', 'Good communication'],
      is_rural_friendly: true,
      is_featured: true,
      difficulty_level: 'beginner',
      applications_count: 45,
      company_name: 'M-PESA Agent Network',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Agricultural Data Collector',
      description: 'Collect crop and livestock data via SMS/USSD for agricultural surveys. Visit farms and record production data.',
      location: 'Machakos County',
      phone_contact: '+254723456789',
      ussd_code: '*456*2#',
      category: 'agriculture',
      payment_type: 'per_task',
      payment_amount: '50 KSH per survey',
      requirements: ['Can read/write', 'Own bicycle/motorbike', 'Know local area', 'Basic smartphone skills'],
      is_rural_friendly: true,
      is_featured: false,
      difficulty_level: 'intermediate',
      applications_count: 23,
      company_name: 'Kenya Agricultural Board',
      created_at: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: '3',
      title: 'Community Health Reporter',
      description: 'Report health data via USSD codes. Support community health initiatives and disease surveillance.',
      location: 'Makueni County',
      phone_contact: '+254734567890',
      ussd_code: '*789*3#',
      category: 'health',
      payment_type: 'monthly',
      payment_amount: '3000 KSH',
      requirements: ['Basic health training', 'Community trust', 'Regular availability', 'Data entry skills'],
      is_rural_friendly: true,
      is_featured: true,
      difficulty_level: 'intermediate',
      applications_count: 67,
      company_name: 'Ministry of Health',
      created_at: new Date(Date.now() - 172800000).toISOString()
    },
    {
      id: '4',
      title: 'Digital Literacy Trainer',
      description: 'Teach basic digital skills to community members. Use USSD codes to track training progress and attendance.',
      location: 'Nakuru County',
      phone_contact: '+254745678901',
      ussd_code: '*321*4#',
      category: 'education',
      payment_type: 'weekly',
      payment_amount: '2500 KSH',
      requirements: ['Teaching experience', 'Computer literacy', 'Patience', 'Good communication'],
      is_rural_friendly: true,
      is_featured: false,
      difficulty_level: 'intermediate',
      applications_count: 34,
      company_name: 'Digital Skills Foundation',
      created_at: new Date(Date.now() - 259200000).toISOString()
    },
    {
      id: '5',
      title: 'Motorcycle Taxi Data Collector',
      description: 'Record daily routes and passenger data via USSD. Help improve transport services in rural areas.',
      location: 'Meru County',
      phone_contact: '+254756789012',
      ussd_code: '*654*5#',
      category: 'transport',
      payment_type: 'daily',
      payment_amount: '300-500 KSH',
      requirements: ['Own motorcycle', 'Valid license', 'Basic phone skills', 'Punctual'],
      is_rural_friendly: true,
      is_featured: false,
      difficulty_level: 'beginner',
      applications_count: 89,
      company_name: 'Rural Transport Initiative',
      created_at: new Date(Date.now() - 345600000).toISOString()
    },
    {
      id: '6',
      title: 'Market Price Reporter',
      description: 'Report daily market prices for agricultural products via USSD. Help farmers get fair prices.',
      location: 'Kakamega County',
      phone_contact: '+254767890123',
      ussd_code: '*987*6#',
      category: 'agriculture',
      payment_type: 'per_task',
      payment_amount: '100 KSH per report',
      requirements: ['Market knowledge', 'Reliable', 'Early riser', 'Numerical skills'],
      is_rural_friendly: true,
      is_featured: true,
      difficulty_level: 'beginner',
      applications_count: 156,
      company_name: 'Kenya Market Information',
      created_at: new Date(Date.now() - 432000000).toISOString()
    },
    {
      id: '7',
      title: 'Village Banking Coordinator',
      description: 'Coordinate village savings groups and report activities via USSD. Help with financial inclusion.',
      location: 'Kisii County',
      phone_contact: '+254778901234',
      ussd_code: '*147*7#',
      category: 'financial',
      payment_type: 'monthly',
      payment_amount: '4000 KSH',
      requirements: ['Leadership skills', 'Financial literacy', 'Trust in community', 'Record keeping'],
      is_rural_friendly: true,
      is_featured: false,
      difficulty_level: 'advanced',
      applications_count: 28,
      company_name: 'Village Savings Alliance',
      created_at: new Date(Date.now() - 518400000).toISOString()
    },
    {
      id: '8',
      title: 'Solar Energy Technician',
      description: 'Install and maintain solar systems. Report installations and maintenance via USSD codes.',
      location: 'Turkana County',
      phone_contact: '+254789012345',
      ussd_code: '*258*8#',
      category: 'technology',
      payment_type: 'per_task',
      payment_amount: '1500 KSH per installation',
      requirements: ['Technical training', 'Physical fitness', 'Own tools', 'Problem solving'],
      is_rural_friendly: true,
      is_featured: true,
      difficulty_level: 'advanced',
      applications_count: 42,
      company_name: 'Solar Power Kenya',
      created_at: new Date(Date.now() - 604800000).toISOString()
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', count: ussdJobs.length },
    { value: 'agriculture', label: '🌾 Agriculture', count: ussdJobs.filter(j => j.category === 'agriculture').length },
    { value: 'financial', label: '💰 Financial Services', count: ussdJobs.filter(j => j.category === 'financial').length },
    { value: 'health', label: '🏥 Health', count: ussdJobs.filter(j => j.category === 'health').length },
    { value: 'education', label: '📚 Education', count: ussdJobs.filter(j => j.category === 'education').length },
    { value: 'transport', label: '🚗 Transport', count: ussdJobs.filter(j => j.category === 'transport').length },
    { value: 'technology', label: '📱 Technology', count: ussdJobs.filter(j => j.category === 'technology').length }
  ];

  const handleApplyViaUSSD = (ussdCode: string) => {
    // Simulate dialing USSD code
    toast({
      title: "📱 USSD Code Copied!",
      description: `Dial ${ussdCode} on your phone to apply for this job.`,
    });
    // In a real app, this could trigger the phone's dialer
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ussdCode);
    }
  };

  const filteredJobs = ussdJobs
    .filter(job => {
      const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
      const matchesLocation = !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesKeyword = !searchKeyword || 
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.company_name.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'all' || job.difficulty_level === difficultyFilter;
      const matchesPaymentType = paymentTypeFilter === 'all' || job.payment_type === paymentTypeFilter;
      
      return matchesCategory && matchesLocation && matchesKeyword && matchesDifficulty && matchesPaymentType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'most_applied':
          return b.applications_count - a.applications_count;
        case 'featured':
          return (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0);
        default:
          return 0;
      }
    });

  const CreateJobModal = () => (
    <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Post USSD Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>📱 Create USSD Job Opportunity</DialogTitle>
          <DialogDescription>
            Post a job opportunity accessible via USSD codes for rural youth
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="job-title">Job Title</Label>
              <Input id="job-title" placeholder="e.g., Mobile Money Agent" />
            </div>
            <div>
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="e.g., M-PESA Agent Network" />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe the job opportunity..." rows={3} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="County/Area" />
            </div>
            <div>
              <Label htmlFor="phone">Contact Phone</Label>
              <Input id="phone" placeholder="+254..." />
            </div>
            <div>
              <Label htmlFor="ussd-code">USSD Code</Label>
              <Input id="ussd-code" placeholder="*123*1#" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.slice(1).map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="payment-type">Payment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How often?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="per_task">Per Task</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="payment-amount">Payment Amount</Label>
            <Input id="payment-amount" placeholder="e.g., 500-800 KSH" />
          </div>
          <div>
            <Label htmlFor="requirements">Requirements (one per line)</Label>
            <Textarea id="requirements" placeholder="Basic literacy&#10;Own mobile phone&#10;Reliable" rows={3} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Post Job
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="text-center bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-8 rounded-xl">
        <div className="flex items-center justify-center mb-4">
          <Smartphone className="h-10 w-10 text-green-600 mr-3" />
          <h2 className="text-4xl font-bold text-gray-900">📱 USSD Job Board</h2>
          <TrendingUp className="h-8 w-8 text-blue-600 ml-3" />
        </div>
        <p className="text-xl text-gray-600 mb-6">
          Digital opportunities accessible via simple USSD codes - No internet required!
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm mb-4">
          <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
            <Signal className="mr-1 h-3 w-3" />
            Works on any phone
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
            No internet needed
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1">
            Rural-friendly
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-3 py-1">
            {ussdJobs.length} Active Jobs
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{ussdJobs.length}</div>
            <div className="text-sm text-gray-500">Total Jobs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{ussdJobs.filter(j => j.is_featured).length}</div>
            <div className="text-sm text-gray-500">Featured Jobs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{ussdJobs.reduce((sum, j) => sum + j.applications_count, 0)}</div>
            <div className="text-sm text-gray-500">Applications</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{new Set(ussdJobs.map(j => j.location)).size}</div>
            <div className="text-sm text-gray-500">Locations</div>
          </CardContent>
        </Card>
      </div>

      {/* How it works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Smartphone className="mr-2 h-5 w-5" />
            How USSD Jobs Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Browse Jobs</h3>
              <p className="text-sm text-gray-600">Find jobs that match your skills</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Dial USSD Code</h3>
              <p className="text-sm text-gray-600">Use any mobile phone to dial</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Follow Prompts</h3>
              <p className="text-sm text-gray-600">Complete application process</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Start Working</h3>
              <p className="text-sm text-gray-600">Get hired and earn money</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Find Your Perfect USSD Job
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="keyword-search">Search Keywords</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="keyword-search"
                  placeholder="Job title, company..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="location-search">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="location-search"
                  placeholder="County, area..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="difficulty-filter">Difficulty Level</Label>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="payment-filter">Payment Type</Label>
              <Select value={paymentTypeFilter} onValueChange={setPaymentTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="per_task">Per Task</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.value)}
                  className="text-xs"
                >
                  {cat.label} ({cat.count})
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2 items-center">
              <Label htmlFor="sort-select" className="text-sm">Sort by:</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="most_applied">Most Applied</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>
              {user && <CreateJobModal />}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
          </h3>
        </div>

        {filteredJobs.map((job) => (
          <Card key={job.id} className={`hover:shadow-lg transition-all duration-200 border-l-4 ${
            job.is_featured ? 'border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-white' : 'border-l-green-500'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {job.is_featured && <Star className="h-4 w-4 text-yellow-500" />}
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {categories.find(c => c.value === job.category)?.label || job.category}
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        job.difficulty_level === 'beginner' ? 'bg-green-100 text-green-700' :
                        job.difficulty_level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}
                    >
                      {job.difficulty_level}
                    </Badge>
                    {job.is_featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">by {job.company_name}</p>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span>{job.payment_amount} ({job.payment_type})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{job.applications_count} applications</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Requirements:</span>
                    <ul className="list-disc list-inside text-gray-600 mt-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-blue-600">+{job.requirements.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    📱 USSD Code: <span className="font-mono text-lg text-green-600 bg-white px-2 py-1 rounded">{job.ussd_code}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Contact: <span className="font-medium">{job.phone_contact}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={`tel:${job.phone_contact}`}>
                      <Phone className="mr-1 h-3 w-3" />
                      Call
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleApplyViaUSSD(job.ussd_code)}
                  >
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Apply via USSD
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No USSD jobs found matching your criteria.</p>
              <p className="text-sm text-gray-400">Try adjusting your filters or search terms.</p>
              {user && (
                <div className="mt-4">
                  <CreateJobModal />
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
