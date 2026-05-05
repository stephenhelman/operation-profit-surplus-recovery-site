import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  confirmationSubject,
  confirmationHtml,
} from "@/emails/confirmationTemplate";
import { adminSubject, adminHtml } from "@/emails/adminNotificationTemplate";

const ADMIN_EMAIL = "noreply@operationprofitllc.com";
const FROM_ADDRESS =
  "Operation Profit Asset Recovery <recovery@operationprofitllc.com>";

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
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const params = { name, email, phone: phone || undefined, message };

    await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: confirmationSubject(),
        html: confirmationHtml(params),
      }),
      resend.emails.send({
        from: ADMIN_EMAIL,
        to: FROM_ADDRESS,
        reply_to: email,
        subject: adminSubject(name),
        html: adminHtml(params),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
