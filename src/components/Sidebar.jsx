import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/mayurargade',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mayur-argade-031b71271',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:mayurargade423@gmail.com',
    icon: FaEnvelope,
  },
];

const EASY_CUBIC_BEZIER = [0.16, 1, 0.3, 1];

const Sidebar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide sidebar after scrolling past Hero section (~80% height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: EASY_CUBIC_BEZIER }}
          className="fixed left-6 bottom-0 z-40 hidden md:flex flex-col items-center gap-5 text-white"
        >
          {/* Social Links Dock */}
          <div className="flex flex-col gap-4 p-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/50">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />

                  {/* Tooltip Label on Hover */}
                  <span className="absolute left-14 px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-[11px] font-mono font-medium text-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 whitespace-nowrap shadow-lg">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Vertical Decorator Line */}
          <span className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;