"use client";

import { motion } from "framer-motion";
import { Target, Zap, BarChart3 } from "lucide-react";
import { BentoCard } from "./ui/magic/bento-card";

export function WorkShowcase() {
    return (
        <section className="section-pad border-y border-white/5 overflow-hidden">
            <div className="section-inner">
                <div className="text-center mb-10 max-w-2xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-heading mb-4"
                    >
                        Capabilities in practice
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg"
                    >
                        Process automation, chatbots, audits, reporting, and document processing  -  for finance, BPO, and compliance teams worldwide.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 md:min-h-[600px] lg:min-h-[720px]">

                    <BentoCard
                        large
                        className="md:col-span-2 md:row-span-2"
                        title="Process automation & workflows"
                        description="Data entry from invoices/PDFs to ERP, approval flows, VAT/RAMIS reminders. Payroll → EPF/ETF → payslips. 40–70% time savings on routine steps. We deliver this now."
                        backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3000&auto=format&fit=crop"
                    />
                    <BentoCard
                        className="md:col-span-2 md:row-span-1"
                        title="Consulting & process audits"
                        description="We audit your processes, find bottlenecks, recommend quick automations. Roadmap with costs and tools. No heavy coding  -  domain knowledge + practical AI."
                        icon={<Target className="w-8 h-8 text-gold" />}
                    />
                    <BentoCard
                        className="md:col-span-1 md:row-span-1"
                        title="Intelligent chatbots"
                        description="RAG on your FAQs. Internal or client-facing. WhatsApp, web, Slack. Quick setup."
                        icon={<Zap className="w-8 h-8 text-sky-400" />}
                    />
                    <BentoCard
                        className="md:col-span-1 md:row-span-1"
                        title="Reporting & document processing"
                        description="Dashboards from Excel/ERP. OCR for invoices and payslips to cut manual data entry."
                        icon={<BarChart3 className="w-8 h-8 text-gold" />}
                    />
                </div>
            </div>
        </section>
    );
}
