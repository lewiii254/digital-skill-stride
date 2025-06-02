
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Smartphone, MapPin, DollarSign, Clock, Users, Plus, Signal } from "lucide-react";
import { useCommunity } from "@/hooks/useCommunity";
import { formatDistanceToNow } from "date-fns";

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
  created_at: string;
}

export const USSDJobBoard = () => {
  const { user } = useCommunity();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchLocation, setSearchLocation] = useState("");

  // Mock data for demonstration - in real app this would come from database
  const ussdJobs: USSDJob[] = [
    {
      id: '1',
      title: 'Mobile Money Agent',
      description: 'Help community members with mobile money transactions. Training provided.',
      location: 'Kitui County',
      phone_contact: '+254712345678',
      ussd_code: '*123*1#',
      category: 'financial',
      payment_type: 'daily',
      payment_amount: '500-800 KSH',
      requirements: ['Basic literacy', 'Mobile phone', 'Trustworthy'],
      is_rural_friendly: true,
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Agricultural Data Collector',
      description: 'Collect crop and livestock data via SMS/USSD for agricultural surveys.',
      location: 'Machakos County',
      phone_contact: '+254723456789',
      ussd_code: '*456*2#',
      category: 'agriculture',
      payment_type: 'per_task',
      payment_amount: '50 KSH per survey',
      requirements: ['Can read/write', 'Own bicycle/motorbike', 'Know local area'],
      is_rural_friendly: true,
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      title: 'Community Health Reporter',
      description: 'Report health data via USSD codes. Support community health initiatives.',
      location: 'Makueni County',
      phone_contact: '+254734567890',
      ussd_code: '*789*3#',
      category: 'health',
      payment_type: 'monthly',
      payment_amount: '3000 KSH',
      requirements: ['Basic health training', 'Community trust', 'Regular availability'],
      is_rural_friendly: true,
      created_at: new Date().toISOString()
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'agriculture', label: '🌾 Agriculture' },
    { value: 'financial', label: '💰 Financial Services' },
    { value: 'health', label: '🏥 Health' },
    { value: 'education', label: '📚 Education' },
    { value: 'transport', label: '🚗 Transport' },
    { value: 'technology', label: '📱 Technology' }
  ];

  const filteredJobs = ussdJobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesCategory && matchesLocation;
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
          <div>
            <Label htmlFor="job-title">Job Title</Label>
            <Input id="job-title" placeholder="e.g., Mobile Money Agent" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe the job opportunity..." rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="County/Area" />
            </div>
            <div>
              <Label htmlFor="phone">Contact Phone</Label>
              <Input id="phone" placeholder="+254..." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ussd-code">USSD Code</Label>
              <Input id="ussd-code" placeholder="*123*1#" />
            </div>
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
          </div>
          <div className="grid grid-cols-2 gap-4">
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
            <div>
              <Label htmlFor="payment-amount">Payment Amount</Label>
              <Input id="payment-amount" placeholder="e.g., 500-800 KSH" />
            </div>
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
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <Smartphone className="h-8 w-8 text-green-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">📱 USSD Job Board</h2>
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Job opportunities accessible via simple USSD codes - No internet required!
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Signal className="mr-1 h-3 w-3" />
            Works on any phone
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            No internet needed
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            Rural-friendly
          </Badge>
        </div>
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
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Find a Job</h3>
              <p className="text-sm text-gray-600">Browse jobs below and note the USSD code</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Dial USSD Code</h3>
              <p className="text-sm text-gray-600">Dial the code on any mobile phone</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Connected</h3>
              <p className="text-sm text-gray-600">Follow prompts to apply or get info</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Create Job */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        {user && <CreateJobModal />}
      </div>

      {/* Job Listings */}
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {categories.find(c => c.value === job.category)?.label || job.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Rural Friendly
                    </Badge>
                  </div>
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
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Requirements:</span>
                    <ul className="list-disc list-inside text-gray-600 mt-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    📱 USSD Code: <span className="font-mono text-lg text-green-600">{job.ussd_code}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Contact: <span className="font-medium">{job.phone_contact}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Call Contact
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
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
              <p className="text-gray-500">No USSD jobs found matching your criteria.</p>
              {user && (
                <p className="text-sm text-gray-400 mt-2">
                  Be the first to post a USSD job opportunity!
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
