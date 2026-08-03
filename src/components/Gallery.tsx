import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ambience' | 'coffee' | 'food'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[#FBF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Visual Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A2418]">
            Moments at Aanati Cafe
          </h2>
          <p className="mt-4 text-base text-[#2A2A2A]/80 font-sans font-light">
            A glance inside our cozy parkside space, artisanal brews, and freshly prepared food.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'ambience', label: 'Cozy Ambience' },
            { key: 'coffee', label: 'Coffee & Drinks' },
            { key: 'food', label: 'Gourmet Food' }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#3A2418] text-[#C9A15D] shadow-md scale-105 font-bold'
                  : 'bg-[#F8F2EA] text-[#3A2418]/80 hover:bg-[#3A2418]/10 border border-[#C9A15D]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-[#2D1B11] border border-[#C9A15D]/20 h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content on Hover */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-[#F8F2EA]">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A15D]">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#C9A15D] transition-colors">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-[#F8F2EA]/75 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                  
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#2D1B11] rounded-3xl overflow-hidden border border-[#C9A15D]/40 shadow-2xl text-[#F8F2EA]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-[#C9A15D] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#2D1B11] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#C9A15D] uppercase tracking-wider">
                    Aanati Cafe • {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#F8F2EA]">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.subtitle && (
                    <p className="text-sm text-[#F8F2EA]/80 mt-1">{selectedImage.subtitle}</p>
                  )}
                </div>

                <a
                  href="#visit"
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2.5 rounded-full bg-[#C9A15D] text-[#2D1B11] font-bold text-xs hover:bg-[#E6C887] transition-all shrink-0"
                >
                  Visit Us in Person
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
