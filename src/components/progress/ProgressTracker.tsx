import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Target, Plus, CheckCircle, Clock, Pause, Trophy, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

interface Goal {
  id: string;
  title: string;
  description?: string;
  target_date?: string;
  status: 'active' | 'completed' | 'paused';
  progress_percentage: number;
  created_at: string;
  updated_at: string;
}

interface ProgressEntry {
  id: string;
  goal_id: string;
  entry_type: string;
  title: string;
  description?: string;
  points_earned: number;
  created_at: string;
}

const ProgressTracker = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    target_date: ''
  });
  const [newEntry, setNewEntry] = useState({
    goal_id: '',
    title: '',
    description: '',
    points_earned: 0,
    entry_type: 'milestone'
  });
  const [showGoalDialog, setShowGoalDialog] = useState(false);
  const [showEntryDialog, setShowEntryDialog] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchGoals();
      fetchProgressEntries();
    }
  }, [user]);

  const fetchGoals = async () => {
    try {
      const { data, error } = await supabase
        .from('learning_goals')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGoals((data || []).map(goal => ({ ...goal, status: goal.status as 'active' | 'completed' | 'paused' })));
    } catch (error) {
      console.error('Error fetching goals:', error);
      toast({
        title: "Error",
        description: "Failed to load goals",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchProgressEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('progress_entries')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setProgressEntries(data || []);
    } catch (error) {
      console.error('Error fetching progress entries:', error);
    }
  };

  const createGoal = async () => {
    if (!newGoal.title.trim()) return;

    try {
      const { error } = await supabase
        .from('learning_goals')
        .insert({
          user_id: user?.id,
          title: newGoal.title,
          description: newGoal.description || null,
          target_date: newGoal.target_date || null
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Goal created successfully"
      });

      setNewGoal({ title: '', description: '', target_date: '' });
      setShowGoalDialog(false);
      fetchGoals();
    } catch (error) {
      console.error('Error creating goal:', error);
      toast({
        title: "Error",
        description: "Failed to create goal",
        variant: "destructive"
      });
    }
  };

  const updateGoalProgress = async (goalId: string, progress: number) => {
    try {
      const status = progress >= 100 ? 'completed' : 'active';
      
      const { error } = await supabase
        .from('learning_goals')
        .update({ 
          progress_percentage: progress,
          status
        })
        .eq('id', goalId);

      if (error) throw error;

      fetchGoals();
    } catch (error) {
      console.error('Error updating goal progress:', error);
      toast({
        title: "Error",
        description: "Failed to update progress",
        variant: "destructive"
      });
    }
  };

  const createProgressEntry = async () => {
    if (!newEntry.title.trim() || !newEntry.goal_id) return;

    try {
      const { error } = await supabase
        .from('progress_entries')
        .insert({
          user_id: user?.id,
          goal_id: newEntry.goal_id,
          title: newEntry.title,
          description: newEntry.description || null,
          points_earned: newEntry.points_earned,
          entry_type: newEntry.entry_type
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Progress entry added"
      });

      setNewEntry({
        goal_id: '',
        title: '',
        description: '',
        points_earned: 0,
        entry_type: 'milestone'
      });
      setShowEntryDialog(false);
      fetchProgressEntries();
    } catch (error) {
      console.error('Error creating progress entry:', error);
      toast({
        title: "Error",
        description: "Failed to add progress entry",
        variant: "destructive"
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'paused':
        return <Pause className="h-5 w-5 text-yellow-500" />;
      default:
        return <Clock className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const totalPoints = progressEntries.reduce((sum, entry) => sum + entry.points_earned, 0);
  const completedGoals = goals.filter(goal => goal.status === 'completed').length;

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Target className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-2xl font-bold">{goals.length}</p>
              <p className="text-sm text-muted-foreground">Total Goals</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
            <div>
              <p className="text-2xl font-bold">{completedGoals}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-4" />
            <div>
              <p className="text-2xl font-bold">{totalPoints}</p>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Goals
              </CardTitle>
              <CardDescription>
                Track your learning objectives and progress
              </CardDescription>
            </div>
            <Dialog open={showGoalDialog} onOpenChange={setShowGoalDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Goal
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Goal</DialogTitle>
                  <DialogDescription>
                    Set a new learning objective to track your progress
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="goal-title">Title</Label>
                    <Input
                      id="goal-title"
                      placeholder="Enter goal title"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="goal-description">Description</Label>
                    <Textarea
                      id="goal-description"
                      placeholder="Describe your goal"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="goal-date">Target Date (Optional)</Label>
                    <Input
                      id="goal-date"
                      type="date"
                      value={newGoal.target_date}
                      onChange={(e) => setNewGoal({ ...newGoal, target_date: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={createGoal} disabled={!newGoal.title.trim()}>
                    Create Goal
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {goals.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <p>No goals yet. Create your first learning goal!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusIcon(goal.status)}
                        <h3 className="font-semibold">{goal.title}</h3>
                        <Badge className={getStatusColor(goal.status)}>
                          {goal.status}
                        </Badge>
                      </div>
                      {goal.description && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {goal.description}
                        </p>
                      )}
                      {goal.target_date && (
                        <p className="text-sm text-muted-foreground">
                          Target: {format(new Date(goal.target_date), 'MMM d, yyyy')}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{goal.progress_percentage}%</span>
                    </div>
                    <Progress value={goal.progress_percentage} className="h-2" />
                    
                    {goal.status !== 'completed' && (
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, Math.min(goal.progress_percentage + 25, 100))}
                        >
                          +25%
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, Math.min(goal.progress_percentage + 50, 100))}
                        >
                          +50%
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, 100)}
                        >
                          Complete
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Progress Entries */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Progress
              </CardTitle>
              <CardDescription>
                Your latest achievements and milestones
              </CardDescription>
            </div>
            <Dialog open={showEntryDialog} onOpenChange={setShowEntryDialog}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Entry
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Progress Entry</DialogTitle>
                  <DialogDescription>
                    Record a milestone or achievement
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="entry-goal">Goal</Label>
                    <Select
                      value={newEntry.goal_id}
                      onValueChange={(value) => setNewEntry({ ...newEntry, goal_id: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a goal" />
                      </SelectTrigger>
                      <SelectContent>
                        {goals.filter(g => g.status !== 'completed').map((goal) => (
                          <SelectItem key={goal.id} value={goal.id}>
                            {goal.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="entry-title">Title</Label>
                    <Input
                      id="entry-title"
                      placeholder="What did you achieve?"
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="entry-description">Description</Label>
                    <Textarea
                      id="entry-description"
                      placeholder="Describe your progress"
                      value={newEntry.description}
                      onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="entry-points">Points Earned</Label>
                    <Input
                      id="entry-points"
                      type="number"
                      min="0"
                      value={newEntry.points_earned}
                      onChange={(e) => setNewEntry({ ...newEntry, points_earned: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={createProgressEntry} disabled={!newEntry.title.trim() || !newEntry.goal_id}>
                    Add Entry
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {progressEntries.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <p>No progress entries yet. Start tracking your achievements!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {progressEntries.map((entry) => (
                <div key={entry.id} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{entry.title}</h4>
                    {entry.description && (
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(entry.created_at), 'MMM d, yyyy HH:mm')}
                    </p>
                  </div>
                  {entry.points_earned > 0 && (
                    <Badge variant="secondary">
                      +{entry.points_earned} pts
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;