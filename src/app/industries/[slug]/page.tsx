import { GLOBAL_INDUSTRIES, FEATURED_INSIGHTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = GLOBAL_INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800/80 overflow-hidden">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link href="/industries" className="text-cyan-400 hover:text-cyan-300 font-semibold mb-6 inline-flex items-center text-xs uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Industries Hub
            </Link>
            <span className="badge-tag mb-4 block w-max">Industry Sector Practice</span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">{industry.name}</h1>
            <p className="text-xl text-slate-300 font-normal leading-relaxed">
              {industry.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-20">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-4">Sector Overview</h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  The {industry.name} sector is undergoing unprecedented structural shifts. Disruptive technology integration, regulatory compliance imperatives, and volatile macroeconomic factors require market leaders to re-engineer core operations. Improx Integents provides deep domain advisory and technical execution tailored specifically to {industry.name}.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Sector Value Drivers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-cyan-400 mb-2">{industry.metric}</div>
                    <div className="text-sm font-bold text-white mb-2">{industry.metricLabel}</div>
                    <p className="text-xs text-slate-400">Proven business-case outcomes achieved across enterprise clients in this vertical.</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-indigo-400 mb-2">Full Compliance</div>
                    <div className="text-sm font-bold text-white mb-2">Regulatory Audit Rails</div>
                    <p className="text-xs text-slate-400">Strict adherence to domain-specific security, data privacy, and industry standards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-2xl p-8 border border-slate-800 sticky top-32 space-y-6">
                <div className="badge-tag">Industry Practice Partner</div>
                <h3 className="text-xl font-bold text-white">Consult Our {industry.name} Practice Leaders</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Connect directly with senior partners specializing in {industry.name} transformation.</p>
                <Link href="/contact" className="btn-primary-gradient w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center">
                  Schedule Sector Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="badge-tag">Research & Benchmarks</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">Latest Sector Insights</h2>
            </div>
            <Link href="/insights" className="text-indigo-400 hover:text-indigo-300 font-semibold text-xs flex items-center">
              Explore Research Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_INSIGHTS.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 block">
                <div className="text-xs font-bold text-indigo-400 mb-2">{insight.category}</div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{insight.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{insight.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
