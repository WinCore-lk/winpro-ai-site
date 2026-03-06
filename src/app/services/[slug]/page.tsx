import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const title = resolvedParams.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return {
        title: `${title} | WinCore AI`,
        description: `Detailed information about our ${title} capabilities.`
    };
}

const serviceDetails: Record<string, { title: string, subtitle: string, content: string, features: string[] }> = {
    "ai-automation": {
        title: "AI Automation",
        subtitle: "Streamline operations with agentic models",
        content: "We design and deploy autonomous AI agents capable of handling complex, multi-step workflows. By integrating directly into your ERP, CRM, and internal databases, our automation systems act as a 24/7 digital workforce, eliminating human error in repetitive tasks.",
        features: ["End-to-end workflow automation", "Custom agentic modeling", "ERP/CRM integration", "Reduced operational costs"]
    },
    "ai-chatbots": {
        title: "AI Chatbots",
        subtitle: "Intelligent, context-aware conversational agents",
        content: "Our custom LLM-based chatbots go far beyond standard query-matching. We build context-aware conversational systems empowered with Retrieval-Augmented Generation (RAG) to instantly answer complex customer support inquiries using your secure, proprietary data.",
        features: ["RAG architecture implementation", "Multi-platform integration (Web, Slack, Teams)", "Contextual memory", "Seamless human hand-off"]
    },
    "machine-learning-solutions": {
        title: "Machine Learning Solutions",
        subtitle: "Predictive power at scale",
        content: "Turn historical data into future certainty. We train bespoke machine learning models to detect anomalies, optimize pricing dynamically, and forecast demand with high precision, tailored to your specific industry constraints.",
        features: ["Custom model training", "Predictive maintenance", "Demand forecasting", "Algorithm auditing & tuning"]
    },
    "computer-vision": {
        title: "Computer Vision",
        subtitle: "Advanced spatial intelligence",
        content: "Deploy state-of-the-art visual recognition systems. We implement computer vision pipelines capable of real-time object tracking, automated quality control on manufacturing lines, and advanced facial recognition systems for secure access.",
        features: ["Real-time video analysis", "Automated defect detection", "Spatial tracking", "Edge AI deployment"]
    },
    "data-intelligence": {
        title: "Data Intelligence",
        subtitle: "Clarity amidst noise",
        content: "Extract actionable meaning from massive unstructured datasets. We build robust ETL pipelines and elegant, real-time analytics dashboards that give executive teams complete visibility over their operations.",
        features: ["Unstructured data parsing", "Real-time dashboarding", "Big data ETL architecture", "Automated reporting"]
    },
    "ai-consulting": {
        title: "AI Consulting",
        subtitle: "Strategic roadmap to intelligence",
        content: "Don't adopt AI because it's a trend; adopt it where it drives ROI. Our technical strategists will audit your existing infrastructure, identify high-impact AI use cases, and design a secure, scalable roadmap for adoption.",
        features: ["Infrastructure audits", "ROI analysis", "Proof-of-concept development", "Executive technical training"]
    }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = serviceDetails[resolvedParams.slug];

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Button asChild variant="outline">
                    <Link href="/services">Return to Services</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full relative">
                <div className="mb-10">
                    <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to all services
                    </Link>
                </div>

                <div className="space-y-12">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            {service.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl">
                            {service.subtitle}
                        </p>
                    </div>

                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-400 leading-relaxed text-lg sm:text-xl">
                            {service.content}
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl mt-8 sm:mt-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Key Capabilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-base sm:text-lg leading-snug">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center pb-10">
                        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500">
                            <Button size="lg" className="bg-black hover:bg-black/80 text-white rounded-full px-12 h-16 text-lg w-full sm:w-auto" asChild>
                                <Link href="/contact">Discuss this with our team</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
