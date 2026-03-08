"use client";

import { motion } from "framer-motion";

const line = "Global · Colombo · BPO · AI · Payroll · VAT · Compliance · Reporting · Chatbots";

export function Marquee() {
    const repeated = [line, line].join("  ·  ");

    return (
        <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-6 relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <motion.div
                className="flex gap-4 shrink-0 items-center text-sm text-white/30 tracking-tight"
                animate={{ x: [0, "-50%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
                <span className="whitespace-nowrap">{repeated}</span>
                <span className="whitespace-nowrap">{repeated}</span>
            </motion.div>
        </div>
    );
}
