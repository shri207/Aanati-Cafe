import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, CheckCircle2, ShoppingBag } from 'lucide-react';
import { SIGNATURE_SPECIALS, MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';

interface SpecialsProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Specials: React.FC<SpecialsProps> = ({ onAddToCart }) => {
  return (
    <section id="specials" className="py-24 bg-[#FBF8F4] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Barista & Chef Creations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A2418]">
            Signature House Specials
          </h2>
          <p className="mt-4 text-base text-[#2A2A2A]/80 font-sans font-light">
            Our most celebrated creations that keep guests returning to Madhura Nagar again and again.
          </p>
        </div>

        {/* Showcase Cards List */}
        <div className="space-y-16">
          {SIGNATURE_SPECIALS.map((special, index) => {
            const menuItem = MENU_ITEMS.find((m) => m.id === special.id || m.name === special.name) || {
              id: special.id,
              name: special.name,
              description: special.description,
              price: special.price,
              category: 'burgers',
              image: special.image,
              isVeg: false
            };

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#2D1B11] text-[#F8F2EA] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A15D]/30 grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Image Section */}
                <div className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={special.image}
                    alt={special.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B11] via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-[#C9A15D] text-[#2D1B11] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-[#2D1B11]" />
                      {special.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-serif italic text-[#C9A15D] tracking-wider uppercase">
                      {special.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8F2EA] mt-1">
                      {special.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#F8F2EA]/85 font-sans leading-relaxed font-light">
                    {special.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {special.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#F8F2EA]/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A15D] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Order Action */}
                  <div className="pt-6 border-t border-[#C9A15D]/20 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#F8F2EA]/60 uppercase tracking-widest block font-sans">Price</span>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C9A15D]">
                        ₹{special.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(menuItem as MenuItem)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A15D] to-[#A88242] text-[#2D1B11] font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
