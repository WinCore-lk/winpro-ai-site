"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { CardHoverLines } from "@/components/card-hover-lines";

const faqs = [
    {
        q: "What workflows are best for AI automation?",
        a: "Any task that is repetitive, rule-based, and involves digital data. Common examples include invoice processing, data entry from PDFs to CRM, automated report generation, and first-line customer support queries."
    },
    {
        q: "How long does a typical implementation take?",
        a: "Small automation projects (like custom chatbots or single-process workflows) usually take 2-4 weeks. Larger enterprise integrations or custom AI development can take 2-4 months depending on complexity."
    },
    {
        q: "Do I need to change my existing software?",
        a: "Usually, no. We build 'connectors' and automation pipelines that sit on top of your current tools like Excel, SAP, Salesforce, or custom ERPs, pulling and pushing data via APIs or secure scraping."
    },
    {
        q: "Is my data secure?",
        a: "Security is our priority. We use enterprise-grade encryption for data in transit and at rest. We also offer compliance-aware delivery (GDPR, ISO standards) to ensure your business data never leaves your control without authorization."
    },
    {
        q: "What is the expected ROI?",
        a: "Most clients see a 40–70% reduction in manual processing time within the first 3 months. By eliminating human error and speeding up workflows, the systems typically pay for themselves within two quarters."
    }
];

export function FAQSection() {
    return (
        <section className="section-pad border-t border-white/5 relative overflow-hidden">
            <div className="section-inner max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-heading mb-4"
                    >
                        Engineering Transparency
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Clarity on our process, security, and implementation technicals.
                    </p>
                </div>

                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                <AccordionItem value={`item-${i}`} className="card-surface card-surface-hover px-6 md:px-8 border-white/5 rounded-2xl overflow-hidden mb-4 hover:bg-white/[0.04] transition-colors group border-none">
                                    <div className="card-shine" />
                                    <CardHoverLines />
                                    <AccordionTrigger className="text-left text-gray-200 hover:text-white py-6 text-lg font-medium hover:no-underline relative z-10">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 pb-8 pr-4 lg:pr-12 leading-relaxed text-base relative z-10">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-sky-500/[0.02] blur-[120px] rounded-full -z-10 pointer-events-none" />
            </div>
        </section>
    );
}
