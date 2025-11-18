import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Clock, Ticket, Send } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SupportTickets = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "",
    description: ""
  });

  // Mock tickets data - in production, this would come from the database
  const mockTickets = [
    {
      id: 1,
      subject: "Cannot access course materials",
      category: "Technical",
      status: "open",
      priority: "high",
      created: "2 hours ago",
      lastUpdate: "1 hour ago"
    },
    {
      id: 2,
      subject: "Payment not reflecting",
      category: "Billing",
      status: "in_progress",
      priority: "high",
      created: "1 day ago",
      lastUpdate: "3 hours ago"
    },
    {
      id: 3,
      subject: "Certificate download issue",
      category: "Technical",
      status: "resolved",
      priority: "medium",
      created: "3 days ago",
      lastUpdate: "2 days ago"
    }
  ];

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit a support ticket.",
        variant: "destructive"
      });
      return;
    }

    if (!ticketForm.subject || !ticketForm.category || !ticketForm.priority || !ticketForm.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Ticket Submitted Successfully",
        description: "Our support team will get back to you within 24 hours.",
      });
      
      // Reset form
      setTicketForm({
        subject: "",
        category: "",
        priority: "",
        description: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "in_progress":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Ticket className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      open: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      in_progress: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    };
    
    return (
      <Badge className={variants[status]}>
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const variants: { [key: string]: string } = {
      low: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      medium: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    
    return (
      <Badge className={variants[priority]}>
        {priority.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Ticket className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Support Tickets
          </h1>
          <p className="text-xl opacity-90">
            Get help when you need it. Submit a ticket and track your support requests.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="submit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="submit">Submit New Ticket</TabsTrigger>
              <TabsTrigger value="my-tickets">My Tickets</TabsTrigger>
            </TabsList>
            
            {/* Submit Ticket Tab */}
            <TabsContent value="submit">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Create Support Ticket</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Describe your issue and our team will assist you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitTicket} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="dark:text-gray-200">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your issue"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        required
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="dark:text-gray-200">Category *</Label>
                        <Select
                          value={ticketForm.category}
                          onValueChange={(value) => setTicketForm({ ...ticketForm, category: value })}
                        >
                          <SelectTrigger id="category" className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="course">Course Content</SelectItem>
                            <SelectItem value="account">Account Management</SelectItem>
                            <SelectItem value="mentorship">Mentorship</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority" className="dark:text-gray-200">Priority *</Label>
                        <Select
                          value={ticketForm.priority}
                          onValueChange={(value) => setTicketForm({ ...ticketForm, priority: value })}
                        >
                          <SelectTrigger id="priority" className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="medium">Medium - Needs attention</SelectItem>
                            <SelectItem value="high">High - Urgent issue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="dark:text-gray-200">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about your issue. Include any error messages or steps you've already tried..."
                        value={ticketForm.description}
                        onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                        required
                        rows={6}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Ticket
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* My Tickets Tab */}
            <TabsContent value="my-tickets">
              <div className="space-y-4">
                {user ? (
                  mockTickets.length > 0 ? (
                    mockTickets.map((ticket) => (
                      <Card key={ticket.id} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {getStatusIcon(ticket.status)}
                                <CardTitle className="text-lg dark:text-white">
                                  {ticket.subject}
                                </CardTitle>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {getStatusBadge(ticket.status)}
                                {getPriorityBadge(ticket.priority)}
                                <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                                  {ticket.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                            <span>Created: {ticket.created}</span>
                            <span>Last update: {ticket.lastUpdate}</span>
                          </div>
                          <Button variant="outline" className="w-full mt-4 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="py-12 text-center">
                        <Ticket className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          You don't have any support tickets yet.
                        </p>
                        <Button
                          onClick={() => document.querySelector('[value="submit"]')?.dispatchEvent(new Event('click', { bubbles: true }))}
                          variant="outline"
                          className="dark:border-gray-600"
                        >
                          Create Your First Ticket
                        </Button>
                      </CardContent>
                    </Card>
                  )
                ) : (
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="py-12 text-center">
                      <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Please sign in to view your support tickets.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportTickets;
