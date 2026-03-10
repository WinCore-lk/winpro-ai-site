"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
    { name: "OpenAI", logo: "/tech-stack/openai.svg" },
    { name: "Python", logo: "/tech-stack/python.svg" },
    { name: "AWS", logo: "/tech-stack/aws.svg" },
    { name: "PostgreSQL", logo: "/tech-stack/postgresql.svg" },
    { name: "Next.js", logo: "/tech-stack/nextjs.svg" },
    { name: "React", logo: "/tech-stack/react.svg" },
    { name: "Anthropic", logo: "/tech-stack/anthropic.svg" },
    { name: "Azure", logo: "/tech-stack/azure.svg" },
    { name: "Node.js", logo: "/tech-stack/node.svg" },
    { name: "TypeScript", logo: "/tech-stack/typescript.svg" },
];

const row2 = [
    { name: "Kubernetes", logo: "/tech-stack/kubernetes.svg" },
    { name: "Docker", logo: "/tech-stack/docker.svg" },
    { name: "Zapier", logo: "/tech-stack/zapier.svg" },
    { name: "LangChain", logo: "/tech-stack/langchain.svg" },
    { name: "Google Cloud", logo: "/tech-stack/google-cloud.svg" },
    { name: "Pinecone", logo: "/tech-stack/pinecone.svg" },
    { name: "Slack", logo: "/tech-stack/slack.svg" },
    { name: "Supabase", logo: "/tech-stack/supabase.svg" },
    { name: "HubSpot", logo: "/tech-stack/hubspot.svg" },
    { name: "MongoDB", logo: "/tech-stack/mongodb.svg" },
];

export function TechStack() {
    return (
        <section className="py-24 border-t border-white/5 bg-black overflow-hidden">
            <div className="section-inner mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4"
                >
                    Our Technology Stack
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg"
                >
                    Built with enterprise-grade tools and industry-leading AI frameworks.
                </motion.p>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="relative flex overflow-x-hidden">
                    <motion.div
                        className="flex gap-12 items-center whitespace-nowrap"
                        animate={{ x: [0, "-50%"] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    >
                        {[...row1, ...row1, ...row1].map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="relative w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-500 group-hover:text-white transition-colors font-semibold tracking-tight">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="relative flex overflow-x-hidden">
                    <motion.div
                        className="flex gap-12 items-center whitespace-nowrap"
                        animate={{ x: ["-50%", 0] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    >
                        {[...row2, ...row2, ...row2].map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="relative w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-500 group-hover:text-white transition-colors font-semibold tracking-tight">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            <div className="mt-16 flex justify-center opacity-30">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
        </section>
    );
}
