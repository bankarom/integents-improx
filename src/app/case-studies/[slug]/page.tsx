import { FEATURED_CASE_STUDIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = FEATURED_CASE_STUDIES.find(c => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-slate-800/80 overflow-hidden">
        <div className="ambient-glow-blue top-[-100px] left-[-100px]"></div>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link href="/case-studies" className="text-indigo-400 hover:text-indigo-300 font-semibold mb-6 inline-flex items-center text-xs uppercase tracking-wider">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Case Studies Hub
            </Link>
            <div className="badge-tag mb-4 block w-max">{study.industry} Sector Study</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">{study.title}</h1>
            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-4">
              <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6 sticky top-32">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Enterprise Client</div>
                  <div className="text-base font-bold text-white">{study.client}</div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Industry Vertical</div>
                  <div className="text-base font-bold text-cyan-400">{study.industry}</div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Validated Business Impact</div>
                  <div className="text-base font-bold text-emerald-400">{study.impact}</div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link href="/contact" className="btn-primary-gradient w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center">
                    Request Full Case Study Deck
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-8 space-y-8">
              <div className="glass-card rounded-3xl p-8 lg:p-12 border border-slate-800 space-y-6">
                <h2 className="text-2xl font-bold text-white">Transformation Story & Execution</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Improx Integents engaged directly with executive leadership to audit legacy infrastructure, architect a custom solution plane, and execute rapid pilot rollout within 90 days.
                </p>

                <div className="bg-indigo-950/50 border border-indigo-800/40 p-6 rounded-2xl space-y-3">
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" /> Quantitative Outcomes
                  </div>
                  <div className="text-lg font-bold text-white">{study.impact}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
