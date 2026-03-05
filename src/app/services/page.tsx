"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, BrainCircuit, Activity, LineChart, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "AI Automation",
        slug: "ai-automation",
        description: "Business workflow automation using agentic models to drastically reduce manual labor. We build agents that seamlessly plug into your ERPs.",
        icon: <Activity className="w-8 h-8 text-blue-400" />,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "AI Chatbots",
        slug: "ai-chatbots",
        description: "Next-gen customer service bots empowered with RAG (Retrieval-Augmented Generation) that integrate directly with your secure databases.",
        icon: <Bot className="w-8 h-8 text-indigo-400" />,
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2606&ixlib=rb-4.0.3",
    },
    {
        title: "Machine Learning Solutions",
        slug: "machine-learning-solutions",
        description: "Predictive analytics to empower data-driven decisions at scale. Demand forecasting, anomaly detection, and custom algorithms.",
        icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Computer Vision",
        slug: "computer-vision",
        description: "Advanced image and video analysis for automated quality control, secure facial recognition, and spatial intelligence.",
        icon: <Code2 className="w-8 h-8 text-emerald-400" />,
        imageUrl: "https://images.unsplash.com/photo-1561557944-6e786b6bc763?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Data Intelligence",
        slug: "data-intelligence",
        description: "Business insights and customized analytics dashboards. We build robust ETL pipelines to give your executive team clarity.",
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3",
    },
    {
        title: "AI Consulting & Strategy",
        slug: "ai-consulting",
        description: "Strategic planning for AI adoption across enterprise divisions. Don't adopt AI because it's a trend; adopt it where it drives clear ROI.",
        icon: <LineChart className="w-8 h-8 text-rose-400" />,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-[10%] inset-x-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10 w-full mt-10">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Comprehensive artificial intelligence and automation services engineered for modern global organizations. We build real projects with measurable ROI.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full cursor-pointer group">
                                <Card className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-blue-500/50 transition-all duration-500 h-full relative overflow-hidden md:rounded-3xl flex flex-col">

                                    <div className="h-56 w-full relative overflow-hidden border-b border-white/10">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${service.imageUrl})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        <div className="absolute bottom-4 left-6 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 inline-flex w-fit shadow-xl group-hover:border-blue-500/40 transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <CardContent className="p-8 relative z-10 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-semibold text-white tracking-tight">{service.title}</h3>
                                            <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-transform transform group-hover:translate-x-1" />
                                        </div>
                                        <p className="text-gray-400 flex-grow leading-relaxed font-light">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden mt-20 shadow-2xl shadow-blue-900/10"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to start a new project?</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                            Every enterprise has unique bottlenecks. Let our architects design a bespoke, automated solution pipeline for your operations.
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-14 text-lg font-semibold transition-transform hover:scale-105" asChild>
                            <Link href="/contact">Configure Your Solution</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
