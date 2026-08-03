import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2D1B11] text-[#F8F2EA]"
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Glow halo */}
        <div className="absolute -inset-10 bg-[#C9A15D]/15 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-8"
        >
          <Logo size="xl" variant="full" className="scale-110" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif italic text-lg md:text-xl text-[#C9A15D] mb-8"
        >
          "Where Every Sip Creates a Memory."
        </motion.p>

        {/* Progress Bar */}
        <div className="w-56 md:w-72 h-1.5 bg-[#3A2418] rounded-full overflow-hidden border border-[#C9A15D]/30 p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A15D] via-[#E6C887] to-[#C9A15D] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="mt-3 text-xs tracking-widest font-sans text-[#F8F2EA]/60 font-medium uppercase">
          Brewing Perfection... {progress}%
        </span>
      </div>
    </motion.div>
  );
};
