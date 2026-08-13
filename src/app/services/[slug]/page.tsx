import { CAPABILITIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const capability = CAPABILITIES.find(c => c.slug === slug);

  if (!capability) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link href="/services" className="text-primary hover:text-emerald-400 font-semibold mb-6 inline-flex items-center text-sm uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Capabilities
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{capability.title}</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {capability.description}
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
              <h2 className="text-3xl font-bold text-zinc-950 mb-6">Service Overview</h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                In today's rapidly evolving business landscape, {capability.title.toLowerCase()} is not just an option—it is an imperative for survival and growth. Our enterprise-grade consulting approach ensures that you not only understand the theoretical benefits but realize tangible, measurable business outcomes.
              </p>

              <h3 className="text-2xl font-bold text-zinc-950 mb-6">Key Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {capability.subServices.map(sub => (
                  <div key={sub.slug} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">{sub.title}</h4>
                    <p className="text-zinc-600 text-sm">Strategic planning and execution designed specifically for enterprise scale and security.</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-zinc-950 mb-6">Business Impact</h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-zinc-700 font-medium">Accelerated time-to-market for new digital initiatives.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-zinc-700 font-medium">Significant reduction in operational costs through intelligent automation.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="text-zinc-700 font-medium">Enhanced risk management and enterprise-wide compliance.</p>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-950 text-white rounded-3xl p-8 mb-8 sticky top-32 shadow-xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-zinc-400 mb-6 text-sm">Speak with one of our {capability.title} experts to discuss your specific business challenges.</p>
                <Link href="/contact" className="w-full bg-primary hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                  Schedule a Consultation
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
              <h2 className="text-3xl font-bold text-zinc-950 mb-4">Latest Insights on {capability.title}</h2>
              <p className="text-zinc-600 max-w-2xl">Expert perspectives, research, and thought leadership from the Improx Integents consulting team.</p>
            </div>
            <Link href="/insights" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-emerald-700">
              View All Insights <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capability.blogs.map(blog => (
              <Link key={blog.slug} href={`/insights/${blog.slug}`} className="group bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-4 group-hover:text-primary transition-colors">{blog.title}</h3>
                <p className="text-zinc-600 text-sm mb-6 flex-grow">An in-depth analysis of current trends, challenges, and strategic solutions regarding {blog.title.toLowerCase()}.</p>
                <span className="text-primary font-semibold text-sm flex items-center">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
