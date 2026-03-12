"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, Cpu, Database, Mail, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        label: "Ingestion",
        desc: "Unstructured data capture",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: <Bot className="w-6 h-6" />,
        label: "Neural Analysis",
        desc: "Contextual intent & RAG",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        label: "Synthesis",
        desc: "High-precision extraction",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: <Database className="w-6 h-6" />,
        label: "System Sync",
        desc: "Autonomous ERP reconciliation",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        label: "Resolution",
        desc: "Validated stakeholder delivery",
        color: "text-gold",
        bg: "bg-gold/10",
        border: "border-gold/20"
    }
];

export function WorkflowDiagram() {
    return (
        <section className="section-pad bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
            <div className="section-inner">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-4"
                    >
                        AI Orchestration Lifecycle
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A technical visualization of how our pipelines transform unstructured input into enterprise-grade system orchestration.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-8">
                    {/* Background connecting line (Desktop) */}
                    <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/5 -translate-y-[40px] hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-4 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center group">
                                {/* Flow Animation (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <div className="absolute top-1/2 left-[60%] w-[80%] h-[2px] hidden lg:block z-0 pointer-events-none -translate-y-[40px]">
                                        {/* Static Track */}
                                        <div className="absolute inset-0 bg-sky-500/5 rounded-full" />
                                        
                                        {/* Active Flow Line */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 3,
                                                ease: "linear",
                                                delay: idx * 0.5
                                            }}
                                        />

                                        {/* Data Packet */}
                                        <motion.div
                                            className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_15px_#38bdf8]"
                                            initial={{ left: "0%", opacity: 0 }}
                                            animate={{ 
                                                left: ["0%", "100%"],
                                                opacity: [0, 1, 1, 0],
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: "easeInOut",
                                                delay: idx * 0.4 + 1
                                            }}
                                        >
                                            <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-40 scale-150" />
                                        </motion.div>
                                    </div>
                                )}

                                {/* Step Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 100,
                                        delay: idx * 0.15 
                                    }}
                                    className={`relative z-10 w-20 h-20 rounded-2xl ${step.bg} ${step.border} border border-white/10 flex items-center justify-center ${step.color} shadow-2xl group-hover:border-sky-500/40 transition-all duration-500`}
                                >
                                    <div className="relative z-10">{step.icon}</div>
                                    
                                    {/* Pulse effect on active node */}
                                    <motion.div 
                                        animate={{ 
                                            scale: [1, 1.3, 1], 
                                            opacity: [0.1, 0, 0.1],
                                            rotate: [0, 90, 180]
                                        }}
                                        transition={{ repeat: Infinity, duration: 4, delay: idx * 0.8 }}
                                        className={`absolute inset-[-4px] rounded-2xl border border-white/5 -z-10`}
                                    />

                                    {/* Background glow per node */}
                                    <div className={`absolute inset-0 rounded-2xl ${step.bg} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 + 0.2 }}
                                    className="mt-6 text-center"
                                >
                                    <div className="text-[10px] font-mono text-white/20 mb-2 tracking-[0.3em] uppercase">Phase_0{idx + 1}</div>
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white/100 transition-colors">{step.label}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed max-w-[160px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                        {step.desc}
                                    </p>
                                </motion.div>

                                {/* Arrow (Mobile) */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-white/5">
                                        <motion.div
                                            animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
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
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.02] blur-[120px] rounded-full -z-10 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.015] blur-[120px] rounded-full -z-10 pointer-events-none" />
            </div>
        </section>
    );
}
