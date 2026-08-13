"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Search, Globe, Sparkles, Building2, Layers, Cpu, Compass, BrainCircuit } from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-5 h-5 text-indigo-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-purple-400" />;
      default: return <Building2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-header py-3" : "bg-slate-950/90 py-5 border-b border-slate-800/40"
      }`}
    >
      {/* Top Utility Announcement Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-950 via-indigo-950/40 to-slate-950 border-b border-slate-800/40 text-xs py-1.5 px-8">
        <div className="max-w-[1700px] mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="badge-tag !py-0.5 !px-2 !text-[10px]">Research Released</span>
            <span className="text-slate-300 font-medium">Enterprise Agentic AI Control Planes (2026 Strategy Benchmark)</span>
            <Link href="/insights/enterprise-agentic-ai-blueprint-2026" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center">
              Read Benchmark <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-400"><Globe className="w-3.5 h-3.5 mr-1.5 text-indigo-400" /> Global | North America & EMEA</span>
            <Link href="/contact" className="hover:text-white transition-colors">Client Portal</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Partner</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                IMPROX <span className="gradient-text-cyan font-semibold">INTEGENTS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase block mt-1">
                Enterprise Business Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
              Home
            </Link>

            {/* Capabilities Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveTab("capabilities")}
              onMouseLeave={() => setActiveTab(null)}
            >
              <button className="flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
                <span>Capabilities</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeTab === "capabilities" ? "rotate-180 text-indigo-400" : ""}`} />
              </button>

              {/* Mega Menu Popup */}
              <AnimatePresence>
                {activeTab === "capabilities" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-[-200px] w-[1150px] mt-2 glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-6">
                      
                      {/* Left Sidebar: 5 Pillars Tabs */}
                      <div className="col-span-4 bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 space-y-1">
                        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Strategic Capability Pillars
                        </div>
                        {ENTERPRISE_PILLARS.map((pillar, idx) => (
                          <button
                            key={pillar.slug}
                            onMouseEnter={() => setActivePillarIndex(idx)}
                            onClick={() => setActivePillarIndex(idx)}
                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                              activePillarIndex === idx
                                ? "bg-gradient-to-r from-indigo-600/30 to-slate-900 border border-indigo-500/40 text-white"
                                : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              {renderIcon(pillar.iconName)}
                              <span className="text-sm font-bold">{pillar.category}</span>
                            </div>
                            <ArrowRight className={`w-4 h-4 transition-opacity ${activePillarIndex === idx ? "opacity-100 text-indigo-400" : "opacity-0"}`} />
                          </button>
                        ))}
                      </div>

                      {/* Right Panel: Active Pillar's Sub-services Grid */}
                      <div className="col-span-8 p-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-4">
                            <div>
                              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                                <span>{ENTERPRISE_PILLARS[activePillarIndex].category}</span>
                              </h3>
                              <p className="text-xs text-slate-400 mt-1">
                                {ENTERPRISE_PILLARS[activePillarIndex].tagline}
                              </p>
                            </div>
                            <Link 
                              href={`/services/${ENTERPRISE_PILLARS[activePillarIndex].slug}`} 
                              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-800/40"
                            >
                              Pillar Overview <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {ENTERPRISE_PILLARS[activePillarIndex].items.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/services/${ENTERPRISE_PILLARS[activePillarIndex].slug}/${subItem.slug}`}
                                className="group/sub bg-slate-900/40 hover:bg-slate-900 border border-slate-800/40 hover:border-indigo-500/40 p-3 rounded-xl transition-all"
                              >
                                <div className="text-sm font-bold text-slate-200 group-hover/sub:text-indigo-300 flex items-center justify-between">
                                  <span>{subItem.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 text-indigo-400 transition-opacity" />
                                </div>
                                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                  {subItem.shortDesc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400 mt-4">
                          <span>Need tailored C-suite advisory?</span>
                          <Link href="/contact" className="text-cyan-400 hover:underline font-semibold">
                            Request Strategic Briefing &rarr;
                          </Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveTab("industries")}
              onMouseLeave={() => setActiveTab(null)}
            >
              <button className="flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeTab === "industries" ? "rotate-180 text-indigo-400" : ""}`} />
              </button>

              <AnimatePresence>
                {activeTab === "industries" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[550px] mt-2 glass-card rounded-2xl p-5 border border-slate-800 shadow-2xl z-50"
                  >
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Industry Sectors
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {GLOBAL_INDUSTRIES.map((ind) => (
                        <Link 
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          className="group p-3 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800/40 hover:border-cyan-500/40 transition-all"
                        >
                          <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 flex items-center justify-between">
                            <span>{ind.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{ind.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/insights" className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
              Insights & Research
            </Link>

            <Link href="/case-studies" className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
              Case Studies
            </Link>

            <Link href="/about" className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60">
              About Firm
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="btn-primary-gradient px-6 py-2.5 rounded-full text-sm font-semibold flex items-center"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-white py-2"
              >
                Home
              </Link>
              <div className="border-t border-slate-800 pt-3">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Capabilities</div>
                <div className="space-y-2 pl-2">
                  {ENTERPRISE_PILLARS.map((pillar) => (
                    <Link 
                      key={pillar.slug}
                      href={`/services/${pillar.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-semibold text-slate-300 hover:text-white py-1"
                    >
                      {pillar.category}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-800 pt-3 space-y-2">
                <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-white py-1">
                  Industries
                </Link>
                <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-white py-1">
                  Insights & Research
                </Link>
                <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-white py-1">
                  Case Studies
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-white py-1">
                  About Improx Integents
                </Link>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary-gradient w-full py-3 rounded-xl font-bold flex items-center justify-center"
                >
                  Schedule Executive Briefing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
