"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Bot, Landmark } from "lucide-react";
import Image from "next/image";
import { CardHoverLines } from "@/components/card-hover-lines";
import { NewsletterForm } from "@/components/newsletter-form";

const posts = [
    {
        title: "How AI Automation Reduces Operational Costs",
        excerpt: "Discover how modern enterprises are leveraging AI pipelines to cut manual processing costs by up to 60%. We detail the exact ROI framework used in multi-national BPO transitions.",
        date: "March 10, 2026",
        readTime: "5 min read",
        category: "Efficiency",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-sky-400",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
        title: "Building AI Chatbots for Customer Support",
        excerpt: "A technical deep-dive into RAG architectures and intent recognition for enterprise-grade support bots that handle sensitive data securely.",
        date: "March 05, 2026",
        readTime: "8 min read",
        category: "Support Tech",
        icon: <Bot className="w-5 h-5" />,
        color: "text-sky-400",
        imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2670"
    },
    {
        title: "AI Workflows for Finance Teams",
        excerpt: "Scaling VAT filing, payroll validation, and reporting with compliance-aware automation systems built on robust BPO-tested logic.",
        date: "February 28, 2026",
        readTime: "6 min read",
        category: "Finance",
        icon: <Landmark className="w-5 h-5" />,
        color: "text-sky-400",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2622"
    }
];

export default function BlogPage() {
    return (
        <div className="page-root min-h-screen">
            {/* Subtle background */}
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
            </div>

            <section className="section-pad pt-32 lg:pt-40">
                <div className="section-inner">
                    <div className="max-w-3xl mb-20 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Engineering Insights
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8"
                        >
                            Practical <span className="text-sky-400">AI Intelligence</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            Deep dives into automation technicals, ROI-focused AI architectures, and operational excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10">
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group card-service flex flex-col items-start relative h-full"
                            >
                                <div className="hud-corner hud-tl" />
                                <div className="hud-corner hud-br" />

                                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="block w-full h-48 overflow-hidden relative">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${post.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/5 text-[10px] font-mono text-sky-400 uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col h-full w-full">
                                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                        <span className="opacity-20">|</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors leading-tight">
                                        <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 w-full flex items-center justify-between">
                                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                            {post.icon}
                                        </div>
                                        <Link 
                                            href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                                            className="text-xs font-bold text-white/40 group-hover:text-sky-400 flex items-center gap-2 transition-colors"
                                        >
                                            READ POST <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Quick Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        <div className="max-w-xl text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">Stay ahead with AI engineering</h3>
                            <p className="text-gray-400">Get our latest case studies and technical insights delivered directly to your inbox. No spam, just logic.</p>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <NewsletterForm placeholder="Your professional email" buttonText="Subscribe Now" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
