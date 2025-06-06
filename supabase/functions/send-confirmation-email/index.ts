
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  confirmationUrl: string;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, confirmationUrl, name }: EmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "KuzaSkills <noreply@resend.dev>",
      to: [email],
      subject: "🎉 Welcome to KuzaSkills - Confirm Your Email",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to KuzaSkills</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #16a34a 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🚀 Welcome to KuzaSkills!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your Digital Skills Journey Starts Here</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 20px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Hi ${name || 'there'}! 👋</h2>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #4b5563;">
                Thank you for joining KuzaSkills! We're excited to help you master digital skills and advance your career.
              </p>

              <p style="margin: 0 0 30px 0; font-size: 16px; color: #4b5563;">
                To get started, please confirm your email address by clicking the button below:
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="${confirmationUrl}" 
                   style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #16a34a 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  ✅ Confirm Your Email
                </a>
              </div>

              <!-- What's Next -->
              <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">🎯 What's waiting for you:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
                  <li style="margin-bottom: 8px;">📚 Access to premium digital skills courses</li>
                  <li style="margin-bottom: 8px;">🤝 1-on-1 mentorship with industry experts</li>
                  <li style="margin-bottom: 8px;">💬 Join our vibrant learning community</li>
                  <li style="margin-bottom: 8px;">🏆 Earn certificates and build your portfolio</li>
                  <li style="margin-bottom: 8px;">🤖 Get personalized guidance from our AI coach</li>
                </ul>
              </div>

              <p style="margin: 20px 0 0 0; font-size: 14px; color: #6b7280;">
                If you didn't create an account with KuzaSkills, you can safely ignore this email.
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                © 2024 KuzaSkills. Empowering digital careers across Africa.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
