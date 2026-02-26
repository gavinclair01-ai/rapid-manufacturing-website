import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, quantity, notes, files } = body;

    if (!process.env.RESEND_API_KEY) {
      // Fallback if no Resend key — just acknowledge receipt
      console.log("Quote submission (no email configured):", body);
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Rapid Manufacturing Website <noreply@rapidmanufacturing.com.au>",
      to: "gavinclair01@gmail.com",
      replyTo: email,
      subject: `New Quote Request — ${company || name} (${service || "General"})`,
      html: `
        <h2>New Quote Request</h2>
        <table cellpadding="6" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${name || "—"}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email || "—"}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service || "—"}</td></tr>
          <tr><td><strong>Quantity</strong></td><td>${quantity || "—"}</td></tr>
          <tr><td><strong>Files</strong></td><td>${files?.length ? files.join(", ") : "None uploaded"}</td></tr>
          <tr><td><strong>Notes</strong></td><td>${notes || "—"}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;">Submitted via rapidmanufacturing.com.au</p>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: "Rapid Manufacturing <sales@rapidmanufacturing.com.au>",
      to: email,
      subject: "Quote Request Received — Rapid Manufacturing Australia",
      html: `
        <p>Hi ${name?.split(" ")[0] || "there"},</p>
        <p>Thanks for reaching out to Rapid Manufacturing. We've received your quote request and our team will review it and get back to you within <strong>2 business days</strong>.</p>
        <p>If you have any questions in the meantime, reply to this email or contact us at <a href="mailto:sales@rapidmanufacturing.com.au">sales@rapidmanufacturing.com.au</a>.</p>
        <br/>
        <p>Best regards,<br/>Rapid Manufacturing Australia</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
