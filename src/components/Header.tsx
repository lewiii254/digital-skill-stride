
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { User, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DS</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            DigitalStride
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
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
            Dashboard
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-600">
              Sign In
            </Button>
          </Link>
          <Link to="/onboarding">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
              <User className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </Link>
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
            <Link to="/courses" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link to="/mentorship" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Mentorship
            </Link>
            <Link to="/community" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Community
            </Link>
            <Link to="/dashboard" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
