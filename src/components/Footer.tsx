import Link from "next/link";
import { ArrowRight, Globe, Mail, Sparkles, ShieldCheck, Building2, MapPin } from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-20 pb-12 relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter / Executive Connect Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="badge-tag mb-3 inline-block">Enterprise Thought Leadership</div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Subscribe to the Improx Integents Executive Review
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Monthly strategic benchmarks, agentic AI reference architectures, and market restructuring insights delivered directly to C-suite leaders.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your corporate email" 
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 min-w-[280px]"
            />
            <button className="btn-primary-gradient px-6 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap flex items-center justify-center">
              <span>Subscribe Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                IMPROX <span className="gradient-text-cyan">INTEGENTS</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Improx Integents is a global management consulting & digital intelligence firm under the Improx Ecosystem. We partner with Fortune 500 enterprises to solve critical operational, technological, and strategic challenges.
            </p>

            <div className="flex items-center space-x-6 text-xs text-slate-400 pt-2">
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-indigo-400" /> New York</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-indigo-400" /> London</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-indigo-400" /> Singapore</span>
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-indigo-400" /> Pune</span>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-700/50 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> ISO 27001 & SOC2 Type II Certified
              </span>
            </div>
          </div>

          {/* Pillars Column 1 */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Strategy & AI
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/strategy-consulting/corporate-strategy" className="hover:text-white transition-colors">
                  Corporate Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/strategy-consulting/mergers-acquisitions" className="hover:text-white transition-colors">
                  M&A & Restructuring
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/artificial-intelligence" className="hover:text-white transition-colors font-medium text-indigo-300">
                  Enterprise GenAI
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/data-architecture" className="hover:text-white transition-colors">
                  Data Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/ai-governance" className="hover:text-white transition-colors">
                  AI Governance & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Pillars Column 2 */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Operations & Digital
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/operations/supply-chain" className="hover:text-white transition-colors">
                  Intelligent Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/services/operations/intelligent-finance" className="hover:text-white transition-colors">
                  Finance Automation
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation/cloud-strategy" className="hover:text-white transition-colors">
                  Hybrid Cloud Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation/cybersecurity" className="hover:text-white transition-colors">
                  Cybersecurity Defense
                </Link>
              </li>
              <li>
                <Link href="/services/industry-x/smart-manufacturing" className="hover:text-white transition-colors">
                  Industry 4.0 & Smart Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Industries
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {GLOBAL_INDUSTRIES.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Firm & Insights
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Improx Integents</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Client Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights & Benchmarks</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Partner Directory</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Improx Integents LLC. A Division of the Improx Ecosystem. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Security & Trust</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
