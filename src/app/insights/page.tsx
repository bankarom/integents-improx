import { FEATURED_INSIGHTS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function InsightsHub() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="badge-tag">Executive Thought Leadership</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Research, Market Benchmarks & <br />
            <span className="gradient-text-hero">Strategic Reports</span>
          </h1>
          <p className="text-lg text-slate-300">
            Proprietary research, market benchmarks, and reference architectures from senior partners at Improx Integents.
          </p>
        </div>
      </section>

      {/* Insights List */}
      <section className="py-24">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_INSIGHTS.map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insights/${insight.slug}`} 
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800 group"
              >
                <div>
                  <div className="h-56 relative overflow-hidden bg-slate-900">
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-400 border border-slate-800">
                      {insight.category}
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-xs text-slate-400 flex items-center space-x-3">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {insight.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {insight.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">{insight.title}</h2>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{insight.summary}</p>
                  </div>
                </div>

                <div className="p-8 pt-0 text-xs font-bold text-indigo-400 flex items-center justify-between">
                  <span>Read Full Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
