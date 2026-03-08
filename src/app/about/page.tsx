import { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
    title: "About Us | WinCore AI",
    description: "WinCore AI is part of WinCore.lk, based in Colombo. We work with clients globally. Certified accountants and tech specialists. 95%+ client satisfaction. BPO and automation with compliance-aware delivery.",
};

export default function AboutPage() {
    return <AboutContent />;
}
