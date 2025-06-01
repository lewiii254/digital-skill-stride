
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { User, Menu, LogOut, Bot, FileText, Settings } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Fetch user profile data
  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.log('Profile fetch error:', error);
        return null;
      }
      return data;
    },
    enabled: !!user?.id,
  });

  const handleSignOut = async () => {
    await signOut();
  };

  // Use profile data or fallback to user data
  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const firstName = displayName.split(' ')[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">KS</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            KuzaSkills
          </span>
          <Badge variant="secondary" className="hidden sm:inline-flex">Beta</Badge>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
            Courses
          </Link>
          <Link to="/mentorship" className="text-gray-600 hover:text-blue-600 transition-colors">
            Mentorship
          </Link>
          <Link to="/community" className="text-gray-600 hover:text-blue-600 transition-colors">
            Community
          </Link>
          <Link to="/ai-coach" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
            <Bot className="mr-1 h-4 w-4" />
            AI Coach
          </Link>
          <Link to="/resume-builder" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
            <FileText className="mr-1 h-4 w-4" />
            Resume Builder
          </Link>
          {user && (
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={profile?.avatar_url || "/placeholder.svg"} alt={displayName} />
                  <AvatarFallback className="text-sm bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    {displayName.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">Hi, {firstName}</div>
                  <div className="text-xs text-gray-500 capitalize">{profile?.role || 'Student'}</div>
                </div>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-gray-600 hover:text-red-600">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost" className="text-gray-600">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                  <User className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            {user && (
              <div className="flex items-center space-x-3 pb-4 border-b">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={profile?.avatar_url || "/placeholder.svg"} alt={displayName} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    {displayName.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">{displayName}</div>
                  <div className="text-sm text-gray-500 capitalize">{profile?.role || 'Student'}</div>
                </div>
              </div>
            )}
            
            <Link to="/courses" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link to="/mentorship" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Mentorship
            </Link>
            <Link to="/community" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Community
            </Link>
            <Link to="/ai-coach" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <Bot className="mr-1 h-4 w-4" />
              AI Coach
            </Link>
            <Link to="/resume-builder" className="block text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <FileText className="mr-1 h-4 w-4" />
              Resume Builder
            </Link>
            {user && (
              <Link to="/dashboard" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            )}
            
            <div className="flex flex-col space-y-2 pt-4 border-t">
              {user ? (
                <Button variant="outline" className="w-full justify-start" onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
