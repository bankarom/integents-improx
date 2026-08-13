"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { IBM_STYLE_CAPABILITIES } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-zinc-50 pt-28 pb-20">
      {/* Modern Split Hero Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-zinc-200/50 overflow-hidden flex flex-col-reverse lg:flex-row border border-zinc-100">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8 w-max">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-wide text-primary uppercase">Enterprise Consulting</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight leading-[1.1]">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Future of Business.
              </span>
            </h1>
            
            <p className="text-xl text-zinc-600 font-medium leading-relaxed mb-10 max-w-lg">
              We partner with forward-thinking enterprises to accelerate secure AI integration, transform core operations, and unlock sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/data-and-ai/artificial-intelligence" className="bg-primary hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center shadow-lg shadow-primary/20 group">
                Explore Solutions <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center">
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Right Side: Image with modern rounded masking */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative p-4">
            <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tagline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Orchestrate transformation at scale
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            From strategic blueprinting to operational execution, our capabilities cover the entire spectrum of enterprise modernization.
          </p>
        </div>
        
        {/* Capability Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IBM_STYLE_CAPABILITIES.map((category, idx) => (
            <div key={category.slug} className="bg-white rounded-3xl p-10 border border-zinc-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">{category.category}</h3>
                </div>
                <Link href={`/services/${category.slug}`} className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {category.items.map(item => (
                  <li key={item.slug}>
                    <Link href={`/services/${category.slug}/${item.slug}`} className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-2 group-hover:bg-primary transition-colors"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Modern Banner CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto pb-12">
        <div className="bg-zinc-950 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMHY2MGg2MCIvPjwvZz48L3N2Zz4=')]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 p-12 lg:p-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let's create what's next.</h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
                Discover how our consultants can help you unlock new business value through intelligent operations and open innovation.
              </p>
              <Link href="/contact" className="inline-flex bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/20">
                Speak with an expert
              </Link>
            </div>
            <div className="hidden lg:block">
              {/* Decorative elements for the right side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"></div>
                <div className="h-40 rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-sm mt-8"></div>
                <div className="h-40 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"></div>
                <div className="h-40 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
