"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    backgroundImage?: string;
    className?: string;
    large?: boolean;
}

export function BentoCard({ title, description, icon, backgroundImage, className, large }: BentoCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative rounded-3xl overflow-hidden group border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] ${className}`}
        >
            {/* Background Graphic */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                    backgroundColor: backgroundImage ? 'transparent' : 'rgba(255, 255, 255, 0.03)'
                }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-end p-8 sm:p-10">
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center transition-transform duration-500 ease-out group-hover:-rotate-45">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>

                {icon && (
                    <div className="mb-4">
                        {icon}
                    </div>
                )}

                <h3 className={`font-bold text-white mb-3 tracking-tight ${large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                    {title}
                </h3>

                <p className={`text-gray-400 font-light leading-relaxed max-w-lg transition-all duration-500 ${large ? 'text-lg' : 'text-base'}`}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
