/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UploadCloud, Sliders, ArrowDownToLine } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Upload Image',
      description: 'Drag and drop your file (.jpg, .png, .webp) directly into the box, or click to choose from your storage.',
      icon: UploadCloud,
    },
    {
      step: '02',
      title: 'Configure Settings',
      description: 'Adjust the target pixels or scale by percentage. Maintain original ratios or lock custom dimensions with ease.',
      icon: Sliders,
    },
    {
      step: '03',
      title: 'Download Instantly',
      description: 'Preview the final scaled image shape, view the estimated bytes saved, and download with high fidelity.',
      icon: ArrowDownToLine,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-[#0c0f17] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            Simple Sequence
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-slate-905 dark:text-white mt-4">
            How It Works
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Resize and compress high-resolution image files in three rapid clicks.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          {/* Connecting Line for Desktops */}
          <div className="hidden md:block absolute top-[44px] left-12 right-12 h-0.5 bg-slate-105 dark:bg-slate-800 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group z-10"
              >
                {/* Step Icon Hexagon/Box */}
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#111624] border-2 border-slate-200 dark:border-slate-800 group-hover:border-black dark:group-hover:border-white flex items-center justify-center transition-all shadow-md duration-200 mb-6">
                  <Icon className="w-6 h-6 text-black dark:text-white" />
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 px-2 py-0.5 rounded-full">
                    Step {item.step}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-905 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
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
