import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, services, budget, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, services, budget });

    const emailResponse = await resend.emails.send({
      from: "Midiya <hamidirasim@gmail.com>",
      to: ["support@midiya.az"],
      subject: "Yeni təklif sorğusu - Midiya",
      html: `
        <h2>Yeni təklif sorğusu alındı</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Xidmətlər:</strong> ${services.join(", ")}</p>
        <p><strong>Büdcə:</strong> ${budget}</p>
        <h3>Mesaj:</h3>
        <p>${message}</p>
        
        <hr>
        <p><small>Bu email Midiya saytından avtomatik göndərilib.</small></p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(`Email göndərilə bilmədi: ${emailResponse.error.message}`);
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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