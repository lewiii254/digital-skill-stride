import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  skills: string[];
  experience: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    current: boolean;
  }>;
  education: Array<{
    id: number;
    degree: string;
    institution: string;
    location: string;
    graduationDate: string;
    gpa: string;
    description: string;
  }>;
  projects: Array<{
    id: number;
    name: string;
    description: string;
    technologies: string;
    link: string;
    github: string;
  }>;
  certifications: Array<{
    id: number;
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    link: string;
  }>;
  selectedTemplate: string;
}

export const useResumeDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async (resumeData: ResumeData): Promise<void> => {
    setIsGenerating(true);
    
    try {
      // Create a new window for the PDF content
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }

      // Generate HTML content for the resume
      const htmlContent = generateResumeHTML(resumeData);
      
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load, then print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      };

      toast({
        title: "Resume Generated!",
        description: "Your resume has been opened in a new window. Please use your browser's print function to save as PDF.",
      });

    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate PDF. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateResumeHTML = (data: ResumeData): string => {
    const { personalInfo, skills, experience, education, projects, certifications } = data;
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${personalInfo.fullName} - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 8.5in; 
            margin: 0 auto; 
            padding: 0.5in;
            background: white;
          }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
          .name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 5px; }
          .contact-info { font-size: 12px; color: #666; }
          .contact-info span { margin: 0 10px; }
          .section { margin-bottom: 25px; }
          .section-title { 
            font-size: 16px; 
            font-weight: bold; 
            color: #2563eb; 
            margin-bottom: 10px; 
            border-bottom: 1px solid #e5e7eb; 
            padding-bottom: 5px; 
          }
          .summary { font-size: 14px; line-height: 1.6; text-align: justify; }
          .experience-item, .education-item, .project-item, .cert-item { 
            margin-bottom: 15px; 
            page-break-inside: avoid; 
          }
          .item-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
          .item-title { font-weight: bold; font-size: 14px; }
          .item-company { color: #666; font-size: 13px; }
          .item-duration { font-size: 12px; color: #888; }
          .item-description { font-size: 12px; line-height: 1.5; margin-top: 5px; }
          .skills-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
            gap: 8px; 
            font-size: 12px; 
          }
          .skill-item { 
            background: #f3f4f6; 
            padding: 4px 8px; 
            border-radius: 4px; 
            text-align: center; 
          }
          .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          @media print {
            body { margin: 0; padding: 0.5in; }
            .section { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">${personalInfo.fullName}</div>
          <div class="contact-info">
            ${personalInfo.email && `<span>📧 ${personalInfo.email}</span>`}
            ${personalInfo.phone && `<span>📱 ${personalInfo.phone}</span>`}
            ${personalInfo.location && `<span>📍 ${personalInfo.location}</span>`}
            ${personalInfo.linkedin && `<span>🔗 ${personalInfo.linkedin}</span>`}
            ${personalInfo.github && `<span>💻 ${personalInfo.github}</span>`}
            ${personalInfo.website && `<span>🌐 ${personalInfo.website}</span>`}
          </div>
        </div>

        ${personalInfo.summary ? `
        <div class="section">
          <div class="section-title">Professional Summary</div>
          <div class="summary">${personalInfo.summary}</div>
        </div>
        ` : ''}

        ${skills.length > 0 ? `
        <div class="section">
          <div class="section-title">Skills</div>
          <div class="skills-grid">
            ${skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
          </div>
        </div>
        ` : ''}

        ${experience.filter(exp => exp.title && exp.company).length > 0 ? `
        <div class="section">
          <div class="section-title">Professional Experience</div>
          ${experience.filter(exp => exp.title && exp.company).map(exp => `
            <div class="experience-item">
              <div class="item-header">
                <div>
                  <div class="item-title">${exp.title}</div>
                  <div class="item-company">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</div>
                </div>
                <div class="item-duration">${exp.duration}</div>
              </div>
              ${exp.description ? `<div class="item-description">${exp.description.replace(/\n/g, '<br>')}</div>` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${education.filter(edu => edu.degree && edu.institution).length > 0 ? `
        <div class="section">
          <div class="section-title">Education</div>
          ${education.filter(edu => edu.degree && edu.institution).map(edu => `
            <div class="education-item">
              <div class="item-header">
                <div>
                  <div class="item-title">${edu.degree}</div>
                  <div class="item-company">${edu.institution}${edu.location ? ` • ${edu.location}` : ''}</div>
                </div>
                <div class="item-duration">${edu.graduationDate}${edu.gpa ? ` • GPA: ${edu.gpa}` : ''}</div>
              </div>
              ${edu.description ? `<div class="item-description">${edu.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${projects.filter(proj => proj.name).length > 0 ? `
        <div class="section">
          <div class="section-title">Projects</div>
          ${projects.filter(proj => proj.name).map(proj => `
            <div class="project-item">
              <div class="item-header">
                <div>
                  <div class="item-title">${proj.name}</div>
                  ${proj.technologies ? `<div class="item-company">Technologies: ${proj.technologies}</div>` : ''}
                </div>
                <div class="item-duration">
                  ${proj.link ? `<a href="${proj.link}" style="color: #2563eb; text-decoration: none;">🔗 Live</a>` : ''}
                  ${proj.github ? `<a href="${proj.github}" style="color: #2563eb; text-decoration: none; margin-left: 10px;">💻 Code</a>` : ''}
                </div>
              </div>
              ${proj.description ? `<div class="item-description">${proj.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${certifications.filter(cert => cert.name && cert.issuer).length > 0 ? `
        <div class="section">
          <div class="section-title">Certifications</div>
          ${certifications.filter(cert => cert.name && cert.issuer).map(cert => `
            <div class="cert-item">
              <div class="item-header">
                <div>
                  <div class="item-title">${cert.name}</div>
                  <div class="item-company">${cert.issuer}</div>
                </div>
                <div class="item-duration">
                  ${cert.date}
                  ${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}
                </div>
              </div>
              ${cert.link ? `<div class="item-description"><a href="${cert.link}" style="color: #2563eb;">View Certificate</a></div>` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}

        <div style="margin-top: 30px; text-align: center; font-size: 10px; color: #888;">
          Generated by Digital Skills Platform Resume Builder
        </div>
      </body>
      </html>
    `;
  };

  return {
    generatePDF,
    isGenerating
  };
};