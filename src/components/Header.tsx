"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Search, Globe } from "lucide-react";
import { TIER_1_CAPABILITIES } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-black text-black transition-all duration-300">
      {/* Top Utility Bar (Tier-1 Style) */}
      <div className="hidden md:flex justify-end items-center px-4 sm:px-6 lg:px-8 h-10 border-b border-neutral-200 text-xs font-bold uppercase tracking-widest space-x-8">
        <Link href="#" className="hover:text-neutral-500 transition-colors flex items-center"><Search className="w-4 h-4 mr-2"/> Search</Link>
        <Link href="#" className="hover:text-neutral-500 transition-colors flex items-center"><Globe className="w-4 h-4 mr-2"/> Global</Link>
        <Link href="/contact" className="hover:text-neutral-500 transition-colors">Contact Us</Link>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0 flex items-center mr-12">
            <Link href="/" className="text-3xl font-black tracking-tighter text-black flex items-center">
              IMPROX
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1 items-center h-full flex-grow">
            <Link href="/services" className="px-6 text-sm font-bold h-full flex items-center hover:bg-neutral-100 transition-colors">
              Consulting
            </Link>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center px-6 text-sm font-bold h-full hover:bg-neutral-100 transition-colors">
                Capabilities <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-20 left-0 w-screen max-w-[1400px] bg-white border border-black shadow-2xl overflow-hidden"
                  >
                    <div className="p-12 grid grid-cols-5 gap-12">
                      {TIER_1_CAPABILITIES.map((category) => (
                        <div key={category.slug} className="border-l border-neutral-200 pl-6 first:border-l-0 first:pl-0">
                          <Link href={`/services/${category.slug}`} className="group inline-flex items-center text-black text-xl font-bold mb-8 hover:text-neutral-600 transition-colors">
                            {category.category} <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="space-y-4">
                            {category.items.map(item => (
                              <li key={item.slug}>
                                <Link href={`/services/${category.slug}/${item.slug}`} className="text-sm font-medium text-neutral-700 hover:text-black hover:underline underline-offset-4 transition-all">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className="px-6 text-sm font-bold h-full flex items-center hover:bg-neutral-100 transition-colors">
              Industries
            </Link>
            <Link href="/insights" className="px-6 text-sm font-bold h-full flex items-center hover:bg-neutral-100 transition-colors">
              Insights
            </Link>
          </nav>

          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
