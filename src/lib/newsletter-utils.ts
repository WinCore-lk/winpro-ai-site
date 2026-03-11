import nodemailer from "nodemailer";
import admin from "firebase-admin";
import { db } from "./firebase-admin";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

interface BlogPost {
    title: string;
    excerpt: string;
    slug: string;
    imageUrl?: string;
}

export async function sendNewsletterNotification(post: BlogPost) {
    try {
        // 1. Fetch all active subscribers from Firestore
        const subscribersSnapshot = await db.collection("subscribers")
            .where("status", "==", "active")
            .get();

        if (subscribersSnapshot.empty) {
            console.log("No active subscribers found.");
            return;
        }

        const emails = subscribersSnapshot.docs.map(doc => doc.data().email);
        const postUrl = `https://wincore.ai/blog/${post.slug}`;

        // 2. Prepare email content
        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.SMTP_USER}>`,
            bcc: emails, // Use BCC to hide list members from each other
            subject: `New from WinCore AI: ${post.title}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #ffffff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #ffffff; margin-bottom: 20px;">${post.title}</h1>
                    <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        ${post.excerpt}
                    </p>
                    <a href="${postUrl}" style="display: inline-block; background: #D4AF37; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 10px; font-weight: bold;">
                        Read Full Article
                    </a>
                    <hr style="border: 0; border-top: 1px solid #ffffff1a; margin: 40px 0;">
                    <p style="font-size: 12px; color: #4b5563;">
                        You received this because you subscribed to the WinCore AI newsletter.
                    </p>
                </div>
            `,
        };

        // 3. Send email
        await transporter.sendMail(mailOptions);
        console.log(`Newsletter notification sent to ${emails.length} subscribers for: ${post.title}`);
    } catch (err) {
        console.error("Failed to send newsletter notification:", err);
    }
}
