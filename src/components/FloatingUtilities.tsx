import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const FloatingUtilities: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Aanati Cafe! I'm visiting your website and would like to place an order or check table availability at Madhura Nagar.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Scroll Progress Indicator Line (Top Edge) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C9A15D] via-[#E6C887] to-[#9E7736] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Floating WhatsApp Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors relative group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          <span className="absolute right-14 bg-[#2D1B11] text-[#F8F2EA] border border-[#C9A15D]/40 text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </motion.button>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-[#3A2418] text-[#C9A15D] border border-[#C9A15D]/50 shadow-xl flex items-center justify-center hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
