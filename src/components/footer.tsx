import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="relative bg-black/40 backdrop-blur-2xl border-t border-white/10 pt-24 pb-12 overflow-hidden mt-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
                        <Link href="/" className="text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 inline-block hover:opacity-80 transition-opacity">
                            WinCore AI
                        </Link>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                            Pioneering the future of enterprise automation and artificial intelligence. We engineer digital workforces that redefine operational scalability.
                        </p>

                        <div className="flex space-x-5">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links - Column 1 */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Capabilities</h3>
                        <ul className="space-y-4 font-light">
                            <li><Link href="/services/ai-automation" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI Automation</Link></li>
                            <li><Link href="/services/machine-learning-solutions" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Machine Learning</Link></li>
                            <li><Link href="/services/computer-vision" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Computer Vision</Link></li>
                            <li><Link href="/services/ai-consulting" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Consulting</Link></li>
                        </ul>
                    </div>

                    {/* Links - Column 2 */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-4 font-light">
                            <li><Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Industry Solutions</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter - Column 3 */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                        <p className="text-gray-400 font-light mb-4">
                            Subscribe to our newsletter for the latest in enterprise AI.
                        </p>
                        <div className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus-visible:ring-blue-500 rounded-lg h-12"
                            />
                            <Button type="button" className="h-12 w-12 rounded-lg bg-blue-600 hover:bg-blue-700 p-0 flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-light" suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} WinCore AI. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-light">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
                        <div className="flex items-center space-x-2 text-gray-400">
                            <Mail size={16} />
                            <a href="mailto:hello@wincore.ai" className="hover:text-white transition-colors">hello@wincore.ai</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
