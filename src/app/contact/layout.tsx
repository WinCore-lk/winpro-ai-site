import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | WinCore AI",
    description: "Contact WinCore AI: info@wincore.lk, +94 77 747 0904. Book a consultation. Practical AI and BPO automation  -  based in Colombo, serving clients globally.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
