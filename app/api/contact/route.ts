import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "anshuman357main@gmail.com";
    const emailSubject = subject ? `[Portfolio Contact] ${subject}` : `New Portfolio Message from ${name}`;

    // 1. Resend API Integration
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Anshuman Portfolio <onboarding@resend.dev>",
        to: [receiverEmail],
        replyTo: email,
        subject: emailSubject,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px;">
              New Message from Portfolio Website
            </h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message Content:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; rounded: 8px; border-left: 4px solid #0284c7; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("[RESEND_ERROR]", error);
        return NextResponse.json({ error: error.message || "Failed to send email via Resend." }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: "Email sent successfully via Resend API!" });
    }

    // 2. Gmail / Custom SMTP via Nodemailer
    if ((process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) || (process.env.SMTP_HOST && process.env.SMTP_USER)) {
      const nodemailer = await import("nodemailer");
      
      const transporter = nodemailer.createTransport(
        process.env.GMAIL_USER
          ? {
              service: "gmail",
              auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
              },
            }
          : {
              host: process.env.SMTP_HOST,
              port: Number(process.env.SMTP_PORT) || 587,
              secure: process.env.SMTP_SECURE === "true",
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
              },
            }
      );

      await transporter.sendMail({
        from: process.env.GMAIL_USER || process.env.SMTP_USER,
        to: receiverEmail,
        replyTo: email,
        subject: emailSubject,
        text: `Sender Name: ${name}\nSender Email: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px;">
              New Message from Portfolio Website
            </h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message Content:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; rounded: 8px; border-left: 4px solid #0284c7; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true, message: "Email dispatched via SMTP!" });
    }

    // 3. Web3Forms Integration
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: emailSubject,
          message,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        return NextResponse.json({ error: data.message || "Web3Forms submission failed." }, { status: 500 });
      }
      return NextResponse.json({ success: true, message: "Message dispatched via Web3Forms!" });
    }

    // 4. Default fallback: Log submission & request configuration
    console.log("[CONTACT_FORM_SUBMISSION]", {
      name,
      email,
      subject,
      message,
      receiverEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message was recorded! (Set RESEND_API_KEY or GMAIL_APP_PASSWORD in .env.local for instant email delivery)",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error occurred processing contact message." },
      { status: 500 }
    );
  }
}
