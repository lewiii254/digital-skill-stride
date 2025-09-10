
import { useState } from "react";
import { Header } from "@/components/Header";
import { useResumeDownload } from "@/hooks/useResumeDownload";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Sparkles, Plus, X, GraduationCap, Award, Code, Eye } from "lucide-react";

const ResumeBuilder = () => {
  const { generatePDF, isGenerating } = useResumeDownload();
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: ""
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "",
      company: "",
      location: "",
      duration: "",
      description: "",
      current: false
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "",
      institution: "",
      location: "",
      graduationDate: "",
      gpa: "",
      description: ""
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "",
      description: "",
      technologies: "",
      link: "",
      github: ""
    }
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "",
      issuer: "",
      date: "",
      credentialId: "",
      link: ""
    }
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: Date.now(),
        title: "",
        company: "",
        location: "",
        duration: "",
        description: "",
        current: false
      }
    ]);
  };

  const updateExperience = (id: number, field: string, value: string | boolean) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: Date.now(),
        degree: "",
        institution: "",
        location: "",
        graduationDate: "",
        gpa: "",
        description: ""
      }
    ]);
  };

  const updateEducation = (id: number, field: string, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        name: "",
        description: "",
        technologies: "",
        link: "",
        github: ""
      }
    ]);
  };

  const updateProject = (id: number, field: string, value: string) => {
    setProjects(projects.map(proj => 
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now(),
        name: "",
        issuer: "",
        date: "",
        credentialId: "",
        link: ""
      }
    ]);
  };

  const updateCertification = (id: number, field: string, value: string) => {
    setCertifications(certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const generateAISuggestions = () => {
    // Simulate AI suggestions
    if (personalInfo.summary === "") {
      setPersonalInfo({
        ...personalInfo,
        summary: "Motivated digital professional with expertise in web development, digital marketing, and content creation. Proven track record of delivering high-quality projects and helping businesses enhance their online presence. Passionate about leveraging cutting-edge technologies to drive innovation and growth."
      });
    }
  };

  const suggestSkills = () => {
    const suggestedSkills = ["JavaScript", "React", "Node.js", "Python", "Digital Marketing", "SEO", "Content Writing", "Adobe Creative Suite"];
    const newSuggestions = suggestedSkills.filter(skill => !skills.includes(skill)).slice(0, 3);
    setSkills([...skills, ...newSuggestions]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <FileText className="mr-4 h-10 w-10 text-blue-600" />
            AI-Powered Resume Builder
          </h1>
          <p className="text-gray-600 text-lg">Create a professional resume with intelligent suggestions and multiple templates</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="xl:col-span-2 space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Your basic contact information and professional summary</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={personalInfo.fullName}
                          onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={personalInfo.phone}
                          onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={personalInfo.location}
                          onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                          placeholder="City, State, Country"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={personalInfo.website}
                          onChange={(e) => setPersonalInfo({...personalInfo, website: e.target.value})}
                          placeholder="www.yourwebsite.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={personalInfo.linkedin}
                          onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                          placeholder="linkedin.com/in/yourprofile"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={personalInfo.github}
                          onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                          placeholder="github.com/yourusername"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={generateAISuggestions}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Sparkles className="mr-1 h-3 w-3" />
                          AI Generate
                        </Button>
                      </div>
                      <Textarea
                        id="summary"
                        value={personalInfo.summary}
                        onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                        placeholder="Write a compelling summary that highlights your key strengths, achievements, and career objectives..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>Your professional work history</CardDescription>
                      </div>
                      <Button variant="outline" onClick={addExperience}>
                        <Plus className="mr-1 h-4 w-4" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={exp.id} className="space-y-4 border-b pb-6 last:border-b-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Job Title *</Label>
                            <Input
                              value={exp.title}
                              onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                              placeholder="Software Developer"
                            />
                          </div>
                          <div>
                            <Label>Company *</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                              placeholder="Tech Company Inc."
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Location</Label>
                            <Input
                              value={exp.location}
                              onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                              placeholder="San Francisco, CA"
                            />
                          </div>
                          <div>
                            <Label>Duration</Label>
                            <Input
                              value={exp.duration}
                              onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                              placeholder="Jan 2023 - Present"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Description & Achievements</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Improved application performance by 30% through code optimization"
                            rows={4}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <GraduationCap className="mr-2 h-5 w-5" />
                          Education
                        </CardTitle>
                        <CardDescription>Your academic background</CardDescription>
                      </div>
                      <Button variant="outline" onClick={addEducation}>
                        <Plus className="mr-1 h-4 w-4" />
                        Add Education
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {education.map((edu) => (
                      <div key={edu.id} className="space-y-4 border-b pb-6 last:border-b-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                              placeholder="Bachelor of Computer Science"
                            />
                          </div>
                          <div>
                            <Label>Institution</Label>
                            <Input
                              value={edu.institution}
                              onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                              placeholder="University of Technology"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Location</Label>
                            <Input
                              value={edu.location}
                              onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                              placeholder="Boston, MA"
                            />
                          </div>
                          <div>
                            <Label>Graduation Date</Label>
                            <Input
                              value={edu.graduationDate}
                              onChange={(e) => updateEducation(edu.id, 'graduationDate', e.target.value)}
                              placeholder="May 2023"
                            />
                          </div>
                          <div>
                            <Label>GPA (Optional)</Label>
                            <Input
                              value={edu.gpa}
                              onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                              placeholder="3.8/4.0"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Code className="mr-2 h-5 w-5" />
                          Projects
                        </CardTitle>
                        <CardDescription>Showcase your personal and professional projects</CardDescription>
                      </div>
                      <Button variant="outline" onClick={addProject}>
                        <Plus className="mr-1 h-4 w-4" />
                        Add Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-4 border-b pb-6 last:border-b-0">
                        <div>
                          <Label>Project Name</Label>
                          <Input
                            value={project.name}
                            onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                            placeholder="E-commerce Platform"
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={project.description}
                            onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                            placeholder="Built a full-stack e-commerce platform with user authentication, payment processing, and inventory management..."
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Technologies</Label>
                            <Input
                              value={project.technologies}
                              onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                              placeholder="React, Node.js, MongoDB"
                            />
                          </div>
                          <div>
                            <Label>Live Demo</Label>
                            <Input
                              value={project.link}
                              onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                              placeholder="https://yourproject.com"
                            />
                          </div>
                          <div>
                            <Label>GitHub</Label>
                            <Input
                              value={project.github}
                              onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                              placeholder="github.com/username/project"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Skills & Certifications</CardTitle>
                    <CardDescription>Your technical and soft skills, plus certifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Label>Skills</Label>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={suggestSkills}
                          className="text-green-600 hover:text-green-700"
                        >
                          <Sparkles className="mr-1 h-3 w-3" />
                          AI Suggest
                        </Button>
                      </div>
                      <div className="flex space-x-2 mb-4">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Add a skill..."
                          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        />
                        <Button onClick={addSkill}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center">
                            {skill}
                            <X 
                              className="ml-1 h-3 w-3 cursor-pointer" 
                              onClick={() => removeSkill(skill)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Label className="flex items-center">
                          <Award className="mr-2 h-4 w-4" />
                          Certifications
                        </Label>
                        <Button variant="outline" size="sm" onClick={addCertification}>
                          <Plus className="mr-1 h-4 w-4" />
                          Add
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {certifications.map((cert) => (
                          <div key={cert.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                            <div>
                              <Label>Certification Name</Label>
                              <Input
                                value={cert.name}
                                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                                placeholder="AWS Solutions Architect"
                              />
                            </div>
                            <div>
                              <Label>Issuing Organization</Label>
                              <Input
                                value={cert.issuer}
                                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                                placeholder="Amazon Web Services"
                              />
                            </div>
                            <div>
                              <Label>Issue Date</Label>
                              <Input
                                value={cert.date}
                                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                                placeholder="March 2023"
                              />
                            </div>
                            <div>
                              <Label>Credential URL</Label>
                              <Input
                                value={cert.link}
                                onChange={(e) => updateCertification(cert.id, 'link', e.target.value)}
                                placeholder="https://credential-url.com"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Section */}
          <div className="xl:col-span-1">
            <div className="sticky top-8 space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Eye className="mr-2 h-5 w-5" />
                      Live Preview
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="classic">Classic</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button 
                        onClick={async () => {
                          await generatePDF({
                            personalInfo,
                            skills,
                            experience,
                            education,
                            projects,
                            certifications,
                            selectedTemplate
                          });
                        }}
                        disabled={isGenerating}
                        className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {isGenerating ? 'Generating...' : 'Download PDF'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`bg-white border rounded-lg p-6 shadow-sm ${
                    selectedTemplate === 'modern' ? 'border-l-4 border-l-blue-500' :
                    selectedTemplate === 'creative' ? 'bg-gradient-to-br from-gray-50 to-white' :
                    'border-gray-300'
                  }`}>
                    {/* Header */}
                    <div className={`text-center border-b pb-4 mb-4 ${
                      selectedTemplate === 'creative' ? 'border-b-2 border-blue-200' : ''
                    }`}>
                      <h2 className={`text-2xl font-bold ${
                        selectedTemplate === 'modern' ? 'text-blue-600' :
                        selectedTemplate === 'creative' ? 'bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent' :
                        'text-gray-900'
                      }`}>
                        {personalInfo.fullName || "Your Name"}
                      </h2>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <p>{personalInfo.email}</p>
                        <p>{personalInfo.phone} {personalInfo.location && `• ${personalInfo.location}`}</p>
                        {(personalInfo.linkedin || personalInfo.github || personalInfo.website) && (
                          <p className="text-blue-600">
                            {personalInfo.linkedin && personalInfo.linkedin}
                            {personalInfo.github && ` • ${personalInfo.github}`}
                            {personalInfo.website && ` • ${personalInfo.website}`}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    {personalInfo.summary && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Summary</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {personalInfo.summary}
                        </p>
                      </div>
                    )}

                    {/* Skills */}
                    {skills.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-1">
                          {skills.map((skill, index) => (
                            <span key={index} className={`px-2 py-1 rounded text-xs ${
                              selectedTemplate === 'modern' ? 'bg-blue-100 text-blue-700' :
                              selectedTemplate === 'creative' ? 'bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 border' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Experience</h3>
                      {experience.map((exp) => (
                        exp.title && (
                          <div key={exp.id} className="mb-4 last:mb-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-medium text-gray-900">{exp.title}</h4>
                              <span className="text-sm text-gray-600">{exp.duration}</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-1">{exp.company} {exp.location && `• ${exp.location}`}</p>
                            {exp.description && (
                              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        )
                      ))}
                    </div>

                    {/* Education */}
                    {education.some(edu => edu.degree) && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                        {education.map((edu) => (
                          edu.degree && (
                            <div key={edu.id} className="mb-3 last:mb-0">
                              <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                              <p className="text-sm text-gray-700">{edu.institution} {edu.location && `• ${edu.location}`}</p>
                              <p className="text-sm text-gray-600">{edu.graduationDate} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                            </div>
                          )
                        ))}
                      </div>
                    )}

                    {/* Projects */}
                    {projects.some(proj => proj.name) && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                        {projects.map((project) => (
                          project.name && (
                            <div key={project.id} className="mb-3 last:mb-0">
                              <h4 className="font-medium text-gray-900">{project.name}</h4>
                              {project.description && (
                                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                              )}
                              {project.technologies && (
                                <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    )}

                    {/* Certifications */}
                    {certifications.some(cert => cert.name) && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                        {certifications.map((cert) => (
                          cert.name && (
                            <div key={cert.id} className="mb-2 last:mb-0">
                              <h4 className="font-medium text-gray-900">{cert.name}</h4>
                              <p className="text-sm text-gray-700">{cert.issuer} • {cert.date}</p>
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
