import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | WinCore AI",
    description: "Real-world examples of how we solve complex business problems with AI and automation. 95% efficiency gains and zero compliance errors.",
    alternates: {
        canonical: "/case-studies",
    },
    openGraph: {
        title: "Case Studies | WinCore AI",
        description: "Real-world examples of how we solve complex business problems with AI and automation.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies | WinCore AI",
        description: "95% efficiency gains and zero compliance errors.",
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
