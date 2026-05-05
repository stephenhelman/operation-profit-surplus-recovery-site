import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, honeypot } = body;

    // Honeypot: bots fill this hidden field; humans leave it empty
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "OP Contact Form <onboarding@resend.dev>",
      to: "placeholder@operationprofitllc.com",
      reply_to: email,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #0A0A0A; margin-bottom: 4px;">New Contact Submission</h2>
          <p style="color: #666; margin-top: 0; margin-bottom: 24px; font-size: 14px;">Operation Profit Asset Recovery</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #0A0A0A; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #0A0A0A;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${email}</td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #0A0A0A;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${phone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 12px 10px 0; font-weight: bold; color: #0A0A0A; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Submitted via operationprofitllc.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
