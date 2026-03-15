import { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
    title: "About Us | WinCore AI",
    description: "WinCore AI is part of WinCore.lk, based in Colombo. We work with clients globally. Certified accountants and tech specialists providing BPO and automation with clinical precision.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us | WinCore AI",
        description: "Certified accountants and tech specialists providing BPO and automation with clinical precision.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | WinCore AI",
        description: "BPO and automation with clinical precision.",
        images: ["/og-image.png"],
    }
};

export default function AboutPage() {
    return <AboutContent />;
}
