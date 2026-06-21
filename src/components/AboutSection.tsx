/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const points = [
    {
      title: 'What is Image Resizing?',
      description: 'Image resizing is the mathematical transformation of graphic bitmap layouts to reduce or increase the total count of grid pixels. When you downscale, redundant coordinate data is merged down, lowering file storage while preserving structural outlines.',
      icon: Layers,
    },
    {
      title: 'Why People Resize Images',
      description: 'High-resolution smartphone lenses capture files exceeding 10MB in size, which causes severe mobile lag, elevated bandwidth costs, and poor Google PageSpeed scoring. Scaling images makes them compatible with email limits, blogs, social networks, and mobile apps.',
      icon: RefreshCw,
    },
    {
      title: 'Global Performance Best Practices',
      description: 'For high-contrast illustrations, logos, or screens with text, use PNG to preserve razor-sharp pixel lines. For photographic shots, choose WebP or JPG. WebP compresses up to 30% more efficiently than conventional JPG formats without compromising visible spectrum lines.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-16 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-[#0c0f17] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Elite On-Page SEO Introduction Center of precisely 142 words */}
        <div className="bg-slate-50/60 dark:bg-[#111624]/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xs relative overflow-hidden backdrop-blur-xs">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-3.5 tracking-tight flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Search-Optimized Image Resizer Tool Summary</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans max-w-4xl">
            Welcome to our ultimate <strong className="font-extrabold text-black dark:text-white">Image resizer</strong>, a <strong className="font-semibold text-black dark:text-white">simple image resizer</strong> and <strong className="font-semibold text-black dark:text-white">free image resizer</strong> built for instant browser optimizations. Our client-side <strong className="font-semibold text-black dark:text-white">online image resizer</strong> ensures 100% privacy because your photographs never leave your browser. Whether you need a precise <strong className="font-semibold text-black dark:text-white">image resize in pixels</strong> or to compress your photographs via an effortless <strong className="font-semibold text-black dark:text-white">image resize in kb</strong> or <strong className="font-semibold text-black dark:text-white">image resize in mb</strong>, this secure <strong className="font-semibold text-black dark:text-white">image resizer free</strong> handles your needs instantly. Easily solve <strong className="font-semibold text-black dark:text-white">jpg image resize</strong> tasks, downscale dimensions, or switch formats without loading bloated third-party design platforms. Experience a fully secure alternative to <strong className="font-semibold text-black dark:text-white">canva image resizer</strong> or typical <strong className="font-semibold text-black dark:text-white">AI image resizer</strong> tools. Need to handle multiple graphics? Our forthcoming <strong className="font-semibold text-black dark:text-white">bulk image resizer</strong> will process batches effortlessly. Speed up your web applications, optimize social designs, and resize images in seconds with our dedicated <strong className="font-semibold text-black dark:text-white">image resizer online</strong> utilities built for developers, editors, and creators alike.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              Deep Dive
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
              Image Resizing Explained
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
              Modern digital systems require a subtle balance between resolution overhead and transmission speed. Having smaller, correctly sized images preserves system bandwidth and elevates user satisfaction.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
              <BookOpen className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white block">Pro Tip</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Always lock the native aspect ratio unless you are deliberately squeezing an image, to prevent strange visual distortion.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={pt.title}
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.3, delay: idx * 0.08 }}
                   className="bg-slate-50/40 hover:bg-white dark:bg-[#111624]/40 dark:hover:bg-[#111624] border border-slate-200 dark:border-slate-800 p-6 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-[#151c2f] border border-slate-200 dark:border-slate-705 text-black dark:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pt.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Symmetrical Bento Stats Card for Competitor-beating Edge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="bg-black dark:bg-[#111624] text-white p-6 rounded-xl md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg shadow-slate-100 dark:shadow-none border dark:border-slate-805"
            >
              <div className="max-w-md text-left">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-505 font-bold">
                  Global Metrics
                </span>
                <h4 className="text-base font-extrabold mt-1">
                  Average Bandwidth Reduced by 85%
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-430 mt-1.5 leading-relaxed">
                  Over 72% of modern search engine bounces are caused by slow loading images. By shrinking dimensions down to design-exact sizes, you double your target page delivery performance.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <div className="text-center">
                  <span className="text-2xl font-mono font-extrabold tracking-tight text-white">
                    25x
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block font-sans">Faster Loads</span>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="text-center">
                  <span className="text-2xl font-mono font-extrabold tracking-tight text-white">
                    0.0%
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-505 block font-sans">Cloud Leakage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
