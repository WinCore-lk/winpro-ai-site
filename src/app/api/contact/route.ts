import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------
//  Build a reusable SMTP transporter from .env.local variables.
//  SMTP_USER  = your Gmail address
//  SMTP_PASS  = your Gmail App Password (16-char, from Google)
// ---------------------------------------------------------------
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== "false", // true by default (port 465)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// ---------------------------------------------------------------
//  Helper: shared "from" label shown in the email client
// ---------------------------------------------------------------
const FROM = `"${process.env.EMAIL_FROM_NAME || "WinCore AI"}" <${process.env.SMTP_USER}>`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, company, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`;
        const companyLine = company ? `<strong>Company:</strong> ${company}<br/>` : "";

        // -------------------------------------------------------
        //  EMAIL 1 — Admin notification
        //  Receives every inquiry with full details
        // -------------------------------------------------------
        const adminMailOptions = {
            from: FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `🔔 New Inquiry from ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1a3a5c, #0d3d2e); padding: 32px 40px;">
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">New Contact Inquiry</h1>
                        <p style="margin: 8px 0 0; color: #a3b8c8; font-size: 14px;">Received via WinCore AI Contact Form</p>
                    </div>
                    <div style="padding: 32px 40px; border: 1px solid #1e1e1e; border-top: none;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px; width: 140px;">Full Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #fff; font-size: 15px; font-weight: 600;">${fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td>
                            </tr>
                            ${company ? `
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px;">Company</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #fff;">${company}</td>
                            </tr>` : ""}
                            <tr>
                                <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
                                <td style="padding: 12px 0; color: #d1d5db; line-height: 1.7; white-space: pre-wrap;">${message}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 32px; padding: 16px; background: #111; border-radius: 8px; border: 1px solid #1e1e1e;">
                            <p style="margin: 0; font-size: 12px; color: #555;">
                                Sent automatically by the WinCore AI contact form.
                                Reply directly to <a href="mailto:${email}" style="color: #60a5fa;">${email}</a> to respond to this inquiry.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            // Set reply-to so clicking "Reply" in the email client goes to the inquirer
            replyTo: email,
        };

        // -------------------------------------------------------
        //  EMAIL 2 — Merchant / team notification
        //  Same data, slightly different subject line
        // -------------------------------------------------------
        const merchantMailOptions = {
            from: FROM,
            to: process.env.MERCHANT_EMAIL,
            subject: `📬 Inquiry Alert: ${fullName} (${company || "No company"})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1a1a3e, #0d3d2e); padding: 32px 40px;">
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">New Inquiry Alert</h1>
                        <p style="margin: 8px 0 0; color: #a3b8c8; font-size: 14px;">A potential client has reached out via WinCore AI</p>
                    </div>
                    <div style="padding: 32px 40px; border: 1px solid #1e1e1e; border-top: none;">
                        <p style="color: #9ca3af; font-size: 15px; margin-top: 0;">
                            Hi there 👋, <strong style="color: #fff;">${fullName}</strong> just submitted an inquiry. Here are the details:
                        </p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #fff; font-weight: 600;">${fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e;"><a href="mailto:${email}" style="color: #34d399;">${email}</a></td>
                            </tr>
                            ${company ? `
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px;">Company</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #fff;">${company}</td>
                            </tr>` : ""}
                            <tr>
                                <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Project Details</td>
                                <td style="padding: 12px 0; color: #d1d5db; line-height: 1.7; white-space: pre-wrap;">${message}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 32px; text-align: center;">
                            <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3b82f6, #10b981); color: #fff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 15px;">
                                Reply to ${firstName}
                            </a>
                        </div>
                        <div style="margin-top: 24px; padding: 16px; background: #111; border-radius: 8px; border: 1px solid #1e1e1e;">
                            <p style="margin: 0; font-size: 12px; color: #555;">
                                This is an automated notification from WinCore AI.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            replyTo: email,
        };

        // -------------------------------------------------------
        //  Send BOTH emails concurrently
        // -------------------------------------------------------
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(merchantMailOptions),
        ]);

        console.log(`[Contact] Emails sent for inquiry from ${fullName} <${email}>`);

        return NextResponse.json(
            { message: "Inquiry successfully received. Emails have been dispatched." },
            { status: 200 }
        );
    } catch (error) {
        console.error("[Contact] Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send inquiry. Please try again later." },
            { status: 500 }
        );
    }
}
