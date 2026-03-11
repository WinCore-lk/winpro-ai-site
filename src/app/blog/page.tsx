"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Bot, Landmark, Lock } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

const posts = [
    {
        title: "How AI Automation Reduces Operational Costs",
        slug: "how-ai-automation-reduces-operational-costs",
        excerpt: "Discover how modern enterprises are leveraging AI pipelines to cut manual processing costs by up to 60%. We detail the exact ROI framework used in multi-national BPO transitions.",
        date: "March 10, 2026",
        readTime: "5 min read",
        category: "Efficiency",
        icon: <TrendingUp className="w-5 h-5" />,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        published: true,
    },
    {
        title: "Building AI Chatbots for Customer Support",
        slug: "building-ai-chatbots-for-customer-support",
        excerpt: "A technical deep-dive into RAG architectures and intent recognition for enterprise-grade support bots that handle sensitive data securely.",
        date: "Coming Soon",
        readTime: "8 min read",
        category: "Support Tech",
        icon: <Bot className="w-5 h-5" />,
        imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2670",
        published: false,
    },
    {
        title: "AI Workflows for Finance Teams",
        slug: "ai-workflows-for-finance-teams",
        excerpt: "Scaling VAT filing, payroll validation, and reporting with compliance-aware automation systems built on robust BPO-tested logic.",
        date: "Coming Soon",
        readTime: "6 min read",
        category: "Finance",
        icon: <Landmark className="w-5 h-5" />,
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2622",
        published: false,
    }
];

export default function BlogPage() {
    return (
        <div className="page-root min-h-screen">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
            </div>

            <section className="section-pad pt-32 lg:pt-40">
                <div className="section-inner">
                    <div className="max-w-3xl mb-20 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8"
                        >
                            Insights & <span className="text-sky-400">Articles</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 leading-relaxed font-light"
                        >
                            Deep dives into automation, AI architectures, and operational excellence — written by our engineering team.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            1 post published — more coming soon
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group card-service flex flex-col items-start relative h-full ${!post.published ? "opacity-70" : ""}`}
                            >
                                <div className="hud-corner hud-tl" />
                                <div className="hud-corner hud-br" />

                                {/* Hero Image */}
                                <div className="block w-full h-52 overflow-hidden relative rounded-t-3xl">
                                    <div
                                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${post.published ? "group-hover:scale-110" : "grayscale-[40%]"}`}
                                        style={{ backgroundImage: `url(${post.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-70" />

                                    {/* Category or Coming Soon badge */}
                                    {post.published ? (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-sky-400 uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    ) : (
                                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                                            <Lock className="w-3 h-3" /> Coming Soon
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col h-full w-full">
                                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                        <span className="opacity-20">|</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                    </div>

                                    <h2 className={`text-xl font-bold text-white mb-3 leading-snug ${post.published ? "group-hover:text-sky-400 transition-colors" : "text-white/70"}`}>
                                        {post.published ? (
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        ) : (
                                            post.title
                                        )}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 w-full flex items-center justify-between">
                                        <div className={`p-2 rounded-lg ${post.published ? "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white" : "bg-white/5 text-gray-600"} transition-all duration-300`}>
                                            {post.icon}
                                        </div>
                                        {post.published ? (
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-xs font-bold text-white/40 group-hover:text-sky-400 flex items-center gap-2 transition-colors"
                                            >
                                                READ POST <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : (
                                            <span className="text-xs font-bold text-white/20 flex items-center gap-2">
                                                SUBSCRIBE TO BE NOTIFIED
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        <div className="max-w-xl text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">Get new posts in your inbox</h3>
                            <p className="text-gray-400">Be the first to read when we publish. No spam — only practical AI engineering and automation insights worth your time.</p>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <NewsletterForm placeholder="Your professional email" buttonText="Notify Me" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
