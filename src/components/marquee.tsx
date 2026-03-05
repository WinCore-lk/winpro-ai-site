"use client";

import { motion } from "framer-motion";

export function Marquee() {
    const words = [
        "AI AUTOMATION", "•",
        "ENTERPRISE AI", "•",
        "GLOBAL SCALE", "•",
        "PREDICTIVE ML", "•",
        "AUTONOMOUS AGENTS", "•",
        "COMPUTER VISION", "•",
        "DATA INFRASTRUCTURE", "•",
        "DIGITAL TRANSFORMATION", "•"
    ];

    return (
        <div className="w-full overflow-hidden flex whitespace-nowrap bg-gradient-to-r from-blue-900/10 via-emerald-900/10 to-blue-900/10 py-6 border-y border-white/5 relative items-center">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex space-x-12 shrink-0 items-center justify-center"
                animate={{ x: [0, "-50%"] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
                {[...words, ...words, ...words, ...words].map((word, i) => (
                    <span
                        key={i}
                        className={`text-2xl sm:text-3xl font-bold tracking-widest uppercase ${word === "•" ? "text-blue-500/50 scale-50" : "text-white/20 hover:text-white transition-colors duration-500"}`}
                    >
                        {word}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
