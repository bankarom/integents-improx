import Link from "next/link";
import { Linkedin, Twitter, ArrowRight, Mail } from "lucide-react";
import { INDUSTRIES, CAPABILITIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-6">
              <span className="text-primary text-3xl font-black">I</span>
              Improx Integents
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8 text-zinc-400">
              Transforming modern enterprises through strategy, innovation, and cutting-edge operational excellence. We build the future of business.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm">
              {CAPABILITIES.slice(0, 5).map(cap => (
                <li key={cap.slug}>
                  <Link href={`/services/${cap.slug}`} className="hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm">
              {INDUSTRIES.slice(0, 5).map(ind => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">Insights & Research</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Client Success</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Improx Integents. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
