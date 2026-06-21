import React from 'react';
import { EyeOff, FileQuestion, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onBackToHome: () => void;
}

export default function NotFoundPage({ onBackToHome }: NotFoundPageProps) {
  return (
    <div className="max-w-md mx-auto px-6 py-20 text-center flex flex-col items-center justify-center space-y-6">
      {/* Visual Indicator */}
      <div className="relative">
        <div className="absolute inset-0 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="relative w-20 h-20 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center text-slate-400 dark:text-slate-500 shadow-xs">
          <FileQuestion className="w-10 h-10 text-red-500 dark:text-red-400" />
        </div>
      </div>

      <div className="space-y-3">
        {/* Visual Badge */}
        <div className="inline-flex items-center space-x-1 bg-red-50 dark:bg-red-950/25 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/45">
          <span>ERROR CODE: 404</span>
        </div>
        
        {/* Main Header */}
        <h1 className="text-2xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Oops! The page you're looking for doesn't exist.
        </h1>
        
        {/* Supporting Copy */}
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
          The link might be broken, or the directory parameter was updated. Rest assured, your visual processing environment remains completely active.
        </p>
      </div>

      {/* Primary Call to Action */}
      <div className="pt-2 w-full">
        <button
          onClick={onBackToHome}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
}
