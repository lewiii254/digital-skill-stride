
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Mentorship from "./pages/Mentorship";
import MentorProfile from "./pages/MentorProfile";
import Community from "./pages/Community";
import Admin from "./pages/Admin";
import AICoach from "./pages/AICoach";
import ResumeBuilder from "./pages/ResumeBuilder";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Create QueryClient inside the component to avoid SSR issues
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/onboarding" element={
                <ProtectedRoute>
                  <Onboarding />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/ai-coach" element={<AICoach />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<Course />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/mentorship/:id" element={<MentorProfile />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              {/* TODO: Add remaining pages when they are created:
                  - /success-stories
                  - /help-center  
                  - /api-docs
                  - /about
                  - /careers
                  - /privacy
                  - /terms
              */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
