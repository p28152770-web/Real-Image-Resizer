/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelpCircle } from 'lucide-react';

interface AdSlotProps {
  slotId?: string;
  type?: 'banner' | 'sidebar' | 'inline';
}

export default function AdSensePlaceholders({ type = 'banner' }: AdSlotProps) {
  // HIDDEN FOR PRODUCTION UX: Keep placeholders in the codebase but do not render them on the live website.
  // To restore, comment out the line below.
  return null;

  if (type === 'sidebar') {
    return (
      <div className="border border-dashed border-slate-205 bg-slate-50/50 p-4 rounded-xl flex flex-col items-center justify-center text-center py-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
          Advertisement Placement
        </span>
        <div className="w-full h-80 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center p-3 mt-4 text-center">
          <HelpCircle className="w-5 h-5 text-slate-300 mb-1" />
          <span className="text-xs font-semibold text-slate-450">AdSense Vertical Unit</span>
          <span className="text-[10px] font-mono text-slate-350">300 x 600 px (Responsive)</span>
        </div>
      </div>
    );
  }

  if (type === 'inline') {
    return (
      <div className="w-full border-t border-b border-slate-100 bg-[#fafafa] py-6 my-8 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl border border-dashed border-slate-200 p-4 rounded-xl bg-white flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-sm">
          <div className="mb-3 md:mb-0">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-450 block mb-1 font-bold">
              Sponsor Placement
            </span>
            <span className="text-xs font-bold text-slate-700">AdSense In-Feed Responsive Native Unit</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 border border-slate-200 rounded-full px-3 py-1 bg-slate-50">
            AdBlock Safe Sandbox
          </span>
        </div>
      </div>
    );
  }

  // Large responsive horizontal banner
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-6">
      <div className="border border-dashed border-slate-200 bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
            Monetization Ready
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="w-full min-h-24 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center p-4 shadow-sm">
          <span className="text-xs font-bold text-slate-700">Google AdSense Leaderboard Unit</span>
          <span className="text-[10px] font-mono text-slate-450 mt-0.5">
            Auto-Responsive: 728×90 / 970×90 / 320×50 for Smart Devices
          </span>
        </div>
      </div>
    </div>
  );
}
