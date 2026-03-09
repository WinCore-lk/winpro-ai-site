"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Automating Customer Support",
    client: "Global SaaS Enterprise",
    problem: "Customer support tickets were overwhelming the team, leading to increased churn and operator burnout.",
    solution: "We engineered a RAG-based AI assistant integrated directly into their knowledge base and Slack workspace.",
    results: [
      { label: "Ticket Reduction", value: 65, suffix: "%", icon: <TrendingUp className="w-5 h-5" />, color: "text-white" },
      { label: "Resolution Speed", value: 40, suffix: "% faster", icon: <Clock className="w-5 h-5" />, color: "text-white" },
      { label: "Automated Responses", value: 100, suffix: "% coverage", icon: <MessageSquare className="w-5 h-5" />, color: "text-white" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="section-pad border-t border-white/5 relative overflow-hidden">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              Measurable Success
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Proof of excellence in complex AI implementations. We deliver tangible ROI for modern enterprises.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-surface p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ring-1 ring-white/10"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 tracking-wider">
                    CASE STUDY
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-sm font-medium text-sky-400">{study.client}</span>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {study.title}
                </h3>

                <div className="space-y-8 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Problem</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-sky-300 transition-colors group">
                  Want similar results? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 relative">
                 {/* Visual Results */}
                 {study.results.map((result, rIdx) => (
                   <motion.div
                    key={result.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (rIdx * 0.1) }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-colors"
                   >
                     <div className="flex items-center gap-4">
                       <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${result.color}`}>
                         {result.icon}
                       </div>
                       <span className="text-gray-400 font-medium">{result.label}</span>
                     </div>
                     <div className="text-right">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="block text-2xl md:text-3xl font-bold text-white mb-1"
                        >
                          {result.value}{result.suffix}
                        </motion.span>
                        {/* Static visual chart simulation */}
                        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(result.value / 100) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className={`h-full ${result.color.replace('text-', 'bg-')}`}
                          />
                        </div>
                     </div>
                   </motion.div>
                 ))}

                 {/* Decorative element */}
                 <div className="absolute -z-10 -right-20 -top-20 w-80 h-80 bg-sky-500/[0.05] blur-[80px] rounded-full pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
