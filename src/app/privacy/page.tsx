import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | WinCore AI",
    description: "Privacy Policy for WinCore AI. How we handle and protect your data with clinical precision.",
    openGraph: {
        title: "Privacy Policy | WinCore AI",
        description: "How we handle and protect your data with clinical precision.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | WinCore AI",
        description: "How we handle and protect your data.",
        images: ["/og-image.png"],
    }
};

export default function PrivacyPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="max-w-4xl mx-auto w-full">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium mb-10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to home
                    </Link>

                    <div className="space-y-12">
                        <div>
                            <h1 className="section-heading mb-6 text-white text-4xl font-bold">Privacy Policy</h1>
                            <p className="text-gray-400 text-sm">Last updated: March 11, 2026</p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                                <p className="leading-relaxed">
                                    At WinCore AI, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our AI and BPO services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
                                <p className="leading-relaxed">
                                    We may collect information that you provide directly to us, such as your name, email address, company details, and any information provided through our contact forms or during service consultations.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
                                <p className="leading-relaxed">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide, maintain, and improve our services.</li>
                                    <li>Communicate with you regarding inquiries and service updates.</li>
                                    <li>Ensure compliance with legal and regulatory requirements.</li>
                                    <li>Analyze website usage to improve user experience.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">4. AI and Data Processing</h2>
                                <p className="leading-relaxed">
                                    As an AI automation provider, we handle data with clinical precision. We do not use client confidential data to train general models unless explicitly agreed upon. Any data processed through our AI workflows is handled according to strict security protocols.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">5. Data Security</h2>
                                <p className="leading-relaxed">
                                    We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
                                <p className="leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@wincore.lk" className="text-sky-400 hover:underline">info@wincore.lk</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
