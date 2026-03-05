"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Loader2, MessageCircle } from "lucide-react";

import { motion } from "framer-motion";

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
        <div className="flex flex-col w-full min-h-screen bg-black relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-[10%] inset-x-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 via-emerald-900/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 mt-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Let's architect <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">your future.</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                            Whether you're looking for automation, ML algorithms, or AI consulting, our experts are here to help scale your operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors group">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400 w-fit mb-4 group-hover:bg-blue-500/10 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Us</p>
                            <p className="text-lg text-white font-medium">hello@wincore.ai</p>
                        </div>

                        <div className="p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors group">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-emerald-400 w-fit mb-4 group-hover:bg-emerald-500/10 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Call Us</p>
                            <p className="text-lg text-white font-medium">+1 (555) 123-4567</p>
                        </div>

                        <div className="p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors group sm:col-span-2 flex items-center justify-between">
                            <div>
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-purple-400 w-fit mb-4 group-hover:bg-purple-500/10 transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Direct WhatsApp</p>
                                <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-purple-400 transition-colors">
                                    +1 (555) 000-0000
                                </a>
                            </div>
                            <Button asChild variant="outline" className="border-white/10 bg-transparent hover:bg-white/5 text-white rounded-full">
                                <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer">Message Now</a>
                            </Button>
                        </div>

                        <div className="p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl sm:col-span-2 group">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-cyan-400 w-fit mb-4 group-hover:bg-cyan-500/10 transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Visit Us</p>
                            <p className="text-lg text-white font-medium">100 Tech Hub Road, San Francisco, CA 94107</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="bg-white/[0.02] backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 md:rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-center">
                        <CardHeader className="px-0 pt-0 mb-6">
                            <CardTitle className="text-3xl text-white font-bold tracking-tight">Send an Inquiry</CardTitle>
                            <CardDescription className="text-gray-400 text-lg font-light mt-2">Our technical directors typically respond within 12 hours.</CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 pb-0">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="firstName" className="text-gray-300 font-medium">First Name</Label>
                                        <Input id="firstName" name="firstName" required className="bg-black/40 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="lastName" className="text-gray-300 font-medium">Last Name</Label>
                                        <Input id="lastName" name="lastName" required className="bg-black/40 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-gray-300 font-medium">Work Email Address</Label>
                                    <Input id="email" name="email" type="email" required className="bg-black/40 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl transition-all" placeholder="john@enterprise.com" />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="company" className="text-gray-300 font-medium">Company Name</Label>
                                    <Input id="company" name="company" className="bg-black/40 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl transition-all" placeholder="Acme Inc." />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="message" className="text-gray-300 font-medium">Project Details</Label>
                                    <Textarea id="message" name="message" required className="bg-black/40 border-white/10 text-white min-h-[140px] placeholder:text-gray-600 focus-visible:ring-blue-500 focus-visible:border-blue-500 rounded-xl resize-none transition-all p-4" placeholder="Tell us about the challenges you're trying to solve..." />
                                </div>

                                {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
                                {success && <p className="text-emerald-400 text-sm font-medium p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-center">Your inquiry has been successfully transmitted. We will be in touch shortly.</p>}

                                <Button type="submit" disabled={loading} className="w-full bg-white hover:bg-gray-200 text-black h-14 rounded-xl text-lg font-bold transition-transform hover:scale-[1.02]">
                                    {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Initiate Consultation"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </div>
    );
}
