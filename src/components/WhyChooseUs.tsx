import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, Coffee, Heart, Car, Zap, DollarSign, Smile, Flower2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-[#C9A15D]" />,
      title: 'Fresh Ingredients',
      desc: 'Farm-fresh vegetables, organic dairy, and premium grade chicken daily.'
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#73815D]" />,
      title: 'Perfect Ambience',
      desc: 'Warm aesthetic lighting, natural greenery, and cozy indoor & parkside seating.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#C9A15D]" />,
      title: 'Affordable Luxury',
      desc: 'High-end café craftsmanship priced accessibility for every guest (₹200–400).'
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#73815D]" />,
      title: 'Premium Coffee',
      desc: 'Single-origin Arabica beans roasted locally with precision temperature control.'
    },
    {
      icon: <Smile className="w-6 h-6 text-[#C9A15D]" />,
      title: 'Friendly Service',
      desc: 'Warm hospitality where every guest is treated like family.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#73815D]" />,
      title: 'Women-Owned Business',
      desc: 'An independent, community-driven boutique cafe founded with passion.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C9A15D]" />,
      title: 'Fast & Fresh Preparation',
      desc: 'Made-to-order dishes served piping hot without long wait times.'
    },
    {
      icon: <Car className="w-6 h-6 text-[#73815D]" />,
      title: 'Drive-through Available',
      desc: 'Convenient takeaway and drive-through service for guests on the go.'
    }
  ];

  return (
    <section className="py-24 bg-[#3A2418] text-[#F8F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            The Aanati Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F2EA]">
            Why Guests Love Aanati Cafe
          </h2>
          <p className="mt-4 text-base text-[#F8F2EA]/80 font-sans font-light">
            Every detail—from our single-origin roasts to our parkside setting—is designed to elevate your day.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#2D1B11]/90 rounded-2xl p-6 border border-[#C9A15D]/20 hover:border-[#C9A15D]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F8F2EA] mb-2 group-hover:text-[#C9A15D] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F2EA]/75 font-sans leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
