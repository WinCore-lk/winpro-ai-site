import { NextResponse } from "next/server";
import { sendNewsletterNotification } from "@/lib/newsletter-utils";

/**
 * MOCK BLOG PUBLISH API
 * This endpoint demonstrates how to automatically trigger newsletter emails
 * when a new blog post is officially published/added.
 */
export async function POST(req: Request) {
    try {
        const { title, excerpt, slug, secretKey } = await req.json();

        // 1. Basic security check (should use a real API key in production)
        if (secretKey !== process.env.BLOG_PUBLISH_SECRET) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2. Here you would normally save the post to your DB (Firebase/Firestore)
        console.log(`Publishing blog post: ${title}`);

        // 3. Trigger the automated newsletter notification
        // This fetches all active subscribers from Firebase (Firestore) and sends them an email via SMTP
        await sendNewsletterNotification({
            title,
            excerpt,
            slug,
        });

        return NextResponse.json({ 
            message: "Post published and newsletter sent successfully!" 
        }, { status: 200 });

    } catch (err) {
        console.error("Publishing error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
