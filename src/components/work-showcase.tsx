"use client";

import { ShieldCheck, Target, Zap, Fingerprint } from "lucide-react";
import { BentoCard } from "./ui/magic/bento-card";

export function WorkShowcase() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-y border-white/5 overflow-hidden">

            {/* Cinematic Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Our Capabilities</h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                        Architected to scale. We deploy bleeding-edge AI to automate operations, unlock hidden data value, and drastically reduce overhead.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[800px]">

                    {/* Main Large Card */}
                    <BentoCard
                        large
                        className="md:col-span-2 md:row-span-2"
                        title="Enterprise AI Automation"
                        description="End-to-end integration of autonomous agentic pipelines. We replace manual bottlenecks with intelligent, 24/7 digital workforces that learn from your data."
                        backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3000&auto=format&fit=crop"
                    />

                    {/* Top Right */}
                    <BentoCard
                        className="md:col-span-2 md:row-span-1"
                        title="Predictive Machine Learning"
                        description="Turn historical noise into calculated foresight. Demand forecasting and automated anomaly detection at scale."
                        icon={<Target className="w-8 h-8 text-emerald-400" />}
                    />

                    {/* Bottom Middle */}
                    <BentoCard
                        className="md:col-span-1 md:row-span-1"
                        title="Autonomous Chatbots"
                        description="RAG-powered conversational interfaces."
                        icon={<Zap className="w-8 h-8 text-blue-400" />}
                    />

                    {/* Bottom Right */}
                    <BentoCard
                        className="md:col-span-1 md:row-span-1"
                        title="Secure Infrastructure"
                        description="Zero-trust cloud architecture."
                        icon={<Fingerprint className="w-8 h-8 text-rose-400" />}
                    />

                </div>
            </div>
        </section>
    );
}
