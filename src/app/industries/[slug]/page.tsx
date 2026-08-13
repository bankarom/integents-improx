import { INDUSTRIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, AlertCircle, TrendingUp, Lightbulb, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link href="/industries" className="text-primary hover:text-emerald-400 font-semibold mb-6 inline-flex items-center text-sm uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Industries
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{industry.title}</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-zinc-950 mb-6">Industry Overview</h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                The {industry.title.toLowerCase()} sector is undergoing unprecedented transformation. Disruptive technologies, shifting consumer expectations, and stringent regulatory environments are compelling enterprises to rethink their core operational models. Improx Integents partners with industry leaders to turn these challenges into sustainable competitive advantages.
              </p>

              <h3 className="text-2xl font-bold text-zinc-950 mb-6">Key Market Challenges</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {industry.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                    <AlertCircle className="w-8 h-8 text-amber-600 mb-4" />
                    <h4 className="text-lg font-bold text-zinc-900 mb-2">{challenge}</h4>
                    <p className="text-zinc-600 text-sm">Critical bottleneck identified in the current macroeconomic landscape requiring immediate strategic intervention.</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-zinc-950 mb-6">Our Transformation Solutions</h3>
              <div className="space-y-6 mb-10">
                {industry.solutions.map((solution, idx) => (
                  <div key={idx} className="flex items-start bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="bg-primary/10 p-3 rounded-xl mr-6">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">{solution}</h4>
                      <p className="text-zinc-600">Bespoke enterprise architecture and strategic deployment addressing the specific nuances of {solution.toLowerCase()}.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-950 text-white rounded-3xl p-8 mb-8 sticky top-32 shadow-xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Transform Your Operations</h3>
                <p className="text-zinc-400 mb-6 text-sm">Engage with our {industry.title} practice leaders to architect your digital future.</p>
                <Link href="/contact" className="w-full bg-primary hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                  Consult an Expert
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mandatory Fallback Blogs Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-950 mb-4">Latest Insights on {industry.title}</h2>
              <p className="text-zinc-600 max-w-2xl">Expert perspectives and market intelligence from the Improx Integents consulting team.</p>
            </div>
            <Link href="/insights" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-emerald-700">
              View All Insights <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.blogs.map((blog, idx) => (
              <Link key={idx} href={`/insights/${blog.slug}`} className="group bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-4 group-hover:text-primary transition-colors">{blog.title}</h3>
                <p className="text-zinc-600 text-sm mb-6 flex-grow">Strategic analysis on {blog.title.toLowerCase()} and its impact on the modern enterprise.</p>
                <span className="text-primary font-semibold text-sm flex items-center">
                  Read Report <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
