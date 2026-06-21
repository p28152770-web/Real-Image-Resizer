/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, FileImage, ImagePlay, Crop, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface RelatedTool {
  title: string;
  description: string;
  badge: 'Free' | 'Coming Soon';
  icon: React.ComponentType<{ className?: string }>;
}

export default function RelatedTools() {
  const tools: RelatedTool[] = [
    {
      title: 'Image Compressor',
      description: 'Shrink JPEG, PNG, and WebP dimensions to the absolute minimum bytes without losing crisp detail.',
      badge: 'Coming Soon',
      icon: Flame,
    },
    {
      title: 'JPG to PNG Converter',
      description: 'Convert standard compressed JPEG files into transparent PNG files locally with high fidelity.',
      badge: 'Coming Soon',
      icon: FileImage,
    },
    {
      title: 'PNG to JPG Converter',
      description: 'Flatten portable network graphic files into lighter web-ready JPEGs. Adds white background back.',
      badge: 'Coming Soon',
      icon: ImagePlay,
    },
    {
      title: 'WebP Converter',
      description: 'Convert old-school PNG/JPG formats to Google WebP for cutting-edge next-gen loading speeds.',
      badge: 'Coming Soon',
      icon: ShieldCheck,
    },
    {
      title: 'Crop Image Tool',
      description: 'Crop corners, specify ratios (1:1, 16:9), and position custom focal locks on images locally.',
      badge: 'Coming Soon',
      icon: Crop,
    },
  ];

  return (
    <section id="tools" className="py-16 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-[#0c0f17] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            Related Suite
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            More Handcrafted Tools
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Explore premium alternative browser utilities currently in active developer cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tools.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group border border-slate-200 dark:border-slate-800 hover:border-black dark:hover:border-white p-5 rounded-xl transition-all shadow-sm bg-[#fafafa]/40 dark:bg-[#111624]/40 hover:bg-white dark:hover:bg-[#111624]"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="p-2 rounded-lg bg-slate-100/80 dark:bg-slate-800 text-black dark:text-white border border-slate-200/50 dark:border-slate-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider font-extrabold border px-2 py-0.5 rounded-full bg-slate-50 dark:bg-[#151c2f] border-slate-150 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
