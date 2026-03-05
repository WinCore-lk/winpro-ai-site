"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/solutions", label: "Solutions" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            Winpro AI
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/90 backdrop-blur-3xl border border-white/10 absolute w-full mt-4 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
