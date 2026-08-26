import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASY_CUBIC_BEZIER = [0.16, 1, 0.3, 1];

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back-to-top button after scrolling 400px down
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-12 px-6 border-t border-white/10 bg-black text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Left: Branding & Copyright */}
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-semibold text-white">Mayur Argade</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-500 font-mono text-xs">Mumbai, IN</span>
        </div>

        {/* Center: Built With Note */}
        <p className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
          Built with <span className="text-blue-400">React</span>,{' '}
          <span className="text-blue-400">Tailwind</span> &{' '}
          <span className="text-blue-400">Framer Motion</span>
        </p>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/mayurargade"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/mayur-argade-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.4, ease: EASY_CUBIC_BEZIER }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;