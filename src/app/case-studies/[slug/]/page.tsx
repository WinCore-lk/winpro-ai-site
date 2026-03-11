import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, FileText, Code, Users, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const study = caseStudyDetails[resolvedParams.slug];
    if (!study) return { title: "Case Study | WinCore AI" };
    
    const title = `${study.title} | WinCore AI`;
    const description = study.problem.slice(0, 160) + "...";
    
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            images: [study.imageUrl],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [study.imageUrl],
        }
    };
}

interface CaseStudyDetail {
    title: string;
    client: string;
    problem: string;
    solution: string;
    impact: string;
    tech: string[];
    imageUrl: string;
    results: { label: string; value: string; icon: any }[];
}

const caseStudyDetails: Record<string, CaseStudyDetail> = {
    "invoice-automation": {
        title: "Automated Invoice Processing",
        client: "Regional Logistics Firm",
        problem: "A regional logistics provider was struggling with manual data entry for over 500 invoices weekly. Each invoice took approximately 10 minutes to process, leading to delays in supplier payments and frequent human errors in price validation.",
        solution: "We implemented an Intelligent Document Processing (IDP) pipeline. Using AWS Textract for OCR and GPT-4o for document semantic understanding, the system automatically extracts line items, validates tax IDs, and cross-references prices with historical data before pushing the clean records into their ERP via a custom API connector.",
        impact: "The client transitioned from 80+ man-hours per week down to just 4 hours of periodic verification. This allowed their finance team to focus on strategic reporting rather than mundane data entry.",
        tech: ["Python", "AWS Textract", "GPT-4o", "Make.com", "Custom API"],
        imageUrl: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Efficiency Boost", value: "95%", icon: Zap },
            { label: "Data Accuracy", value: "99.9%", icon: ShieldCheck },
            { label: "Cost Reduction", value: "60%", icon: TrendingUp },
            { label: "Processing Time", value: "-80%", icon: Clock },
        ]
    },
    "support-ai-rag": {
        title: "Customer Support Automation",
        client: "SaaS Enterprise",
        problem: "With a growing global user base, the support team was receiving hundreds of Tier 1 queries (password resets, simple how-tos) daily. Response times were slipping into 12+ hours, causing customer churn and team burnout.",
        solution: "We deployed a RAG (Retrieval-Augmented Generation) based AI assistant integrated directly with their documentation and past ticket history. The bot was deployed across WhatsApp and their web dashboard, providing instant, accurate answers while knowing exactly when to escalate complex issues to human agents.",
        impact: "Instant resolution for 65% of all incoming tickets. The human support team now handles only high-value, complex consultations, leading to a 40% improvement in Net Promoter Score (NPS).",
        tech: ["LangChain", "Pinecone", "Next.js", "WhatsApp API", "FastAPI"],
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Ticket Deflection", value: "65%", icon: Users },
            { label: "Resolution Time", value: "< 2s", icon: Zap },
            { label: "Team Productivity", value: "+40%", icon: TrendingUp },
            { label: "Client Satisfaction", value: "94%", icon: ShieldCheck },
        ]
    },
    "vat-compliance-monitor": {
        title: "Automated VAT Filing Reminders",
        client: "Accounting & BPO Provider",
        problem: "Managing VAT compliance for 100+ clients across different industries was a manual nightmare. The risk of RAMIS filing penalties was high, and the BPO team spent most of their time chasing clients for missing documentation via unsynchronized email threads.",
        solution: "We built a centralized Compliance Orchestration Engine. The system automatically fetches filing deadlines, checks for uploaded documentation in the client portal, and triggers automated, personalized urgency-based reminders via email and WhatsApp if documents are missing as deadlines approach.",
        impact: "Zero penalties incurred since implementation. The compliance team now manages 3x the client load with 50% less administrative overhead.",
        tech: ["Node.js", "PostgreSQL", "SendGrid", "WhatsApp Cloud API", "Custom Dashboard"],
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Penalty Rate", value: "0%", icon: ShieldCheck },
            { label: "Process Velocity", value: "3x", icon: Zap },
            { label: "Compliance Rate", value: "100%", icon: CheckCircle2 },
            { label: "Admin Savings", value: "90%", icon: Clock },
        ]
    }
};

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const study = caseStudyDetails[resolvedParams.slug];

    if (!study) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">Case Study Not Found</h1>
                <Button asChild variant="gold">
                    <Link href="/case-studies">Return to Case Studies</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[50rem] h-[30rem] bg-sky-500/[0.05] blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[30rem] bg-gold/[0.02] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad pt-28">
                <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
                    <Link href="/case-studies" className="inline-flex items-center text-gray-400 hover:text-gold transition-colors text-sm font-medium mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to case studies
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                        <div className="lg:col-span-12">
                             <div className="relative h-[25rem] md:h-[35rem] w-full rounded-[2.5rem] overflow-hidden mb-12 border border-white/5 shadow-2xl group">
                                <Image 
                                    src={study.imageUrl} 
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                                            Engineering Excellence
                                        </div>
                                        <span className="text-white/40 text-sm font-medium tracking-widest">{study.client}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                                        {study.title}
                                    </h1>
                                </div>
                             </div>
                        </div>

                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-sky-400">
                                    <div className="h-px w-8 bg-sky-400/30" />
                                    <span className="text-xs font-bold uppercase tracking-widest">01 / The Challenge</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">The Problem Space</h2>
                                <p className="text-xl text-gray-300 font-medium leading-relaxed">
                                    {study.problem}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-gold">
                                    <div className="h-px w-8 bg-gold/30" />
                                    <span className="text-xs font-bold uppercase tracking-widest">02 / The Solution</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">Engineering the Outcome</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {study.solution}
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {study.impact}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="text-xl font-bold text-white mb-8">Technical Stack</h3>
                                <div className="flex flex-wrap gap-3">
                                    {study.tech.map((t) => (
                                        <div key={t} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-mono text-sky-300">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="sticky top-28 space-y-8">
                                <div className="card-blueprint p-8 bg-white/[0.01]">
                                    <div className="blueprint-corner corner-tl" />
                                    <div className="blueprint-corner corner-br" />
                                    
                                    <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-sky-400" />
                                        Performance Audit
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 gap-8">
                                        {study.results.map((result, i) => {
                                            const ResultIcon = result.icon;
                                            return (
                                                <div key={i} className="flex items-center gap-6 group">
                                                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                                        <ResultIcon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <div className="text-3xl font-black text-white group-hover:text-gold transition-colors">{result.value}</div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{result.label}</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5">
                                        <Button size="lg" variant="gold" className="w-full h-14 rounded-xl font-bold shadow-2xl shadow-gold/10 hover:scale-[1.02] transition-all" asChild>
                                            <Link href="/contact">Apply these results to your team</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-white font-bold mb-4">Need a similar solution?</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        Every workflow is unique. We provide a complimentary discovery call to audit your specific process and estimate potential ROI.
                                    </p>
                                    <Link href="/contact" className="text-gold text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        Book a Discovery Call <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
