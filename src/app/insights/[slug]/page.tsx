import { INSIGHTS } from "@/lib/insights";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = INSIGHTS.find(i => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/insights" className="text-primary hover:text-emerald-400 font-semibold mb-8 inline-flex items-center text-sm uppercase tracking-wider justify-center w-full">
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Insights
          </Link>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{insight.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{insight.title}</h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400 text-sm font-medium">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {insight.date}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {insight.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between py-6 border-b border-zinc-200 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">
                II
              </div>
              <div>
                <p className="font-bold text-zinc-900">Improx Integents Research</p>
                <p className="text-sm text-zinc-500">Enterprise Strategy Team</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"><Linkedin className="w-4 h-4" /></button>
              <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"><Twitter className="w-4 h-4" /></button>
              <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>

          <article className="prose prose-zinc prose-lg max-w-none mb-16">
            <p className="text-2xl font-light leading-relaxed text-zinc-600 mb-10 border-l-4 border-primary pl-6">
              {insight.summary}
            </p>
            <p className="text-zinc-800 leading-loose">
              {insight.content}
            </p>
          </article>

          <div className="bg-zinc-50 rounded-3xl p-10 border border-zinc-200 text-center">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Discuss this Research</h3>
            <p className="text-zinc-600 mb-8 max-w-md mx-auto">Want to understand how these trends apply specifically to your organization? Schedule a strategic briefing with our authors.</p>
            <Link href="/contact" className="inline-block bg-primary hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
              Request Strategic Briefing
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
