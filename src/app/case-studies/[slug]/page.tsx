import { CASE_STUDIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, TrendingUp } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find(c => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link href="/case-studies" className="text-primary hover:text-emerald-400 font-semibold mb-8 inline-flex items-center text-sm uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">{study.industry}</span>
              <span className="bg-zinc-800 text-zinc-300 text-xs font-bold px-3 py-1 rounded-full uppercase">{study.capability}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{study.title}</h1>
            <p className="text-2xl text-zinc-300 font-light leading-relaxed">
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-4">
              <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 sticky top-32">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Client Profile</h3>
                <p className="text-lg font-semibold text-zinc-950 mb-8">{study.client}</p>

                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Industry</h3>
                <p className="text-lg font-semibold text-zinc-950 mb-8">{study.industry}</p>

                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Core Service</h3>
                <p className="text-lg font-semibold text-primary">{study.capability}</p>
              </div>
            </div>

            {/* Right Column: Story */}
            <div className="lg:col-span-8">
              <div className="prose prose-zinc prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-zinc-950 mb-6">The Challenge</h2>
                <p className="text-zinc-600 mb-12">{study.challenge}</p>

                <h2 className="text-3xl font-bold text-zinc-950 mb-6">Our Solution</h2>
                <p className="text-zinc-600 mb-12">{study.solution}</p>

                <div className="bg-zinc-950 text-white rounded-3xl p-10 mb-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10"><TrendingUp className="w-32 h-32" /></div>
                  <h2 className="text-3xl font-bold mb-8 relative z-10">Business Impact</h2>
                  <ul className="space-y-6 relative z-10">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-xl font-medium">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-zinc-200">
                <h3 className="text-2xl font-bold mb-6">Ready for similar results?</h3>
                <Link href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all text-lg shadow-lg">
                  Speak with our {study.capability} experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
