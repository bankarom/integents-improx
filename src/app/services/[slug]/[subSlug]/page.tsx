import { SUB_SERVICE_DETAILS, IBM_STYLE_CAPABILITIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default async function SubServicePage({ params }: PageProps) {
  const { slug, subSlug } = await params;
  
  // Find category for breadcrumbs
  const category = IBM_STYLE_CAPABILITIES.find(c => c.slug === slug);
  const detail = SUB_SERVICE_DETAILS[subSlug];

  if (!category || !detail) {
    notFound();
  }

  return (
    <div className="bg-white pt-16">
      {/* IBM Style Breadcrumb & Header */}
      <div className="border-b border-zinc-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm font-medium text-zinc-500 mb-6 flex items-center">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span> 
            <Link href="/services" className="hover:text-blue-600 transition-colors">Consulting</Link>
            <span className="mx-2">/</span> 
            <Link href={`/services/${slug}`} className="hover:text-blue-600 transition-colors">{category.category}</Link>
            <span className="mx-2">/</span> 
            <span className="text-zinc-900">{detail.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight">
            {detail.title}
          </h1>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-2xl md:text-3xl font-light text-zinc-900 leading-snug mb-10">
              {detail.description}
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 inline-flex items-center justify-between font-medium transition-colors min-w-[200px]">
              Talk to an expert <ArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] bg-zinc-200 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${detail.heroImage})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section (Mimicking "IBM difference" dropdown from screenshot) */}
      <section className="bg-zinc-50 border-t border-b border-zinc-200 py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-zinc-900 mb-16">The Improx Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {detail.theDifference.map((diff: any, idx: number) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-medium text-zinc-900 mb-4">{diff.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & Solutions */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-8">Key Challenges</h2>
              <ul className="space-y-6">
                {detail.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-zinc-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-8">Our Solutions</h2>
              <div className="space-y-6">
                {detail.solutions.map((solution: string, idx: number) => (
                  <div key={idx} className="bg-white border border-zinc-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
                    <h3 className="text-xl font-medium text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      {solution}
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" />
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="bg-zinc-950 text-white py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-16">Latest insights in {detail.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.blogs.map((blog: any, idx: number) => (
              <Link key={idx} href={`/insights/${blog.slug}`} className="block border-t border-zinc-800 pt-6 group">
                <h3 className="text-2xl font-light mb-4 group-hover:text-blue-400 transition-colors">{blog.title}</h3>
                <div className="flex items-center text-blue-500 font-medium text-sm">
                  Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
