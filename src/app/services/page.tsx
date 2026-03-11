"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, Activity, LineChart, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHoverLines } from "@/components/card-hover-lines";

const services = [
    {
        title: "Process Automation & Workflows",
        slug: "ai-automation",
        description: "Automate repetitive BPO tasks: data entry from invoices/PDFs to spreadsheets/ERP, approval flows (e.g. expense claims), email reminders for VAT/RAMIS filings, supplier payments. We use Zapier, Make, n8n, or simple scripts where needed. Example: auto-pull payroll data → calculate EPF/ETF → generate payslips → flag discrepancies. Typically 40–70% cut in manual time on routine steps.",
        benefits: ["Data entry from invoices/PDFs to ERP", "Approval flows & compliance reminders", "Payroll/EPF/ETF automation", "Builds on our BPO & VAT expertise"],
        industries: ["Finance", "BPO", "Ecommerce", "Logistics"],
        icon: <Activity className="w-8 h-8 text-blue-400" />,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Intelligent Chatbots",
        slug: "ai-chatbots",
        description: "RAG-based chatbots for client support: answer FAQs on payroll rules, VAT rates, compliance deadlines using your knowledge base. Internal bot (e.g. “What’s the latest EPF rate?”) or client-facing (“Track my VAT filing status”). We add to WhatsApp, website, or Slack. Low dev cost, quick setup.",
        benefits: ["Trained on your FAQs & policies", "WhatsApp, web, Slack", "Internal or client-facing", "Quick setup, affordable"],
        industries: ["Customer Support", "Lead Generation", "Internal HR/IT"],
        icon: <Bot className="w-8 h-8 text-indigo-400" />,
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2606&ixlib=rb-4.0.3",
    },
    {
        title: "AI Consulting & Process Audits",
        slug: "ai-consulting",
        description: "We audit your payroll, bookkeeping, and compliance → find bottlenecks → recommend quick automations (e.g. “Automate 3 manual steps in VAT prep”). You get a roadmap with costs, tools, and expected savings (e.g. “Rs. X/month for Zapier flows”). No heavy coding  -  domain knowledge plus practical AI. Bundles with our existing advisory/CFO support.",
        benefits: ["Process audit (payroll, VAT, compliance)", "Quick-win recommendations", "Roadmap with costs & tools", "Bundles with WinCore advisory"],
        industries: ["Accounting Firms", "BPO", "SMEs"],
        icon: <LineChart className="w-8 h-8 text-rose-400" />,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Smart Reporting & Dashboards",
        slug: "data-intelligence",
        description: "Pull from Excel/ERP → auto-generate insights: cashflow trends, anomaly detection in expenses. Daily auto-updated dashboard for payroll variances or VAT compliance risks. We use Looker Studio, Power BI, or lightweight apps. Ties to your reporting and advisory work.",
        benefits: ["Dashboards from Excel/ERP", "Cashflow & expense insights", "Payroll/VAT compliance views", "Daily auto-updates"],
        industries: ["Finance", "Retail", "Executive Teams"],
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3",
    },
    {
        title: "Document Processing (OCR)",
        slug: "document-processing",
        description: "Extract data from invoices, payslips, or compliance docs and feed it into your systems. Auto-read supplier invoices → populate accounting entries. Practical for accounting firms and BPO workflows. We use proven OCR and document AI tools.",
        benefits: ["Invoice & payslip extraction", "Auto-populate accounting entries", "Compliance doc handling", "Fits existing BPO workflows"],
        industries: ["Legal", "Accounting", "Logistics"],
        icon: <FileText className="w-8 h-8 text-purple-400" />,
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2670",
    },
];

export default function ServicesPage() {
    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-sky-500/[0.04] blur-[100px] rounded-full" />
            </div>

            <section className="section-pad">
                <div className="section-inner">
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="section-heading mb-4"
                        >
                            Our services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Practical automation and consulting for finance, BPO, and compliance  -  for teams worldwide. We focus on what we deliver now: process automation, chatbots, audits, reporting, and document processing. Starter packages and clear pricing; we work with clients globally from our base in Colombo.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                            >
                                <Link href={`/services/${service.slug}`} className="block h-full cursor-pointer group">
                                    <div className="card-service h-full relative flex flex-col">
                                        {/* HUD Decoration */}
                                        <div className="hud-corner hud-tl" />
                                        <div className="hud-corner hud-br" />
                                        
                                        <div className="h-48 w-full relative overflow-hidden border-b border-white/5 rounded-t-3xl">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${service.imageUrl})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
                                            <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 relative z-10">
                                                {service.icon}
                                            </div>
                                        </div>

                                        <CardContent className="p-7 flex flex-col flex-grow relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">{service.title}</h3>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 transition-all group-hover:translate-x-0.5" />
                                                </div>
                                            </div>
                                            <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">{service.description}</p>
                                            
                                            <div className="mb-6">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {service.industries.map((ind, i) => (
                                                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/5 border border-sky-500/10 text-sky-400/80">
                                                            {ind.toUpperCase()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <ul className="mt-auto space-y-2 border-t border-white/5 pt-6">
                                                {service.benefits.slice(0, 3).map((b, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-[11px] text-gray-500 leading-snug">
                                                        <div className="w-1 h-1 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-service p-10 md:p-12 text-center mt-16 relative"
                    >
                        <div className="hud-corner hud-tl" />
                        <div className="hud-corner hud-br" />
                        <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Ready to start a project?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                            Tell us your goals. We'll propose a scoped approach and transparent pricing.
                        </p>
                        <Button size="lg" variant="gold" className="rounded-xl px-8 h-12 font-bold transition-all hover:scale-[1.02] relative z-10 shadow-lg shadow-white/10" asChild>
                            <Link href="/contact">Get in touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
