/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Is this image resizer completely free?',
      answer: 'Yes! This image resizer is 100% free with no registration, premium limits, or watermark stamps. You can scale and convert as many photos as you want without paying a single cent.',
    },
    {
      id: 'faq-2',
      question: 'Are my uploaded images saved or sent anywhere?',
      answer: 'Absolutely not. All processing occurs locally inside your web browser’s sandboxed environment via HTML5 Canvas. We do not maintain any servers to receive or archive files. Your personal privacy is physically guaranteed.',
    },
    {
      id: 'faq-3',
      question: 'Which image file formats are supported?',
      answer: 'Our tool accepts PNG, JPG, JPEG, and WebP, and allows converting between them. When resizing, you can convert your output to any of these three, which handles compression and alpha transparency perfectly.',
    },
    {
      id: 'faq-4',
      question: 'Will my image quality decrease during resizing?',
      answer: 'When images are downscaled, pixels are interpolated. We use advanced high-quality tri-linear canvas smoothing to guarantee clear output. For JPEG or WebP files, you can adjust the Quality slider from 1 to 100 to strike the perfect balance between high-fidelity resolution and minimized kilobyte size.',
    },
    {
      id: 'faq-5',
      question: 'Is this tool safe to use on confidential materials?',
      answer: 'Yes. Because your files never traverse the network or touch third-party storage, it is completely secure. It is even safe to use completely offline once the page has loaded, making it ideal for processing restricted corporate designs or sensitive identity items.',
    },
    {
      id: 'faq-6',
      question: 'Can I resize images on mobile phones?',
      answer: 'Absolutely! Our application is designed with mobile-first parameters, utilizing lightweight touch controllers. Whether you drag inside your mobile web browser on Android or upload via iOS Photo Roll, processing remains light and snappy.',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 border-t border-slate-100 dark:border-slate-905 bg-[#fafafa] dark:bg-[#090b11] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            Frequently Asked
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-slate-905 dark:text-white mt-4">
            Questions & Answers
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Clear responses to common queries about privacy, scaling algorithms, and operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-medium text-slate-905 dark:text-white hover:bg-slate-50/70 dark:hover:bg-[#151c2d] focus:outline-none transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-slate-350 dark:text-slate-500 shrink-0" />
                    <span className="text-sm font-extrabold">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1.5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 leading-relaxed bg-white/50 dark:bg-[#111624]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
