import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please email directly at shivam.pokharkar18@gmail.com" },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["shivam.pokharkar18@gmail.com"],
        reply_to: email,
        subject: `[Portfolio] ${subject ?? "New Message"} — from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f1f5f9; padding: 32px; border-radius: 12px;">
            <div style="border-left: 4px solid #c4962d; padding-left: 16px; margin-bottom: 24px;">
              <h2 style="color: #c4962d; margin: 0 0 4px; font-size: 20px;">New Portfolio Contact</h2>
              <p style="color: #94a3b8; margin: 0; font-size: 13px;">Via shivam-pokharkar.vercel.app</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #94a3b8; width: 100px;">Name</td><td style="color: #f1f5f9; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #94a3b8;">Subject</td><td style="color: #f1f5f9;">${subject ?? "—"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.04); border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <p style="color: #f1f5f9; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
