"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, FileText, Code, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardHoverLines } from "@/components/card-hover-lines";

const caseStudies = [
    {
        title: "Automated Invoice Processing",
        slug: "invoice-automation",
        client: "Regional Logistics Firm",
        problem: "Manual invoice processing was taking 5+ hours per day, with frequent data entry errors into the ERP system.",
        solution: "We engineered an AI automation workflow that extracts invoice data using OCR and LLMs, validates it against purchase orders, and pushes it directly to the ERP.",
        tech: ["Python", "AWS Textract", "GPT-4o", "Make.com"],
        imageUrl: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Time Saved", value: "80%", icon: <Clock className="w-5 h-5" /> },
            { label: "Accuracy", value: "99.8%", icon: <CheckCircle2 className="w-5 h-5" /> },
        ],
    },
    {
        title: "Customer Support Automation",
        slug: "support-ai-rag",
        client: "SaaS Enterprise",
        problem: "Support teams were bogged down by repetitive Tier 1 queries, leading to slow response times for complex issues.",
        solution: "Implemented a RAG-based AI assistant trained on product documentation and past tickets to resolve common queries autonomously.",
        tech: ["LangChain", "Pinecone", "Next.js", "WhatsApp API"],
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Ticket Deflection", value: "65%", icon: <Users className="w-5 h-5" /> },
            { label: "Response Time", value: "< 2s", icon: <TrendingUp className="w-5 h-5" /> },
        ],
    },
    {
        title: "Automated VAT Filing Reminders",
        slug: "vat-compliance-monitor",
        client: "Accounting & BPO Provider",
        problem: "Compliance teams were manually tracking deadlines and emailing 100+ clients, risking costly RAMIS filing penalties.",
        solution: "Built a customized compliance monitor that tracks filing status and auto-generates personalized reminders and document requests.",
        tech: ["Node.js", "PostgreSQL", "SendGrid", "Custom Dashboard"],
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
        results: [
            { label: "Penalty Reduction", value: "100%", icon: <FileText className="w-5 h-5" /> },
            { label: "Admin Overhead", value: "-90%", icon: <Users className="w-5 h-5" /> },
        ],
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[20rem] bg-gold/[0.02] blur-[80px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="section-inner">
                    <div className="max-w-3xl mb-16">
                        <motion.h1 
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="section-heading mb-6"
                        >
                            Case Studies
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400"
                        >
                            Real-world examples of how we solve complex business problems with AI and automation.
                        </motion.p>
                    </div>

                    <div className="space-y-10">
                        {caseStudies.map((study, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="card-blueprint p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                            >
                                {/* Blueprint Decoration */}
                                <div className="blueprint-corner corner-tl" />
                                <div className="blueprint-corner corner-tr" />
                                <div className="blueprint-corner corner-bl" />
                                <div className="blueprint-corner corner-br" />
                                <div className="blueprint-scan" />
                                <div className="blueprint-bg-text font-mono opacity-20 leading-none">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div key={i}>101001110101010100110101010101011010101001010111010101010011010101010</div>
                                    ))}
                                </div>

                                <div className="lg:col-span-7 space-y-8 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-sky-400 uppercase tracking-widest">{study.client}</span>
                                        <div className="h-px w-8 bg-sky-500/20" />
                                    </div>
                                    
                                    <h2 className="text-3xl font-bold text-white tracking-tight">{study.title}</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sky-400/50 text-xs font-bold uppercase tracking-wider">
                                                <TrendingUp className="w-4 h-4" />
                                                Problem
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{study.problem}</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sky-400/50 text-xs font-bold uppercase tracking-wider">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Solution
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                        <div>
                                            <div className="text-white/30 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Code className="w-4 h-4" />
                                                Tech Stack
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {study.tech.map((t) => (
                                                    <span key={t} className="px-3 py-1 rounded-full bg-sky-500/5 border border-sky-500/10 text-[10px] text-sky-300 font-mono">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <Button asChild variant="gold" className="rounded-xl px-6 h-12 font-bold shadow-xl shadow-gold/10 hover:scale-[1.02] transition-all">
                                            <Link href={`/case-studies/${study.slug}`}>Read Full Story <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 h-full relative z-10 flex flex-col gap-6">
                                    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/img">
                                        <Image 
                                            src={study.imageUrl}
                                            alt={study.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>

                                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-8 flex-grow flex flex-col justify-center relative overflow-hidden group/result hover:border-sky-500/30 transition-all duration-500 shadow-2xl">
                                        <div className="text-sky-400/40 text-xs font-bold uppercase tracking-wider mb-6 relative z-10 font-mono">ENGINEERING_OUTCOMES</div>
                                        <div className="grid grid-cols-2 gap-6 relative z-10">
                                            {study.results.map((result, ridx) => (
                                                <div key={ridx} className="flex flex-col gap-1 group/item">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover/item:bg-sky-500 group-hover/item:text-white transition-all duration-300">
                                                            {result.icon}
                                                        </div>
                                                        <div className="text-2xl font-bold text-white tracking-tighter">{result.value}</div>
                                                    </div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 ml-1">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 pt-20 border-t border-white/10 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Have a similar problem to solve?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            We don&apos;t just build bots; we engineer outcomes. Let&apos;s talk about your automation potential.
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl px-10 h-14 text-lg font-bold transition-all hover:scale-[1.02]" asChild>
                            <Link href="/contact">Book a Free Strategy Call</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
