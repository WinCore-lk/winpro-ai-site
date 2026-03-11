import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { db } from "@/lib/firebase-admin";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Store email in Firestore 'subscribers' collection
        // Using email as the document ID to prevent duplicates (acting like upsert)
        await db.collection("subscribers").doc(email.toLowerCase()).set({
            email: email.toLowerCase(),
            subscribed_at: admin.firestore.FieldValue.serverTimestamp(),
            status: "active"
        }, { merge: true });

        console.log(`[Newsletter] Subscribed: ${email}`);

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
