"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Sparkles, CheckCircle2, Globe, Lock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="ambient-glow-purple top-[50px] right-[-100px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="badge-tag">Executive Engagement</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Connect with an <br />
            <span className="gradient-text-hero">Improx Integents Partner</span>
          </h1>
          <p className="text-lg text-slate-300">
            Schedule a strategic briefing, request a custom ROI transformation roadmap, or explore how our 5 capability pillars can serve your enterprise.
          </p>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">Request Executive Consultation</h2>
                <p className="text-xs text-slate-400 mb-8">All communications are governed under strict mutual Non-Disclosure Agreements (NDA).</p>

                {submitted ? (
                  <div className="bg-indigo-950/60 border border-indigo-500/40 rounded-2xl p-8 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Briefing Request Received</h3>
                    <p className="text-sm text-slate-300">
                      An Improx Integents Senior Managing Partner will contact your executive office within 4 business hours to confirm your consultation schedule.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Full Name *</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Corporate Email *</label>
                        <input 
                          required
                          type="email" 
                          placeholder="s.jenkins@enterprise.com"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Company / Enterprise *</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Global Fortune 500 Corp"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Executive Title *</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Chief Executive Officer / CTO / CFO"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Primary Area of Interest</label>
                      <select className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500">
                        <option>Data & AI Systems (Enterprise GenAI & Control Planes)</option>
                        <option>Strategy & Transformation (M&A, Value Creation)</option>
                        <option>Enterprise Operations (Supply Chain, Finance Automation)</option>
                        <option>Digital Modernization (Cloud, Architecture, Cyber)</option>
                        <option>Industry X & Smart Manufacturing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Transformation Scope & Goals</label>
                      <textarea 
                        rows={4}
                        placeholder="Briefly describe your strategic objectives, enterprise scale, or pilot requirements..."
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary-gradient w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center shadow-xl"
                    >
                      <span>Submit Executive Request</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Right Global Office Hubs */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Global Advisory Practice Hubs</span>
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <div className="font-bold text-white text-sm">North America Headquarters</div>
                    <div className="text-slate-400">One World Trade Center, Suite 78, New York, NY 10007</div>
                    <div className="text-indigo-400 font-semibold pt-1">ny-office@improxintegents.com</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <div className="font-bold text-white text-sm">EMEA Regional Hub</div>
                    <div className="text-slate-400">25 Bank Street, Canary Wharf, London E14 5JP, UK</div>
                    <div className="text-indigo-400 font-semibold pt-1">london-office@improxintegents.com</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <div className="font-bold text-white text-sm">Asia-Pacific Tech & Innovation Center</div>
                    <div className="text-slate-400">Marina Bay Financial Centre, Tower 2, Singapore 018982</div>
                    <div className="text-indigo-400 font-semibold pt-1">singapore-office@improxintegents.com</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <div className="font-bold text-white text-sm">Global Delivery & R&D Hub</div>
                    <div className="text-slate-400">Improx Digital Center, Baner Tech Park, Pune, MH 411045, India</div>
                    <div className="text-indigo-400 font-semibold pt-1">pune-office@improxintegents.com</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Enterprise Data Encrypted</span>
                  <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1 text-indigo-400" /> SOC2 Compliant</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
