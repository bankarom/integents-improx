import { INSIGHTS } from "@/lib/insights";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Clock } from "lucide-react";

export default function InsightsHub() {
  return (
    <div className="bg-zinc-50 min-h-screen pt-20">
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-6">Research & Insights</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Thought leadership, market analysis, and strategic frameworks from the experts at Improx Integents.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {INSIGHTS.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <span className="text-sm text-zinc-500 flex items-center"><Calendar className="w-4 h-4 mr-1" /> {insight.date}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-zinc-950 mb-4 group-hover:text-primary transition-colors">{insight.title}</h2>
                <p className="text-zinc-600 text-lg mb-8 flex-grow">{insight.summary}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                  <span className="text-sm text-zinc-500 flex items-center"><Clock className="w-4 h-4 mr-1" /> {insight.readTime}</span>
                  <div className="flex items-center text-primary font-semibold">
                    Read Full Insight <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
