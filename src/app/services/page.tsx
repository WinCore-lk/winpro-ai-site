"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Bot, BarChart3, Activity, LineChart, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Process Automation & Workflows",
        slug: "ai-automation",
        description: "Automate repetitive BPO tasks: data entry from invoices/PDFs, approval flows, and compliance reminders. We cut manual time by 40–70% using intelligent pipelines.",
        benefits: ["Automated Data Entry", "Approval Flow Orchestration", "Payroll & Compliance Automation"],
        industries: ["Finance", "BPO", "Logistics"],
        icon: <Activity className="w-8 h-8 text-blue-400" />,
        imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Intelligent Chatbots",
        slug: "ai-chatbots",
        description: "Context-aware chatbots for client support and internal operations. Trained on your specific policies using Retrieval-Augmented Generation (RAG).",
        benefits: ["24/7 Context-Aware Support", "WhatsApp & Slack Integration", "Reduced Support Overhead"],
        industries: ["Support", "HR", "Lead Gen"],
        icon: <Bot className="w-8 h-8 text-indigo-400" />,
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "AI Strategy & Process Audits",
        slug: "ai-consulting",
        description: "We audit your workflows to find bottlenecks and build an ROI-focused AI roadmap. Practical strategy without the hype.",
        benefits: ["End-to-End Workflow Audit", "Tool Selection & ROI Analysis", "Implementation Strategy"],
        industries: ["Accounting", "BPO", "SMEs"],
        icon: <LineChart className="w-8 h-8 text-rose-400" />,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Smart Reporting & Dashboards",
        slug: "data-intelligence",
        description: "Transform raw data from ERPs and Excel into live intelligence dashboards. Spot trends and anomalies before they become issues.",
        benefits: ["Live Operational Insights", "Anomaly Detection", "Automated Exec Reporting"],
        industries: ["Retail", "Finance", "Management"],
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Document Processing (OCR)",
        slug: "document-processing",
        description: "Extract high-accuracy data from invoices, payslips, and compliance docs. Feed extracted data directly into your accounting systems.",
        benefits: ["Intelligent Data Extraction", "99% Accuracy OCR", "Seamless ERP Integration"],
        industries: ["Legal", "Logistics", "Finance"],
        icon: <FileText className="w-8 h-8 text-purple-400" />,
        imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function ServicesPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[40rem] h-[30rem] bg-gold/[0.02] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad pt-32">
                <div className="section-inner px-4 sm:px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="section-heading mb-6"
                        >
                            Our Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Practical, high-impact AI solutions designed for BPO, Finance, and Legal teams. We focus on delivering immediate operational value through clinical engineering and domain expertise.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link href={`/services/${service.slug}`} className="block h-full group">
                                    <div className="card-service h-full relative flex flex-col hover:bg-white/[0.02] transition-colors border border-white/5 overflow-hidden group">
                                        <div className="hud-corner hud-tl opacity-50" />
                                        <div className="hud-corner hud-br opacity-50" />
                                        
                                        <div className="h-56 w-full relative overflow-hidden bg-black/40">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${service.imageUrl})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                                            <div className="absolute bottom-6 left-6 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white shadow-xl">
                                                {service.icon}
                                            </div>
                                        </div>

                                        <CardContent className="p-8 flex flex-col flex-grow relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-white/5 group-hover:border-gold/20">
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-all group-hover:translate-x-0.5" />
                                                </div>
                                            </div>
                                            <p className="text-gray-400 leading-relaxed text-sm mb-8 line-clamp-3">{service.description}</p>
                                            
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {service.industries.map((ind, i) => (
                                                    <span key={i} className="text-[10px] font-bold px-2.5 py-1 rounded bg-sky-500/5 border border-sky-500/10 text-sky-400 uppercase tracking-widest">
                                                        {ind}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                                                {service.benefits.map((b, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-[12px] text-gray-300 font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                                        {b}
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-service p-12 text-center mt-20 relative border-gold/20 bg-gold/[0.02]"
                    >
                        <div className="hud-corner hud-tl" />
                        <div className="hud-corner hud-br" />
                        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Don't see what you're looking for?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10 text-lg">
                            We build custom AI solutions tailored to unique business challenges. Let's discuss your requirements.
                        </p>
                        <Button size="lg" variant="gold" className="rounded-xl px-10 h-14 text-base font-bold transition-all hover:scale-[1.05] relative z-10 shadow-2xl shadow-gold/10" asChild>
                            <Link href="/contact">Book a Free Strategy Call</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
