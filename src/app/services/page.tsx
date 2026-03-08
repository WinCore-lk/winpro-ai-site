"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, Activity, LineChart, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Process Automation & Workflows",
        slug: "ai-automation",
        description: "Automate repetitive BPO tasks: data entry from invoices/PDFs to spreadsheets/ERP, approval flows (e.g. expense claims), email reminders for VAT/RAMIS filings, supplier payments. We use Zapier, Make, n8n, or simple scripts where needed. Example: auto-pull payroll data → calculate EPF/ETF → generate payslips → flag discrepancies. Typically 40–70% cut in manual time on routine steps.",
        benefits: ["Data entry from invoices/PDFs to ERP", "Approval flows & compliance reminders", "Payroll/EPF/ETF automation", "Builds on our BPO & VAT expertise"],
        icon: <Activity className="w-8 h-8 text-blue-400" />,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Intelligent Chatbots",
        slug: "ai-chatbots",
        description: "RAG-based chatbots for client support: answer FAQs on payroll rules, VAT rates, compliance deadlines using your knowledge base. Internal bot (e.g. “What’s the latest EPF rate?”) or client-facing (“Track my VAT filing status”). We add to WhatsApp, website, or Slack. Low dev cost, quick setup.",
        benefits: ["Trained on your FAQs & policies", "WhatsApp, web, Slack", "Internal or client-facing", "Quick setup, affordable"],
        icon: <Bot className="w-8 h-8 text-indigo-400" />,
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2606&ixlib=rb-4.0.3",
    },
    {
        title: "AI Consulting & Process Audits",
        slug: "ai-consulting",
        description: "We audit your payroll, bookkeeping, and compliance → find bottlenecks → recommend quick automations (e.g. “Automate 3 manual steps in VAT prep”). You get a roadmap with costs, tools, and expected savings (e.g. “Rs. X/month for Zapier flows”). No heavy coding  -  domain knowledge plus practical AI. Bundles with our existing advisory/CFO support.",
        benefits: ["Process audit (payroll, VAT, compliance)", "Quick-win recommendations", "Roadmap with costs & tools", "Bundles with WinCore advisory"],
        icon: <LineChart className="w-8 h-8 text-rose-400" />,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    },
    {
        title: "Smart Reporting & Dashboards",
        slug: "data-intelligence",
        description: "Pull from Excel/ERP → auto-generate insights: cashflow trends, anomaly detection in expenses. Daily auto-updated dashboard for payroll variances or VAT compliance risks. We use Looker Studio, Power BI, or lightweight apps. Ties to your reporting and advisory work.",
        benefits: ["Dashboards from Excel/ERP", "Cashflow & expense insights", "Payroll/VAT compliance views", "Daily auto-updates"],
        icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2668&ixlib=rb-4.0.3",
    },
    {
        title: "Document Processing (OCR)",
        slug: "document-processing",
        description: "Extract data from invoices, payslips, or compliance docs and feed it into your systems. Auto-read supplier invoices → populate accounting entries. Practical for accounting firms and BPO workflows. We use proven OCR and document AI tools.",
        benefits: ["Invoice & payslip extraction", "Auto-populate accounting entries", "Compliance doc handling", "Fits existing BPO workflows"],
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                            >
                                <Link href={`/services/${service.slug}`} className="block h-full cursor-pointer group">
                                    <Card className="card-surface card-surface-hover h-full relative overflow-hidden flex flex-col">
                                        <div className="h-48 w-full relative overflow-hidden border-b border-white/10 rounded-t-2xl md:rounded-t-3xl">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${service.imageUrl})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-black/50 backdrop-blur border border-white/10">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <CardContent className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-semibold text-white tracking-tight">{service.title}</h3>
                                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-sky-400 transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                                            </div>
                                            <p className="text-gray-400 leading-relaxed text-sm mb-4">{service.description}</p>
                                            {"benefits" in service && (
                                                <ul className="mt-auto space-y-1.5 text-xs text-gray-500">
                                                    {(service as { benefits?: string[] }).benefits?.map((b, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <span className="w-1 h-1 rounded-full bg-sky-400/60" />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-surface p-10 md:p-12 text-center mt-16"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-3">Ready to start a project?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Tell us your goals. We'll propose a scoped approach and transparent pricing.
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 h-12 font-semibold transition-all hover:scale-[1.02]" asChild>
                            <Link href="/contact">Get in touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
