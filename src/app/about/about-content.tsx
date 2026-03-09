"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutContent() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="section-inner max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="section-heading mb-12 sm:mb-16"
                    >
                        About WinCore AI
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="space-y-6"
                            >
                                <p className="text-xl text-gray-400 leading-relaxed group">
                                    Part of <a href="https://wincore.lk" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors">WinCore.lk</a>  -  10+ years in compliance and BPO. We&apos;re based in Colombo and work with clients globally, from local firms to international businesses outsourcing to the region. Our team mixes certified accountants and tech specialists. We add practical automation and consulting on top.
                                </p>
                            </motion.div>

                            <div className="space-y-6 pt-10 border-t border-white/5">
                                <motion.h2
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-2xl font-semibold text-white"
                                >
                                    Our mission
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-gray-400 leading-relaxed text-lg"
                                >
                                    We reduce operational friction through automation that fits your existing tools and BPO workflows. Our goal is to help businesses everywhere save time and cost  -  with compliance-aware delivery, clear documentation, and support. We serve clients globally from our base in Colombo.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-gray-400 leading-relaxed text-lg"
                                >
                                    On our main site, WinCore.lk, we report 95%+ client satisfaction. We bring the same standards to AI: no black boxes, no hype  -  just solutions that work and that you can own.
                                </motion.p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 lg:sticky lg:top-32"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670")`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white/60 text-xs font-medium tracking-widest uppercase">WinCore Engineering Hub</p>
                            </div>
                        </motion.div>
                    </div>

                    <section className="pt-20 border-t border-white/10 mt-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-semibold text-white mb-10 text-center"
                        >
                            What we believe
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Depth over hype", desc: "We solve real technical problems with proven approaches. No black boxes  -  you get documentation and clarity." },
                                { title: "Transparency", desc: "Clear communication, open documentation, and handover so your team can own and extend what we build." },
                                { title: "Built to last", desc: "Architecture that scales and stays maintainable. Security and compliance are part of the design." },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="card-surface card-surface-hover p-6 md:p-8"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <Button size="lg" className="rounded-xl bg-white text-black hover:bg-gray-100 font-semibold" asChild>
                            <Link href="/contact">Get in touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
