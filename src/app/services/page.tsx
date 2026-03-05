import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, BrainCircuit, Activity, LineChart, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Services | Winpro AI",
    description: "Explore Winpro AI's range of artificial intelligence services, from workflow automation to predictive learning models.",
};

const services = [
    {
        title: "AI Automation",
        slug: "ai-automation",
        description: "Business workflow automation using agentic models to reduce manual labor.",
        icon: <Activity className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "AI Chatbots",
        slug: "ai-chatbots",
        description: "Next-gen customer service bots that integrate directly with your databases.",
        icon: <Bot className="w-8 h-8 text-indigo-400" />,
    },
    {
        title: "Machine Learning Solutions",
        slug: "machine-learning-solutions",
        description: "Predictive analytics to empower data-driven decisions at scale.",
        icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
    },
    {
        title: "Computer Vision",
        slug: "computer-vision",
        description: "Advanced image and video analysis for quality control and security.",
        icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    },
    {
        title: "Data Intelligence",
        slug: "data-intelligence",
        description: "Business insights and customized analytics dashboards.",
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "AI Consulting",
        slug: "ai-consulting",
        description: "Strategic planning for AI adoption across enterprise divisions.",
        icon: <LineChart className="w-8 h-8 text-rose-400" />,
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-[10%] inset-x-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10 w-full">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive artificial intelligence and automation services designed to modernize and scale your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white/5 border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardContent className="p-8 relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-flex w-fit">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 flex-grow leading-relaxed">{service.description}</p>
                                <Link href={`/services/${service.slug}`} className="mt-6 text-blue-400 font-medium inline-flex items-center hover:text-blue-300 transition-colors">
                                    View Details →
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden mt-20">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">We understand that every business is different. Let's discuss a tailored approach specifically engineered for your operations.</p>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-14 text-lg font-semibold" asChild>
                            <Link href="/contact">Contact Our Experts</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
