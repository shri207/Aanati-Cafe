import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Phone, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'menu', 'specials', 'gallery', 'reviews', 'visit', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#2D1B11] text-[#F8F2EA] text-xs py-2 px-4 border-b border-[#C9A15D]/20 font-sans hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[#F8F2EA]/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A15D]" />
              F18, Madhura Nagar, Hyderabad
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A15D]" />
              Open Daily: 9:00 AM – 11:00 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#C9A15D] font-semibold">⭐ 5.0 (23 Google Reviews)</span>
            <a href={`tel:${CAFE_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#C9A15D] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C9A15D]" />
              {CAFE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 sm:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2D1B11]/95 backdrop-blur-md shadow-xl border-b border-[#C9A15D]/20 py-2.5 text-[#F8F2EA]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-[#F8F2EA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Logo size="md" variant="full" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[2px] font-semibold transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C9A15D]'
                      : 'text-[#F8F2EA]/80 hover:text-[#C9A15D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A15D]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A15D] text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] text-xs md:text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </button>

            {/* Cart / Order Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C9A15D] to-[#A88242] text-[#2D1B11] font-bold text-xs md:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 bg-[#3A2418] text-[#F8F2EA] rounded-full text-[11px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F8F2EA] hover:text-[#C9A15D] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#2D1B11] border-b border-[#C9A15D]/20 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-serif text-[#F8F2EA] hover:text-[#C9A15D] transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#C9A15D]/20 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenReservation();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#C9A15D] text-[#C9A15D] font-semibold text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Table
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
