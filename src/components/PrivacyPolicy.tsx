import React from 'react';
import { ShieldCheck, Lock, Database, EyeOff, ServerOff, FileCode } from 'lucide-react';

interface SubPageProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: SubPageProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-left">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 dark:text-slate-500 mb-6">
        <button onClick={onBackToHome} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">HOME</button>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">PRIVACY POLICY</span>
      </nav>

      <div className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          Learn how our secure browser-local tool processes and protects your visual data. 
          Last updated: June 19, 2026.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-150 dark:border-emerald-800/40 rounded-xl flex items-start space-x-3">
          <ServerOff className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">No Server Storage</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">Images never leave your physical machine.</span>
          </div>
        </div>

        <div className="p-4 bg-sky-50/50 dark:bg-sky-950/10 border border-sky-150 dark:border-sky-800/40 rounded-xl flex items-start space-x-3">
          <EyeOff className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Zero Tracking</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">We do not store cookies or record photo content.</span>
          </div>
        </div>

        <div className="p-4 bg-purple-50/50 dark:bg-purple-950/10 border border-purple-150 dark:border-purple-800/40 rounded-xl flex items-start space-x-3">
          <Lock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Browser Isolation</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">All pixel rendering occurs inside sandbox loops.</span>
          </div>
        </div>
      </div>

      {/* Main content body */}
      <div className="space-y-8 text-sm text-slate-605 dark:text-slate-300 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>1. Our Core Commitment to Privacy</span>
          </h2>
          <p>
            Welcome to <strong className="font-extrabold text-black dark:text-white">Image Resizer</strong>. We recognize that user data privacy forms the absolute cornerstone of online application integrity. Unlike traditional server-side web platforms that require you to upload your sensitive photographs to external servers, we have designed our tools as strict frontend offline utilities.
          </p>
          <p>
            By leveraging advanced client-side processing pipelines (such as HTML5 Canvas drawing buffers and JavaScript binary blob compilers), our software handles <strong className="font-semibold text-black dark:text-white">image resize in pixels</strong>, <strong className="font-semibold text-black dark:text-white">image resize in kb</strong>, format conversions, and scale optimization directly on your physical device. We have zero ability to observe, collect, or store any file you process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <ServerOff className="w-4 h-4 text-slate-500" />
            <span>2. No Files Are Ever Uploaded</span>
          </h2>
          <p>
            When you pick a JPEG, PNG, or WebP photo inside our workspace, your browser generates a temporary local memory reference pointer (called a <code>Blob URL</code> or <code>Data URL</code>). 
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <li>Your file stays strictly in your computer's RAM.</li>
            <li>No HTTP multipart file data payloads are constructed or sent.</li>
            <li>No FTP file migrations or background storage operations occurred.</li>
            <li>You can even disconnect your internet connection entirely after loading our page, and the tool will continue compiling resizing tasks successfully!</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Database className="w-4 h-4 text-slate-550" />
            <span>3. Local Web Storage and Session Storage</span>
          </h2>
          <p>
            To enhance your usability, we write minor application configuration flags (such as the <code>real-resizer-theme</code> to save your light or dark mode setting) inside the client-side <code>localStorage</code> database of your browser.
          </p>
          <p>
            This data is entirely static, is never compiled into remote telemetry logs, and does not carry any personal identifiers. You can clean your browser cache or remove your site details at any point to erase these preferences immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <FileCode className="w-4 h-4 text-slate-500" />
            <span>4. Google AdSense & Contextual Advertising</span>
          </h2>
          <p>
            To sustain our operation and allow us to host this free simple image resizer tool indefinitely, we display carefully placed AdSense advertisements. These placeholders utilize standard Google cookies to analyze search relevance and direct appropriate contextual services.
          </p>
          <p>
            You can modify, opt-out, or inspect personalized analytics cookies through Google's Ads Settings at any time. We strictly avoid user behavioral profiling or packaging third-party lists.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <span>5. Contact our Protection Officers</span>
          </h2>
          <p>
            If you have questions regarding our operational model or want to review our structural code logic, please submit a feedback message directly on our site via our Contact center page, or check our open client-side repositories. 
          </p>
        </section>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-start">
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
