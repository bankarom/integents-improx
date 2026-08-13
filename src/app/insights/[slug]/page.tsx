import { FEATURED_INSIGHTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Share2, Globe, MessageCircle, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = FEATURED_INSIGHTS.find(i => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link href="/insights" className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center text-xs uppercase tracking-wider mb-2">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Insights Hub
          </Link>
          
          <div className="badge-tag block w-max mx-auto">{insight.category}</div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">{insight.title}</h1>
          
          <div className="flex items-center justify-center space-x-6 text-xs text-slate-400 font-medium pt-2">
            <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {insight.date}</span>
            <span>&bull;</span>
            <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {insight.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between py-4 border-b border-slate-800">
            <div>
              <p className="font-bold text-white text-sm">{insight.author}</p>
              <p className="text-xs text-slate-400">Improx Integents Research Practice</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"><Globe className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"><MessageCircle className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-slate-800 space-y-6">
            <p className="text-xl font-normal leading-relaxed text-indigo-200 border-l-4 border-indigo-500 pl-6 py-2">
              {insight.summary}
            </p>
            
            <div className="text-slate-300 text-base leading-relaxed space-y-4 pt-4 border-t border-slate-800">
              <p>
                In today's volatile macroeconomic environment, enterprise leaders face an operational mandate: transform legacy processes or risk margin compression. As artificial intelligence evolves from passive task assistance into multi-agent operational control planes, forward-thinking organizations are fundamentally restructuring their execution models.
              </p>
              <p>
                Through empirical research across Global 2000 deployments, Improx Integents has codified the reference architecture for secure agentic systems, real-time data governance, and high-velocity capital deployment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-10 border border-slate-800 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Discuss this Benchmark Research</h3>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">Want to evaluate how these research findings apply directly to your organization's operating model?</p>
            <div className="pt-2">
              <Link href="/contact" className="btn-primary-gradient px-8 py-3.5 rounded-xl font-bold text-xs inline-flex items-center">
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
