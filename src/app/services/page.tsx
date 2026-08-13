import { CAPABILITIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ServicesHub() {
  return (
    <div className="bg-zinc-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-6">Our Capabilities</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Comprehensive business consulting and transformation services tailored for modern enterprises. We architect solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <div key={cap.slug} className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                <h2 className="text-2xl font-bold text-zinc-950 mb-4">{cap.title}</h2>
                <p className="text-zinc-600 mb-8">{cap.description}</p>
                
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Core Offerings</h3>
                <ul className="space-y-3 mb-8">
                  {cap.subServices.map((sub) => (
                    <li key={sub.slug} className="flex items-center text-sm font-medium text-zinc-700">
                      <ChevronRight className="w-4 h-4 text-primary mr-2" />
                      {sub.title}
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${cap.slug}`} className="inline-flex items-center text-primary font-semibold hover:text-emerald-700">
                  Explore Full Capability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Our experts can tailor a transformation roadmap specifically for your enterprise's unique challenges.</p>
        <Link href="/contact" className="bg-white text-primary hover:bg-zinc-100 px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
