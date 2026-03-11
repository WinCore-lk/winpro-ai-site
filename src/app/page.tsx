"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BarChart3, Activity, LineChart, Workflow, GitMerge, Settings2, ArrowRight, ShieldCheck, FileText, Search, PenTool, Code, Rocket, Briefcase, Plane, ShoppingCart, Landmark, Award, Globe, Users, TrendingUp, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WorkShowcase } from "@/components/work-showcase";
import { CaseStudies } from "@/components/case-studies";
import { TrustSignals } from "@/components/trust-signals";
import { CardHoverLines } from "@/components/card-hover-lines";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { TechStack } from "@/components/tech-stack";

const services = [
  {
    title: "AI Automation",
    description: "Automate repetitive tasks with intelligent workflows. Used in finance, BPO, and ecommerce.",
    icon: <Activity className="w-8 h-8 text-white" />,
    href: "/services/ai-automation",
  },
  {
    title: "AI Chatbots",
    description: "Deploy context-aware assistants for customer support and lead generation via WhatsApp and Web.",
    icon: <Bot className="w-8 h-8 text-white" />,
    href: "/services/ai-chatbots",
  },
  {
    title: "AI Consulting",
    description: "Audit your processes to find bottlenecks and build your ROI-focused AI roadmap.",
    icon: <Settings2 className="w-8 h-8 text-white" />,
    href: "/services/ai-consulting",
  },
  {
    title: "Data Intelligence",
    description: "Transform raw data into live dashboards and exec-level insights for better decision-making.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    href: "/services/data-intelligence",
  },
  {
    title: "Document OCR",
    description: "Intelligent document processing for high-accuracy extraction from invoices and legal contracts.",
    icon: <FileText className="w-8 h-8 text-white" />,
    href: "/services/document-processing",
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
    title: "Discovery",
    desc: "We analyze your business workflows to find the highest-impact automation targets.",
    icon: <Search className="w-6 h-6 text-white" />
  },
  {
    id: "02",
    title: "Solution Design",
    desc: "We design a custom AI system tailored specifically to your business needs.",
    icon: <PenTool className="w-6 h-6 text-white" />
  },
  {
    id: "03",
    title: "Development",
    desc: "Our senior engineers build and integrate the AI solution into your existing systems.",
    icon: <Code className="w-6 h-6 text-white" />
  },
  {
    id: "04",
    title: "Deployment",
    desc: "We launch, monitor, and optimize your AI system for peak performance.",
    icon: <Rocket className="w-6 h-6 text-white" />
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
        <div className="absolute bottom-0 right-0 w-[50rem] h-[30rem] bg-gold/[0.03] blur-[100px] rounded-full" />
        
        {/* Artistic Brush Stroke 1 (Orange) */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, rotate: -2 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[10%] -right-[10%] w-[1000px] h-[1000px] mix-blend-screen grayscale-0"
        >
          <Image 
            src="/brush-stroke.png" 
            alt="" 
            fill 
            className="object-contain opacity-40 brightness-125"
          />
        </motion.div>

        {/* Artistic Brush Stroke 2 (Yellow/Gold) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 15 }}
          whileInView={{ opacity: 0.12, scale: 1, rotate: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute bottom-[5%] -left-[15%] w-[800px] h-[800px] mix-blend-screen grayscale-0 hidden lg:block"
        >
          <Image 
            src="/brush-stroke-2.png" 
            alt="" 
            fill 
            className="object-contain opacity-30 brightness-110"
          />
        </motion.div>
      </div>

      {/* 1. Hero */}
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
                Automate Repetitive Business Workflows with AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-400 max-w-xl font-normal leading-relaxed"
              >
                We build AI-powered workflows, chatbots, and integrations that eliminate repetitive business tasks and reduce manual operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
              >
                <Button size="lg" variant="gold" className="rounded-xl px-8 h-12 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base border-white/20 hover:bg-white/10 text-white" asChild>
                  <Link href="#process">Our Process</Link>
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
                  <span className="w-2 h-2 rounded-full bg-gold/80 shadow-[0_0_8px_rgba(255,191,0,0.4)]" /> Fast response, global clients
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
                alt="WinCore - AI & Automation"
                fill
                className="object-contain object-center p-8"
                priority
              />
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
            className="mt-20 pt-10 border-t border-white/5"
          >
            <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-8">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-xl font-bold text-white tracking-tighter">FINTECH</span>
               <span className="text-xl font-bold text-white tracking-tighter">GLOBALBPO</span>
               <span className="text-xl font-bold text-white tracking-tighter">MARITIME CO</span>
               <span className="text-xl font-bold text-white tracking-tighter">LOGISTICS PRO</span>
               <span className="text-xl font-bold text-white tracking-tighter">RETAIL AI</span>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* 2. Services */}
      <section id="services" className="section-pad border-t border-white/5">
        <div className="section-inner">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading text-center"
            >
              Our Capabilities
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Link key={service.title} href={service.href} className="group h-full">
                  <div className="card-service p-8 h-full relative flex flex-col">
                    {/* HUD Decoration */}
                    <div className="hud-corner hud-tl" />
                    <div className="hud-corner hud-br" />

                    <div className="mb-6 p-3 w-fit rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 relative z-10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors relative z-10">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-widest relative z-10">
                      Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Workflow Animation */}
      <WorkflowDiagram />

      {/* 3. How we work */}
      <section id="process" className="section-pad border-t border-white/5">
        <div className="section-inner">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg"
            >
              A streamlined engineering process built for speed, transparency, and clinical precision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8 px-4">
            {playbookSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group card-service p-8 relative flex flex-col items-start"
              >
                {/* HUD Decoration */}
                <div className="hud-corner hud-tl" />
                <div className="hud-corner hud-br" />

                <div className="absolute top-6 right-8 text-5xl font-black text-white/[0.03] group-hover:text-sky-500/[0.08] transition-colors font-mono pointer-events-none z-0">
                  {step.id}
                </div>

                <div className="mb-6 p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-lg shadow-sky-500/5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-400 transition-colors relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      {/* 4.5 Tech Stack */}
      <TechStack />

      {/* 5. Industries */}
      <section className="section-pad border-t border-white/5 bg-white/[0.01]">
        <div className="section-inner">
          <div className="flex flex-col items-center mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading text-center"
            >
              AI for Every Industry
            </motion.h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl">
              We deliver specialized AI solutions across diverse sectors, ensuring compliance and operational excellence tailored to your niche.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: "Finance & BPO", icon: <Landmark className="w-6 h-6" />, desc: "Automated VAT, payroll, and financial reporting." },
              { name: "Logistics", icon: <Plane className="w-6 h-6" />, desc: "Route optimization and supply chain automation." },
              { name: "Retail", icon: <ShoppingCart className="w-6 h-6" />, desc: "Conversational commerce and inventory forecasting." },
              { name: "Legal", icon: <Briefcase className="w-6 h-6" />, desc: "Document processing and compliance auditing." },
              { name: "Healthcare", icon: <Activity className="w-6 h-6" />, desc: "Patient data extraction and medical billing automation." },
              { name: "Real Estate", icon: <Globe className="w-6 h-6" />, desc: "Property management automation and lead scoring." },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-6 border border-white/5 hover:border-white/20 transition-all text-center"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 text-sky-400">
                  {industry.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{industry.name}</h4>
                <p className="text-gray-400 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <TrustSignals />

      <section className="section-pad border-t border-white/5">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface p-8 md:p-10"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-6">
                "WinCore's automation saved us hours on reporting. We used to chase spreadsheets; now the dashboard is updated daily and we can focus on decisions."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sky-400 font-bold">B</div>
                <div>
                  <p className="text-white font-semibold text-sm">Operations Director</p>
                  <p className="text-gray-500 text-xs">Global BPO Client</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-surface p-8 md:p-10"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-6">
                "The AI support bot we implemented with WinCore has handled 65% of our Tier 1 queries autonomously. The team's expertise is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold">S</div>
                <div>
                  <p className="text-white font-semibold text-sm">CTO</p>
                  <p className="text-gray-500 text-xs">SaaS Enterprise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WorkShowcase />



      {/* 7. Final CTA */}
      <section className="section-pad border-t border-white/5 bg-white/[0.02]">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="section-heading mb-6">Let&apos;s architect your AI future.</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Wherever you&apos;re based - we&apos;ll respond with a clear next step.
            </p>
            <Button size="lg" variant="gold" className="rounded-xl px-8 h-12 text-base font-semibold transition-all hover:scale-[1.02]" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
