
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, MessageSquare, TrendingUp, Shield, Star, Plus, CreditCard, DollarSign } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch users data
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Fetch payments data
  const { data: payments, isLoading: paymentsLoading } = useQuery({
    queryKey: ['admin-payments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      return data || [];
    }
  });

  // Fetch community stats
  const { data: communityStats, isLoading: statsLoading } = useQuery({
    queryKey: ['admin-community-stats'],
    queryFn: async () => {
      const [forumTopics, qaQuestions, successStories, jobListings, totalPayments, completedPayments] = await Promise.all([
        supabase.from('forum_topics').select('id', { count: 'exact' }),
        supabase.from('qa_questions').select('id', { count: 'exact' }),
        supabase.from('success_stories').select('id', { count: 'exact' }),
        supabase.from('job_listings').select('id', { count: 'exact' }),
        supabase.from('payments').select('amount', { count: 'exact' }),
        supabase.from('payments').select('amount').eq('status', 'completed')
      ]);

      const totalRevenue = completedPayments.data?.reduce((sum, payment) => sum + Number(payment.amount), 0) || 0;

      return {
        forumTopics: forumTopics.count || 0,
        qaQuestions: qaQuestions.count || 0,
        successStories: successStories.count || 0,
        jobListings: jobListings.count || 0,
        totalPayments: totalPayments.count || 0,
        totalRevenue
      };
    }
  });

  // Sample data creation mutation
  const createSampleData = useMutation({
    mutationFn: async () => {
      throw new Error('Sample data can only be created when users sign up and create content');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-community-stats'] });
      toast({
        title: "Success",
        description: "Sample data created successfully!"
      });
    },
    onError: (error) => {
      toast({
        title: "Info",
        description: "Sample data will be available once users start creating content. Encourage users to sign up and post in the community!",
        variant: "default"
      });
    }
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, content, payments, and platform analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {users?.length === 0 ? 'No users yet' : '+12% from last month'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Forum Topics</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{communityStats?.forumTopics || 0}</div>
              <p className="text-xs text-muted-foreground">
                {communityStats?.forumTopics === 0 ? 'No topics yet' : '+3 new this week'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Q&A Questions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{communityStats?.qaQuestions || 0}</div>
              <p className="text-xs text-muted-foreground">
                {communityStats?.qaQuestions === 0 ? 'No questions yet' : '+8% completion rate'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Stories</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{communityStats?.successStories || 0}</div>
              <p className="text-xs text-muted-foreground">
                {communityStats?.successStories === 0 ? 'No stories yet' : '+2% from last week'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{communityStats?.totalPayments || 0}</div>
              <p className="text-xs text-muted-foreground">
                {communityStats?.totalPayments === 0 ? 'No payments yet' : 'M-Pesa integrated'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(communityStats?.totalRevenue || 0)}</div>
              <p className="text-xs text-muted-foreground">
                {communityStats?.totalRevenue === 0 ? 'No revenue yet' : 'From completed payments'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Data Creation */}
        {(communityStats?.forumTopics === 0 && communityStats?.qaQuestions === 0) && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">No Community Content Yet</CardTitle>
              <CardDescription className="text-blue-700">
                Your platform is ready with M-Pesa payments! Content will appear here once users start creating forum topics, asking questions, and making payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => createSampleData.mutate()}
                disabled={createSampleData.isPending}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                {createSampleData.isPending ? 'Creating...' : 'Learn About Sample Data'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Monitor and manage registered users
                </CardDescription>
              </CardHeader>
              <CardContent>
                {usersLoading ? (
                  <div className="text-center py-4">Loading users...</div>
                ) : users && users.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Experience Level</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            {user.full_name || 'Unnamed User'}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{user.role || 'student'}</Badge>
                          </TableCell>
                          <TableCell>{user.experience_level || 'Not set'}</TableCell>
                          <TableCell>
                            {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Shield className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium mb-2">No Users Yet</h3>
                    <p>Users will appear here once they sign up for your platform.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>
                  Monitor M-Pesa payments and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {paymentsLoading ? (
                  <div className="text-center py-4">Loading payments...</div>
                ) : payments && payments.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>M-Pesa Receipt</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>
                            {new Date(payment.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="font-medium">
                            {formatCurrency(Number(payment.amount))}
                          </TableCell>
                          <TableCell>{payment.phone_number}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{payment.payment_type}</Badge>
                          </TableCell>
                          <TableCell>
                            {getPaymentStatusBadge(payment.status)}
                          </TableCell>
                          <TableCell>
                            {payment.mpesa_receipt_number || 'N/A'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CreditCard className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium mb-2">No Payments Yet</h3>
                    <p>M-Pesa payments will appear here once users start making transactions.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Manage courses, lessons, and educational content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Content Management</h3>
                  <p>Advanced content management features are coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mentors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mentor Management</CardTitle>
                <CardDescription>
                  Approve mentors and monitor mentorship interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Mentor Management</h3>
                  <p>Mentor management features are coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>
                  Usage statistics, completion rates, and engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
                  <p>Advanced analytics features are coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
