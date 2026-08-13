import { FEATURED_CASE_STUDIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Briefcase, ChevronRight, TrendingUp } from "lucide-react";

export default function CaseStudiesHub() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="badge-tag">Quantified Business Impact</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Enterprise Client <br />
            <span className="gradient-text-hero">Transformation Case Studies</span>
          </h1>
          <p className="text-lg text-slate-300">
            Real-world proof of how Improx Integents partners with global market leaders to engineer high-margin growth, deploy agentic AI control planes, and optimize supply networks.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((study) => (
              <div key={study.slug} className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800">
                <div>
                  <div className="h-56 relative overflow-hidden bg-slate-900">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-400 border border-slate-800">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{study.client}</div>
                    <h2 className="text-2xl font-bold text-white leading-snug">{study.title}</h2>
                    
                    <div className="bg-indigo-950/50 border border-indigo-800/40 p-3.5 rounded-xl text-xs font-semibold text-indigo-300">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                        <span>{study.impact}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">{study.summary}</p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link 
                    href={`/case-studies/${study.slug}`} 
                    className="btn-primary-gradient w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center"
                  >
                    <span>Read Executive Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
