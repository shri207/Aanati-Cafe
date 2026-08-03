import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, Car, Trees, Sparkles, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const VisitUs: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Madhura+Nagar+Hyderabad+Telangana+500038";

  return (
    <section id="visit" className="py-24 bg-[#FBF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Find Our Sanctuary
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A2418]">
            Visit Aanati Cafe
          </h2>
          <p className="mt-4 text-base text-[#2A2A2A]/80 font-sans font-light">
            Conveniently located in Madhura Nagar, Hyderabad, right next to the serene Madhura Nagar Park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Information Cards (Left) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Location Card */}
            <div className="bg-[#2D1B11] text-[#F8F2EA] p-6 rounded-2xl border border-[#C9A15D]/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C9A15D] text-[#2D1B11]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#F8F2EA]">Address</h3>
                  <span className="text-xs text-[#C9A15D] font-semibold">F18, Madhura Nagar</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#F8F2EA]/85 font-sans leading-relaxed">
                F18, Madhura Nagar, Hyderabad, Telangana 500038, India
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#73815D] font-semibold">
                <Trees className="w-4 h-4" />
                <span>Adjacent to Madhura Nagar Park</span>
              </div>
            </div>

            {/* Timings & Service Card */}
            <div className="bg-[#2D1B11] text-[#F8F2EA] p-6 rounded-2xl border border-[#C9A15D]/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C9A15D] text-[#2D1B11]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#F8F2EA]">Opening Hours</h3>
                  <span className="text-xs text-[#73815D] font-semibold">Open Every Day</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#C9A15D]">
                9:00 AM – 11:00 PM
              </p>
              <p className="text-xs text-[#F8F2EA]/75">
                Dine-in • Drive-through • Takeaway • Online Order
              </p>
            </div>

            {/* Phone & Parking Info */}
            <div className="bg-[#2D1B11] text-[#F8F2EA] p-6 rounded-2xl border border-[#C9A15D]/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C9A15D] text-[#2D1B11]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#F8F2EA]">Contact & Parking</h3>
                  <a href={`tel:${CAFE_INFO.phone}`} className="text-xs sm:text-sm text-[#C9A15D] font-bold hover:underline">
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F8F2EA]/80">
                <Car className="w-4 h-4 text-[#C9A15D]" />
                <span>Ample street and parkside vehicle parking available</span>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C9A15D] to-[#A88242] text-[#2D1B11] font-bold text-sm shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded Google Map (Right) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-4 border-[#F8F2EA] shadow-2xl relative min-h-[400px]">
            <iframe
              title="Aanati Cafe Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4957682542713!2d78.43577317516597!3d17.436009883457196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0a5e8e7a7%3A0x8e83b8b1740fae77!2sMadhura%20Nagar%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#2D1B11]/90 backdrop-blur-md p-3 rounded-xl border border-[#C9A15D]/40 text-[#F8F2EA] shadow-lg flex items-center gap-2 text-xs font-serif font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Aanati Cafe • Madhura Nagar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
