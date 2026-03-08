"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Store, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const segments = [
    {
        title: "Financial & compliance teams",
        description: "Automate VAT filings, payroll calculations, and anomaly checks. We start where it matters: finance, compliance, payroll, VAT, reporting, and back-office workflows  -  for teams everywhere.",
        icon: <FileText className="w-8 h-8 text-sky-400" />,
        image: "/ai_dashboard_preview_1772885226339.png"
    },
    {
        title: "Retail & small traders",
        description: "Simple forecasting for inventory and sales trends. Practical tools that plug into the data you already have  -  no “big AI” hype.",
        icon: <Store className="w-8 h-8 text-emerald-400" />,
        image: "/enterprise_automation_scene_1772885306171.png"
    },
    {
        title: "Any business",
        description: "Chatbots for internal FAQs or customer support on compliance rules. Trained on your policies and knowledge base; add to WhatsApp, web, or Slack.",
        icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
        image: "/ai_agent_architecture_1772885265043.png"
    },
];

export default function SolutionsPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[50rem] h-[30rem] bg-indigo-500/[0.03] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="section-inner max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="section-heading mb-4 md:mb-6"
                    >
                        For your business
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 md:mb-14 max-w-2xl"
                    >
                        We start where it matters most: finance, compliance, payroll, VAT, reporting, and back-office workflows  -  for SMEs and teams worldwide.
                    </motion.p>

                    <div className="space-y-6 md:space-y-8">
                        {segments.map((seg, index) => (
                            <motion.div
                                key={seg.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.08 }}
                                className="group card-surface card-surface-hover overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full md:w-72 h-48 md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                                        <Image
                                            src={seg.image}
                                            alt={seg.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-transparent" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-sky-400">
                                                {seg.icon}
                                            </div>
                                            <h2 className="text-xl font-semibold text-white">{seg.title}</h2>
                                        </div>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{seg.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-14 text-center"
                    >
                        <p className="text-gray-400 mb-6">Not sure which fits? Tell us your use case and we’ll suggest next steps.</p>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl font-semibold" asChild>
                            <Link href="/contact" className="inline-flex items-center gap-2">
                                Discuss your use case <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
