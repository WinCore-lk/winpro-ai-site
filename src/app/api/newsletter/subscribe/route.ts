import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Insert email into 'subscribers' table
        const { error } = await supabase
            .from("subscribers")
            .upsert({ email, subscribed_at: new Date().toISOString() }, { onConflict: "email" });

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: "Failed to subscribe. Please try again." },
                { status: 500 }
            );
        }

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
