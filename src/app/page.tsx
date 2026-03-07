"use client";

import { motion, AnimatePresence } from "framer-motion";
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

const showcaseItems = [
  {
    image: "/ai_dashboard_preview_1772885226339.png",
    title: "Intelligent Insights",
    desc: "Real-time analytics engine tracking core KPIs."
  },
  {
    image: "/ai_agent_architecture_1772885265043.png",
    title: "Agentic Orchestration",
    desc: "Multi-layer AI networks working in harmony."
  },
  {
    image: "/enterprise_automation_scene_1772885306171.png",
    title: "Future Operations",
    desc: "Autonomous solutions for enterprise scale."
  }
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
    <div className="flex flex-col w-full relative overflow-hidden bg-black text-white">
      {/* Dynamic Background with more vibrancy */}
      <div className="absolute inset-0 -z-10 bg-[#020617] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-blue-600/20 blur-[130px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-15%] w-[45rem] h-[45rem] rounded-full bg-cyan-500/15 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.7, 0.3],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-15%] left-[10%] w-[55rem] h-[55rem] rounded-full bg-indigo-600/25 blur-[160px] mix-blend-screen"
        />
        {/* Added a warm highlight for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Hero Section (Rubiq / PlayZense Vibe) */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 flex min-h-[90vh] max-w-7xl mx-auto items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10 w-full">


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]"
            >
              Building <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Autonomous Engines
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed"
            >
              We engineer custom AI automation, intelligent agent networks, and predictive data ecosystems for global enterprises. Redefine your operational limits with state-of-the-art intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center lg:justify-start sm:flex-row gap-5 w-full lg:w-auto"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-lg font-semibold transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]" asChild>
                <Link href="/contact">Start a Partnership</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 backdrop-blur-md transition-transform hover:scale-105" asChild>
                <Link href="#playbook">Explore Playbook</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center w-full h-[600px] z-10"
          >
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[500px]"
            >
              <Image
                src="/wincore-mascot.png"
                alt="WinCore AI Mascot"
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                priority
              />
            </motion.div>

            {/* Mascot Core Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20 blur-[100px] -z-10 rounded-full mix-blend-screen" />
          </motion.div>
        </div>
      </section>

      {/* Interactive Expertise Section (Highlighting what we do) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Core Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            What we do. <span className="text-gray-600">And how we win.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.1] transition-all duration-500 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-blue-400/20 transition-colors" />
              <div className="mb-6 relative z-10 p-4 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors relative z-10 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed relative z-10 font-normal">
                {service.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>


      {/* Narrative Section (Dolphin Ad World Vibe) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-white/[0.02]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight italic">
            From complex legacy systems to autonomous future, we are your AI strike team.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed font-normal">
            We specialize in high-stakes integrations where precision matters. Our engineers don't just "implement" AI; we architect core business logic into autonomous ecosystems that drive 10x efficiency.
          </p>

        </motion.div>
      </section>

      {/* Infinite Marquee Section */}
      <Marquee />

      {/* Playbook Section (PlayZense Vibe) */}
      <section id="playbook" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">Our AI Playbook</h2>
              <p className="text-lg sm:text-xl text-gray-400 font-light">
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
                className="group relative"
              >
                {/* Glow halo on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

                {/* Glass card */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-3xl shadow-2xl group-hover:border-blue-400/50 group-hover:bg-white/[0.08] transition-all duration-500">

                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent" />
                  </div>

                  {/* Large step number watermark */}
                  <div className="absolute top-0 right-0 p-4 sm:p-6 text-5xl sm:text-6xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors duration-500 pointer-events-none select-none leading-none">
                    {step.id}
                  </div>

                  <div className="p-8 relative z-10 flex flex-col h-full">
                    {/* Icon bubble */}
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 inline-flex w-fit border border-blue-400/30 shadow-[0_0_25px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-all duration-500">
                      {step.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed font-normal text-sm sm:text-base">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Cinematic Work Showcase (RnP Brands style Bento Grid) */}
      <WorkShowcase />

      {/* "Make a Deal" Quick Steps / CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-[3rem] p-10 md:p-20 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -mr-72 -mt-72 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <motion.span 
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold mb-6 backdrop-blur-md"
                >
                  Streamlined Partnership
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight italic">
                  Start a Deal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">In 3 Minutes.</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-normal">
                  We've streamlined our technical vetting and onboarding to make high-stakes partnerships effortless.
                </p>
                
                <div className="space-y-6 mb-12">
                  {[
                    { id: 1, text: "Instant NDA & Secure Project Portal" },
                    { id: 2, text: "Strategy Call with Lead Architects" },
                    { id: 3, text: "Custom MVP Roadmap & Fixed Pricing" }
                  ].map((step) => (
                    <div key={step.id} className="flex items-center gap-5 text-white/90 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10 flex-shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all font-bold">
                        {step.id}
                      </div>
                      <span className="text-lg font-medium group-hover:text-blue-300 transition-colors uppercase tracking-tight">{step.text}</span>
                    </div>
                  ))}
                </div>
                
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-12 h-16 text-xl font-black transition-all hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.2)]" asChild>
                  <Link href="/contact">Draft Your Proposal <ArrowRight className="ml-2 w-6 h-6"/></Link>
                </Button>
              </div>
              
              <div className="relative w-full h-[500px] lg:h-[650px] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col"
                  >
                    {/* Image Card Part */}
                    <div className="relative flex-1 rounded-t-[3rem] overflow-hidden border-x border-t border-white/10 shadow-2xl">
                       <Image 
                        src={showcaseItems[currentSlide].image} 
                        alt={showcaseItems[currentSlide].title} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content Card Part (Meaning area) */}
                    <div className="bg-white/[0.04] backdrop-blur-3xl p-8 lg:p-10 rounded-b-[3rem] border border-white/10 relative z-10">
                      <div className="flex justify-between items-end">
                        <div>
                          <motion.h4 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white font-black text-2xl mb-2 tracking-tight uppercase"
                          >
                            {showcaseItems[currentSlide].title}
                          </motion.h4>
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-lg font-light max-w-sm"
                          >
                            {showcaseItems[currentSlide].desc}
                          </motion.p>
                        </div>
                        
                        <div className="flex gap-3 mb-2">
                          {showcaseItems.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentSlide(i)}
                              className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentSlide ? "bg-blue-400 w-8" : "bg-white/20 hover:bg-white/40"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative border glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-600/20 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 md:mb-8">Ready to revolutionize your business?</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-10 font-light leading-relaxed">
            Join the modern wave of enterprises scaling with custom AI integrations globally. Let's solve the deep technical challenges facing your company.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-bold transition-transform hover:scale-105" asChild>
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
