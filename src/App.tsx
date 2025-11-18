import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
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
import SuccessStories from "./pages/SuccessStories";
import HelpCenter from "./pages/HelpCenter";
import ApiDocs from "./pages/ApiDocs";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SkillAssessmentPage from "./pages/SkillAssessmentPage";
import AICareerAdvisorPage from "./pages/AICareerAdvisorPage";
import MessagesPage from "./pages/MessagesPage";
import ProgressPage from "./pages/ProgressPage";
import TestMpesaPayment from "./pages/TestMpesaPayment";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Schedule from "./pages/Schedule";
import Analytics from "./pages/Analytics";
import SupportTickets from "./pages/SupportTickets";
import { KeyboardShortcuts } from "./components/KeyboardShortcuts";

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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <KeyboardShortcuts />
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
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/skill-assessment" element={<ProtectedRoute><SkillAssessmentPage /></ProtectedRoute>} />
              <Route path="/ai-career-advisor" element={<ProtectedRoute><AICareerAdvisorPage /></ProtectedRoute>} />
              <Route path="/messages" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
              <Route path="/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
              <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
              <Route path="/certifications" element={<ProtectedRoute><Certifications /></ProtectedRoute>} />
              <Route path="/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
              <Route path="/support-tickets" element={<SupportTickets />} />
              <Route path="/test-mpesa" element={<TestMpesaPayment />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
