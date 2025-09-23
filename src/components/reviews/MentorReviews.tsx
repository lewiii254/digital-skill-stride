import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Star, MessageSquare, ThumbsUp } from 'lucide-react';
import { format } from 'date-fns';

interface Review {
  id: string;
  mentor_id: string;
  reviewer_id: string;
  booking_id?: string;
  rating: number;
  review_text?: string;
  created_at: string;
  reviewer?: {
    full_name?: string;
    avatar_url?: string;
  };
}

interface MentorReviewsProps {
  mentorId: string;
  currentUserBookings?: string[];
  showAddReview?: boolean;
}

const StarRating = ({ rating, onRate, readonly = false }: { 
  rating: number; 
  onRate?: (rating: number) => void; 
  readonly?: boolean;
}) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 cursor-pointer transition-colors ${
            star <= rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          }`}
          onClick={() => !readonly && onRate?.(star)}
        />
      ))}
    </div>
  );
};

const MentorReviews = ({ mentorId, currentUserBookings = [], showAddReview = false }: MentorReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    review_text: '',
    booking_id: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
  }, [mentorId]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('mentor_reviews')
        .select('*')
        .eq('mentor_id', mentorId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Get reviewer details for each review
      const reviewsWithUsers = await Promise.all((data || []).map(async (review) => {
        const { data: reviewer } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', review.reviewer_id)
          .single();

        return {
          ...review,
          reviewer: reviewer || { full_name: 'Anonymous' }
        };
      }));

      setReviews(reviewsWithUsers);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast({
        title: "Error",
        description: "Failed to load reviews",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const submitReview = async () => {
    if (!user || !newReview.rating) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('mentor_reviews')
        .insert({
          mentor_id: mentorId,
          reviewer_id: user.id,
          booking_id: newReview.booking_id || null,
          rating: newReview.rating,
          review_text: newReview.review_text.trim() || null
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Review submitted successfully"
      });

      setNewReview({ rating: 5, review_text: '', booking_id: '' });
      setShowReviewDialog(false);
      fetchReviews();
    } catch (error: any) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: error.message.includes('duplicate') 
          ? "You have already reviewed this mentor for this booking"
          : "Failed to submit review",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: reviews.length > 0 
      ? (reviews.filter(review => review.rating === rating).length / reviews.length) * 100 
      : 0
  }));

  // Check if user can review (has completed bookings but hasn't reviewed yet)
  const canReview = showAddReview && 
    user && 
    currentUserBookings.length > 0 && 
    !reviews.some(review => review.reviewer_id === user.id);

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Reviews & Ratings
          </CardTitle>
          <CardDescription>
            What mentees are saying about this mentor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {averageRating.toFixed(1)}
              </div>
              <StarRating rating={Math.round(averageRating)} readonly />
              <p className="text-sm text-muted-foreground mt-2">
                Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm">{rating}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review Button */}
          {canReview && (
            <div className="mt-6 pt-6 border-t">
              <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Write a Review
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Write a Review</DialogTitle>
                    <DialogDescription>
                      Share your experience with this mentor
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Rating</Label>
                      <div className="mt-2">
                        <StarRating 
                          rating={newReview.rating} 
                          onRate={(rating) => setNewReview({ ...newReview, rating })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="review-text">Review (Optional)</Label>
                      <Textarea
                        id="review-text"
                        placeholder="Share your thoughts about the mentorship session..."
                        value={newReview.review_text}
                        onChange={(e) => setNewReview({ ...newReview, review_text: e.target.value })}
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button 
                      onClick={submitReview} 
                      disabled={submitting || !newReview.rating}
                    >
                      {submitting ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          {reviews.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-4" />
              <p>No reviews yet</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.reviewer?.avatar_url} />
                      <AvatarFallback>
                        {review.reviewer?.full_name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">
                          {review.reviewer?.full_name || 'Anonymous'}
                        </h4>
                        <StarRating rating={review.rating} readonly />
                        <Badge variant="secondary" className="text-xs">
                          {format(new Date(review.created_at), 'MMM d, yyyy')}
                        </Badge>
                      </div>
                      
                      {review.review_text && (
                        <p className="text-muted-foreground leading-relaxed">
                          {review.review_text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorReviews;