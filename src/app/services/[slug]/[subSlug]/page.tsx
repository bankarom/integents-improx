"use client";

import { useState } from "react";
import { SUB_SERVICE_DETAILS, IBM_STYLE_CAPABILITIES } from "@/lib/data";
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
  const category = IBM_STYLE_CAPABILITIES.find(c => c.slug === slug);
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
    <div className="bg-zinc-50 pt-[104px]">
      {/* Ultra Premium Hero Section */}
      <section className="bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="text-sm font-medium text-zinc-400 mb-8 flex items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span> 
            <Link href="/services" className="hover:text-white transition-colors">Consulting</Link>
            <span className="mx-2">/</span> 
            <span className="text-zinc-100 font-bold">{detail.title}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-[1.1]">
            {detail.title}
          </h1>
          <p className="text-2xl text-zinc-300 max-w-2xl font-light mb-12 leading-relaxed">
            {detail.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/contact" className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                Explore our partnership <ArrowRight className="w-5 h-5 ml-2" />
             </Link>
             <Link href="#" className="bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center">
                Register: Cracking the AI value code <ExternalLink className="w-5 h-5 ml-2" />
             </Link>
          </div>
        </div>
      </section>

      {/* Unlock the full potential (Video Block) */}
      <section className="py-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-5xl font-bold text-zinc-900 mb-16">{detail.unlockSection.headline}</h2>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-2xl font-light leading-relaxed text-zinc-800 mb-8 border-l-4 border-primary pl-6">
                {detail.unlockSection.stats}
              </p>
              <div className="text-zinc-600 whitespace-pre-wrap leading-loose">
                {detail.unlockSection.text}
              </div>
            </div>
            <div>
               <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] group cursor-pointer aspect-video bg-zinc-900">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" style={{ backgroundImage: `url(${detail.unlockSection.videoPlaceholderImage})` }}></div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                     <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-12 h-12 text-white" />
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold text-zinc-900">
                     Doing AI Right
                  </div>
               </div>
               <p className="text-sm text-zinc-500 mt-4 font-medium text-center">6 Paradigms for responsible AI: strategy, governance & impact (7:14 min)</p>
            </div>
         </div>
      </section>

      {/* Reports Slider (IBM Style Cards) */}
      <section className="bg-zinc-900 py-24 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex overflow-x-auto gap-8 pb-8 snap-x scrollbar-hide">
              {detail.reports.map((report: any, idx: number) => (
                <div key={idx} className="min-w-[350px] md:min-w-[450px] lg:min-w-[500px] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 snap-center hover:-translate-y-2 transition-transform duration-300">
                   <div className="h-48 relative bg-zinc-950">
                      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${report.image})` }}></div>
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{report.type}</div>
                   </div>
                   <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{report.title}</h3>
                      <p className="text-zinc-400 mb-8">{report.desc}</p>
                      <button className="text-primary hover:text-indigo-400 font-bold flex items-center transition-colors">
                         Read report <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Capabilities Icons Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-5xl font-bold text-zinc-900 mb-20">Capabilities</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {detail.capabilities.map((cap: any, idx: number) => (
                 <div key={idx} className="group">
                    <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                       {renderIcon(cap.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{cap.title}</h3>
                    <p className="text-zinc-600 mb-8 text-lg">{cap.desc}</p>
                    <Link href="#" className="text-primary font-bold hover:text-indigo-700 flex items-center">
                       Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Cross-Industry Tabs */}
      {detail.industryTabs.length > 0 && (
         <section className="bg-zinc-50 py-32 border-t border-zinc-200">
           <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8 border-b border-zinc-200 mb-16 overflow-x-auto">
                 {detail.industryTabs.map((tab: any, idx: number) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`pb-4 text-lg font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === idx ? 'border-primary text-primary' : 'border-transparent text-zinc-500 hover:text-zinc-800'}`}
                    >
                       {tab.name}
                    </button>
                 ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl font-bold text-zinc-900 mb-6">{detail.industryTabs[activeTab].title}</h2>
                    <p className="text-xl text-zinc-600 mb-10">{detail.industryTabs[activeTab].desc}</p>
                    <Link href="#" className="text-primary font-bold hover:text-indigo-700 flex items-center text-lg">
                       Learn more <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                 </div>
                 <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${detail.industryTabs[activeTab].image})` }}></div>
                 </div>
              </div>
           </div>
         </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-32 bg-white border-t border-zinc-200">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-zinc-900 mb-20">Case studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-l border-zinc-200">
               {detail.caseStudies.map((study: any, idx: number) => (
                  <Link key={idx} href="#" className="border-r border-b border-zinc-200 p-12 group hover:bg-zinc-50 transition-colors block">
                     <div className="h-16 flex items-center mb-12">
                        {/* Placeholder for logos */}
                        <span className="text-2xl font-black text-zinc-300 group-hover:text-primary transition-colors">{study.logo}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-zinc-900 mb-6 group-hover:text-primary transition-colors">{study.title}</h3>
                     <p className="text-zinc-600 leading-relaxed mb-8">{study.desc}</p>
                     <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors mt-auto">
                       <ArrowRight className="w-4 h-4" />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
