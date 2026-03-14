"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, Cpu, Database, Mail, ArrowRight, LucideIcon } from "lucide-react";
import { useRef } from "react";

interface Step {
    icon: LucideIcon;
    label: string;
    desc: string;
    color: string;
    glow: string;
    bg: string;
    border: string;
}

const steps: Step[] = [
    {
        icon: MessageSquare,
        label: "Ingestion",
        desc: "Unstructured data capture",
        color: "text-blue-400",
        glow: "shadow-blue-500/50",
        bg: "bg-blue-500/5",
        border: "border-blue-500/20"
    },
    {
        icon: Bot,
        label: "Neural Analysis",
        desc: "Contextual intent & RAG",
        color: "text-sky-400",
        glow: "shadow-sky-400/50",
        bg: "bg-sky-500/5",
        border: "border-sky-500/20"
    },
    {
        icon: Cpu,
        label: "Synthesis",
        desc: "High-precision extraction",
        color: "text-purple-400",
        glow: "shadow-purple-500/50",
        bg: "bg-purple-500/5",
        border: "border-purple-500/20"
    },
    {
        icon: Database,
        label: "System Sync",
        desc: "Autonomous ERP reconciliation",
        color: "text-emerald-400",
        glow: "shadow-emerald-500/50",
        bg: "bg-emerald-500/5",
        border: "border-emerald-500/20"
    },
    {
        icon: Mail,
        label: "Resolution",
        desc: "Validated stakeholder delivery",
        color: "text-gold",
        glow: "shadow-gold/50",
        bg: "bg-gold/5",
        border: "border-gold/20"
    }
];

export function WorkflowDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="section-pad bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
            <div className="section-inner">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-heading mb-4"
                    >
                        AI Orchestration Lifecycle
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        A clinical visualization of how our pipelines transform raw input into enterprise-grade system orchestration.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto" ref={containerRef}>
                    {/* SVG Connecting Line (Desktop) */}
                    <div className="absolute top-[40px] left-0 w-full h-1 cursor-default pointer-events-none hidden lg:block overflow-visible">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            {/* The "Pipe" - Thick structural base */}
                            <path 
                                d="M 100 50 L 900 50" 
                                fill="none" 
                                stroke="rgba(255,255,255,0.02)" 
                                strokeWidth="12"
                                strokeLinecap="round"
                            />
                            
                            {/* Massive Ambient Glow - Dynamic Pulse */}
                            <motion.path 
                                d="M 100 50 L 900 50" 
                                fill="none" 
                                stroke="url(#lineGradient)" 
                                strokeWidth="30"
                                strokeLinecap="round"
                                className="blur-[25px] opacity-10"
                                animate={{ opacity: [0.05, 0.15, 0.05] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Inner Glass Glow */}
                            <motion.path 
                                d="M 100 50 L 900 50" 
                                fill="none" 
                                stroke="url(#lineGradient)" 
                                strokeWidth="8"
                                strokeLinecap="round"
                                className="blur-[6px] opacity-30"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 5, ease: "easeInOut", delay: 0.2 }}
                            />

                            {/* Core Structural Line */}
                            <motion.path 
                                d="M 100 50 L 900 50" 
                                fill="none" 
                                stroke="url(#lineGradient)" 
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 5, ease: "easeInOut", delay: 0.2 }}
                            />

                            {/* Elongated Liquid Light Pulse (The "Connected" Flow) */}
                            <rect width="120" height="6" fill="url(#pulseGradient)" filter="url(#glowStrong)" rx="3">
                                <animateMotion
                                    dur="6s"
                                    repeatCount="indefinite"
                                    path="M 100 50 L 900 50"
                                    calcMode="linear"
                                />
                            </rect>

                            {/* Secondary sharp pulse for variety */}
                            <rect width="40" height="3" fill="white" opacity="0.8" rx="1.5" filter="url(#glow)">
                                <animateMotion
                                    dur="6s"
                                    repeatCount="indefinite"
                                    path="M 100 50 L 900 50"
                                    calcMode="linear"
                                    begin="3s"
                                />
                            </rect>

                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#60a5fa" stopOpacity="0.6" />
                                    <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                                    <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
                                    <stop offset="90%" stopColor="#caad7f" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#caad7f" stopOpacity="0" />
                                </linearGradient>
                                
                                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                                </linearGradient>

                                <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <filter id="glowStrong" x="-150%" y="-150%" width="400%" height="400%">
                                    <feGaussianBlur stdDeviation="12" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-4 relative">
                        {steps.map((Step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center group">
                                {/* Step Node */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        delay: idx * 1.25
                                    }}
                                    className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 cursor-default
                                        bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:border-white/20
                                        ${Step.bg} ${Step.border} shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                                >
                                    <div className={`relative z-10 ${Step.color} transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor]`}>
                                        <Step.icon className="w-7 h-7" />
                                    </div>
                                    
                                    {/* Hover Glow Effect */}
                                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${Step.bg}`} />
                                    
                                    {/* Outer Ring Animation */}
                                    <motion.div 
                                        animate={{ 
                                            scale: [1, 1.2, 1], 
                                            opacity: [0.3, 0.1, 0.3],
                                            rotate: [0, 90, 180]
                                        }}
                                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                        className={`absolute inset-[-8px] rounded-3xl border border-white/[0.03] -z-10`}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 1.25 + 0.2 }}
                                    className="mt-8 text-center"
                                >
                                    <div className="text-[9px] font-mono text-white/20 mb-3 tracking-[0.4em] uppercase transition-colors group-hover:text-white/40">Phase_0{idx + 1}</div>
                                    <h3 className="text-white font-bold text-lg mb-2 transition-all duration-500 group-hover:text-gold">{Step.label}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed max-w-[160px] mx-auto transition-all duration-500 font-light group-hover:text-gray-300 group-hover:tracking-wider group-hover:opacity-100">
                                        {Step.desc}
                                    </p>
                                </motion.div>

                                {/* Connector (Mobile) */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-white/5 h-12 w-px bg-gradient-to-b from-white/10 to-transparent">
                                        <motion.div
                                            animate={{ y: [0, 20, 0], opacity: [0.2, 0.8, 0.2] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="w-full h-4 bg-sky-400 blur-sm rounded-full"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Gradients */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] blur-[150px] rounded-full -z-10 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/[0.02] blur-[150px] rounded-full -z-10 pointer-events-none" />
            </div>
        </section>
    );
}
