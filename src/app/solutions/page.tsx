"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        industry: "Financial Services",
        description: "Harness predictive models to detect fraud in real-time, automate loan risk assessment, and offer hyper-personalized banking experiences to modern consumers.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    },
    {
        industry: "Healthcare & Life Sciences",
        description: "Accelerate patient diagnosis through advanced computer vision, unstructured medical data analysis, and predictive healthcare outcomes.",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    },
    {
        industry: "Retail & E-Commerce",
        description: "Deploy generative AI recommendation engines, dynamic pricing algorithms based on global demand, and intelligent supply chain optimization tools.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
    },
    {
        industry: "Manufacturing",
        description: "Implement predictive maintenance algorithms to minimize downtime, maximize efficiency, and automate quality control using AI vision cameras.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
    }
];

export default function SolutionsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16 w-full mt-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                    >
                        Industry Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
                    >
                        We adapt cutting-edge AI architectures to meet the specific demands of your industry, driving a competitive edge on a global scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 pb-20">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="bg-transparent border-0 overflow-hidden group cursor-default">
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] w-full">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${solution.imageUrl})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{solution.industry}</h3>
                                        <p className="text-gray-300 leading-relaxed font-light text-lg mb-6 max-w-lg">
                                            {solution.description}
                                        </p>
                                        <Button asChild variant="outline" className="rounded-full bg-white/10 hover:bg-white border-white/20 text-white hover:text-black backdrop-blur-md px-6">
                                            <Link href="/contact" className="inline-flex items-center">
                                                Discuss Use Cases <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
