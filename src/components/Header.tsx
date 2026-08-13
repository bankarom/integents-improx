"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Search, Globe } from "lucide-react";
import { IBM_STYLE_CAPABILITIES } from "@/lib/data";

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
    <header className="fixed top-0 w-full z-50 bg-white border-b border-zinc-200 text-zinc-950 transition-all duration-300">
      {/* Top Utility Bar (IBM Style) */}
      <div className="hidden md:flex justify-end items-center px-4 sm:px-6 lg:px-8 h-10 border-b border-zinc-100 text-sm font-medium space-x-6">
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Search className="w-4 h-4 mr-1"/> Search</Link>
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Globe className="w-4 h-4 mr-1"/> Global</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0 flex items-center mr-8">
            <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-950 flex items-center gap-1">
              {/* IBM uses a typographic logo, we'll mimic a strong type logo */}
              <span className="tracking-widest">IMPROX</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1 items-center h-full flex-grow">
            <Link href="/services" className="px-4 text-sm font-bold text-primary border-b-2 border-primary h-full flex items-center">
              Consulting
            </Link>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center px-4 text-sm font-medium hover:bg-zinc-50 h-full transition-colors border-b-2 border-transparent hover:border-zinc-300">
                Capabilities <ChevronDown className="ml-1 w-4 h-4 text-zinc-400" />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-16 left-0 w-screen max-w-[1200px] bg-white shadow-2xl border-t border-zinc-200 overflow-hidden"
                  >
                    <div className="p-10 grid grid-cols-4 gap-12">
                      {IBM_STYLE_CAPABILITIES.map((category) => (
                        <div key={category.slug}>
                          <Link href={`/services/${category.slug}`} className="group inline-flex items-center text-zinc-900 text-lg font-medium mb-6 hover:text-blue-600 transition-colors">
                            {category.category} <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className="px-4 text-sm font-medium hover:bg-zinc-50 h-full flex items-center border-b-2 border-transparent hover:border-zinc-300">
              Industries <ChevronDown className="ml-1 w-4 h-4 text-zinc-400" />
            </Link>
            <Link href="/insights" className="px-4 text-sm font-medium hover:bg-zinc-50 h-full flex items-center border-b-2 border-transparent hover:border-zinc-300">
              Insights <ChevronDown className="ml-1 w-4 h-4 text-zinc-400" />
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
             <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                Let's Talk
             </Link>
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
