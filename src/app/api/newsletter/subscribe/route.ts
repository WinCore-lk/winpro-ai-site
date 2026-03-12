import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import admin from "firebase-admin";
import { db } from "@/lib/firebase-admin";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const FROM = `"${process.env.EMAIL_FROM_NAME || "WinCore AI"}" <${process.env.SMTP_USER}>`;

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const subscriberEmail = email.toLowerCase();

        // 1. Prepare Emails
        const welcomeMailOptions = {
            from: FROM,
            to: subscriberEmail,
            subject: "Welcome to WinCore AI Newsletter",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212, 175, 55, 0.1);">
                    <div style="background: linear-gradient(135deg, #0a0a0f, #1e1e1e); padding: 40px; text-align: center; border-bottom: 1px solid rgba(212, 175, 55, 0.1);">
                        <h2 style="color: #D4AF37; margin: 0;">WinCore AI</h2>
                        <h3 style="color: #ffffff; margin-top: 10px;">Welcome to the matrix!</h3>
                    </div>
                    <div style="padding: 40px;">
                        <p style="color: #d1d5db; font-size: 16px; line-height: 1.6;">
                            Thanks for subscribing to our newsletter. You'll now be the first to know about new AI automation strategies, case studies, and industry insights.
                        </p>
                        <p style="color: #9ca3af; font-size: 14px;">
                            We promise to only send high-value content that helps your business grow.
                        </p>
                    </div>
                </div>
            `,
        };

        const adminNotifyOptions = {
            from: FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `New Newsletter Subscriber: ${subscriberEmail}`,
            html: `<h3>New Subscriber</h3><p>${subscriberEmail} just joined the mailing list.</p>`,
        };

        // 2. Concurrently store in DB and send emails
        await Promise.all([
            db.collection("subscribers").doc(subscriberEmail).set({
                email: subscriberEmail,
                subscribed_at: admin.firestore.FieldValue.serverTimestamp(),
                status: "active"
            }, { merge: true }),
            transporter.sendMail(welcomeMailOptions),
            transporter.sendMail(adminNotifyOptions)
        ]);

        console.log(`[Newsletter] Subscribed: ${subscriberEmail}`);

        return NextResponse.json(
            { message: "Subscribed successfully!" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Subscription error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
