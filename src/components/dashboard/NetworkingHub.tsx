
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Star } from "lucide-react";

interface Connection {
  id: string;
  name: string;
  role: string;
  expertise: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  lastInteraction: string;
  rating?: number;
}

export const NetworkingHub = () => {
  const connections: Connection[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Digital Marketing Expert',
      expertise: 'SEO, Content Strategy',
      avatar: '/placeholder.svg',
      status: 'online',
      lastInteraction: '2 hours ago',
      rating: 4.9
    },
    {
      id: '2',
      name: 'David Kimani',
      role: 'Freelance Mentor',
      expertise: 'Upwork, Client Relations',
      avatar: '/placeholder.svg',
      status: 'busy',
      lastInteraction: '1 day ago',
      rating: 4.8
    },
    {
      id: '3',
      name: 'Grace Wanjiku',
      role: 'Content Creator',
      expertise: 'Social Media, Writing',
      avatar: '/placeholder.svg',
      status: 'offline',
      lastInteraction: '3 days ago',
      rating: 4.7
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'online': 'bg-green-500',
      'busy': 'bg-yellow-500',
      'offline': 'bg-gray-500'
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-purple-600" />
              My Network
            </CardTitle>
            <CardDescription>Connect with mentors and peers</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            Find Connections
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {connections.map((connection) => (
          <div key={connection.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={connection.avatar} alt={connection.name} />
                  <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(connection.status)}`} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">{connection.name}</span>
                  {connection.rating && (
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{connection.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-600">{connection.role}</p>
                <p className="text-xs text-blue-600">{connection.expertise}</p>
                <p className="text-xs text-gray-500">Last active: {connection.lastInteraction}</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
