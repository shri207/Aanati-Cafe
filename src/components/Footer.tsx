import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Heart, ArrowUp, Star } from 'lucide-react';
import { Logo } from './Logo';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Madhura+Nagar+Hyderabad+Telangana+500038";

  return (
    <footer className="bg-[#1D120B] text-[#F8F2EA] border-t border-[#C9A15D]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C9A15D]/15">
          
          {/* Brand & Emblem (Col 1 - 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" variant="full" />
            <p className="text-xs sm:text-sm text-[#F8F2EA]/75 font-sans leading-relaxed">
              Experience Hyderabad's most charming boutique café in Madhura Nagar. Crafting artisanal Arabica coffee, gourmet chicken burgers, signature club sandwiches, fresh mint mojitos, and cozy parkside memories.
            </p>
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A2418] border border-[#C9A15D]/30 text-xs">
              <span className="text-[#C9A15D] font-bold">⭐ 5.0 Rating</span>
              <span className="text-[#F8F2EA]/60">• 23 Verified Reviews</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D1B11] border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D1B11] border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D1B11] border border-[#C9A15D]/30 flex items-center justify-center text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5 - 7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-[#C9A15D] uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8F2EA]/80 font-sans">
              <li><a href="#hero" className="hover:text-[#C9A15D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C9A15D] transition-colors">Our Story & Philosophy</a></li>
              <li><a href="#menu" className="hover:text-[#C9A15D] transition-colors">Signature Menu</a></li>
              <li><a href="#specials" className="hover:text-[#C9A15D] transition-colors">Barista & Chef Specials</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A15D] transition-colors">Visual Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C9A15D] transition-colors">Guest Reviews</a></li>
              <li><a href="#visit" className="hover:text-[#C9A15D] transition-colors">Visit Us & Location</a></li>
              <li><a href="#contact" className="hover:text-[#C9A15D] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Business Hours & Services (Col 8 - 9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-serif font-bold text-[#C9A15D] uppercase tracking-widest">
              Timings & Services
            </h4>
            <div className="space-y-2 text-xs text-[#F8F2EA]/80">
              <div className="flex items-center gap-2 text-[#C9A15D] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Open Daily</span>
              </div>
              <p className="font-bold text-white">9:00 AM – 11:00 PM</p>
              <div className="pt-3 space-y-1 text-xs text-[#F8F2EA]/70">
                <p>✓ Dine-in Seating</p>
                <p>✓ Drive-through</p>
                <p>✓ Online Pickup</p>
                <p>✓ Parkside Terrace</p>
              </div>
            </div>
          </div>

          {/* Location & Contact Info (Col 10 - 12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-[#C9A15D] uppercase tracking-widest">
              Address & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F8F2EA]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A15D] shrink-0 mt-0.5" />
                <span>F18, Madhura Nagar, Hyderabad, Telangana 500038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A15D] shrink-0" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-[#C9A15D]">{CAFE_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A15D] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F2EA]/60 gap-4">
          <p>© 2026 Aanati Cafe. All rights reserved.</p>
          
          <div className="flex items-center gap-1 text-[#F8F2EA]/70">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 inline" />
            <span>for Aanati Cafe, Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
