import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
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

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/mentorship" className="hover:text-white">Mentorship</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/api" className="hover:text-white">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 KuzaSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
