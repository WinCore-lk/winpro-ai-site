import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | WinCore AI",
    description: "Book a free discovery call to audit your workflows and design a custom AI roadmap. Colombo-based, global delivery.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Us | WinCore AI",
        description: "Book a free discovery call to audit your workflows and design a custom AI roadmap.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | WinCore AI",
        description: "Book a free discovery call and design a custom AI roadmap.",
        images: ["/og-image.png"],
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
