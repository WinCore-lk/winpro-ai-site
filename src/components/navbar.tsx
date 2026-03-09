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
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-[100rem] z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-xl font-semibold text-white hover:text-white/90 transition-colors">
                            WinCore AI
                        </Link>
                        <a
                            href="https://wincore.lk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:inline"
                        >
                            WinCore.lk →
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="bg-white hover:bg-gray-100 text-black rounded-xl px-6 h-10 text-sm font-semibold transition-all hover:scale-[1.02]">
                            <Link href="/contact">Free Consultation</Link>
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-400 hover:text-white p-2"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-white/10 bg-[#0a0a0f]/98 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 text-gray-400 hover:text-white font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3">
                                <Button asChild className="w-full bg-white hover:bg-gray-100 text-black rounded-xl h-11 font-semibold">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
