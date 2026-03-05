"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart3, BrainCircuit, Activity, LineChart, Code2, Globe, Sparkles, Workflow, GitMerge, Settings2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/marquee";
import { WorkShowcase } from "@/components/work-showcase";

const services = [
  {
    title: "AI Automation",
    description: "Business workflow automation using agentic models to drastically reduce manual labor.",
    icon: <Activity className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "AI Chatbots",
    description: "Intelligent customer service bots that integrate directly with your real-time databases.",
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Machine Learning Solutions",
    description: "Predictive analytics to empower data-driven decisions at global scale.",
    icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis for quality control and security.",
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: "Data Intelligence",
    description: "Business insights and customized analytics dashboards.",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "AI Consulting",
    description: "Strategic planning for AI adoption across enterprise divisions.",
    icon: <LineChart className="w-8 h-8 text-rose-400" />,
  },
];

const playbookSteps = [
  {
    id: "01",
    title: "Identify",
    desc: "We conduct a thorough analysis of your operations to pinpoint high-ROI automation targets.",
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    id: "02",
    title: "Strategize",
    desc: "Our architects map out a bespoke AI transformation roadmap tailored to your specific constraints.",
    icon: <Workflow className="w-6 h-6 text-white" />
  },
  {
    id: "03",
    title: "Develop & Automate",
    desc: "We deploy cloud-native models and integrations that scale seamlessly with your growth.",
    icon: <GitMerge className="w-6 h-6 text-white" />
  },
  {
    id: "04",
    title: "Measure & Optimize",
    desc: "We constantly refine our algorithms based on real-world data to ensure compounding efficiency.",
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

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-black text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-emerald-900/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] rounded-full bg-indigo-900/20 blur-[150px] mix-blend-screen" />
      </div>

      {/* Hero Section (Rubiq / PlayZense Vibe) */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg shadow-white/5"
        >
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium tracking-wide text-gray-300">Architected in Sri Lanka. Scaling Globally.</span>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Discover Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              Digital Destiny
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
          >
            We empower global enterprises with state-of-the-art AI. Optimize your workflow, gain actionable insights, and redefine what's possible for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-5 mt-8"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-lg font-semibold transition-transform hover:scale-105" asChild>
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 backdrop-blur-md transition-transform hover:scale-105" asChild>
              <Link href="#playbook">Explore Playbook</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section (Dolphin Ad World Vibe) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
            Traditional to autonomous, we are your full-service AI engineers.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            We still engineer like it's our first deployment. Amongst our victories, we proudly wear the scars of integrations that stumbled—for in each challenge, we find the absolute seeds of future operational brilliance.
          </p>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <Marquee />

      {/* Playbook Section (PlayZense Vibe) */}
      <section id="playbook" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Our AI Playbook</h2>
              <p className="text-xl text-gray-400 font-light">
                Our digital playbook is the framework we use to help brands scale. It brings together insight, engineering, and data to make sure every automation has a reason behind it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playbookSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                    {step.id}
                  </div>
                  <CardContent className="p-8 relative z-10 flex flex-col h-full">
                    <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 inline-flex w-fit border border-blue-500/20">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Work Showcase (RnP Brands style Bento Grid) */}
      <WorkShowcase />

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <ShieldCheck className="w-16 h-16 text-emerald-400 mb-8" />
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8">Ready to revolutionize your business?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed">
            Join the modern wave of enterprises scaling with custom AI integrations globally. Let's solve the deep technical challenges facing your company.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 h-16 text-lg font-bold transition-transform hover:scale-105" asChild>
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
