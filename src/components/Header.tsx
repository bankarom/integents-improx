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
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 text-zinc-950 transition-all duration-300 shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden md:flex justify-end items-center px-4 sm:px-6 lg:px-8 h-9 bg-zinc-900 text-zinc-300 text-xs font-medium space-x-6">
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Search className="w-3 h-3 mr-1"/> Search</Link>
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Globe className="w-3 h-3 mr-1"/> Global</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0 flex items-center mr-8">
            <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-950 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <span className="tracking-wide">IMPROX <span className="font-light">Consulting</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-2 items-center h-full flex-grow ml-4">
            <Link href="/services" className="px-4 text-sm font-semibold text-primary h-full flex items-center relative">
              Consulting
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
            </Link>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center px-4 text-sm font-medium hover:text-primary h-full transition-colors">
                Capabilities <ChevronDown className="ml-1 w-4 h-4 text-zinc-400" />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-0 w-screen max-w-[1100px] bg-white shadow-2xl rounded-2xl border border-zinc-100 overflow-hidden"
                  >
                    <div className="p-10 grid grid-cols-4 gap-10">
                      {IBM_STYLE_CAPABILITIES.map((category) => (
                        <div key={category.slug}>
                          <Link href={`/services/${category.slug}`} className="group inline-flex items-center text-zinc-900 text-lg font-bold mb-6 hover:text-primary transition-colors">
                            {category.category} <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <ul className="space-y-4">
                            {category.items.map(item => (
                              <li key={item.slug}>
                                <Link href={`/services/${category.slug}/${item.slug}`} className="text-sm font-medium text-zinc-500 hover:text-primary transition-colors">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-zinc-50 p-4 border-t border-zinc-100 flex justify-center">
                      <Link href="/services" className="text-sm font-semibold text-primary hover:text-emerald-700 transition-colors flex items-center">
                        View All Capabilities <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className="px-4 text-sm font-medium hover:text-primary h-full flex items-center">
              Industries
            </Link>
            <Link href="/insights" className="px-4 text-sm font-medium hover:text-primary h-full flex items-center">
              Insights
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
             <Link href="/contact" className="bg-primary hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-primary/20">
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
