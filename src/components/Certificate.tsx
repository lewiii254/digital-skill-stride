
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2 } from "lucide-react";

interface CertificateProps {
  courseName: string;
  studentName: string;
  completionDate: string;
  instructorName: string;
  certificateId: string;
}

export const Certificate = ({ 
  courseName, 
  studentName, 
  completionDate, 
  instructorName, 
  certificateId 
}: CertificateProps) => {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log("Downloading certificate...");
  };

  const handleShare = () => {
    // In a real app, this would open share options
    console.log("Sharing certificate...");
  };

  return (
    <div className="space-y-6">
      {/* Certificate Preview */}
      <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Certificate of Completion</h1>
              <p className="text-gray-600">Digital Skills Platform</p>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700">This is to certify that</p>
              <h2 className="text-4xl font-bold text-blue-600">{studentName}</h2>
              <p className="text-lg text-gray-700">has successfully completed the course</p>
              <h3 className="text-2xl font-semibold text-gray-900">{courseName}</h3>
              <p className="text-gray-600">on {completionDate}</p>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-yellow-200">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <div className="border-t border-gray-400 pt-2 w-48">
                    <p className="font-semibold">{instructorName}</p>
                    <p className="text-sm text-gray-600">Course Instructor</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Certificate ID</p>
                  <p className="font-mono text-sm">{certificateId}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex space-x-4">
        <Button onClick={handleDownload} className="flex-1">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" onClick={handleShare} className="flex-1">
          <Share2 className="mr-2 h-4 w-4" />
          Share Certificate
        </Button>
      </div>

      {/* Verification Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h4 className="font-semibold mb-2">Certificate Verification</h4>
          <p className="text-sm text-gray-600">
            This certificate can be verified at: 
            <span className="font-mono ml-2">digitalskills.platform/verify/{certificateId}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
