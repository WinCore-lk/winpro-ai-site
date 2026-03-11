import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | WinCore AI",
    description: "Contact WinCore AI: info@wincore.lk, +94 77 747 0904. Book a consultation. Practical AI and BPO automation  -  based in Colombo, serving clients globally.",
    openGraph: {
        title: "Contact | WinCore AI",
        description: "Practical AI and BPO automation  -  based in Colombo, serving clients globally.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | WinCore AI",
        description: "Practical AI and BPO automation  -  based in Colombo, serving clients globally.",
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
