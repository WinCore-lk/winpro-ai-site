import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4 inline-block">
                            Winpro AI
                        </Link>
                        <p className="text-gray-400 max-w-sm mt-4">
                            Pioneering the future of automation and artificial intelligence for modern businesses. Transform your workflow today.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Winpro AI. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0 text-gray-500 text-sm">
                        <Mail size={16} />
                        <span>hello@winpro.ai</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
