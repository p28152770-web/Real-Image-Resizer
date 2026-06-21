import React from 'react';
import { Sparkles, Compass, Eye, ShieldCheck, HeartPulse, Hammer } from 'lucide-react';

interface SubPageProps {
  onBackToHome: () => void;
}

export default function AboutUs({ onBackToHome }: SubPageProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-left">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 dark:text-slate-500 mb-6">
        <button onClick={onBackToHome} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">HOME</button>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">ABOUT US</span>
      </nav>

      <div className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          About Us
        </h1>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          We are a focused group of web performance advocates and privacy purists building the lightest utility suite on the internet.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 font-sans">
        <p>
          At <strong className="font-extrabold text-black dark:text-white">Image Resizer</strong>, our mission is simple: provide powerful, professional-grade visual assets processing tools that are genuinely free, easy to use, and completely private. We got tired of loading bloated multi-megabyte cloud editing applications just to handle basic tasks like a standard <strong className="font-semibold text-black dark:text-white">jpg image resize</strong>, <strong className="font-semibold text-black dark:text-white">image resize in pixels</strong>, or adjusting graphics to fit in a specific byte cap.
        </p>

        <p>
          Having to register an account, log in, or pay monthly fees simply to optimize an image for page speed represents a broken model of developer and creator tooling. So we built this <strong className="font-semibold text-black dark:text-white">simple image resizer</strong> as a clean, client-first design alternative.
        </p>

        {/* Our Design Philosophy */}
        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Our Operational Philosophy</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-1.5">
            <div className="text-emerald-500 font-bold text-lg"><ShieldCheck className="w-5 h-5" /></div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Local Computation</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              Any processing runs entirely within sandbox tabs. Your graphics remain inside your terminal or notebook.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-1.5">
            <div className="text-sky-500 font-bold text-lg"><Hammer className="w-5 h-5" /></div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Speed Engineering</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              No remote database overhead allows near-instant canvas calculations in microseconds under robust browser engines.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-1.5">
            <div className="text-purple-500 font-bold text-lg"><HeartPulse className="w-5 h-5" /></div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">Zero Paywalls</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              No limitations on features. All cropping, aspect limits, and quality presets are always free to exploit.
            </p>
          </div>
        </div>

        <p>
          Our team is composed of web engineers, UI experts, and search content creators who are passionate about lightweight architectures. We firmly believe that standard tools shouldn't act as traps for collecting data or forcing commercial renewals. 
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4 flex items-center space-x-2">
          <Compass className="w-5 h-5 text-blue-500" />
          <span>Our Vision for the Future</span>
        </h2>
        <p>
          Looking forward into 2026, we are building features to provide true local <strong className="font-semibold text-black dark:text-white">AI image resizer</strong> frameworks leveraging Edge WebNN model inferences, and a highly requested <strong className="font-semibold text-black dark:text-white">bulk image resizer</strong> to process files in structural multi-threaded environments. We aim to keep shipping updates while holding onto our cornerstone standards: offline utility, lightweight file delivery, and absolute user confidence.
        </p>
      </div>

      <div className="pt-8 border-t border-slate-202 dark:border-slate-800 flex justify-start mt-10">
        <button
          onClick={onBackToHome}
          className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
        >
          Back to Resizer Home
        </button>
      </div>
    </article>
  );
}
