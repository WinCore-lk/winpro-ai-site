import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | WinCore AI",
    description: "Proof of excellence in complex AI implementations. Tangible ROI from automating customer support, invoice processing, and compliance workflows.",
    openGraph: {
        title: "Case Studies | WinCore AI",
        description: "Proof of excellence in complex AI implementations. Tangible ROI from automating customer support, invoice processing, and compliance workflows.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies | WinCore AI",
        description: "Proof of excellence in complex AI implementations. Tangible ROI from automating customer support, invoice processing, and compliance workflows.",
        images: ["/og-image.png"],
    }
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
