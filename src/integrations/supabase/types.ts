export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          parent_id: string
          parent_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          parent_id: string
          parent_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          parent_id?: string
          parent_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          last_message_at: string | null
          mentee_id: string
          mentor_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          mentee_id: string
          mentor_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          mentee_id?: string
          mentor_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      course_purchases: {
        Row: {
          access_granted: boolean | null
          course_id: number
          created_at: string
          id: string
          payment_id: string
          purchase_date: string
          user_id: string
        }
        Insert: {
          access_granted?: boolean | null
          course_id: number
          created_at?: string
          id?: string
          payment_id: string
          purchase_date?: string
          user_id: string
        }
        Update: {
          access_granted?: boolean | null
          course_id?: number
          created_at?: string
          id?: string
          payment_id?: string
          purchase_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_purchases_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          topic_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          topic_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          topic_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_posts_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "forum_topics"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_topics: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_popular: boolean | null
          post_count: number | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          is_popular?: boolean | null
          post_count?: number | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_popular?: boolean | null
          post_count?: number | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      job_listings: {
        Row: {
          applicants_count: number | null
          budget: string
          created_at: string
          description: string
          difficulty: string
          id: string
          is_active: boolean | null
          platform: string
          skills: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applicants_count?: number | null
          budget: string
          created_at?: string
          description: string
          difficulty: string
          id?: string
          is_active?: boolean | null
          platform: string
          skills?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applicants_count?: number | null
          budget?: string
          created_at?: string
          description?: string
          difficulty?: string
          id?: string
          is_active?: boolean | null
          platform?: string
          skills?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      learning_goals: {
        Row: {
          created_at: string
          description: string | null
          id: string
          progress_percentage: number | null
          status: string
          target_date: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          progress_percentage?: number | null
          status?: string
          target_date?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          progress_percentage?: number | null
          status?: string
          target_date?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mentor_reviews: {
        Row: {
          booking_id: string | null
          created_at: string
          id: string
          mentor_id: string
          rating: number
          review_text: string | null
          reviewer_id: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          id?: string
          mentor_id: string
          rating: number
          review_text?: string | null
          reviewer_id: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          id?: string
          mentor_id?: string
          rating?: number
          review_text?: string | null
          reviewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentor_reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "mentorship_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      mentorship_bookings: {
        Row: {
          amount: number
          created_at: string
          duration_minutes: number
          id: string
          meeting_link: string | null
          mentor_id: string
          notes: string | null
          payment_id: string | null
          session_date: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          duration_minutes?: number
          id?: string
          meeting_link?: string | null
          mentor_id: string
          notes?: string | null
          payment_id?: string | null
          session_date: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          duration_minutes?: number
          id?: string
          meeting_link?: string | null
          mentor_id?: string
          notes?: string | null
          payment_id?: string | null
          session_date?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentorship_bookings_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          message_type: string
          read_at: string | null
          sender_id: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          message_type?: string
          read_at?: string | null
          sender_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          message_type?: string
          read_at?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          message: string
          read_at: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          message: string
          read_at?: string | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          message?: string
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          checkout_request_id: string | null
          created_at: string
          currency: string
          id: string
          merchant_request_id: string | null
          mpesa_checkout_request_id: string | null
          mpesa_receipt_number: string | null
          mpesa_transaction_id: string | null
          payment_description: string | null
          payment_method: string
          payment_type: string
          phone_number: string
          reference_id: string | null
          result_code: number | null
          result_desc: string | null
          status: string
          transaction_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          checkout_request_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_checkout_request_id?: string | null
          mpesa_receipt_number?: string | null
          mpesa_transaction_id?: string | null
          payment_description?: string | null
          payment_method?: string
          payment_type: string
          phone_number: string
          reference_id?: string | null
          result_code?: number | null
          result_desc?: string | null
          status?: string
          transaction_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_checkout_request_id?: string | null
          mpesa_receipt_number?: string | null
          mpesa_transaction_id?: string | null
          payment_description?: string | null
          payment_method?: string
          payment_type?: string
          phone_number?: string
          reference_id?: string | null
          result_code?: number | null
          result_desc?: string | null
          status?: string
          transaction_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          experience_level: string | null
          full_name: string | null
          goals: string[] | null
          id: string
          interests: string[] | null
          preferred_platforms: string[] | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          experience_level?: string | null
          full_name?: string | null
          goals?: string[] | null
          id: string
          interests?: string[] | null
          preferred_platforms?: string[] | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          experience_level?: string | null
          full_name?: string | null
          goals?: string[] | null
          id?: string
          interests?: string[] | null
          preferred_platforms?: string[] | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      progress_entries: {
        Row: {
          created_at: string
          description: string | null
          entry_type: string
          goal_id: string | null
          id: string
          points_earned: number | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          entry_type?: string
          goal_id?: string | null
          id?: string
          points_earned?: number | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          entry_type?: string
          goal_id?: string | null
          id?: string
          points_earned?: number | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "progress_entries_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "learning_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_answers: {
        Row: {
          content: string
          created_at: string
          id: string
          is_accepted: boolean | null
          question_id: string
          updated_at: string
          user_id: string
          votes: number | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_accepted?: boolean | null
          question_id: string
          updated_at?: string
          user_id: string
          votes?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_accepted?: boolean | null
          question_id?: string
          updated_at?: string
          user_id?: string
          votes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "qa_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "qa_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      qa_questions: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_answered: boolean | null
          tags: string[] | null
          title: string
          updated_at: string
          user_id: string
          views: number | null
          votes: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_answered?: boolean | null
          tags?: string[] | null
          title: string
          updated_at?: string
          user_id: string
          views?: number | null
          votes?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_answered?: boolean | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
          views?: number | null
          votes?: number | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          amount: number
          billing_cycle: string
          created_at: string
          current_period_end: string
          current_period_start: string
          id: string
          payment_id: string | null
          plan_type: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          billing_cycle?: string
          created_at?: string
          current_period_end: string
          current_period_start?: string
          id?: string
          payment_id?: string | null
          plan_type: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          billing_cycle?: string
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          id?: string
          payment_id?: string | null
          plan_type?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      success_stories: {
        Row: {
          category: string
          comments_count: number | null
          content: string
          created_at: string
          excerpt: string | null
          id: string
          likes: number | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          comments_count?: number | null
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          likes?: number | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          comments_count?: number | null
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          likes?: number | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      votes: {
        Row: {
          created_at: string
          id: string
          target_id: string
          target_type: string
          user_id: string
          vote_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          target_id: string
          target_type: string
          user_id: string
          vote_type: string
        }
        Update: {
          created_at?: string
          id?: string
          target_id?: string
          target_type?: string
          user_id?: string
          vote_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
