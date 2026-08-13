import { ENTERPRISE_PILLARS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, Compass, BrainCircuit, Cpu, Layers, Building2 } from "lucide-react";

export default function ServicesHub() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-8 h-8 text-indigo-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-8 h-8 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-8 h-8 text-blue-400" />;
      case "Layers": return <Layers className="w-8 h-8 text-purple-400" />;
      default: return <Building2 className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800/80 overflow-hidden">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <span className="badge-tag mb-4 inline-block">Enterprise Services Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            5 Strategic Pillars. <br />
            <span className="gradient-text-hero">25 Enterprise Capabilities.</span>
          </h1>
          <p className="text-lg text-slate-300 mt-6 leading-relaxed">
            From strategic boardroom blueprints to multi-agent AI execution, our consulting practices drive measurable margin expansion and sustainable market leadership.
          </p>
        </div>
      </section>

      {/* Capabilities List Grid */}
      <section className="py-24">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENTERPRISE_PILLARS.map((pillar, idx) => (
              <div 
                key={pillar.slug} 
                className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                    <div className="p-3 rounded-2xl bg-indigo-950/60 border border-indigo-800/40">
                      {renderIcon(pillar.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">Pillar 0{idx + 1}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">{pillar.category}</h2>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{pillar.tagline}</p>
                  
                  <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4">Practice Capabilities</h3>
                  <div className="space-y-2.5 mb-8">
                    {pillar.items.map((sub) => (
                      <Link 
                        key={sub.slug} 
                        href={`/services/${pillar.slug}/${sub.slug}`}
                        className="group/item flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-indigo-500/40 transition-all"
                      >
                        <span className="line-clamp-1">{sub.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link 
                    href={`/services/${pillar.slug}`} 
                    className="btn-primary-gradient w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center"
                  >
                    <span>Explore Pillar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Need Tailored C-Suite Advisory?</h2>
          <p className="text-slate-300 text-base">Our senior managing partners collaborate directly with your executive team to audit, design, and deploy bespoke capability frameworks.</p>
          <div>
            <Link href="/contact" className="btn-primary-gradient px-8 py-4 rounded-xl text-base font-bold inline-flex items-center">
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
