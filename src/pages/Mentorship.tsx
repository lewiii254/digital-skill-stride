
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Users, Star, Search, Clock, MapPin, Calendar as CalendarIcon, Video, MessageCircle, Award, Filter } from "lucide-react";
import { format } from "date-fns";
import MentorshipPaymentButton from "@/components/payments/MentorshipPaymentButton";

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date>();

  const skills = [
    "Web Development", "Mobile Development", "Digital Marketing", "Data Science",
    "UI/UX Design", "Copywriting", "E-commerce", "Social Media", "Video Editing",
    "Graphics Design", "Software Testing", "Cybersecurity", "Content Creation"
  ];

  const mentors = [
    {
      id: "mentor-1",
      name: "Sarah Chen",
      title: "Senior Full-Stack Developer",
      company: "Meta",
      experience: "8 years",
      rating: 4.9,
      reviews: 156,
      sessionsCompleted: 420,
      pricePerHour: 3500,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100",
      skills: ["React", "Node.js", "Python", "System Design", "Career Guidance"],
      bio: "Former Facebook engineer with expertise in scalable web applications. Specialized in helping developers transition to FAANG companies.",
      languages: ["English", "Mandarin"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T09:00:00",
        "2024-01-15T14:00:00",
        "2024-01-16T10:00:00",
        "2024-01-17T15:00:00"
      ],
      specialties: ["Technical Interviews", "System Design", "Career Transition"],
      verified: true
    },
    {
      id: "mentor-2",
      name: "Michael Rodriguez",
      title: "Digital Marketing Director",
      company: "Google",
      experience: "10 years",
      rating: 4.8,
      reviews: 203,
      sessionsCompleted: 580,
      pricePerHour: 4000,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      skills: ["Google Ads", "SEO", "Analytics", "Growth Marketing", "Strategy"],
      bio: "Google Marketing expert helping businesses scale through digital channels. 10+ years experience in performance marketing.",
      languages: ["English", "Spanish"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T11:00:00",
        "2024-01-16T09:00:00",
        "2024-01-16T16:00:00",
        "2024-01-17T13:00:00"
      ],
      specialties: ["Growth Strategy", "Performance Marketing", "Analytics Setup"],
      verified: true
    },
    {
      id: "mentor-3",
      name: "Emily Johnson",
      title: "Senior UI/UX Designer",
      company: "Airbnb",
      experience: "6 years",
      rating: 4.9,
      reviews: 124,
      sessionsCompleted: 280,
      pricePerHour: 3000,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      skills: ["Figma", "User Research", "Design Systems", "Prototyping", "Product Design"],
      bio: "Airbnb designer passionate about creating user-centered experiences. Mentoring designers to build amazing products.",
      languages: ["English"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T08:00:00",
        "2024-01-15T13:00:00",
        "2024-01-16T11:00:00",
        "2024-01-17T14:00:00"
      ],
      specialties: ["Portfolio Review", "Design Process", "User Research"],
      verified: true
    },
    {
      id: "mentor-4",
      name: "David Kim",
      title: "Data Science Manager",
      company: "Netflix",
      experience: "12 years",
      rating: 4.8,
      reviews: 167,
      sessionsCompleted: 450,
      pricePerHour: 4500,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      skills: ["Python", "Machine Learning", "SQL", "Statistics", "Data Strategy"],
      bio: "Netflix Data Science leader with expertise in ML at scale. Helping data professionals advance their careers.",
      languages: ["English", "Korean"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T10:00:00",
        "2024-01-16T08:00:00",
        "2024-01-16T15:00:00",
        "2024-01-17T12:00:00"
      ],
      specialties: ["Machine Learning", "Data Strategy", "Team Leadership"],
      verified: true
    },
    {
      id: "mentor-5",
      name: "Lisa Wang",
      title: "Mobile Development Lead",
      company: "Uber",
      experience: "7 years",
      rating: 4.9,
      reviews: 98,
      sessionsCompleted: 220,
      pricePerHour: 3800,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      skills: ["React Native", "iOS", "Android", "Flutter", "App Architecture"],
      bio: "Uber mobile engineer building apps used by millions. Specialized in mobile app architecture and performance.",
      languages: ["English", "Mandarin"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T12:00:00",
        "2024-01-16T09:00:00",
        "2024-01-16T14:00:00",
        "2024-01-17T16:00:00"
      ],
      specialties: ["Mobile Architecture", "Performance Optimization", "App Store Strategy"],
      verified: true
    },
    {
      id: "mentor-6",
      name: "James Thompson",
      title: "Freelance Business Consultant",
      company: "Independent",
      experience: "15 years",
      rating: 4.7,
      reviews: 234,
      sessionsCompleted: 680,
      pricePerHour: 2500,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100",
      skills: ["Business Strategy", "Freelancing", "Client Acquisition", "Pricing", "Scaling"],
      bio: "Successful freelancer helping others build sustainable freelance businesses. Expert in client acquisition and pricing strategies.",
      languages: ["English"],
      timezone: "UTC+3 (EAT)",
      availableSlots: [
        "2024-01-15T07:00:00",
        "2024-01-15T15:00:00",
        "2024-01-16T12:00:00",
        "2024-01-17T10:00:00"
      ],
      specialties: ["Freelance Business", "Client Relations", "Pricing Strategy"],
      verified: true
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = selectedSkill === "all" || mentor.skills.some(skill => 
      skill.toLowerCase().includes(selectedSkill.toLowerCase())
    );
    const matchesExperience = selectedExperience === "all" || 
      (selectedExperience === "junior" && parseInt(mentor.experience) <= 3) ||
      (selectedExperience === "mid" && parseInt(mentor.experience) > 3 && parseInt(mentor.experience) <= 7) ||
      (selectedExperience === "senior" && parseInt(mentor.experience) > 7);
    
    return matchesSearch && matchesSkill && matchesExperience;
  });

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">1-on-1 Mentorship</h1>
          <p className="text-xl text-gray-600 mb-6">
            Get personalized guidance from industry experts and accelerate your career growth
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search mentors by name, title, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                {skills.map(skill => (
                  <SelectItem key={skill} value={skill.toLowerCase()}>{skill}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedExperience} onValueChange={setSelectedExperience}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="junior">0-3 years</SelectItem>
                <SelectItem value="mid">4-7 years</SelectItem>
                <SelectItem value="senior">8+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredMentors.length} mentors available for booking
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </LMSLayout>
  );
};

const MentorCard = ({ mentor }: { mentor: any }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const handleBookingSuccess = () => {
    console.log(`Mentorship session with ${mentor.name} booked successfully!`);
  };

  const formatSlotTime = (slot: string) => {
    const date = new Date(slot);
    return {
      date: format(date, "MMM dd"),
      time: format(date, "HH:mm")
    };
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {mentor.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{mentor.name}</CardTitle>
            <CardDescription className="text-base">{mentor.title}</CardDescription>
            <p className="text-sm text-gray-600">{mentor.company} • {mentor.experience} experience</p>
            
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                {mentor.rating} ({mentor.reviews} reviews)
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {mentor.sessionsCompleted} sessions
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              KES {mentor.pricePerHour.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">per hour</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 text-sm">{mentor.bio}</p>
        
        <div>
          <h4 className="font-semibold mb-2">Skills & Expertise</h4>
          <div className="flex flex-wrap gap-1">
            {mentor.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-1">
            {mentor.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Languages:</span>
            <p className="text-gray-600">{mentor.languages.join(", ")}</p>
          </div>
          <div>
            <span className="font-medium">Timezone:</span>
            <p className="text-gray-600">{mentor.timezone}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Available Time Slots</h4>
          <div className="grid grid-cols-2 gap-2">
            {mentor.availableSlots.slice(0, 4).map((slot, index) => {
              const { date, time } = formatSlotTime(slot);
              return (
                <Button
                  key={index}
                  variant={selectedSlot === slot ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSlot(slot)}
                  className="text-xs justify-start"
                >
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  {date} {time}
                </Button>
              );
            })}
          </div>
        </div>
        
        <div className="pt-4">
          {selectedSlot ? (
            <MentorshipPaymentButton
              mentorId={mentor.id}
              mentorName={mentor.name}
              sessionPrice={mentor.pricePerHour}
              sessionDate={selectedSlot}
              onBookingSuccess={handleBookingSuccess}
            />
          ) : (
            <Button disabled className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Select a time slot to book
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Mentorship;
