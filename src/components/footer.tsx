import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative bg-[#0a0a0f] border-t border-white/10 pt-16 pb-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10 mb-14">
                    <div className="md:col-span-12 lg:col-span-5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1.5 flex-shrink-0">
                                <Image
                                    src="/wincore-mascot.png"
                                    alt="WinCore Mascot"
                                    fill
                                    className="object-contain p-1"
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
                            Practical AI and BPO automation for businesses worldwide. Based in Colombo; we work with global clients. Up to 40–60% time savings on repetitive tasks (e.g. payroll prep, reporting), with compliance-aware delivery.
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
                            <li><Link href="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors text-sm">Process Automation</Link></li>
                            <li><Link href="/services/ai-chatbots" className="text-gray-400 hover:text-white transition-colors text-sm">Chatbots</Link></li>
                            <li><Link href="/services/ai-consulting" className="text-gray-400 hover:text-white transition-colors text-sm">Consulting & Audits</Link></li>
                            <li><Link href="/services/data-intelligence" className="text-gray-400 hover:text-white transition-colors text-sm">Reporting & Dashboards</Link></li>
                            <li><Link href="/services/document-processing" className="text-gray-400 hover:text-white transition-colors text-sm">Document Processing</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Updates on AI and automation, no spam.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus-visible:ring-sky-500 rounded-xl h-11 text-sm flex-1"
                            />
                            <Button type="button" size="icon" className="h-11 w-11 rounded-xl bg-white text-black hover:bg-gray-100 flex-shrink-0">
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm" suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} WinCore AI. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <a href="mailto:info@wincore.lk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <Mail size={14} /> info@wincore.lk
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
