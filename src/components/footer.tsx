"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
    return (
        <footer className="relative bg-[#0a0a0f] border-t border-white/10 pt-16 pb-10">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10 mb-14">
                    <div className="md:col-span-12 lg:col-span-5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 flex-shrink-0">
                                <Image
                                    src="/logo.webp"
                                    alt="WinCore AI Official Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Link href="/" className="text-xl font-bold text-white hover:text-white/90 transition-colors tracking-tight">
                                    WinCore AI
                                </Link>
                                <a href="https://wincore.lk" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors">
                                    Part of WinCore.lk
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm">
                            High-performance AI engineering for global finance & BPO. Expert-led automation workflows that drive measurable impact, delivered with clinical precision.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Twitter">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="GitHub">
                                <Github size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors text-sm">AI Automation</Link></li>
                            <li><Link href="/services/ai-chatbots" className="text-gray-400 hover:text-white transition-colors text-sm">Intelligent Chatbots</Link></li>
                            <li><Link href="/services/ai-consulting" className="text-gray-400 hover:text-white transition-colors text-sm">AI Consulting & Audits</Link></li>
                            <li><Link href="/services/data-intelligence" className="text-gray-400 hover:text-white transition-colors text-sm">Smart Reporting</Link></li>
                            <li><Link href="/services/document-processing" className="text-gray-400 hover:text-white transition-colors text-sm">Document OCR</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
                            <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Updates on AI and automation, no spam.
                        </p>
                        <NewsletterForm layout="compact" placeholder="Email" />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm" suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} WinCore AI. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <a href="mailto:info@wincore.lk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <Mail size={14} /> info@wincore.lk
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
