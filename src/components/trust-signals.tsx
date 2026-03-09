"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, Award, Users, Globe } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+", icon: <Award className="w-5 h-5 text-white/70" /> },
  { label: "Global Clients", value: "50+", icon: <Globe className="w-5 h-5 text-white/70" /> },
  { label: "Success Rate", value: "99%", icon: <ShieldCheck className="w-5 h-5 text-white/70" /> },
  { label: "Expert Engineers", value: "15+", icon: <Users className="w-5 h-5 text-white/70" /> },
];

const certifications = [
  "AWS Certified AI",
  "ISO 27001 Prepared",
  "BPO Compliance Experts",
  "Data Privacy Compliant",
];

export function TrustSignals() {
  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="section-inner">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Built on 10+ Years of Engineering Excellence</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Based in Colombo, our senior team brings deep expertise in BPO operations, global compliance, and cutting-edge AI architecture. We don't just build software; we engineer trust.
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span 
                  key={cert} 
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Visual representation of team trust / secure data */}
            <div className="card-surface p-8 relative overflow-hidden group">
              <Database className="w-12 h-12 text-sky-400 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-white mb-4">Secure & Compliant by Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We implement bank-grade security and follow strict data residency protocols. Your data is encrypted at rest and in transit, ensuring peace of mind for enterprises globally.
              </p>
              <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" /> Ready for Enterprise Deployment
              </div>
              
              {/* Decorative aura */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-sky-500/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
