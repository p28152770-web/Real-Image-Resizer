import React from 'react';
import { FileText, Award, AlertTriangle, Scale, RefreshCw } from 'lucide-react';

interface SubPageProps {
  onBackToHome: () => void;
}

export default function TermsAndConditions({ onBackToHome }: SubPageProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-left">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 dark:text-slate-500 mb-6">
        <button onClick={onBackToHome} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">HOME</button>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">TERMS & CONDITIONS</span>
      </nav>

      <div className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Terms & Conditions
        </h1>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          By utilizing our free online image resizer suite, you agree to these clear, localized usage rules.
          Effective Date: June 19, 2026.
        </p>
      </div>

      {/* Structured Key Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="p-4 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <Scale className="w-4 h-4 text-slate-500" />
            <span className="font-bold uppercase tracking-wider">Governing Framework</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            This tool is provided 100% free of charge for commercial, educational, and personal design works. We place zero processing caps.
          </p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span className="font-bold uppercase tracking-wider">Disclaimer of Warranties</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Photos are compiled inside localized browser instances. No automatic cloud backups exist. Please secure your original designs.
          </p>
        </div>
      </div>

      {/* Legal terms content */}
      <div className="space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Award className="w-4.5 h-4.5 text-blue-500" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            Welcome to the <strong className="font-semibold text-black dark:text-white">Image Resizer</strong> web application. By visiting or utilizing any portion of our browser software (including pixel scaling, crop overlays, rotational matrices, and output target selectors), you acknowledge and express continuous consent to these terms of service, along with our active Privacy Policy guidelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <RefreshCw className="w-4.5 h-4.5 text-emerald-500 animate-spin-slow" />
            <span>2. Local Process Sandboxing Parameters</span>
          </h2>
          <p>
            You explicitly agree and recognize that our <strong className="font-semibold text-black dark:text-white">free image resizer</strong> is built to run entirely client-side. We do not provide centralized server database relays, cloud backups, or persistent remote holding directories.
          </p>
          <p>
            Once you perform operations like downsampling, format conversion, or aspect modifications, the output is saved to temporary computer disk memory inside your local browser. If you navigate away or refresh your screen, any current states will clear automatically. You assume 100% responsibility for downloading completed visual assets instantly on process finalization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Permissible Commercial and Fair Usage
          </h2>
          <p>
            Our software supports unrestricted creative output. You may use our custom assets to downscale, crop, and output files for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>Social media marketing and brand visual optimization.</li>
            <li>Content management systems (WordPress, Shopify, Webflow) to decrease page speeds.</li>
            <li>Academic papers, research calculations, and layout formatting.</li>
            <li>Commercial product catalogs and advertising assets.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Pure "As-Is" Software Provision
          </h2>
          <p>
            Our utility suite is provided "AS-IS" and "AS-AVAILABLE" without warranties of any scale, express or implied. To the max extent permitted by unified consumer protection statutes, we decline any liability for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>Loss of original design files due to browser crashes or browser memory allocation errors.</li>
            <li>Pixel distortion or blur arising from manual extreme aspect scaling or aspect-unlock distortion.</li>
            <li>Incidental system slowdowns caused by massive resolution inputs during high-sample rendering loops.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            5. Amendments & Continuous Evolution
          </h2>
          <p>
            We reserve rights to continuously alter, modify, or retire components (such as our percentage grids, specific codec support tables, or dark themes) to uphold modern coding practices. Please check these terms routinely for updates.
          </p>
        </section>
      </div>

      <div className="pt-8 border-t border-slate-205 dark:border-slate-800 flex justify-start mt-10">
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
