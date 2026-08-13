"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TIER_1_CAPABILITIES } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-white pt-[120px]">
      {/* Tier-1 Stark Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto min-h-[70vh] flex flex-col justify-center border-b border-black pb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black mb-8 leading-[0.9]">
          EMBRACE<br/>
          CHANGE.
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-600 font-light max-w-3xl mb-12 leading-relaxed">
          We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/services" className="sharp-btn">
            What We Do <ArrowRight className="w-5 h-5 ml-4" />
          </Link>
          <Link href="/insights" className="sharp-btn-outline">
            Latest Insights <ArrowRight className="w-5 h-5 ml-4" />
          </Link>
        </div>
      </section>

      {/* What We Do (Massive Grid) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto border-b border-black">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-24 uppercase">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {TIER_1_CAPABILITIES.map((category) => (
            <div key={category.slug} className="border-t border-black pt-8">
              <h3 className="text-3xl font-bold text-black mb-8">{category.category}</h3>
              <ul className="space-y-4 mb-12">
                {category.items.map(item => (
                  <li key={item.slug}>
                    <Link href={`/services/${category.slug}/${item.slug}`} className="text-lg font-medium text-neutral-600 hover:text-black hover:underline underline-offset-4 transition-all flex items-center justify-between group">
                      {item.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Improx Group */}
      <section className="bg-black text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase">
                Why Improx<br/>Group
              </h2>
              <p className="text-2xl text-neutral-400 font-light leading-relaxed mb-12">
                To succeed in the future, organizations must act today. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization.
              </p>
              <Link href="/about" className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm hover:text-neutral-400 transition-colors border-b border-white hover:border-neutral-400 pb-2">
                About Our Firm <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-t border-neutral-700 pt-8">
                <h3 className="text-6xl font-black mb-4">98%</h3>
                <p className="text-xl text-neutral-400">Of the Fortune 100 served</p>
              </div>
              <div className="border-t border-neutral-700 pt-8">
                <h3 className="text-6xl font-black mb-4">25K+</h3>
                <p className="text-xl text-neutral-400">Global consultants</p>
              </div>
              <div className="border-t border-neutral-700 pt-8">
                <h3 className="text-6xl font-black mb-4">50+</h3>
                <p className="text-xl text-neutral-400">Countries with active operations</p>
              </div>
              <div className="border-t border-neutral-700 pt-8">
                <h3 className="text-6xl font-black mb-4">#1</h3>
                <p className="text-xl text-neutral-400">Ranked Strategy Firm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase">
            Latest Insights
          </h2>
          <Link href="/insights" className="inline-flex items-center text-black font-bold uppercase tracking-widest text-sm hover:text-neutral-500 transition-colors mt-8 md:mt-0">
            View All Insights <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`/insights/insight-${i}`} className="group block border border-black p-8 hover:bg-black hover:text-white transition-colors duration-300">
              <div className="text-xs font-bold uppercase tracking-widest mb-8 text-neutral-500 group-hover:text-neutral-400">Research Report</div>
              <h3 className="text-3xl font-bold mb-6">The New Economics of Global Supply Chains</h3>
              <p className="text-lg text-neutral-600 group-hover:text-neutral-300 mb-12 line-clamp-3">
                How geopolitical shifts and advanced technologies are forcing executives to rethink their operational footprints entirely.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-8 h-8" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
