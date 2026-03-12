import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Activity, Bot, LineChart, BarChart3, FileText, Zap } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = serviceDetails[resolvedParams.slug];
    if (!service) return { title: "Service | WinCore AI" };
    
    const title = `${service.title} | WinCore AI`;
    const description = `${service.subtitle}. ${service.content.slice(0, 160)}...`;
    
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            images: [service.imageUrl],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [service.imageUrl],
        }
    };
}

interface ServiceDetail {
    title: string;
    subtitle: string;
    content: string;
    features: string[];
    imageUrl: string;
    icon: any;
    color: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
    "ai-automation": {
        title: "Process Automation & Workflows",
        subtitle: "Eliminate repetitive tasks and boost operational efficiency.",
        content: "We automate repetitive BPO and finance tasks to deliver immediate ROI. From automated invoice processing to complex approval workflows, we build systems that handle the heavy lifting. Our solutions integrate seamlessly with your existing tools like ERPs, spreadsheets, and legacy systems. We focus on practical, high-impact automation that cuts manual processing time by up to 70%.",
        features: [
            "Data extraction from invoices and PDFs",
            "Automated approval & compliance workflows",
            "Payroll and EPF/ETF automation pipelines",
            "Cross-platform integrations (Zapier, Make, n8n)",
            "Error reduction and audit logging"
        ],
        imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
        icon: Activity,
        color: "blue"
    },
    "ai-chatbots": {
        title: "Intelligent Chatbots",
        subtitle: "24/7 AI-powered support for your clients and team.",
        content: "Deploy sophisticated chatbots that understand your specific business context. Using Retrieval-Augmented Generation (RAG), we train bots on your unique knowledge base, policies, and FAQs. Whether it's a client-facing assistant on WhatsApp or an internal HR tool for payroll queries, our bots provide accurate, instant responses tailored to your operational rules.",
        features: [
            "Context-aware RAG implementation",
            "Multi-channel deployment (WhatsApp, Web, Slack)",
            "Integration with internal knowledge bases",
            "Lead qualification and data capture",
            "Human-in-the-loop escalation paths"
        ],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
        icon: Bot,
        color: "indigo"
    },
    "ai-consulting": {
        title: "AI Strategy & Process Audits",
        subtitle: "A clear roadmap for your digital transformation.",
        content: "Don't guess where to start. We audit your existing processes—from bookkeeping to compliance—to identify bottlenecks and high-impact automation targets. You'll receive a comprehensive roadmap with tool recommendations, cost-benefit analysis, and a phased implementation plan. We focus on quick wins that provide immediate value while building towards a long-term AI strategy.",
        features: [
            "End-to-end process mapping and auditing",
            "ROI-focused automation roadmap",
            "Tool selection and cost optimization",
            "Compliance and security risk assessment",
            "Strategic AI adoption workshops"
        ],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
        icon: LineChart,
        color: "rose"
    },
    "data-intelligence": {
        title: "Smart Reporting & Dashboards",
        subtitle: "Turn your raw data into actionable business intelligence.",
        content: "Stop fighting with spreadsheets. We build automated data pipelines that pull from your ERP, Excel, and other sources to generate live, insightful dashboards. Monitor cashflow trends, detect expense anomalies, and track compliance risks in real-time. Our solutions use modern BI tools enhanced with AI to provide clarity that helps executive teams make faster, better decisions.",
        features: [
            "Automated data consolidation from multiple sources",
            "Live interactive dashboards (Power BI, Looker)",
            "AI-driven anomaly detection in expenses",
            "Predictive cashflow and variance analysis",
            "Automated executive report generation"
        ],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        icon: BarChart3,
        color: "cyan"
    },
    "document-processing": {
        title: "Document Processing (OCR)",
        subtitle: "High-accuracy data extraction for complex documentation.",
        content: "Convert unstructured documents into structured data automatically. We implement advanced Intelligent Document Processing (IDP) to read and extract data from invoices, payslips, and legal contracts. By integrating OCR with LLMs, we can interpret complex layouts and handwritten notes, feeding the extracted information directly into your accounting or CRM systems.",
        features: [
            "Advanced OCR with LLM-based interpretation",
            "Invoices, payslips, and contract extraction",
            "Automated data validation and cleaning",
            "Direct integration with ERP and BPO flows",
            "99%+ accuracy for structured documentation"
        ],
        imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop",
        icon: FileText,
        color: "purple"
    }
};

export function generateStaticParams() {
    return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = serviceDetails[resolvedParams.slug];

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Button asChild variant="outline">
                    <Link href="/services">Return to Services</Link>
                </Button>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[50rem] h-[30rem] bg-sky-500/[0.05] blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[30rem] bg-gold/[0.02] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad pt-28">
                <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                    <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to all services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-12">
                             <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-12 border border-white/5 group">
                                <Image 
                                    src={service.imageUrl} 
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                                            Service Detail
                                        </div>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                                        {service.title}
                                    </h1>
                                </div>
                             </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                                <p className="text-xl text-gray-300 font-medium leading-relaxed mb-6">
                                    {service.subtitle}
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {service.content}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6">Why work with us on this?</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Specialized domain expertise in BPO & Finance",
                                        "Rapid implementation (weeks, not months)",
                                        "Transparent pricing with no hidden fees",
                                        "Seamless integration with your current tech stack"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                                            <span className="text-gray-400 text-sm">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="card-surface p-8 sticky top-28 bg-white/[0.02]">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-sky-500 rounded-full" />
                                    Key Capabilities
                                </h3>
                                <div className="space-y-6">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-400 group-hover:text-white" />
                                            </div>
                                            <span className="text-gray-300 text-base leading-tight font-medium group-hover:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <Button size="lg" variant="gold" className="rounded-xl px-8 h-14 font-bold w-full shadow-xl shadow-gold/5 hover:scale-[1.02] transition-all" asChild>
                                        <Link href="/contact">Discuss this project</Link>
                                    </Button>
                                    <p className="text-center text-[11px] text-gray-500 mt-4 uppercase tracking-widest font-bold">
                                        Free 30-min strategy call
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
