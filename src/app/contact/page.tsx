"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Loader2, MessageCircle } from "lucide-react";

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
        <div className="flex flex-col w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">Let's talk about your project</h1>
                        <p className="text-xl text-gray-400">
                            Whether you're looking for automation, ML algorithms, or AI consulting, our experts are here to help scale your operations.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-white/10 rounded-full border border-white/10 text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Us</p>
                                <p className="text-lg text-white">hello@wincore.ai</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-white/10 rounded-full border border-white/10 text-emerald-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Call Us</p>
                                <p className="text-lg text-white">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-white/10 rounded-full border border-white/10 text-purple-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Visit Us</p>
                                <p className="text-lg text-white">100 Tech Hub Road, San Francisco, CA 94107</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-white/10 rounded-full border border-white/10 text-emerald-400">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Direct WhatsApp</p>
                                <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-emerald-400 transition-colors">
                                    +1 (555) 000-0000
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <Card className="bg-white/[0.03] backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/10 md:rounded-3xl p-6">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                        <CardDescription className="text-gray-400">We aim to respond to all inquiries within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                                    <Input id="firstName" name="firstName" required className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                                    <Input id="lastName" name="lastName" required className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                                <Input id="email" name="email" type="email" required className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-300">Company Name</Label>
                                <Input id="company" name="company" className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500" placeholder="Acme Inc." />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-300">Message</Label>
                                <Textarea id="message" name="message" required className="bg-black/50 border-white/10 text-white min-h-[150px] placeholder:text-gray-600 focus-visible:ring-blue-500" placeholder="Tell us about your project or inquiry..." />
                            </div>

                            {error && <p className="text-red-400 text-sm">{error}</p>}
                            {success && <p className="text-emerald-400 text-sm">Your message has been sent successfully!</p>}

                            <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit Inquiry"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
