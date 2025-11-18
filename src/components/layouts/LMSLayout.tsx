import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  Users,
  Trophy,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Home,
  GraduationCap,
  Award,
  Calendar,
  BarChart,
  LogOut,
  User,
  Brain,
  Briefcase,
  HelpCircle
} from "lucide-react";

interface LMSLayoutProps {
  children: React.ReactNode;
}

export const LMSLayout = ({ children }: LMSLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "My Courses", icon: BookOpen, path: "/courses" },
    { name: "Learning Path", icon: GraduationCap, path: "/progress" },
    { name: "Achievements", icon: Trophy, path: "/achievements" },
    { name: "Certifications", icon: Award, path: "/certifications" },
    { name: "Mentorship", icon: Users, path: "/mentorship" },
    { name: "Community", icon: MessageSquare, path: "/community" },
    { name: "AI Coach", icon: Brain, path: "/ai-coach" },
    { name: "Career Center", icon: Briefcase, path: "/careers" },
    { name: "Schedule", icon: Calendar, path: "/schedule" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const userInitials = displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Logo and Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link to="/dashboard" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hidden sm:inline">
                KuzaSkills LMS
              </span>
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, lessons, or resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right: Notifications and Profile */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm font-medium">{displayName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/help-center")}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={`
            fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] bg-white border-r border-gray-200 
            transition-all duration-300 z-40 overflow-y-auto
            ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:w-16 lg:translate-x-0'}
          `}
        >
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${active 
                      ? 'bg-gradient-to-r from-blue-50 to-green-50 text-blue-600 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className={`${sidebarOpen ? 'block' : 'hidden lg:hidden'}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-[calc(100vh-57px)] overflow-y-auto">
          <div className="container mx-auto p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
