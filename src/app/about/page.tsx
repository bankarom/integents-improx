import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Building2, Globe, Users, TrendingUp, Award, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="badge-tag">About Improx Integents</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Next-Generation <br />
            <span className="gradient-text-hero">Management Consulting Firm</span>
          </h1>
          <p className="text-lg text-slate-300">
            Operating as the high-end business consulting arm under the Improx Ecosystem, we combine C-suite strategic advisory with deep engineering execution.
          </p>
        </div>
      </section>

      {/* Firm Overview & Story */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-tag">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Bridging Strategy and High-Velocity Execution
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Traditional legacy consulting firms produce strategy decks that stall in execution. Engineering shops build code without understanding corporate EBITDA strategy. Improx Integents was founded to eliminate this divide.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We bring together veteran Managing Partners from top-tier strategy firms with world-class systems architects and AI researchers. Our teams deliver working production control planes and measurable business impact.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-bold text-white">$14B+</div>
                  <div className="text-xs text-slate-400">Client Value Unlocked</div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-bold text-indigo-400">98.4%</div>
                  <div className="text-xs text-slate-400">Retention Rate</div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-bold text-cyan-400">25+</div>
                  <div className="text-xs text-slate-400">Core Practices</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
                <h3 className="text-2xl font-bold text-white">The Improx Ecosystem Advantage</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Being part of the broader Improx technology ecosystem allows Improx Integents to leverage pre-built IP, proprietary multi-agent control planes, and global delivery centers across North America, EMEA, and APAC.
                </p>
                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-center space-x-3 text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>Zero-Legacy Operating Philosophy</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>100% Client Intellectual Property Ownership</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>Senior Partner-Led Engagement Teams</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Partner with Improx Integents</h2>
          <p className="text-slate-300 text-sm">Explore how our practice leads can guide your enterprise through its next transformation milestone.</p>
          <div>
            <Link href="/contact" className="btn-primary-gradient px-8 py-4 rounded-xl text-sm font-bold inline-flex items-center">
              <span>Schedule Partner Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
