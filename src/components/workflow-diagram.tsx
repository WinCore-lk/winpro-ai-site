"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, Cpu, Database, Mail, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        label: "Customer Ask",
        desc: "\"How do I file my VAT?\"",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: <Bot className="w-6 h-6" />,
        label: "AI Chatbot",
        desc: "Analyzes intent & docs",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        label: "Extraction",
        desc: "Pulls data from PDFs",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: <Database className="w-6 h-6" />,
        label: "System Sync",
        desc: "Updates ERP records",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        label: "Auto-Reply",
        desc: "\"Your VAT is filed.\"",
        color: "text-gold",
        bg: "bg-gold/10",
        border: "border-gold/20"
    }
];

export function WorkflowDiagram() {
    return (
        <section className="section-pad bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
            <div className="section-inner">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-heading mb-4"
                    >
                        Inside an Automated Workflow
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how we bridge the gap between incoming requests and system-wide updates using intelligent AI pipelines.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 py-20">
                    {/* Background connecting line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/5 via-sky-500/20 to-gold/5 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center group">
                                {/* Flow Animation (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <div className="absolute top-1/2 left-full w-full h-[1px] hidden lg:block z-0 pointer-events-none">
                                        <motion.div
                                            className="h-full bg-sky-400/30"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.4 + 0.5, duration: 1 }}
                                        />
                                        <motion.div
                                            className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                                            initial={{ left: 0, opacity: 0 }}
                                            animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: "linear",
                                                delay: idx * 0.4 + 1.5
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Step Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.3 }}
                                    whileHover={{ y: -5 }}
                                    className={`relative z-10 w-20 h-20 rounded-3xl ${step.bg} ${step.border} border-2 flex items-center justify-center ${step.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {step.icon}
                                    
                                    {/* Pulse effect */}
                                    <motion.div 
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                                        className={`absolute inset-0 rounded-3xl ${step.bg} -z-10`}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.3 + 0.2 }}
                                    className="mt-6 text-center"
                                >
                                    <h3 className="text-white font-semibold text-lg mb-1">{step.label}</h3>
                                    <p className="text-gray-500 text-sm whitespace-nowrap">{step.desc}</p>
                                </motion.div>

                                {/* Arrow (Mobile) */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-white/10">
                                        <motion.div
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <ArrowRight className="w-6 h-6 rotate-90" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/[0.03] blur-[100px] rounded-full -z-10 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/[0.02] blur-[100px] rounded-full -z-10 pointer-events-none" />
            </div>
        </section>
    );
}
