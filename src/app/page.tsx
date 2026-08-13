"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IBM_STYLE_CAPABILITIES } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-white pt-24">
      {/* IBM Style Hero Section (Split Layout) */}
      <section className="flex flex-col-reverse lg:flex-row min-h-[70vh] border-b border-zinc-200">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-24 flex flex-col justify-center bg-zinc-50">
          <div className="text-sm font-medium text-zinc-500 mb-4 flex items-center">
            Home <span className="mx-2">/</span> Consulting
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 mb-12 tracking-tight">
            IMPROX Consulting
          </h1>
          <p className="text-xl md:text-2xl text-zinc-800 font-medium leading-snug mb-10 max-w-xl">
            Improx and intelligent technologies help enterprises accelerate secure AI across core operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/data-and-ai/artificial-intelligence" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 flex items-center justify-between font-medium transition-colors w-full sm:w-auto min-w-[200px]">
              Read press release <ArrowRight className="w-5 h-5 ml-4" />
            </Link>
            <Link href="/contact" className="bg-transparent border border-zinc-800 hover:bg-zinc-100 text-zinc-900 px-6 py-4 flex items-center justify-between font-medium transition-colors w-full sm:w-auto min-w-[200px]">
              Explore the partnership <ArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-zinc-200">
          {/* We use an Unsplash image that matches the corporate vibe of the IBM screenshot */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Main Tagline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light text-blue-600 mb-16">
          Orchestrate AI at scale
        </h2>
        
        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {IBM_STYLE_CAPABILITIES.map(category => (
            <div key={category.slug} className="border-t border-zinc-300 pt-6">
              <Link href={`/services/${category.slug}`} className="group flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">{category.category}</h3>
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </Link>
              <ul className="space-y-4">
                {category.items.map(item => (
                  <li key={item.slug}>
                    <Link href={`/services/${category.slug}/${item.slug}`} className="text-sm text-zinc-600 hover:text-blue-600 transition-colors hover:underline underline-offset-2">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Filler section to give the page depth like an enterprise site */}
      <section className="bg-zinc-900 text-white py-24 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Let's create what's next</h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-lg">
                Discover how our consultants can help you unlock new business value through open innovation.
              </p>
              <Link href="/contact" className="inline-flex bg-white hover:bg-zinc-200 text-zinc-900 px-6 py-4 items-center justify-between font-medium transition-colors min-w-[200px]">
                Speak with an expert <ArrowRight className="w-5 h-5 ml-4" />
              </Link>
            </div>
            <div className="h-80 bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
