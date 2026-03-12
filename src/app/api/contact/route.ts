import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import admin from "firebase-admin";
import { db } from "@/lib/firebase-admin";

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
        //  EMAIL 1  -  Admin notification
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
        //  EMAIL 2  -  Merchant / team notification
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
                    </div>
                </div>
            `,
            replyTo: email,
        };

        // -------------------------------------------------------
        //  EMAIL 3  -  Customer confirmation
        //  Sent to the person who filled out the form
        // -------------------------------------------------------
        const customerMailOptions = {
            from: FROM,
            to: email,
            subject: `Confirmation: We've received your inquiry - WinCore AI`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212, 175, 55, 0.1);">
                    <div style="background: linear-gradient(135deg, #0a0a0f, #1a3a5c); padding: 40px; text-align: center; border-bottom: 1px solid rgba(212, 175, 55, 0.1);">
                        <div style="display: inline-block; padding: 12px; background: rgba(212, 175, 55, 0.1); border-radius: 12px; margin-bottom: 20px;">
                            <h2 style="margin:0; color: #D4AF37;">WinCore AI</h2>
                        </div>
                        <h1 style="margin: 0; font-size: 24px; color: #ffffff;">Hello ${firstName},</h1>
                        <p style="margin: 10px 0 0; color: #9ca3af; font-size: 16px;">We've successfully received your consultation request.</p>
                    </div>
                    <div style="padding: 40px;">
                        <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin-top: 0;">
                            Thank you for reaching out to WinCore AI. Our team is currently reviewing your project details, and one of our AI architects will get back to you within the next 24 business hours.
                        </p>
                        <div style="margin: 30px 0; padding: 25px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <h3 style="margin-top: 0; color: #D4AF37; font-size: 14px; text-transform: uppercase; tracking: 0.1em;">Next Steps</h3>
                            <ul style="color: #9ca3af; padding-left: 20px; font-size: 15px; margin-bottom: 0;">
                                <li>Technical Review of your requirements</li>
                                <li>Scheduling a brief discovery call (if needed)</li>
                                <li>Drafting a tailored AI strategy roadmap</li>
                            </ul>
                        </div>
                        <p style="color: #9ca3af; font-size: 14px;">
                            While you wait, feel free to explore our <a href="https://wincore.ai/case-studies" style="color: #3b82f6; text-decoration: none;">latest case studies</a> to see how we've helped companies like yours.
                        </p>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.05); margin: 30px 0;" />
                        <p style="margin: 0; font-size: 14px; text-align: center; color: #4b5563;">
                            WinCore AI &bull; Intelligent Automation Systems
                        </p>
                    </div>
                </div>
            `,
        };


        // -------------------------------------------------------
        //  Send ALL emails and store in Firestore concurrently
        // -------------------------------------------------------
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(merchantMailOptions),
            transporter.sendMail(customerMailOptions),
            db.collection("consultations").add({

                firstName,
                lastName,
                fullName,
                email: email.toLowerCase(),
                company: company || null,
                message,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                status: "new"
            })
        ]);

        console.log(`[Contact] Emails sent and inquiry stored for ${fullName} <${email}>`);

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
