import { GLOBAL_INDUSTRIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight, Building2, Landmark, Activity, Factory, ShoppingBag, Zap, Radio } from "lucide-react";

export default function IndustriesHub() {
  const renderIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark": return <Landmark className="w-8 h-8 text-cyan-400" />;
      case "Activity": return <Activity className="w-8 h-8 text-purple-400" />;
      case "Factory": return <Factory className="w-8 h-8 text-indigo-400" />;
      case "ShoppingBag": return <ShoppingBag className="w-8 h-8 text-blue-400" />;
      case "Zap": return <Zap className="w-8 h-8 text-amber-400" />;
      default: return <Radio className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="badge-tag">Industry Domain Expertise</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Solutions for <br />
            <span className="gradient-text-hero">Global Market Leaders</span>
          </h1>
          <p className="text-lg text-slate-300">
            Deep domain expertise across the world's most critical sectors. We help enterprise leaders navigate regulatory shifts, operational complexity, and technological disruption.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-24">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GLOBAL_INDUSTRIES.map((ind) => (
              <Link 
                key={ind.slug} 
                href={`/industries/${ind.slug}`} 
                className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                    <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800/40">
                      {renderIndustryIcon(ind.iconName)}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-cyan-400">{ind.metric}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">{ind.metricLabel}</div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{ind.name}</h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-8">{ind.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>Explore Sector Frameworks</span>
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
