"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed top-0 w-full z-50 bg-white text-black shadow-sm transition-all duration-300">
      {/* Top Utility Bar (Bain Style) */}
      <div className="hidden md:flex justify-end items-center px-4 sm:px-6 lg:px-8 h-10 border-b border-neutral-100 text-xs font-bold uppercase tracking-widest space-x-8">
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Search className="w-4 h-4 mr-2"/> Search</Link>
        <Link href="#" className="hover:text-primary transition-colors flex items-center"><Globe className="w-4 h-4 mr-2"/> Global | English</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0 flex items-center mr-12">
            <Link href="/" className="text-2xl font-black tracking-widest uppercase text-black flex items-center">
              IMPROX & COMPANY
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1 items-center h-full flex-grow">
            <Link href="/services" className="px-6 text-sm font-bold uppercase tracking-wide h-full flex items-center hover:text-primary transition-colors">
              Consulting Services
            </Link>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center px-6 text-sm font-bold uppercase tracking-wide h-full hover:text-primary transition-colors">
                Capabilities <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {activeMenu === 'capabilities' && (
                <div
                  className="absolute top-20 left-0 w-screen max-w-[1400px] bg-white shadow-2xl border-b-4 border-primary"
                >
                  <div className="p-12 grid grid-cols-5 gap-12">
                    {TIER_1_CAPABILITIES.map((category) => (
                      <div key={category.slug} className="pr-6">
                        <Link href={`/services/${category.slug}`} className="group inline-flex items-center text-black text-lg font-bold mb-6 hover:text-primary transition-colors">
                          {category.category}
                        </Link>
                        <ul className="space-y-4">
                          {category.items.map(item => (
                            <li key={item.slug}>
                              <Link href={`/services/${category.slug}/${item.slug}`} className="text-sm font-medium text-neutral-600 hover:text-black hover:underline underline-offset-4 transition-all">
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className="px-6 text-sm font-bold uppercase tracking-wide h-full flex items-center hover:text-primary transition-colors">
              Industries
            </Link>
            <Link href="/insights" className="px-6 text-sm font-bold uppercase tracking-wide h-full flex items-center hover:text-primary transition-colors">
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
