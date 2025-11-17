import { LMSLayout } from "@/components/layouts/LMSLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Video, Users, MapPin, Plus, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Marketing Webinar",
      type: "Live Class",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
      instructor: "Sarah Johnson",
      duration: "1.5 hours",
      attendees: 45,
      status: "upcoming",
      meetingLink: "#"
    },
    {
      id: 2,
      title: "1-on-1 Mentorship: Career Planning",
      type: "Mentorship",
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
      instructor: "John Davis",
      duration: "1 hour",
      attendees: 1,
      status: "confirmed",
      meetingLink: "#"
    },
    {
      id: 3,
      title: "Web Development Project Review",
      type: "Workshop",
      date: "March 15",
      time: "3:00 PM - 5:00 PM",
      instructor: "Michael Chen",
      duration: "2 hours",
      attendees: 30,
      status: "upcoming",
      meetingLink: "#"
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Introduction to SEO",
      type: "Live Class",
      date: "March 10",
      time: "2:00 PM - 3:00 PM",
      instructor: "Emma Wilson",
      duration: "1 hour",
      recording: "#"
    },
    {
      id: 5,
      title: "Freelancing Tips & Strategies",
      type: "Workshop",
      date: "March 8",
      time: "4:00 PM - 6:00 PM",
      instructor: "David Brown",
      duration: "2 hours",
      recording: "#"
    },
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Schedule</h1>
            <p className="text-gray-600">Manage your classes, mentorship sessions, and events</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-green-600">
            <Plus className="h-4 w-4 mr-2" />
            Book Session
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">5</div>
              <p className="text-sm text-gray-600">Scheduled events</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">2</div>
              <p className="text-sm text-gray-600">Classes & sessions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Learning Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">8.5h</div>
              <p className="text-sm text-gray-600">This week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">92%</div>
              <p className="text-sm text-gray-600">Attendance rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium px-4">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 4; // Start from day 1
                  const isToday = day === 12;
                  const hasEvent = [12, 13, 15, 18, 20].includes(day);
                  
                  return (
                    <div
                      key={i}
                      className={`
                        aspect-square flex items-center justify-center rounded-lg text-sm cursor-pointer
                        transition-all hover:bg-gray-100
                        ${day < 1 || day > 31 ? 'text-gray-300' : 'text-gray-700'}
                        ${isToday ? 'bg-blue-600 text-white font-bold hover:bg-blue-700' : ''}
                        ${hasEvent && !isToday ? 'bg-green-100 font-medium' : ''}
                      `}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                      {hasEvent && !isToday && (
                        <div className="absolute w-1 h-1 bg-green-600 rounded-full mt-6" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.slice(0, 2).map((event) => (
                <div key={event.id} className="p-3 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={event.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                      {event.type}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Bell className="h-3 w-3" />
                    </Button>
                  </div>
                  <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Users className="h-3 w-3 mr-1" />
                    {event.instructor}
                  </div>
                </div>
              ))}
              {upcomingEvents.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No events scheduled for today</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>
                          {event.type}
                        </Badge>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {event.instructor}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>
                        <Video className="h-4 w-4 mr-2" />
                        Join Meeting
                      </Button>
                      <Button variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Remind Me
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow opacity-75">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{event.type}</Badge>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {event.instructor}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Recording
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </LMSLayout>
  );
};

export default Schedule;
