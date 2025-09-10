import { Header } from "@/components/Header";
import { SkillAssessment } from "@/components/SkillAssessment";

const SkillAssessmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Skill Assessment</h1>
          <p className="text-gray-600 text-lg">
            Test your knowledge and get personalized learning recommendations
          </p>
        </div>
        
        <SkillAssessment />
      </div>
    </div>
  );
};

export default SkillAssessmentPage;