import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Map paths to readable labels
  const pathToLabel: { [key: string]: string } = {
    courses: "Courses",
    mentorship: "Mentorship",
    community: "Community",
    dashboard: "Dashboard",
    "help-center": "Help Center",
    "support-tickets": "Support Tickets",
    "ai-coach": "AI Coach",
    "ai-career-advisor": "AI Career Advisor",
    "skill-assessment": "Skills Assessment",
    "resume-builder": "Resume Builder",
    messages: "Messages",
    progress: "Progress",
    achievements: "Achievements",
    certifications: "Certifications",
    schedule: "Schedule",
    analytics: "Analytics",
    "success-stories": "Success Stories",
    blog: "Blog",
    about: "About Us",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    admin: "Admin",
  };

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
    ...pathnames.map((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = pathToLabel[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
      return { label, path };
    }),
  ];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-3 px-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
    >
      <ol className="max-w-6xl mx-auto flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500 mx-2" aria-hidden="true" />
              )}
              {isLast ? (
                <span 
                  className="text-gray-900 dark:text-white font-medium"
                  aria-current="page"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    crumb.label
                  )}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    crumb.label
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
