import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, User, Target, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    experience: "",
    interests: [],
    goals: [],
    preferredPlatforms: []
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const skillAreas = [
    { id: "digital-marketing", label: "Digital Marketing", color: "bg-blue-100 text-blue-800" },
    { id: "copywriting", label: "Copywriting", color: "bg-green-100 text-green-800" },
    { id: "virtual-assistant", label: "Virtual Assistant", color: "bg-purple-100 text-purple-800" },
    { id: "graphic-design", label: "Graphic Design", color: "bg-pink-100 text-pink-800" },
    { id: "web-development", label: "Web Development", color: "bg-indigo-100 text-indigo-800" },
    { id: "social-media", label: "Social Media Management", color: "bg-orange-100 text-orange-800" },
    { id: "data-entry", label: "Data Entry", color: "bg-gray-100 text-gray-800" },
    { id: "customer-service", label: "Customer Service", color: "bg-teal-100 text-teal-800" }
  ];

  const platforms = [
    { id: "upwork", label: "Upwork" },
    { id: "fiverr", label: "Fiverr" },
    { id: "jumia", label: "Jumia" },
    { id: "uber", label: "Uber" },
    { id: "bolt", label: "Bolt" },
    { id: "freelancer", label: "Freelancer.com" },
    { id: "amazon", label: "Amazon" },
    { id: "etsy", label: "Etsy" }
  ];

  const goals = [
    { id: "earn-income", label: "Start earning income online" },
    { id: "career-change", label: "Change careers to digital work" },
    { id: "skill-upgrade", label: "Upgrade existing skills" },
    { id: "side-hustle", label: "Create a side hustle" },
    { id: "freelance-business", label: "Build a freelance business" },
    { id: "remote-work", label: "Find remote work opportunities" }
  ];

  // Load user's existing profile data
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.user_metadata?.full_name || user.email || ""
      }));
    }
  }, [user]);

  const handleArraySelection = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleComplete = async () => {
    if (!user) return;

    try {
      // Update user profile in Supabase
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.name,
          role: formData.role,
          experience_level: formData.experience,
          interests: formData.interests,
          goals: formData.goals,
          preferred_platforms: formData.preferredPlatforms,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to save your profile. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log("Onboarding completed with data:", formData);
      toast({
        title: "Welcome to DigitalStride!",
        description: "Your personalized learning journey is ready. Let's get started!",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                num <= step 
                  ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" 
                  : "bg-gray-200 text-gray-500"
              }`}>
                {num}
              </div>
              {num < 4 && (
                <div className={`w-8 h-1 mx-2 ${
                  num < step ? "bg-gradient-to-r from-blue-600 to-green-600" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
              <CardDescription>
                Let's personalize your learning experience with a few details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">I am a...</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="job-seeker">Job Seeker</SelectItem>
                    <SelectItem value="employed">Currently Employed</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Digital Work Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Complete Beginner</SelectItem>
                    <SelectItem value="some">Some Experience</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Interests */}
        {step === 2 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">What interests you?</CardTitle>
              <CardDescription>
                Select the digital skills you'd like to learn. You can choose multiple areas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {skillAreas.map((skill) => (
                  <div
                    key={skill.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.interests.includes(skill.id)
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleArraySelection("interests", skill.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox checked={formData.interests.includes(skill.id)} />
                      <span className="font-medium">{skill.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">What are your goals?</CardTitle>
              <CardDescription>
                Help us understand what you want to achieve so we can create the perfect learning path.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.goals.includes(goal.id)
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleArraySelection("goals", goal.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox checked={formData.goals.includes(goal.id)} />
                      <span className="font-medium">{goal.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Platforms */}
        {step === 4 && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Which platforms interest you?</CardTitle>
              <CardDescription>
                Select the platforms where you'd like to work or sell your services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.preferredPlatforms.includes(platform.id)
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleArraySelection("preferredPlatforms", platform.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox checked={formData.preferredPlatforms.includes(platform.id)} />
                      <span className="font-medium">{platform.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8"
                  onClick={handleComplete}
                >
                  Complete Setup & Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {step < 4 && (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
