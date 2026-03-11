"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2, Calendar, CheckCircle2, ShieldCheck, Clock, Zap } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Replace with your Calendly URL
const CALENDLY_URL = "https://calendly.com";

const trustBadges = [
    { icon: <Clock className="w-5 h-5" />, label: "Fast response" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Strategic AI assessment" },
    { icon: <Zap className="w-5 h-5" />, label: "Bespoke plan" },
];

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send message");
            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setError("An error occurred while sending your message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-root min-h-screen">
            {/* Artistic Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
                
                {/* Artistic Brush Stroke (Orange/Yellow) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 1.1, rotate: -2 }}
                    animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-[5%] -right-[15%] w-[1200px] h-[1200px] mix-blend-screen grayscale-0 pointer-events-none"
                >
                    <Image 
                        src="/brush-stroke.png" 
                        alt="" 
                        fill 
                        className="object-contain opacity-30 brightness-110"
                    />
                </motion.div>
            </div>

            <section className="section-pad pt-32 lg:pt-40">
                <div className="section-inner">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        
                        {/* Left Column: Context & Trust */}
                        <div className="lg:col-span-5 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                                    Let&apos;s architect your <span className="text-sky-400">AI future.</span>
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    Bring your challenges. We&apos;ll bring the engineering expertise. Book a discovery call to audit your workflows and design a custom AI roadmap.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                {trustBadges.map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                                        <div className="text-sky-400">{badge.icon}</div>
                                        {badge.label}
                                    </div>
                                ))}
                            </motion.div>

                            <div className="space-y-6 pt-8 border-t border-white/5">
                                <h2 className="text-lg font-semibold text-white">Direct Access</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a href="mailto:info@wincore.lk" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group">
                                        <Mail className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">info@wincore.lk</span>
                                    </a>
                                    <a href="tel:+94777470904" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group">
                                        <Phone className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">+94 77 747 0904</span>
                                    </a>
                                </div>
                            </div>

                            {/* Mini FAQ or Quote */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-sky-500/[0.03] border border-sky-500/10 hidden lg:block"
                            >
                                <p className="text-white/80 italic leading-relaxed text-lg mb-4">
                                    &quot;We don&apos;t do sci-fi; we do things that save you time and reduce errors. Practical automation built with modern engineering pipelines.&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-500/20" />
                                    <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Engineering Hub, Colombo</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: High-End Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative lg:sticky lg:top-32"
                            >
                                <div className="card-surface p-8 md:p-12 shadow-2xl shadow-sky-500/5 ring-1 ring-white/10 overflow-hidden">
                                    {/* Glassmorphism blur elements inside card */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[60px] rounded-full -z-10" />
                                    
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-bold text-white mb-2">Initiate Discovery</h2>
                                        <p className="text-gray-400 text-sm italic">Briefly describe your current manual workflows.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">First name</Label>
                                                <Input id="firstName" name="firstName" required className="bg-white/[0.02] border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl px-5 focus:ring-2 focus:ring-sky-500/20 transition-all border-none shadow-inner" placeholder="E.g. Jane" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">Last name</Label>
                                                <Input id="lastName" name="lastName" required className="bg-white/[0.02] border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl px-5 focus:ring-2 focus:ring-sky-500/20 transition-all border-none shadow-inner" placeholder="E.g. Smith" />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">Professional Email</Label>
                                            <Input id="email" name="email" type="email" required className="bg-white/[0.02] border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl px-5 focus:ring-2 focus:ring-sky-500/20 transition-all border-none shadow-inner" placeholder="jane@enterprise.com" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">Proposed Automation Goal</Label>
                                            <Textarea id="message" name="message" required className="bg-white/[0.02] border-white/10 text-white min-h-[140px] placeholder:text-gray-600 rounded-2xl resize-none p-5 focus:ring-2 focus:ring-sky-500/20 transition-all border-none shadow-inner leading-relaxed" placeholder="Tell us about the process you want to automate..." />
                                        </div>

                                        {error && <p className="text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20 font-medium">{error}</p>}
                                        
                                        {success ? (
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-4"
                                            >
                                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                                <div className="text-sm font-medium">Message routed to engineering team. We'll reply within 24 hours.</div>
                                            </motion.div>
                                        ) : (
                                            <Button type="submit" disabled={loading} className="w-full bg-white hover:bg-sky-50 text-black h-16 rounded-2xl font-bold group transition-all text-lg shadow-xl shadow-white/5">
                                                {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : (
                                                    <span className="flex items-center justify-center gap-2">
                                                        Book Discovery Call <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                    </span>
                                                )}
                                            </Button>
                                        )}
                                        
                                        <p className="text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
                                            Secure Data Processing · GDPR Compliant
                                        </p>
                                    </form>
                                </div>
                                
                                {/* Secondary Call to Action */}
                                <div className="mt-8 text-center">
                                    <p className="text-gray-500 text-sm">
                                        Prefer direct scheduling? <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 underline underline-offset-4 transition-colors">Open Calendly</a>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
