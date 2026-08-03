import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ChevronDown, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Parallax & Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
            alt="Aanati Cafe Warm Ambience"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Dark Warm Coffee Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D120B] via-[#2D1B11]/80 to-black/60" />
        <div className="absolute inset-0 artistic-diamond-bg pointer-events-none opacity-40" />
      </div>

      {/* Floating Vertical Emblem Label (Artistic Theme) */}
      <div className="hidden lg:block absolute left-8 bottom-24 z-20 floating-label-vertical tracking-[4px] text-xs font-semibold text-[#F8F2EA]/40">
        ESTABLISHED 2023 • HYDERABAD
      </div>

      {/* Rating Pill Badge (Top Right Floating - Artistic Theme) */}
      <div className="hidden md:flex absolute top-28 right-8 lg:right-16 z-20 bg-white/95 text-[#2D1B11] px-5 py-2.5 rounded-full shadow-2xl items-center gap-3 border border-[#C9A15D]/40 backdrop-blur-md">
        <div className="w-2.5 h-2.5 rounded-full bg-[#73815D] animate-pulse" />
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-[#C9A15D] text-[#C9A15D]" />
          <span>5.0 Google Rating (23 Reviews)</span>
        </div>
      </div>

      {/* Floating Ambient Sparks / Particles Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: '100vh', x: `${i * 18 + 10}%` }}
            animate={{ opacity: [0.2, 0.8, 0.2], y: '-10vh' }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear'
            }}
            className="absolute w-2 h-2 bg-[#C9A15D] rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F8F2EA]">
        
        {/* Tagline Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-accent text-xl sm:text-2xl text-[#C9A15D] italic tracking-wider">
            Where Every Sip Creates a Memory
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#F8F2EA] leading-[1.12] mb-6 drop-shadow-md"
        >
          Experience Hyderabad's <br />
          <span className="gold-gradient-text font-accent font-normal italic">Most Charming</span> Cafe
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-[#F8F2EA]/90 max-w-2xl mx-auto font-sans font-light tracking-wide mb-10 leading-relaxed"
        >
          Gourmet Burgers, Specialty Mojitos, and Hand-Roasted Coffee served in a vintage-inspired sanctuary at Madhura Nagar.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#C9A15D] text-[#2D1B11] font-bold text-xs uppercase tracking-[2px] shadow-xl hover:bg-[#E6C887] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#C9A15D]"
          >
            <Coffee className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Explore Menu
          </a>

          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#3A2418]/90 hover:bg-[#3A2418] text-[#F8F2EA] border border-[#C9A15D]/60 font-semibold text-xs uppercase tracking-[2px] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Order Online
            <ArrowRight className="w-4 h-4 text-[#C9A15D]" />
          </button>
        </motion.div>

        {/* Features Quick Stats / Bento Highlights Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs text-[#F8F2EA]/90 pt-8 border-t border-[#C9A15D]/30"
        >
          <div className="bg-[#3A2418]/60 p-4 rounded-2xl border border-[#C9A15D]/20 backdrop-blur-sm text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A15D] font-bold block mb-1">Ambience</span>
            <span className="font-serif text-base text-white font-semibold">Warm & Cozy</span>
          </div>

          <div className="bg-[#3A2418]/60 p-4 rounded-2xl border border-[#C9A15D]/20 backdrop-blur-sm text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A15D] font-bold block mb-1">Timing</span>
            <span className="font-serif text-base text-white font-semibold">9AM — 11PM</span>
          </div>

          <div className="bg-[#3A2418]/60 p-4 rounded-2xl border border-[#C9A15D]/20 backdrop-blur-sm text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A15D] font-bold block mb-1">Location</span>
            <span className="font-serif text-base text-white font-semibold">Madhura Nagar</span>
          </div>

          <div className="bg-[#3A2418]/60 p-4 rounded-2xl border border-[#C9A15D]/20 backdrop-blur-sm text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A15D] font-bold block mb-1">Fulfillment</span>
            <span className="font-serif text-base text-white font-semibold">Dine-In & Drive-Thru</span>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#C9A15D] animate-bounce hover:text-white transition-colors"
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

