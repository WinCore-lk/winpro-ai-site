"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BarChart3, Activity, LineChart, Workflow, GitMerge, Settings2, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/marquee";
import { WorkShowcase } from "@/components/work-showcase";

const services = [
  {
    title: "Process Automation",
    description: "Automate repetitive BPO tasks like invoice entry and VAT filings. We cut manual time by 40–70% using deterministic workflows built on our payroll expertise.",
    icon: <Activity className="w-8 h-8 text-blue-400" />,
    image: "/automation_dashboard.png"
  },
  {
    title: "Intelligent Chatbots",
    description: "RAG-based bots grounded in your knowledge base. Deploy on WhatsApp, Slack, or Web to answer internal or client compliance queries with high accuracy.",
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    image: "/chatbot_interface.png"
  },
  {
    title: "AI Process Audits",
    description: "Rapid audits of your financial operations to identify high-ROI automation targets. Receive a clear roadmap with costs and expected savings.",
    icon: <LineChart className="w-8 h-8 text-rose-400" />,
    image: "/ai_agent_architecture_1772885265043.png"
  },
  {
    title: "Smart Dashboards",
    description: "Real-time visibility into cashflow, expenses, and compliance. Automated reporting pulled directly from your ERP or spreadsheets for better decision-making.",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    image: "/ai_dashboard_preview_1772885226339.png"
  },
  {
    title: "Document Processing",
    description: "Automate data extraction (OCR) for invoices and compliance docs. Feed high-precision data directly into your systems to eliminate manual entry.",
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    image: "/enterprise_automation_scene_1772885306171.png"
  },
];

const showcaseItems = [
  {
    image: "/ai_dashboard_preview_1772885226339.png",
    title: "Reporting dashboards",
    desc: "Live views of your operations so you can spot issues and act fast."
  },
  {
    image: "/ai_agent_architecture_1772885265043.png",
    title: "Automation workflows",
    desc: "From data entry to approvals  -  we design flows that fit your team."
  },
  {
    image: "/enterprise_automation_scene_1772885306171.png",
    title: "Integration with your stack",
    desc: "ERP, spreadsheets, and tools your team already uses  -  wherever you're based."
  }
];

const playbookSteps = [
  {
    id: "01",
    title: "Understand your process",
    desc: "We look at what you do today  -  payroll, VAT, inventory, support  -  and where the bottlenecks are.",
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    id: "02",
    title: "Propose a scope",
    desc: "We suggest what to automate first, what it will cost, and how it fits with your BPO or in-house team.",
    icon: <Workflow className="w-6 h-6 text-white" />
  },
  {
    id: "03",
    title: "Build and integrate",
    desc: "We build the solution and plug it into your systems. You get documentation and handover, not a black box.",
    icon: <GitMerge className="w-6 h-6 text-white" />
  },
  {
    id: "04",
    title: "Support and improve",
    desc: "We help you run it and tune it over time. If your process changes, we adapt.",
    icon: <Settings2 className="w-6 h-6 text-white" />
  },
];

// Reusing an icon for Target that was missing
function Target(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-root">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0f] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-sky-500/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[50rem] h-[30rem] bg-indigo-500/[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Hero */}
      <section className="section-pad flex min-h-[85vh] items-center">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]"
              >
                Practical AI and automation for finance, BPO, and compliance.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-400 max-w-xl font-normal leading-relaxed"
              >
                We work with businesses globally. Practical enhancements to your finance and compliance workflows  -  automation, chatbots, reporting. Based in Colombo with 10+ years in BPO and compliance. Up to 40–60% time savings on repetitive tasks like payroll prep or reporting; compliance-aware delivery for your region.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
              >
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 h-12 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base border-white/20 hover:bg-white/10 text-white" asChild>
                  <Link href="#playbook">How we work</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400/80" /> Compliance-aware delivery
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" /> 24–48h response, global clients
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block w-full aspect-[4/3] max-h-[520px] img-frame img-frame-hover"
            >
              <Image
                src="/wincore-mascot.png"
                alt="WinCore  -  AI & Automation"
                fill
                className="object-contain object-center p-8"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad border-t border-white/5">
        <div className="section-inner">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading text-center"
            >
              What we actually do
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="group card-surface card-surface-hover overflow-hidden flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden border-b border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 p-2.5 rounded-xl bg-black/50 backdrop-blur border border-white/10">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value + cost angle */}
      <section className="section-pad border-t border-white/5 bg-white/[0.02]">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Trusted delivery. Clear value.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Up to 40–60% time savings on repetitive tasks like payroll prep and reporting. Compliance-aware delivery, a team that knows your processes, and transparent pricing. We work with clients worldwide from our base in Colombo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-pad border-t border-white/5">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 md:p-12 max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed italic mb-6">
              "WinCore's automation saved us hours on reporting. We used to chase spreadsheets; now the dashboard is updated daily and we can focus on decisions."
            </p>
            <p className="text-gray-400 text-sm">
              -  BPO client, now using WinCore AI for dashboards and process automation
            </p>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* How we work */}
      <section id="playbook" className="section-pad border-t border-white/5">
        <div className="section-inner">
          <div className="mb-14 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              How we work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg"
            >
              A clear framework so every project has a defined scope, timeline, and success criteria.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playbookSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group card-surface card-surface-hover p-6 md:p-8 relative"
              >
                <span className="absolute top-6 right-6 text-4xl font-bold text-white/[0.06]">{step.id}</span>
                <div className="mb-5 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 w-fit">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Work Showcase (RnP Brands style Bento Grid) */}
      <WorkShowcase />

      {/* Get started  -  with showcase carousel */}
      <section className="section-pad border-t border-white/5">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 md:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="section-heading mb-6">
                  From first call to delivery  -  we keep it simple.
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                  Clear process, fixed scope where possible, and a single point of contact so you're never left in the dark.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    "NDA & secure project setup",
                    "Strategy call with our leads",
                    "Scoped roadmap & transparent pricing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/90">
                      <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold text-sky-300 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 h-12 text-base font-semibold transition-all hover:scale-[1.02]" asChild>
                  <Link href="/contact">Start a project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>

              <div className="relative w-full h-[420px] lg:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col img-frame overflow-hidden"
                  >
                    <div className="relative flex-1 min-h-[240px]">
                      <Image
                        src={showcaseItems[currentSlide].image}
                        alt={showcaseItems[currentSlide].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 bg-white/[0.03] border-t border-white/10 flex justify-between items-end flex-wrap gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{showcaseItems[currentSlide].title}</h4>
                        <p className="text-gray-400 text-sm">{showcaseItems[currentSlide].desc}</p>
                      </div>
                      <div className="flex gap-2">
                        {showcaseItems.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-sky-400 w-6" : "bg-white/25 w-2 hover:bg-white/40"}`}
                            aria-label={`View slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad border-t border-white/5 bg-white/[0.02]">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="section-heading mb-6">Tell us what you want to automate.</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Wherever you're based  -  we'll respond within 24–48 hours with a clear next step.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 h-12 text-base font-semibold transition-all hover:scale-[1.02]" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
