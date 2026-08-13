"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { INDUSTRIES, CAPABILITIES } from "@/lib/data";

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
    <header className="fixed top-0 w-full z-50 glass-header text-zinc-950 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-950 flex items-center gap-2">
              <span className="text-primary text-3xl font-black">I</span>
              Improx Integents
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center h-full">
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-semibold hover:text-primary transition-colors py-8">
                Capabilities <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-b-xl border border-zinc-100 overflow-hidden"
                  >
                    <div className="p-8 grid grid-cols-2 gap-6">
                      {CAPABILITIES.map((cap) => (
                        <Link key={cap.slug} href={`/services/${cap.slug}`} className="group block">
                          <h4 className="text-zinc-900 font-semibold group-hover:text-primary transition-colors flex items-center">
                            {cap.title} <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </h4>
                          <p className="text-sm text-zinc-500 mt-1">{cap.description}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-zinc-50 p-4 border-t border-zinc-100 text-center">
                      <Link href="/services" className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center justify-center">
                        View All Capabilities <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-semibold hover:text-primary transition-colors py-8">
                Industries <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-b-xl border border-zinc-100 overflow-hidden"
                  >
                    <div className="p-8 grid grid-cols-3 gap-6">
                      {INDUSTRIES.map((ind) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group block">
                          <h4 className="text-zinc-900 font-semibold group-hover:text-primary transition-colors text-sm">
                            {ind.title}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/insights" className="text-sm font-semibold hover:text-primary transition-colors">
              Insights
            </Link>
            <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
             <Link href="/contact" className="bg-primary hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md hover:shadow-lg">
                Let's Talk
             </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 hover:text-primary focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
               <Link href="/services" className="block px-3 py-2 text-base font-medium text-zinc-900 hover:text-primary">Capabilities</Link>
               <Link href="/industries" className="block px-3 py-2 text-base font-medium text-zinc-900 hover:text-primary">Industries</Link>
               <Link href="/insights" className="block px-3 py-2 text-base font-medium text-zinc-900 hover:text-primary">Insights</Link>
               <Link href="/about" className="block px-3 py-2 text-base font-medium text-zinc-900 hover:text-primary">About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
