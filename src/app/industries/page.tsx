import { INDUSTRIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesHub() {
  return (
    <div className="bg-zinc-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-6">Industries We Serve</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Deep domain expertise across the world's most critical sectors. We help market leaders navigate disruption and build resilience.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                <div className="bg-zinc-100 group-hover:bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  {/* Using an abstract div instead of icon for variety in the hub */}
                  <div className="w-8 h-8 rounded-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
                </div>
                <h2 className="text-2xl font-bold text-zinc-950 mb-4 group-hover:text-primary transition-colors">{ind.title}</h2>
                <p className="text-zinc-600 mb-8 flex-grow">{ind.description}</p>
                <div className="inline-flex items-center text-primary font-semibold text-sm">
                  Explore Industry Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
