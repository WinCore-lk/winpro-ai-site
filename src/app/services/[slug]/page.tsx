import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = serviceDetails[resolvedParams.slug];
    if (!service) return { title: "Service | WinCore AI" };
    
    const title = `${service.title} | WinCore AI`;
    const description = `${service.subtitle}. ${service.content.slice(0, 160)}...`;
    
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            images: ["/og-image.png"], // Reusing the global OG image for now
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.png"],
        }
    };
}

const serviceDetails: Record<string, { title: string, subtitle: string, content: string, features: string[] }> = {
    "ai-automation": {
        title: "Process Automation & Workflows",
        subtitle: "Strongest starting point  -  we can deliver this now",
        content: "We automate repetitive BPO tasks so you see immediate ROI. That includes: data entry from invoices/PDFs into spreadsheets or ERP; approval flows (e.g. expense claims); email reminders for VAT/RAMIS filings; or supplier payment workflows. We use Zapier, Make.com, n8n for no-code flows, and simple Python scripts when needed. Example: auto-pull payroll data from client sheets → calculate EPF/ETF → generate payslips → flag discrepancies. In practice we cut manual time by 40–70% on routine steps. This builds directly on our payroll and VAT expertise.",
        features: ["Data entry from invoices/PDFs to ERP", "Approval flows & compliance reminders (VAT/RAMIS)", "Payroll → EPF/ETF → payslips → discrepancy flags", "Zapier/Make/n8n or light scripting", "40–70% time savings on routine steps"]
    },
    "ai-chatbots": {
        title: "Intelligent Chatbots",
        subtitle: "Very doable  -  we start simple",
        content: "We build chatbots for client support that answer FAQs on payroll rules, VAT rates, compliance deadlines, or basic queries using your knowledge base. We use Retrieval-Augmented Generation (RAG): we feed your FAQs and policies into proven tools (e.g. OpenAI with Pinecone/Weaviate, or no-code like Voiceflow/Landbot). You can have an internal bot for your BPO team (e.g. “What’s the latest EPF rate?”) or a client-facing one (“Track my VAT filing status”). We add to WhatsApp, website, or Slack. Low dev cost, quick setup  -  for teams anywhere.",
        features: ["RAG on your FAQs & policies", "Internal or client-facing", "WhatsApp, web, Slack", "Quick setup, affordable for small firms"]
    },
    "ai-consulting": {
        title: "AI Consulting & Process Audits",
        subtitle: "Easiest entry  -  we deliver this immediately",
        content: "We audit your processes (payroll, bookkeeping, compliance), find bottlenecks, and recommend quick automations  -  e.g. “Automate 3 manual steps in VAT prep.” You get a roadmap with costs, tools, and expected savings (e.g. “Rs. X/month for Zapier flows”). No heavy coding: we use our domain knowledge plus basic AI awareness. We bundle this with our existing advisory and CFO support so it fits how you already work.",
        features: ["Audit of payroll, bookkeeping, compliance", "Bottleneck & quick-win recommendations", "Roadmap with costs, tools, savings", "Bundles with WinCore advisory/CFO"]
    },
    "data-intelligence": {
        title: "Smart Reporting & Dashboards",
        subtitle: "Good next step after process or consulting",
        content: "We pull data from your Excel or ERP and auto-generate insights: cashflow trends, anomaly detection in expenses. You get a daily auto-updated dashboard for things like payroll variances or VAT compliance risks. We use Google Looker Studio, Power BI with basic AI features, or lightweight Streamlit-style apps. This ties directly to your reporting and advisory work  -  no “big data” hype, just clarity you can use.",
        features: ["Dashboards from Excel/ERP", "Cashflow trends & expense anomalies", "Payroll/VAT compliance views", "Daily auto-updates"]
    },
    "machine-learning-solutions": {
        title: "Basic Predictive Insights",
        subtitle: "Pilot-level  -  we do this after 1–2 process/reporting clients",
        content: "Simple demand forecasting for retail or wholesale: we forecast sales or inventory from your historical data using proven tools (e.g. scikit-learn or no-code like Akkio). Example: we helped a Colombo retailer improve inventory accuracy by 30%  -  we trained only on their data. We don’t do large-scale “global enterprise” ML; we do practical pilots that you can measure. We take this on once we’ve already delivered process automation or reporting for you.",
        features: ["Demand/sales or inventory forecasting", "Trained on your data only", "Simple, explainable models", "Pilot after process/reporting work with us"]
    },
    "document-processing": {
        title: "Document Processing (OCR)",
        subtitle: "Feasible add-on for accounting and BPO",
        content: "We extract data from invoices, payslips, or compliance docs and feed it into your systems. Auto-read supplier invoices to populate accounting entries. We use Google Document AI, Tesseract, or affordable APIs. Practical for accounting firms and BPO workflows.",
        features: ["Invoice and payslip extraction", "Auto-populate accounting entries", "Compliance doc handling", "Fits existing BPO workflows"]
    }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = serviceDetails[resolvedParams.slug];

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Button asChild variant="outline">
                    <Link href="/services">Return to Services</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="page-root">
            <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[30rem] h-[20rem] bg-sky-500/[0.04] blur-[80px] rounded-full" />
            </div>
            <section className="section-pad">
                <div className="max-w-4xl mx-auto w-full">
                    <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium mb-10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to services
                    </Link>

                    <div className="space-y-10">
                        <div>
                            <h1 className="section-heading mb-3">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl">
                                {service.subtitle}
                            </p>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            {service.content}
                        </p>

                        <div className="card-surface p-6 sm:p-8">
                            <h3 className="text-lg font-semibold text-white mb-6">Key capabilities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm sm:text-base leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button size="lg" variant="gold" className="rounded-xl px-8 h-12 font-semibold w-full sm:w-auto" asChild>
                                <Link href="/contact">Discuss with our team</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
