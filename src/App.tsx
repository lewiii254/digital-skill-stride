
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Mentorship from "./pages/Mentorship";
import MentorProfile from "./pages/MentorProfile";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Course />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/mentorship/:id" element={<MentorProfile />} />
            <Route path="/community" element={<Community />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
