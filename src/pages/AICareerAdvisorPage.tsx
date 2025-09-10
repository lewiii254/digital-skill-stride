import { Header } from "@/components/Header";
import { AICareerAdvisor } from "@/components/AICareerAdvisor";
import { JobMatchingEngine } from "@/components/dashboard/JobMatchingEngine";

const AICareerAdvisorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Career Center</h1>
          <p className="text-gray-600 text-lg">
            Get intelligent career guidance and discover personalized job opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AICareerAdvisor />
          <JobMatchingEngine />
        </div>
      </div>
    </div>
  );
};

export default AICareerAdvisorPage;