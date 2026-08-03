import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Trees, ShieldCheck, Users, Coffee, Smile, Award } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Coffee className="w-5 h-5 text-[#C9A15D]" />,
      title: 'Artisanal Coffee',
      desc: '100% single-origin Arabica beans roasted to perfection.'
    },
    {
      icon: <Trees className="w-5 h-5 text-[#73815D]" />,
      title: 'Beside Park Greenery',
      desc: 'Located right next to the serene Madhura Nagar Park.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#C9A15D]" />,
      title: 'Women-Owned Cafe',
      desc: 'Proudly independent, women-led boutique hospitality.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#73815D]" />,
      title: 'LGBTQ+ Friendly',
      desc: 'A safe, welcoming, and inclusive community space.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#C9A15D]" />,
      title: 'Family-Friendly',
      desc: 'Cozy seating for families, work sessions, and dates.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#73815D]" />,
      title: 'Affordable Luxury',
      desc: 'Gourmet cafe quality at accessible price points (₹200–400).'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FBF8F4] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A15D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A2418]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F2EA]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000"
                  alt="Aanati Cafe Seating & Vibe"
                  className="w-full h-[450px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B11]/70 via-transparent to-transparent" />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 h-48 sm:h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F8F2EA] hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600"
                  alt="Aanati Special Cold Coffee"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 sm:-left-6 bg-[#2D1B11] text-[#F8F2EA] p-4 rounded-2xl shadow-xl border border-[#C9A15D]/40 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A15D] text-[#2D1B11] flex items-center justify-center font-bold text-xl">
                  5.0
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#C9A15D] uppercase tracking-wider">Top Rated</div>
                  <div className="text-sm font-serif font-bold">23 Verified Reviews</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" />
                Our Story & Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A2418] leading-tight">
                A Sanctuary of Warmth, Flavor & Memories
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#2A2A2A]/85 font-sans leading-relaxed font-light">
              Founded in the vibrant neighborhood of <strong className="font-semibold text-[#3A2418]">Madhura Nagar, Hyderabad</strong>, Aanati Cafe was born from a passion for handcrafted coffee, honest gourmet food, and mindful hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#2A2A2A]/80 font-sans leading-relaxed">
              Nestled right next to Madhura Nagar Park, our boutique café blends vintage rustic elegance with contemporary luxury. Whether you are stepping in for your morning single-origin espresso, gathering with friends over crispy chicken burgers and cold coffees, or grabbing a quick drive-through drink, we welcome you into a space designed for warmth, connection, and joy.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F2EA] border border-[#C9A15D]/20 shadow-xs hover:border-[#C9A15D]/50 transition-colors">
                  <div className="p-2 rounded-lg bg-[#3A2418]/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#3A2418]">{item.title}</h4>
                    <p className="text-xs text-[#2A2A2A]/75 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#73815D]/10 text-[#73815D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3A2418]">
                  Open Daily • 9 AM to 11 PM
                </span>
              </div>
              <a
                href="#visit"
                className="text-xs sm:text-sm font-bold text-[#C9A15D] hover:text-[#3A2418] underline underline-offset-4 transition-colors"
              >
                Find Us in Madhura Nagar →
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
