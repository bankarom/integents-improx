"use client";

import { useState } from "react";
import { SUB_SERVICE_DETAILS, TIER_1_CAPABILITIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, PlayCircle, Shield, Database, Network, ExternalLink, Bot } from "lucide-react";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default function SubServicePage({ params }: PageProps) {
  const { slug, subSlug } = use(params);
  const [activeTab, setActiveTab] = useState(0);
  
  // Find category for breadcrumbs
  const category = TIER_1_CAPABILITIES.find(c => c.slug === slug);
  const detail = SUB_SERVICE_DETAILS[subSlug];

  if (!category || !detail) {
    notFound();
  }

  // Helper to render lucide icons dynamically (simplified for demo)
  const renderIcon = (name: string) => {
    switch (name) {
      case "Network": return <Network className="w-8 h-8 text-primary" />;
      case "Database": return <Database className="w-8 h-8 text-primary" />;
      case "Bot": return <Bot className="w-8 h-8 text-primary" />;
      default: return <Shield className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <div className="bg-white pt-[120px]">
      {/* Ultra Clean Flat Hero Section */}
      <section className="bg-white text-black border-b-8 border-primary">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-12 flex items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-4">/</span> 
            <Link href="/services" className="hover:text-primary transition-colors">Consulting</Link>
            <span className="mx-4">/</span> 
            <span className="text-black">{detail.title}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 max-w-5xl leading-[0.9] uppercase text-black">
            {detail.title}
          </h1>
          <p className="text-3xl text-neutral-600 font-medium max-w-4xl mb-16 leading-relaxed">
            {detail.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
             <Link href="/contact" className="sharp-btn">
                Partner With Us <ArrowRight className="w-5 h-5 ml-4" />
             </Link>
             <Link href="#" className="sharp-btn-outline">
                Read Strategy Report <ExternalLink className="w-5 h-5 ml-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Unlock the full potential (Flat Video Block) */}
      <section className="py-32 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
         <h2 className="text-5xl md:text-7xl font-black text-black mb-20 uppercase tracking-tighter">{detail.unlockSection.headline}</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="prose prose-xl prose-neutral max-w-none">
              <p className="text-3xl font-bold leading-relaxed text-black mb-12 border-l-8 border-primary pl-8 py-4">
                {detail.unlockSection.stats}
              </p>
              <div className="text-neutral-700 whitespace-pre-wrap leading-relaxed font-medium">
                {detail.unlockSection.text}
              </div>
            </div>
            <div>
               <div className="relative overflow-hidden group cursor-pointer aspect-video bg-black border border-neutral-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" style={{ backgroundImage: `url(${detail.unlockSection.videoPlaceholderImage})` }}></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                     <div className="w-24 h-24 bg-primary rounded-none flex items-center justify-center group-hover:bg-red-800 transition-colors">
                        <PlayCircle className="w-12 h-12 text-white" />
                     </div>
                  </div>
               </div>
               <p className="text-sm text-neutral-500 mt-6 font-bold uppercase tracking-widest text-center">Video: Executive Briefing (7:14 min)</p>
            </div>
         </div>
      </section>

      {/* Capabilities Icons Grid (Flat) */}
      <section className="py-32 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-5xl md:text-7xl font-black text-black mb-24 uppercase tracking-tighter">Capabilities</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              {detail.capabilities.map((cap: any, idx: number) => (
                 <div key={idx} className="border-t-4 border-black pt-8">
                    <div className="mb-8">
                       {renderIcon(cap.icon)}
                    </div>
                    <h3 className="text-3xl font-black text-black mb-6 uppercase">{cap.title}</h3>
                    <p className="text-neutral-600 mb-12 text-xl font-medium leading-relaxed">{cap.desc}</p>
                    <Link href="#" className="text-primary font-bold uppercase tracking-widest text-sm hover:text-red-800 flex items-center">
                       Learn more <ArrowRight className="w-4 h-4 ml-4" />
                    </Link>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Case Studies Grid (Flat) */}
      <section className="py-32 bg-white">
         <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-24 uppercase tracking-tighter">Case studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {detail.caseStudies.map((study: any, idx: number) => (
                  <Link key={idx} href="#" className="border border-neutral-200 p-12 lg:p-16 group hover:border-primary transition-colors block">
                     <div className="mb-12">
                        <span className="text-4xl font-black text-neutral-300 group-hover:text-primary transition-colors uppercase tracking-widest">{study.logo}</span>
                     </div>
                     <h3 className="text-4xl font-black text-black mb-8 leading-tight group-hover:text-primary transition-colors">{study.title}</h3>
                     <p className="text-xl font-medium text-neutral-600 leading-relaxed mb-12">{study.desc}</p>
                     <div className="text-primary font-bold uppercase tracking-widest text-sm flex items-center">
                       Read Case Study <ArrowRight className="w-5 h-5 ml-4" />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
