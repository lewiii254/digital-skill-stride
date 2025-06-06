
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Book, Zap, Shield, Globe } from "lucide-react";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/courses",
      description: "Retrieve all available courses",
      parameters: ["limit", "offset", "category"],
      response: {
        courses: [
          {
            id: 1,
            title: "Digital Marketing Fundamentals",
            category: "Marketing",
            price: 2999,
            duration: "6 weeks"
          }
        ]
      }
    },
    {
      method: "POST",
      endpoint: "/api/enrollment",
      description: "Enroll a user in a course",
      parameters: ["course_id", "user_id", "payment_method"],
      response: {
        enrollment_id: "12345",
        status: "active",
        access_expires: "2024-12-31"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KuzaSkills API Documentation
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Integrate our learning platform into your applications with our powerful REST API
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Code className="h-5 w-5" />
              <span>RESTful API</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Shield className="h-5 w-5" />
              <span>Secure Authentication</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Zap className="h-5 w-5" />
              <span>High Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Key className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>1. Get API Key</CardTitle>
                <CardDescription>
                  Sign up for a developer account and generate your API key
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get API Key
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Book className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>2. Read Documentation</CardTitle>
                <CardDescription>
                  Explore our comprehensive API documentation and examples
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-green-600 text-green-600">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>3. Start Building</CardTitle>
                <CardDescription>
                  Use our SDKs or make direct HTTP requests to integrate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-purple-600 text-purple-600">
                  Start Building
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Base URL and Authentication */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Base URL</CardTitle>
                <CardDescription>All API requests should be made to:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  https://api.kuzaskills.com/v1
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Include your API key in the request headers:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">API Endpoints</h2>
          
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-lg font-mono">{endpoint.endpoint}</code>
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="parameters" className="w-full">
                    <TabsList>
                      <TabsTrigger value="parameters">Parameters</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>
                    <TabsContent value="parameters" className="mt-4">
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Badge variant="outline">{param}</Badge>
                            <span className="text-sm text-gray-600">string</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="response" className="mt-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiDocs;
