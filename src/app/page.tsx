"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  BrainCircuit, 
  Layers, 
  Cpu, 
  Compass, 
  BarChart3, 
  Users, 
  Zap, 
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";
import { 
  ENTERPRISE_PILLARS, 
  GLOBAL_INDUSTRIES, 
  CLIENT_LOGOS, 
  FEATURED_INSIGHTS, 
  FEATURED_CASE_STUDIES 
} from "@/lib/data";

export default function Home() {
  // Interactive Calculator State
  const [calcIndustry, setCalcIndustry] = useState("Financial Services & Banking");
  const [calcScale, setCalcScale] = useState("$2B - $10B Enterprise");
  const [calcGoal, setCalcGoal] = useState("Agentic AI & Workflow Automation");

  // Calculation output generator
  const getCalculatedImpact = () => {
    if (calcGoal === "Agentic AI & Workflow Automation") {
      return { savings: "$45M - $120M", efficiency: "35% - 50%", timeline: "90 Days to Initial Rollout" };
    } else if (calcGoal === "Supply Chain & Operations Optimization") {
      return { savings: "$60M - $180M", efficiency: "28% - 42%", timeline: "4 - 6 Months" };
    } else {
      return { savings: "$30M - $95M", efficiency: "40% Faster Migration", timeline: "6 Months" };
    }
  };

  const calculatedResult = getCalculatedImpact();

  const renderPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-6 h-6 text-indigo-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-blue-400" />;
      case "Layers": return <Layers className="w-6 h-6 text-purple-400" />;
      default: return <Building2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24">
      
      {/* SECTION 1: HERO EXPERIENCE */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-800/80">
        
        {/* Background Ambient Glows */}
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[100px] right-[-100px]"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-20 pointer-events-none"></div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Main Hero Text */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center space-x-2 bg-indigo-950/60 border border-indigo-500/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Improx Ecosystem &bull; US Enterprise Business Consulting
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Orchestrating <br />
                <span className="gradient-text-hero">Enterprise Intelligence</span> <br />
                & Strategic Growth.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                We partner with Fortune 500 boards and C-suite leaders to navigate market disruption, scale agentic AI across core operations, and engineer high-margin growth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link 
                  href="/services" 
                  className="btn-primary-gradient px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center shadow-xl"
                >
                  <span>Explore 5 Strategic Pillars</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                <Link 
                  href="/contact" 
                  className="btn-secondary-dark px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center"
                >
                  <span>Schedule Executive Briefing</span>
                </Link>
              </div>

              {/* Key Highlights Metrics Ticker */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight">$14B+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Client Value Created</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-cyan-400 tracking-tight">98.4%</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Fortune 500 Retention</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-indigo-400 tracking-tight">500+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Enterprise AI Deployments</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-purple-400 tracking-tight">25+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Sub-Service Capabilities</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Card Showcase */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 relative shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Operating Dashboard</span>
                  </div>
                  <span className="badge-tag">2026 Strategy Suite</span>
                </div>

                <div className="space-y-4">
                  
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Agentic AI Control Planes</div>
                      <div className="text-xs text-slate-400 mt-1">Deploying autonomous workflow agents with zero-trust auditability.</div>
                      <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" /> +42% Throughput Speed
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Cloud Architecture & Modernization</div>
                      <div className="text-xs text-slate-400 mt-1">Decoupling legacy mainframe cores into resilient microservices.</div>
                      <div className="mt-2 text-xs font-semibold text-cyan-400 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> $180M Cost Avoidance
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-purple-950 text-purple-400 border border-purple-800/40">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Global M&A & Portfolio Restructuring</div>
                      <div className="text-xs text-slate-400 mt-1">Capital optimization & post-merger integration blueprints.</div>
                      <div className="mt-2 text-xs font-semibold text-indigo-400 flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" /> 100% SEC/FINRA Compliant
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Improx Integents Advisory Hub</span>
                  <Link href="/services" className="text-indigo-400 font-semibold hover:underline flex items-center">
                    Browse All Pillars &rarr;
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENT LOGO TRUST WALL */}
      <section className="py-12 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Executive Leadership Across Global 2000 Enterprises
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-xl hover:border-indigo-500/40 transition-all">
                <div className="text-sm font-bold text-slate-200">{logo.name}</div>
                <div className="text-[11px] text-indigo-400 mt-0.5">{logo.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 5 STRATEGIC PILLARS & 25 SUB-SERVICES */}
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="badge-tag">End-to-End Enterprise Consulting</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              5 Strategic Pillars. 25 Enterprise Capabilities.
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Explore our core consulting domains. Every capability is backed by proprietary frameworks, expert managing partners, and proven execution templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ENTERPRISE_PILLARS.map((pillar, idx) => (
              <div 
                key={pillar.slug}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/40">
                      {renderPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{pillar.category}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{pillar.tagline}</p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Sub-Services</div>
                    {pillar.items.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${pillar.slug}/${sub.slug}`}
                        className="group/item flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white py-1 transition-colors"
                      >
                        <span className="line-clamp-1">{sub.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 text-indigo-400 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link 
                    href={`/services/${pillar.slug}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-between group/link"
                  >
                    <span>Pillar Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: INTERACTIVE ENTERPRISE ROI & TRANSFORMATION CALCULATOR */}
      <section className="py-24 bg-slate-900/60 border-b border-slate-800/80 relative">
        <div className="ambient-glow-purple top-0 right-0"></div>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Calculator Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="badge-tag">Interactive Planning Micro-Tool</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                    Estimate Your Transformation Impact
                  </h2>
                  <p className="text-sm text-slate-400 mt-2">
                    Select your corporate sector, enterprise scale, and primary strategic initiative to view projected EBITDA gains and implementation benchmarks.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">1. Select Industry Sector</label>
                    <select 
                      value={calcIndustry}
                      onChange={(e) => setCalcIndustry(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {GLOBAL_INDUSTRIES.map(i => <option key={i.slug} value={i.name}>{i.name}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">2. Enterprise Revenue Scale</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["$500M - $2B", "$2B - $10B Enterprise", "$10B+ Global"].map((scale) => (
                        <button
                          key={scale}
                          onClick={() => setCalcScale(scale)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                            calcScale === scale 
                              ? "bg-indigo-600 border-indigo-500 text-white" 
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          {scale}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-2">3. Primary Strategic Goal</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Agentic AI & Workflow Automation",
                        "Supply Chain & Operations Optimization",
                        "Cloud & Core Legacy Refactoring"
                      ].map((goal) => (
                        <button
                          key={goal}
                          onClick={() => setCalcGoal(goal)}
                          className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                            calcGoal === goal 
                              ? "bg-indigo-600 border-indigo-500 text-white" 
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Calculator Output Display */}
              <div className="lg:col-span-5">
                <div className="bg-slate-950 rounded-2xl p-8 border border-indigo-500/30 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                  
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6">
                    Projected Value Impact Summary
                  </div>

                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-800">
                      <div className="text-xs text-slate-400">Est. Operational Savings / Value Unlocked</div>
                      <div className="text-4xl font-extrabold text-white tracking-tight mt-1 gradient-text-gold">
                        {calculatedResult.savings}
                      </div>
                    </div>

                    <div className="pb-4 border-b border-slate-800">
                      <div className="text-xs text-slate-400">Efficiency / Velocity Improvement</div>
                      <div className="text-3xl font-extrabold text-cyan-400 tracking-tight mt-1">
                        {calculatedResult.efficiency}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400">Target Pilot Implementation</div>
                      <div className="text-lg font-bold text-white mt-1">
                        {calculatedResult.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <Link 
                      href="/contact" 
                      className="btn-primary-gradient w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center"
                    >
                      <span>Request Custom ROI Assessment</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: FEATURED CLIENT CASE STUDIES */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="badge-tag">Quantifiable Results</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Featured Client Transformations
              </h2>
            </div>
            <Link 
              href="/case-studies" 
              className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center text-sm"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((study) => (
              <div 
                key={study.slug}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-slate-900">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-400 border border-slate-800">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{study.client}</div>
                    <h3 className="text-xl font-bold text-white line-clamp-2">{study.title}</h3>
                    
                    <div className="bg-indigo-950/50 border border-indigo-800/40 p-3 rounded-xl">
                      <div className="text-xs text-indigo-300 font-semibold">{study.impact}</div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="btn-secondary-dark w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: WHY IMPROX INTEGENTS */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80 relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-tag">The Ecosystem Advantage</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Why Fortune 500 Leaders Choose Improx Integents
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Traditional consulting firms deliver slides and exit. Pure engineering firms lack strategic C-suite perspective. Improx Integents bridges this gap with zero-legacy methodologies and full accountability.
              </p>
              
              <div className="pt-2">
                <Link 
                  href="/about" 
                  className="btn-primary-gradient px-8 py-3.5 rounded-xl font-bold text-sm inline-flex items-center"
                >
                  <span>Learn About Our Firm</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-800/40">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agentic AI Control Planes</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We build production multi-agent systems with built-in governance, security rails, and ROI tracking.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center mb-4 border border-blue-800/40">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Zero-Legacy Delivery</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rapid 60-90 day pilot deployments replacing multi-year stagnant transformation programs.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center mb-4 border border-purple-800/40">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Senior Partner Ownership</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every engagement is led directly by veteran Managing Partners with deep industry domain expertise.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-800/40">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">100% IP Ownership</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All algorithms, custom code, workflows, and architectures belong entirely to your enterprise.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: RESEARCH & INSIGHTS SPOTLIGHT */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="badge-tag">Thought Leadership</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
                Executive Insights & Market Research
              </h2>
            </div>
            <Link 
              href="/insights" 
              className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center text-sm"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_INSIGHTS.map((insight) => (
              <Link 
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 group"
              >
                <div>
                  <div className="h-52 relative overflow-hidden bg-slate-900">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-400 border border-slate-800">
                      {insight.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center space-x-3">
                      <span>{insight.date}</span>
                      <span>&bull;</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {insight.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-xs font-bold text-indigo-400 flex items-center justify-between">
                  <span>Read Strategy Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: C-SUITE EXECUTIVE BRIEFING CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-10 lg:p-20 border border-indigo-500/30 relative overflow-hidden shadow-2xl">
            <div className="ambient-glow-blue top-0 right-0"></div>
            
            <div className="max-w-3xl relative z-10 space-y-6">
              <span className="badge-tag">Schedule Consultation</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Ready to Accelerate Enterprise Transformation?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Connect directly with an Improx Integents Managing Partner to discuss your strategic initiatives, evaluate AI readiness, or request a custom capability briefing.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="btn-primary-gradient px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link 
                  href="/case-studies" 
                  className="btn-secondary-dark px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center"
                >
                  <span>Browse Client Proof</span>
                </Link>
              </div>

              <div className="pt-6 text-xs text-slate-400 flex items-center space-x-6">
                <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-emerald-400" /> Strict NDA & IP Protection</span>
                <span className="flex items-center"><Globe className="w-4 h-4 mr-1 text-indigo-400" /> Global Advisory Teams</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
