/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sliders, HelpCircle, Heart, FolderHeart, Info, ArrowUpRight, Sun, Moon, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ImageResizerCore from './components/ImageResizerCore';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import RelatedTools from './components/RelatedTools';
import AboutSection from './components/AboutSection';
import AdSensePlaceholders from './components/AdSensePlaceholders';

// Import our standalone MPA-supporting components directly
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('real-resizer-theme');
      if (saved) return saved === 'dark';
      return true; // Set dark mode as default
    }
    return true;
  });

  const [currentPage, setCurrentPage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam) {
        if (['privacy', 'terms', 'about', 'contact'].includes(pageParam)) {
          return pageParam;
        }
        return 'notfound';
      }
    }
    return 'home';
  });

  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (typeof window !== 'undefined') {
        setShowScrollTop(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('real-resizer-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('real-resizer-theme', 'light');
    }
  }, [darkMode]);

  // Handle URL navigation synchronization
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam) {
        if (['privacy', 'terms', 'about', 'contact'].includes(pageParam)) {
          setCurrentPage(pageParam);
        } else {
          setCurrentPage('notfound');
        }
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update meta tags dynamically to satisfy search engines (perfect on-page seo)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      let title = "Image Resizer – Free Simple Online Image Resizer Tool";
      let desc = "Use this free, simple online image resizer to resize images in pixels, resize in kb or mb. Quickly compress and complete jpg image resize with our fast, privacy-first alternative to the Canva image resizer.";
      
      if (currentPage === 'privacy') {
        title = "Privacy Policy – Secure Client-Side Image Resizer";
        desc = "Read our Privacy Policy. All image resizing is processed entirely offline on your computer via HTML5 canvas buffers. No files are uploaded.";
      } else if (currentPage === 'terms') {
        title = "Terms & Conditions – Simple Image Resizer Free";
        desc = "Review our terms of use. Our image resizer is free for commercial and personal projects with zero limitations or paywalls.";
      } else if (currentPage === 'about') {
        title = "About Us – Online Web Tools Development Team";
        desc = "Learn about the developers behind the fastest online image resizer. Focused on privacy, speed and offline utility.";
      } else if (currentPage === 'contact') {
        title = "Contact Us – Image Resizer Support and Inquiries";
        desc = "Get in touch with our product team for bug report telemetry, feature suggestions, or business license queries about our client-side compressor.";
      } else if (currentPage === 'notfound') {
        title = "404 Page Not Found – Image Resizer";
        desc = "Oops! The page you're looking for doesn't exist. Please return to the Image Resizer home page to resize JPEGs, PNGs, and WebPs.";
      }
      
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', desc);
      }
    }
  }, [currentPage]);

  const navigateToPage = (pageName: string) => {
    setCurrentPage(pageName);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (pageName === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', pageName);
      }
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Simple scroll function
  const scrollToResizer = () => {
    if (currentPage !== 'home') {
      navigateToPage('home');
      setTimeout(() => {
        const el = document.getElementById('resizer-tool');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      const el = document.getElementById('resizer-tool');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0c0f17] font-sans text-slate-905 dark:text-slate-100 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black relative transition-colors duration-200">
      
      {/* Dynamic Grid Background across body */}
      <div 
        className="absolute inset-x-0 top-0 h-[800px] opacity-[0.035] dark:opacity-[0.045] pointer-events-none z-0" 
        style={{ 
          backgroundImage: darkMode ? 'radial-gradient(#fff 1.2px, transparent 1.2px)' : 'radial-gradient(#000 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* 1. Header Navigation Bar (Vercel Style) */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0c0f17]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo with Vercel-style clean geometric delta block */}
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center space-x-3 text-left focus:outline-hidden cursor-pointer"
          >
            <img 
              src="/favicon.jpg" 
              alt="Real Image Resizer Logo" 
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-lg object-cover border border-slate-100 dark:border-slate-850 shadow-xs" 
            />
            <span className="font-bold tracking-tight text-black dark:text-white font-sans text-sm md:text-base">
              Real Image Resizer
            </span>
          </button>

          {/* Symmetrical desktop navigation links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <a 
              href="?page=home" 
              onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} 
              className={`hover:text-black dark:hover:text-white transition-colors ${currentPage === 'home' ? 'text-black dark:text-white font-extrabold' : ''}`}
            >
              Resizer Home
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => { 
                if (currentPage !== 'home') {
                  e.preventDefault();
                  navigateToPage('home');
                  setTimeout(() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }
              }}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a 
              href="?page=about" 
              onClick={(e) => { e.preventDefault(); navigateToPage('about'); }} 
              className={`hover:text-black dark:hover:text-white transition-colors ${currentPage === 'about' ? 'text-black dark:text-white font-semibold' : ''}`}
            >
              About Us
            </a>
            <a 
              href="?page=privacy" 
              onClick={(e) => { e.preventDefault(); navigateToPage('privacy'); }} 
              className={`hover:text-black dark:hover:text-white transition-colors ${currentPage === 'privacy' ? 'text-black dark:text-white font-semibold' : ''}`}
            >
              Privacy Policy
            </a>
            <a 
              href="?page=terms" 
              onClick={(e) => { e.preventDefault(); navigateToPage('terms'); }} 
              className={`hover:text-black dark:hover:text-white transition-colors ${currentPage === 'terms' ? 'text-black dark:text-white font-semibold' : ''}`}
            >
              Terms
            </a>
            <a 
              href="?page=contact" 
              onClick={(e) => { e.preventDefault(); navigateToPage('contact'); }} 
              className={`hover:text-black dark:hover:text-white transition-colors ${currentPage === 'contact' ? 'text-black dark:text-white font-semibold' : ''}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Symmetrical Action button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer mr-1"
              aria-label="Toggle Theme"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={scrollToResizer}
              id="header-cta"
              className="text-xs font-semibold px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              Start Resizing
            </button>
          </div>

        </div>
      </header>

      {/* 2. Banner Notification (Sleek minimalist, zero slop) */}
      <div className="bg-black dark:bg-[#07090f] text-white text-[11px] font-mono tracking-wide py-2.5 text-center px-4 flex items-center justify-center space-x-2 border-b border-slate-900 dark:border-slate-850 relative z-10">
        <span className="bg-emerald-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase mr-1">
          Sandbox
        </span>
        <span>100% browser local compilation. Your files never leave your device.</span>
      </div>

      <main className="pb-12 relative z-10">
        {currentPage === 'home' ? (
          <>
            {/* 3. Hero & Main App Area */}
            <section className="relative pt-12 md:pt-16 pb-8 overflow-hidden">
              <div className="max-w-6xl mx-auto px-6 text-center">
                
                {/* Visual Header Tag */}
                <div className="inline-flex items-center space-x-1.5 bg-slate-100 dark:bg-[#151c2f] px-3 py-1 rounded-full text-[11px] font-mono text-slate-600 dark:text-slate-300 mb-6 border border-slate-200 dark:border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Offline Ready Client-Side Compressor</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-slate-905 dark:text-white max-w-3xl mx-auto leading-tight mb-4">
                  Resize image files <span className="text-slate-400 dark:text-slate-500">instantly</span> in your browser.
                </h1>

                {/* Short subtitle */}
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
                  No server uploads. No accounts. Professional-grade optimization with local canvas processing for 100% physical privacy.
                </p>

                {/* Image resizer core widget */}
                <div id="resizer-tool" className="relative scroll-mt-24">
                  <ImageResizerCore />
                </div>

              </div>
            </section>

            {/* 4. Google AdSense Leaderboard Placement Section */}
            <AdSensePlaceholders type="banner" />

            {/* 5. How It Works Section */}
            <HowItWorks />

            {/* 6. Benefits Section */}
            <BenefitsSection />

            {/* 7. AdSense In-Feed Responsive Native Unit */}
            <AdSensePlaceholders type="inline" />

            {/* 8. Detailed Educational Guide */}
            <AboutSection />

            {/* 9. FAQ Accordion section */}
            <FAQSection />

            {/* 10. Related Tools Suite Section */}
            <RelatedTools />

            {/* Future Blog Content Placeholder Area */}
            <section id="blog-content" className="py-12 border-t border-slate-100 dark:border-slate-900 bg-[#fafafa] dark:bg-[#090b11]">
              <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="space-y-1.5 text-left">
                    <span className="text-[10px] font-mono text-slate-405 dark:text-slate-500 uppercase tracking-widest font-bold">
                      Future Blog Expansion
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Real Image Resizer Engineering Blog
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                      We are currently writing structured deep-dives covering image downsampling filters, lossless WebP encoding factors, and canvas rendering optimizations. Stay tuned.
                    </p>
                  </div>
                  <button
                    className="shrink-0 flex items-center space-x-1 border border-slate-200 dark:border-slate-800 hover:border-slate-400 bg-white dark:bg-[#182033] px-3.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white rounded font-medium transition-colors"
                    disabled
                  >
                    <span>Browse Posts</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="min-h-[60vh] flex flex-col justify-center py-6">
            {currentPage === 'privacy' && <PrivacyPolicy onBackToHome={() => navigateToPage('home')} />}
            {currentPage === 'terms' && <TermsAndConditions onBackToHome={() => navigateToPage('home')} />}
            {currentPage === 'about' && <AboutUs onBackToHome={() => navigateToPage('home')} />}
            {currentPage === 'contact' && <ContactUs onBackToHome={() => navigateToPage('home')} />}
            {currentPage === 'notfound' && <NotFoundPage onBackToHome={() => navigateToPage('home')} />}
          </div>
        )}

      </main>

      {/* 11. Footer Content with strict physical compliance */}
      <footer className="border-t border-slate-200 dark:border-slate-805 bg-white dark:bg-[#07090f] py-12 text-slate-500 dark:text-slate-400 text-xs text-center relative z-10 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <svg className="w-5.2 h-4.2" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" className="fill-black dark:fill-white"/>
            </svg>
            <span className="font-bold text-black dark:text-white font-sans">Real Image Resizer</span>
          </div>

          <p className="text-[11px] text-slate-450 dark:text-slate-400 font-sans max-w-sm leading-relaxed md:text-left">
            Disclaimer: Images are processed entirely locally on your computer via HTML5 canvas buffers. No files are ever saved on any hosting servers. Your data is 100% private.
          </p>

          <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
            <span>Made with safety</span>
            <Heart className="w-3 h-3 text-slate-900 dark:text-white fill-slate-900 dark:fill-white" />
            <span>in browser sandboxes.</span>
          </div>

        </div>
        <div className="max-w-6xl mx-auto px-6 border-t border-slate-100 dark:border-slate-850 mt-6 pt-6 text-[10px] text-slate-400 dark:text-slate-500 flex flex-wrap gap-4 justify-between">
          <span>&copy; {new Date().getFullYear()} Real Image Resizer. All rights reserved.</span>
          <div className="flex space-x-4">
            <a 
              href="?page=privacy" 
              onClick={(e) => { e.preventDefault(); navigateToPage('privacy'); }}
              className={`hover:underline hover:text-black dark:hover:text-white transition-colors ${currentPage === 'privacy' ? 'font-bold text-black dark:text-white' : ''}`}
            >
              Privacy Policy
            </a>
            <a 
              href="?page=terms" 
              onClick={(e) => { e.preventDefault(); navigateToPage('terms'); }}
              className={`hover:underline hover:text-black dark:hover:text-white transition-colors ${currentPage === 'terms' ? 'font-bold text-black dark:text-white' : ''}`}
            >
              Terms & Conditions
            </a>
            <a 
              href="?page=about" 
              onClick={(e) => { e.preventDefault(); navigateToPage('about'); }}
              className={`hover:underline hover:text-black dark:hover:text-white transition-colors ${currentPage === 'about' ? 'font-bold text-black dark:text-white' : ''}`}
            >
              About Us
            </a>
            <a 
              href="?page=contact" 
              onClick={(e) => { e.preventDefault(); navigateToPage('contact'); }}
              className={`hover:underline hover:text-black dark:hover:text-white transition-colors ${currentPage === 'contact' ? 'font-bold text-black dark:text-white' : ''}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      {/* Elegant, Seamless Spring-Motion Back-to-Top Tool */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3 h-12 w-12 rounded-full bg-slate-900 border border-slate-800 dark:bg-white text-white dark:text-black shadow-xl flex items-center justify-center hover:bg-black dark:hover:bg-slate-100 cursor-pointer"
            title="Scroll Smoothly Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
