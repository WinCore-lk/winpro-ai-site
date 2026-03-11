import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights | WinCore AI",
    description: "Read the latest on AI automation, BPO workflows, and case studies. WinCore AI delivers practical solutions for modern enterprises.",
    openGraph: {
        title: "Blog & Insights | WinCore AI",
        description: "Read the latest on AI automation, BPO workflows, and case studies.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Insights | WinCore AI",
        description: "Read the latest on AI automation, BPO workflows, and case studies.",
        images: ["/og-image.png"],
    }
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
