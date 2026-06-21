/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      title: 'Lightning Fast',
      description: 'Done in milliseconds. Harnesses your local CPU/GPU for instant browser-based processing with zero queuing.',
      icon: Zap,
    },
    {
      title: 'Privacy First',
      description: 'Your images are processed entirely within sandbox memories of your browser. No files are ever sent to any external server.',
      icon: ShieldCheck,
    },
    {
      title: 'Universal Device Support',
      description: 'Fully responsive dynamic tool. Works beautifully on iPhone, Android, tablets, and lightweight Chromebooks.',
      icon: Smartphone,
    },
    {
      title: '100% Free Forever',
      description: 'Gain full access immediately. No hidden registrations, no watermark stamps, and no daily upload bottlenecks.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="benefits" className="py-16 border-t border-slate-100 dark:border-slate-900 bg-[#fafafa] dark:bg-[#090b11] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Pure Efficiency, No Gimmicks
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Engineered, designed, and optimized to respect your privacy, time, and server-less performance expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 p-6 rounded-xl transition-all shadow-sm duration-200 hover:shadow-md"
              >
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-black dark:text-white w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
