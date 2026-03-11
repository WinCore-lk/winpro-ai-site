import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | WinCore AI",
    description: "Terms of Service for WinCore AI. Guidelines and agreements for using our services.",
    openGraph: {
        title: "Terms of Service | WinCore AI",
        description: "Guidelines and agreements for using our services.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | WinCore AI",
        description: "Guidelines and agreements for using our services.",
        images: ["/og-image.png"],
    }
};

export default function TermsPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[40rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="max-w-4xl mx-auto w-full">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium mb-10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to home
                    </Link>

                    <div className="space-y-12">
                        <div>
                            <h1 className="section-heading mb-6 text-white text-4xl font-bold">Terms of Service</h1>
                            <p className="text-gray-400 text-sm">Last updated: March 11, 2026</p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
                                <p className="leading-relaxed">
                                    By accessing or using the services provided by WinCore AI ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">2. Services Description</h2>
                                <p className="leading-relaxed">
                                    WinCore AI provides AI automation, BPO consulting, and custom software development services. We reserve the right to modify or discontinue any aspect of our services at any time.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">3. User Responsibilities</h2>
                                <p className="leading-relaxed">
                                    You are responsible for ensuring that all information provided to us is accurate and that your use of our services complies with all applicable laws and regulations.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">4. Intellectual Property</h2>
                                <p className="leading-relaxed">
                                    All content, technology, and materials provided as part of our services remain the intellectual property of WinCore AI or its licensors, unless otherwise specified in a separate service agreement.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
                                <p className="leading-relaxed">
                                    To the maximum extent permitted by law, WinCore AI shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">6. Governing Law</h2>
                                <p className="leading-relaxed">
                                    These terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law principles.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">7. Changes to Terms</h2>
                                <p className="leading-relaxed">
                                    We may update these Terms of Service from time to time. Your continued use of our services after any changes constitutes acceptance of the new terms.
                                </p>
                            </section>

                            <p className="pt-8 text-sm italic">
                                For inquiries regarding these terms, please reach out to <a href="mailto:info@wincore.lk" className="text-sky-400 hover:underline">info@wincore.lk</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
