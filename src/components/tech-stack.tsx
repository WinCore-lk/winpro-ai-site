"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
    { name: "OpenAI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/openai/openai-original.svg" },
    { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
    { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
    { name: "Next.js", logo: "/tech-stack/nextjs.svg" }, // Next.js is usually black/white
    { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Anthropic", logo: "/tech-stack/anthropic.svg" },
    { name: "Azure", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
];


const row2 = [
    { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
    { name: "LangChain", logo: "/tech-stack/langchain.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Pinecone", logo: "/tech-stack/pinecone.svg" },
    { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
    { name: "Firebase", logo: "/tech-stack/firebase.svg" },
    { name: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
    { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
];


export function TechStack() {
    return (
        <section className="py-16 border-t border-white/5 bg-black overflow-hidden">

            <div className="section-inner mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg"
                >
                    We build with industry-leading AI frameworks and high-performance cloud infrastructure.
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
                                <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">

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
                                <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">

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
