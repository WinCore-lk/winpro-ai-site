"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, Award, Users, Globe } from "lucide-react";
import { CardHoverLines } from "@/components/card-hover-lines";

const certifications = [
  "10+ Years Experience",
  "5+ Expert Engineers",
  "Modern AI Frameworks",
  "Automation Pipelines",
  "Enterprise-Grade Security",
];

export function TrustSignals() {
  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="section-inner">
        {/* Expertise, Stats & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.01] border border-white/5 rounded-3xl p-8 lg:p-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Built on 10+ Years of Engineering Excellence</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Based in Colombo, our senior team brings deep expertise in BPO operations, global compliance, and cutting-edge AI architecture. We don't just build software; we engineer trust.
            </p>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:border-gold/30 hover:text-gold/80 transition-colors cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Visual representation of team trust / secure data */}
            <div className="card-surface card-surface-hover p-8 relative overflow-hidden group">
              <div className="card-shine" />
              <CardHoverLines />
              <Database className="w-12 h-12 text-white/50 mb-6 opacity-50 group-hover:opacity-100 transition-opacity relative z-10" />
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Secure & Compliant by Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                We implement bank-grade security and follow strict data residency protocols. Your data is encrypted at rest and in transit, ensuring peace of mind for enterprises globally.
              </p>
              <div className="flex items-center gap-2 text-sky-400/80 text-sm font-semibold relative z-10">
                <ShieldCheck className="w-4 h-4" /> Ready for Enterprise Deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
