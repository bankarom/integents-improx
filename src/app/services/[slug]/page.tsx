import { ENTERPRISE_PILLARS, FEATURED_INSIGHTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, FileText, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = ENTERPRISE_PILLARS.find(c => c.slug === slug);

  if (!pillar) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800/80 overflow-hidden">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link href="/services" className="text-indigo-400 hover:text-indigo-300 font-semibold mb-6 inline-flex items-center text-xs uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Capabilities Hub
            </Link>
            <span className="badge-tag mb-4 block w-max">Enterprise Strategic Pillar</span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">{pillar.category}</h1>
            <p className="text-xl text-slate-300 font-normal leading-relaxed">
              {pillar.tagline}
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
                <h2 className="text-3xl font-extrabold text-white mb-4">Practice Overview</h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  In today's hyper-competitive global landscape, mastering {pillar.category.toLowerCase()} is vital for maintaining margin advantage and operational agility. Our multidisciplinary consulting practice combines C-suite strategy with hands-on systems architecture to deliver enterprise transformation with measurable ROI.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Sub-Service Capabilities ({pillar.items.length})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pillar.items.map(sub => (
                    <Link
                      key={sub.slug}
                      href={`/services/${pillar.slug}/${sub.slug}`}
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{sub.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{sub.shortDesc}</p>
                      </div>
                      <div className="pt-4 text-xs font-semibold text-indigo-400 mt-4">
                        Deep Dive Practice Page &rarr;
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-2xl p-8 border border-slate-800 sticky top-32 space-y-6">
                <div className="badge-tag">Partner Consultation</div>
                <h3 className="text-xl font-bold text-white">Need Customized Advisory for {pillar.category}?</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Speak directly with our Managing Partners to audit your current architecture and model business-case ROI.</p>
                <Link href="/contact" className="btn-primary-gradient w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center">
                  Schedule Executive Briefing
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
              <span className="badge-tag">Thought Leadership</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">Latest Benchmarks & Insights</h2>
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
