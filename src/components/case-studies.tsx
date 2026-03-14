"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHoverLines } from "@/components/card-hover-lines";

const caseStudies = [
  {
    title: "Financial Workflow Automation",
    client: "Regional BPO Provider",
    problem: "Manual VAT filing and payroll validation were consuming 120+ man-hours weekly across 50+ client accounts.",
    solution: "Built a fleet of specialized AI agents to extract data from bank statements and auto-verify it against RAMIS filing rules.",
    bg: "bg-[#0b0b12]",
    results: [
      { label: "Efficiency Gain", value: 85, suffix: "%", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Error Reduction", value: 99.8, suffix: "%", icon: <CheckCircle2 className="w-5 h-5" /> },
      { label: "Implementation", value: 3, suffix: " weeks", icon: <Clock className="w-5 h-5" /> },
    ],
  },
  {
    title: "Automating Customer Support",
    client: "Global SaaS Enterprise",
    problem: "Customer support tickets were overwhelming the team, leading to increased churn and operator burnout.",
    solution: "We engineered a RAG-based AI assistant integrated directly into their knowledge base and Slack workspace.",
    bg: "bg-[#0c0c16]",
    results: [
      { label: "Ticket Reduction", value: 65, suffix: "%", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Resolution Speed", value: 40, suffix: "% faster", icon: <Clock className="w-5 h-5" /> },
      { label: "Coverage", value: 100, suffix: "%", icon: <MessageSquare className="w-5 h-5" /> },
    ],
  },
  {
    title: "AI Property Management",
    client: "National Real Estate Group",
    problem: "Processing 1,000+ monthly maintenance requests and utility bills was a manual bottleneck.",
    solution: "Deployed an automated document extraction and routing system that classifies and routes tickets directly to contractors.",
    bg: "bg-[#100b0b]",
    results: [
      { label: "Processing Speed", value: 92, suffix: "% faster", icon: <Clock className="w-5 h-5" /> },
      { label: "Data Accuracy", value: 98.5, suffix: "%", icon: <CheckCircle2 className="w-5 h-5" /> },
      { label: "OpEx Reduction", value: 50, suffix: "%", icon: <TrendingUp className="w-5 h-5" /> },
    ],
  },
];

interface CaseStudiesProps {
  isHome?: boolean;
}

export function CaseStudies({ isHome = false }: CaseStudiesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (!isHome) {
    return (
      <section className="section-pad border-t border-white/5 relative overflow-hidden">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="section-heading mb-4">Case Studies</h2>
              <p className="text-gray-400 text-lg">Proof of excellence in complex AI implementations.</p>
            </div>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl" asChild>
              <Link href="/case-studies">View all projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="card-blueprint p-8 md:p-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
                <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{study.title}</h3>
                <p className="text-gray-400 mb-8">{study.problem}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.map((r) => (
                    <div key={r.label} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-sky-400 mb-2">{r.icon}</div>
                      <div className="text-2xl font-bold text-white">{r.value}{r.suffix}</div>
                      <div className="text-xs text-gray-500 uppercase">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative px-4 sm:px-6 lg:px-8 bg-black py-0">
      <div className="max-w-7xl mx-auto pt-0 pb-12">
        <div className="text-center mb-8 pt-6">
          <h2 className="section-heading mb-2">Case Studies</h2>
          <p className="text-gray-400 text-lg">Engineering impact across industries.</p>
        </div>

        <div className="relative">
          {caseStudies.slice(0, 2).map((study, idx) => (
            <div key={study.title} className="h-[120vh] relative mb-12">
              <div
                className="sticky top-6 flex items-start justify-center"
                style={{ zIndex: idx + 1 }}
              >
                <CaseStudyCard
                  study={study}
                  index={idx}
                  total={2}
                  scrollYProgress={scrollYProgress}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg" className="rounded-2xl px-12 h-14 font-bold text-lg" asChild>
            <Link href="/case-studies">Explore All Operations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index, total, scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [index / total, (index + 0.5) / total], [1, 0.95]);
  const opacity = useTransform(
    scrollYProgress, 
    [index / total, (index + 0.8) / total, (index + 0.95) / total], 
    [1, 1, index === total - 1 ? 1 : 0]
  );

  return (
    <motion.div
      style={{ scale, opacity, transformOrigin: "top" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`w-full max-w-6xl h-[720px] rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden ${study.bg} px-10 md:px-16 pt-0 pb-6 relative group card-blueprint card-surface-hover transition-colors duration-500`}
    >
      <div className="card-shine" />
      <CardHoverLines />

      {/* Blueprint Decoration */}
      <div className="blueprint-corner corner-tl" />
      <div className="blueprint-corner corner-tr" />
      <div className="blueprint-corner corner-bl" />
      <div className="blueprint-corner corner-br" />
      <div className="blueprint-scan" />
      <div className="blueprint-bg-text font-mono opacity-10 leading-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i}>01101010010101110101010100110101010101011010101001010111010101010011010101010</div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-1 pt-0">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
              Project_0{index + 1}
            </span>
            <span className="text-xs text-white/30 font-mono tracking-tighter">{study.client}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter leading-[0.9]">{study.title}</h3>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-sky-400" />
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{study.problem}</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors uppercase tracking-widest text-[10px]">
            Analyze my process <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {study.results.map((result: any) => (
            <div
              key={result.label}
              className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group/item hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-500"
            >
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover/item:bg-sky-500 group-hover/item:text-white transition-all duration-300">
                  {result.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-0.5">Metric_Data</span>
                  <span className="text-gray-300 text-sm font-medium">{result.label}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-white tracking-tighter group-hover/item:text-sky-400 transition-colors duration-300">
                  {result.value}{result.suffix}
                </div>
                <div className="w-20 h-1 bg-white/5 rounded-full mt-1.5 overflow-hidden ml-auto">
                  <div
                    className="h-full bg-sky-500/40 group-hover/item:bg-sky-500 transition-all duration-700"
                    style={{ width: typeof result.value === 'number' ? `${result.value}%` : '70%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
}
