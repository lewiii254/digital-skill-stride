-- Create messaging system tables
CREATE TABLE public.conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mentor_id UUID NOT NULL,
  mentee_id UUID NOT NULL,
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(mentor_id, mentee_id)
);

CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL,
  content TEXT NOT NULL,
  message_type TEXT NOT NULL DEFAULT 'text',
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create mentor reviews table
CREATE TABLE public.mentor_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mentor_id UUID NOT NULL,
  reviewer_id UUID NOT NULL,
  booking_id UUID REFERENCES public.mentorship_bookings(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(mentor_id, reviewer_id, booking_id)
);

-- Create learning goals table
CREATE TABLE public.learning_goals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  target_date DATE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create progress tracking table
CREATE TABLE public.progress_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  goal_id UUID REFERENCES public.learning_goals(id) ON DELETE CASCADE,
  entry_type TEXT NOT NULL DEFAULT 'milestone',
  title TEXT NOT NULL,
  description TEXT,
  points_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info',
  read_at TIMESTAMP WITH TIME ZONE,
  action_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS policies for conversations
CREATE POLICY "Users can view their own conversations" 
ON public.conversations 
FOR SELECT 
USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Users can create conversations" 
ON public.conversations 
FOR INSERT 
WITH CHECK (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Users can update their conversations" 
ON public.conversations 
FOR UPDATE 
USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

-- RLS policies for messages
CREATE POLICY "Users can view messages in their conversations" 
ON public.messages 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.conversations 
    WHERE conversations.id = messages.conversation_id 
    AND (conversations.mentor_id = auth.uid() OR conversations.mentee_id = auth.uid())
  )
);

CREATE POLICY "Users can create messages in their conversations" 
ON public.messages 
FOR INSERT 
WITH CHECK (
  auth.uid() = sender_id AND
  EXISTS (
    SELECT 1 FROM public.conversations 
    WHERE conversations.id = messages.conversation_id 
    AND (conversations.mentor_id = auth.uid() OR conversations.mentee_id = auth.uid())
  )
);

CREATE POLICY "Users can update their own messages" 
ON public.messages 
FOR UPDATE 
USING (auth.uid() = sender_id);

-- RLS policies for mentor reviews
CREATE POLICY "Anyone can view mentor reviews" 
ON public.mentor_reviews 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own reviews" 
ON public.mentor_reviews 
FOR INSERT 
WITH CHECK (auth.uid() = reviewer_id);

CREATE POLICY "Users can update their own reviews" 
ON public.mentor_reviews 
FOR UPDATE 
USING (auth.uid() = reviewer_id);

-- RLS policies for learning goals
CREATE POLICY "Users can view their own learning goals" 
ON public.learning_goals 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own learning goals" 
ON public.learning_goals 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own learning goals" 
ON public.learning_goals 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own learning goals" 
ON public.learning_goals 
FOR DELETE 
USING (auth.uid() = user_id);

-- RLS policies for progress entries
CREATE POLICY "Users can view their own progress entries" 
ON public.progress_entries 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own progress entries" 
ON public.progress_entries 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress entries" 
ON public.progress_entries 
FOR UPDATE 
USING (auth.uid() = user_id);

-- RLS policies for notifications
CREATE POLICY "Users can view their own notifications" 
ON public.notifications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "System can create notifications" 
ON public.notifications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own notifications" 
ON public.notifications 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create triggers for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_conversations_updated_at
BEFORE UPDATE ON public.conversations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_learning_goals_updated_at
BEFORE UPDATE ON public.learning_goals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();