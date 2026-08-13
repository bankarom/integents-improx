"use client";

import { useState, use } from "react";
import { SUB_SERVICE_DETAILS, ENTERPRISE_PILLARS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Play, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  FileText, 
  TrendingUp, 
  Lock, 
  HelpCircle,
  BarChart3,
  Globe,
  Award,
  ChevronDown,
  BookOpen
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default function SubServicePage({ params }: PageProps) {
  const { slug, subSlug } = use(params);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(0);

  // Find pillar category
  const pillar = ENTERPRISE_PILLARS.find(p => p.slug === slug);
  const detail = SUB_SERVICE_DETAILS[subSlug];

  if (!pillar || !detail) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-36 lg:pt-44">
      
      {/* BREADCRUMB & HERO SECTION */}
      <section className="relative pb-20 border-b border-slate-800/80 overflow-hidden">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="text-xs font-semibold text-slate-400 mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">Capabilities</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href={`/services/${slug}`} className="hover:text-indigo-400 transition-colors">{pillar.category}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">{detail.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="badge-tag">{pillar.category} &bull; Practice Domain</span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {detail.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
                {detail.heroTagline}
              </p>

              <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
                {detail.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="btn-primary-gradient px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center"
                >
                  <span>Schedule Practice Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                
                <Link 
                  href="/case-studies" 
                  className="btn-secondary-dark px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center"
                >
                  <span>View Validated Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Key Practice Impact Stats */}
            <div className="lg:col-span-4">
              <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                  Practice Impact Benchmarks
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {detail.keyStats.map((stat: any, idx: number) => (
                    <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-2xl font-extrabold text-white gradient-text-cyan">{stat.value}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE HAVE DONE / PROVEN TRACK RECORD */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="badge-tag">Proven Accomplishments</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Have Delivered in {detail.title}
            </h2>
            <p className="text-sm text-slate-400">
              Verified business outcomes achieved for Global 2000 clients across complex operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.whatWeHaveDone.map((item: any, idx: number) => (
              <div key={idx} className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4">
                <div className="text-4xl font-black text-white gradient-text-gold">{item.stat}</div>
                <h3 className="text-lg font-bold text-white leading-snug">{item.headline}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXECUTIVE OVERVIEW & CHALLENGE / SOLUTION */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-tag">Strategic Imperative</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {detail.executiveSummary.headline}
              </h2>

              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1.5" /> Core Executive Challenge
                  </div>
                  <p className="text-slate-300">{detail.executiveSummary.challenge}</p>
                </div>

                <div className="bg-indigo-950/40 p-5 rounded-xl border border-indigo-800/40">
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> The Improx Solution Blueprint
                  </div>
                  <p className="text-slate-200">{detail.executiveSummary.solution}</p>
                </div>
              </div>
            </div>

            {/* Video / Executive Briefing Showcase */}
            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group cursor-pointer aspect-video bg-slate-900">
                <img 
                  src={detail.executiveSummary.videoImage} 
                  alt={detail.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-semibold text-white flex items-center justify-between">
                  <span>Practice Overview: {detail.title}</span>
                  <span className="text-indigo-400">Watch Executive Video (6 Min)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOW WE EXECUTE & DELIVER (3-PHASE PIPELINE) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="badge-tag">Execution Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Execute & Deliver {detail.title}
            </h2>
            <p className="text-sm text-slate-400">
              Our structured 3-phase delivery pipeline ensures zero disruption to live operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.deliveryExecution.map((step: any, idx: number) => (
              <div key={idx} className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4">
                <div className="badge-tag !py-0.5 !px-2.5">Step 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-white">{step.phase}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4 CORE CAPABILITY MODULES */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="badge-tag">Methodology & Framework</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              4 Core Execution Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.capabilitiesGrid.map((cap: any, idx: number) => (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/40 text-indigo-400 font-extrabold flex items-center justify-center text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 mt-6 text-xs font-semibold text-indigo-400 flex items-center">
                  <span>Standard Module</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRY TAILORED SOLUTIONS */}
      {detail.industrySolutions.length > 0 && (
        <section className="py-20 border-b border-slate-800/80">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="badge-tag">Domain Adaptability</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Industry-Specific Applications
              </h2>
            </div>

            <div className="flex justify-center space-x-2 mb-8 overflow-x-auto pb-2">
              {detail.industrySolutions.map((sol: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustryTab(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    activeIndustryTab === idx 
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg" 
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {sol.industry}
                </button>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8 border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {detail.industrySolutions[activeIndustryTab].industry} Vertical Solution
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {detail.industrySolutions[activeIndustryTab].headline}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {detail.industrySolutions[activeIndustryTab].desc}
                  </p>
                  <div className="pt-2">
                    <Link href="/contact" className="text-xs font-bold text-cyan-400 hover:underline flex items-center">
                      <span>Request {detail.industrySolutions[activeIndustryTab].industry} Whitepaper</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="h-56 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                    <img 
                      src={detail.industrySolutions[activeIndustryTab].image} 
                      alt={detail.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3 OPEN RESEARCH PAPERS (350-450 WORDS EACH) EMBEDDED DIRECTLY IN EVERY SERVICE PAGE */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="badge-tag">Practice Thought Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              3 Open Research Papers on {detail.title} (350-450 Words)
            </h2>
            <p className="text-sm text-slate-400">
              Read our full benchmark papers directly below. No forms or paywalls.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {detail.serviceResearchArticles.map((article: any, idx: number) => (
              <div 
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                    <span className="badge-tag">Research Paper</span>
                    <span>{article.wordCount}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <div className="text-xs font-semibold text-indigo-400 mb-4">By {article.author} &bull; {article.date}</div>

                  {/* Expandable / Open Article Content Reader */}
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 text-xs text-slate-300 space-y-3 max-h-80 overflow-y-auto">
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {article.content}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center"><BookOpen className="w-3.5 h-3.5 mr-1 text-indigo-400" /> Full Text Available</span>
                  <Link href="/contact" className="text-indigo-400 font-semibold hover:underline">Discuss Paper &rarr;</Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="badge-tag">Validated Case Study</span>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{detail.caseStudy.clientName}</div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {detail.caseStudy.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {detail.caseStudy.desc}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {detail.caseStudy.metrics.map((m: string, i: number) => (
                    <span key={i} className="bg-indigo-950 border border-indigo-800/40 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-lg">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-end">
                <Link 
                  href="/contact" 
                  className="btn-primary-gradient px-8 py-4 rounded-xl font-bold text-sm flex items-center"
                >
                  <span>Request Full Case Study Deck</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="badge-tag">Practice FAQs</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq: any, idx: number) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between font-bold text-white text-base">
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-indigo-400 transition-transform ${expandedFaq === idx ? "rotate-90" : ""}`} />
                </div>
                {expandedFaq === idx && (
                  <p className="text-sm text-slate-300 mt-4 pt-4 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link 
              href="/contact" 
              className="btn-primary-gradient px-8 py-3.5 rounded-xl font-bold text-sm inline-flex items-center"
            >
              <span>Connect with {detail.title} Lead</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
