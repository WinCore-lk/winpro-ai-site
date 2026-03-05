import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // In a real application, you would integrate Resend or SMTP here:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: 'hello@winpro.ai',
        //   subject: `New Inquiry from ${body.firstName} ${body.lastName}`,
        //   text: body.message,
        // });

        console.log("New contact form submission:", body);

        // Simulated network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Inquiry successfully received" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Failed to process inquiry" },
            { status: 500 }
        );
    }
}
