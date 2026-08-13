"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, BarChart3, BrainCircuit, Rocket, ShieldCheck, Cpu } from "lucide-react";
import { INDUSTRIES, CAPABILITIES } from "@/lib/data";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 text-white min-h-[90vh] flex items-center pt-10">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-overlay"></div>
          {/* Abstract Grid background */}
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-sm font-medium tracking-wide">AI-Powered Business Transformation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Strategy. Innovation. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Transformation.
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
              We partner with modern enterprises to solve complex business challenges, drive operational excellence, and unlock new growth through AI and intelligent technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center group shadow-lg shadow-primary/30">
                Explore Our Capabilities
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-transparent border border-zinc-600 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-12 border-b border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-zinc-950">Fortune 500</h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Trusted Partners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-zinc-950">250+</h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Transformations</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-zinc-950">$5B+</h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Value Unlocked</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-zinc-950">Global</h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Delivery Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Explorer */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">End-to-End Enterprise Solutions</h3>
            <p className="text-lg text-zinc-600">
              From strategy to execution, our comprehensive suite of consulting services is designed to architect the future of your organization.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {CAPABILITIES.map((cap, idx) => (
              <motion.div key={cap.slug} variants={itemVariants} className="group relative bg-zinc-50 hover:bg-white border border-zinc-200 rounded-3xl p-10 transition-all hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {idx === 0 ? <BrainCircuit className="w-7 h-7" /> : <Rocket className="w-7 h-7" />}
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-950 mb-4">{cap.title}</h4>
                  <p className="text-zinc-600 mb-8 leading-relaxed">
                    {cap.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {cap.subServices.map(sub => (
                      <li key={sub.slug} className="flex items-center text-sm font-medium text-zinc-700">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${cap.slug}`} className="inline-flex items-center text-primary font-semibold hover:text-emerald-700">
                    Explore Capability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
            
            {/* Hardcoded additional capabilities for layout visually */}
            <motion.div variants={itemVariants} className="group relative bg-zinc-50 hover:bg-white border border-zinc-200 rounded-3xl p-10 transition-all hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-950 mb-4">Data & Analytics</h4>
                  <p className="text-zinc-600 mb-8 leading-relaxed">
                    Transform raw data into strategic assets. We build the enterprise data foundation required for modern intelligence.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Data Strategy & Governance</li>
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Predictive Analytics</li>
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Business Intelligence</li>
                  </ul>
                  <Link href={`/services`} className="inline-flex items-center text-primary font-semibold hover:text-emerald-700">
                    Explore Capability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group relative bg-zinc-50 hover:bg-white border border-zinc-200 rounded-3xl p-10 transition-all hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-950 mb-4">Cloud & Platform</h4>
                  <p className="text-zinc-600 mb-8 leading-relaxed">
                    Build agile, scalable architectures. We guide enterprises through complex cloud migrations and platform engineering.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Cloud Strategy</li>
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Platform Modernization</li>
                    <li className="flex items-center text-sm font-medium text-zinc-700"><ChevronRight className="w-4 h-4 text-primary mr-2" />Hybrid Architecture</li>
                  </ul>
                  <Link href={`/services`} className="inline-flex items-center text-primary font-semibold hover:text-emerald-700">
                    Explore Capability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Industries Served</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Deep Domain Expertise</h3>
              <p className="text-lg text-zinc-400">
                We bring specialized knowledge to every engagement. Our industry experts understand the unique regulatory, market, and operational challenges you face.
              </p>
            </div>
            <Link href="/industries" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-colors border border-white/10">
              View All 20+ Industries
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-primary/30 transition-colors z-10"></div>
                {/* Fallback pattern since images aren't present yet */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
                
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-bold text-white mb-2">{ind.title}</h4>
                  <p className="text-zinc-300 text-sm mb-6 line-clamp-2">{ind.description}</p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Explore Industry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwdjYwaDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Partner with Improx Integents to unlock new efficiencies, drive innovation, and build the future of your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary hover:bg-zinc-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl text-lg">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
