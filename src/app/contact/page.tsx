"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2, Calendar } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";

// Replace with your Calendly URL, e.g. https://calendly.com/wincore
const CALENDLY_URL = "https://calendly.com";

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
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[40rem] h-[25rem] bg-indigo-500/[0.03] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="section-inner">
                    {/* Headline + what to expect */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-14"
                    >
                        <h1 className="section-heading mb-4">
                            Start a conversation
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed mb-10">
                            Tell us what you want to automate or improve. A real person from our team will reply within 24–48 hours with a clear next step, not a bot.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500/80" /> 24–48h response
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-sky-500/80" /> No commitment to start
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-500/80" /> Scoped proposal if it's a fit
                            </span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
                        {/* Form first on mobile, left on desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lg:order-2"
                        >
                            <div className="card-surface p-8 sm:p-10">
                                <h2 className="text-xl font-semibold text-white mb-2">Send us a message</h2>
                                <p className="text-gray-400 text-sm mb-6">We use this to prepare for our first conversation. No spam, no reselling your data.</p>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-gray-400 text-sm">First name</Label>
                                            <Input id="firstName" name="firstName" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 rounded-lg" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-gray-400 text-sm">Last name</Label>
                                            <Input id="lastName" name="lastName" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 rounded-lg" placeholder="Smith" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-400 text-sm">Email</Label>
                                        <Input id="email" name="email" type="email" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 rounded-lg" placeholder="jane@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-gray-400 text-sm">Company (optional)</Label>
                                        <Input id="company" name="company" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 rounded-lg" placeholder="Your company" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-gray-400 text-sm">What do you want to automate or improve?</Label>
                                        <Textarea id="message" name="message" required className="bg-white/5 border-white/10 text-white min-h-[120px] placeholder:text-gray-500 rounded-lg resize-none p-4" placeholder="e.g. payroll data entry, VAT reminders, a support chatbot, or reporting dashboards..." />
                                    </div>
                                    {error && <p className="text-red-400 text-sm">{error}</p>}
                                    {success && (
                                        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
                                            Thanks. We'll reply within 24–48 hours with next steps.
                                        </div>
                                    )}
                                    <Button type="submit" disabled={loading} className="w-full bg-white hover:bg-gray-100 text-black h-12 rounded-lg font-medium">
                                        {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : "Send message"}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="space-y-8 lg:order-1"
                        >
                            {/* Direct contact */}
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-4">Or reach out directly</h2>
                                <div className="space-y-3">
                                    <a href="mailto:info@wincore.lk" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors group">
                                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-sky-300 transition-colors">info@wincore.lk</p>
                                            <p className="text-gray-500 text-sm">Email us</p>
                                        </div>
                                    </a>
                                    <a href="tel:+94777470904" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors group">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">+94 77 747 0904</p>
                                            <p className="text-gray-500 text-sm">Call us</p>
                                        </div>
                                    </a>
                                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors group">
                                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-purple-300 transition-colors">Book a call</p>
                                            <p className="text-gray-500 text-sm">Pick a time that works for you</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Colombo, Sri Lanka</p>
                                            <p className="text-gray-500 text-sm">Office</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-4">Common questions</h2>
                                <Accordion type="single" collapsible className="space-y-2">
                                    <AccordionItem value="what-is-ai" className="card-surface border-white/10 rounded-xl px-4">
                                        <AccordionTrigger className="text-left text-gray-300 hover:text-white py-4">
                                            What do you mean by &quot;AI&quot; here?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-400 pb-4 pr-4">
                                            We use it to mean software that can do repetitive tasks or spot patterns without a person doing every step  -  e.g. filling forms from documents, forecasting demand from past sales, or answering common customer questions. We don&apos;t do sci-fi; we do things that save you time and reduce errors.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="data-security" className="card-surface border-white/10 rounded-xl px-4">
                                        <AccordionTrigger className="text-left text-gray-300 hover:text-white py-4">
                                            Is my data safe? Where does it live?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-400 pb-4 pr-4">
                                            We design for compliance in your jurisdiction and can keep data in regions you specify (including Sri Lanka). We don&apos;t use your data to train public models. We&apos;ll spell out where data is stored and who can access it in our agreement.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="how-long" className="card-surface border-white/10 rounded-xl px-4">
                                        <AccordionTrigger className="text-left text-gray-300 hover:text-white py-4">
                                            How long does a typical project take?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-400 pb-4 pr-4">
                                            It depends on scope. A simple dashboard or chatbot might be a few weeks; payroll or VAT automation with your existing BPO setup can be a couple of months. We give you a timeline and milestones before we start.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="cost" className="card-surface border-white/10 rounded-xl px-4">
                                        <AccordionTrigger className="text-left text-gray-300 hover:text-white py-4">
                                            What does it cost? Do you have starter packages?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-400 pb-4 pr-4">
                                            We offer starter packages for small businesses at competitive rates, and custom scopes for larger operations  -  we work with clients globally. After we understand your process, we give you a fixed or capped quote  -  no surprise invoices.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
