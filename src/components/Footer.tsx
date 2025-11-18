import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 border-t dark:border-gray-800" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KS</span>
              </div>
              <span className="font-bold text-xl">KuzaSkills</span>
            </div>
            <p className="text-gray-400 text-sm">
              Grow your digital skills and future.
            </p>
          </div>

          <nav aria-label="Platform links">
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/mentorship" className="hover:text-white">Mentorship</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            </ul>
          </nav>

          <nav aria-label="AI Tools links">
            <h3 className="font-semibold mb-4">AI Tools</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/ai-career-advisor" className="hover:text-white">AI Career Advisor</Link></li>
              <li><Link to="/skill-assessment" className="hover:text-white">Skills Assessment</Link></li>
              <li><Link to="/ai-coach" className="hover:text-white">AI Coach</Link></li>
              <li><Link to="/resume-builder" className="hover:text-white">Resume Builder</Link></li>
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/api-docs" className="hover:text-white">API Docs</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 KuzaSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
