import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | WinCore AI",
    description: "Explore our expert automation capabilities: process pipelines, intelligent chatbots, data reporting, and predictive insights.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Services | WinCore AI",
        description: "Explore our expert automation capabilities: process pipelines, intelligent chatbots, data reporting, and predictive insights.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | WinCore AI",
        description: "Explore our expert automation capabilities: process pipelines, intelligent chatbots, data reporting, and predictive insights.",
        images: ["/og-image.png"],
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
