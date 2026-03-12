import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { sendNewsletterNotification } from "@/lib/newsletter-utils";
import { rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

/**
 * MOCK BLOG PUBLISH API
 * This endpoint demonstrates how to automatically trigger newsletter emails
 * when a new blog post is officially published/added.
 */
export async function POST(req: Request) {
    try {
        const ip = (await headers()).get("x-forwarded-for")?.split(",")[0] ?? "unknown";
        if (!rateLimit(ip, 10, 60_000)) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }

        const { title, excerpt, slug, secretKey } = await req.json();

        // Fail closed: if the secret is not configured, reject all requests
        const expectedSecret = process.env.BLOG_PUBLISH_SECRET;
        if (!expectedSecret) {
            console.error("[Blog] BLOG_PUBLISH_SECRET is not configured");
            return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
        }

        // Timing-safe comparison to prevent timing attacks
        const provided = Buffer.from(String(secretKey ?? ""), "utf8");
        const expected = Buffer.from(expectedSecret, "utf8");
        const isValid =
            provided.length === expected.length &&
            timingSafeEqual(provided, expected);

        if (!isValid) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Basic input validation
        if (!title || !excerpt || !slug) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        console.log(`Publishing blog post: ${title}`);

        // Trigger the automated newsletter notification
        await sendNewsletterNotification({ title, excerpt, slug });

        return NextResponse.json({
            message: "Post published and newsletter sent successfully!"
        }, { status: 200 });

    } catch (err) {
        console.error("Publishing error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
