import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, Mail, MapPin, Send, Calendar, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { CAFE_INFO } from '../data/cafeData';

interface ContactProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenReservation, onOpenOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Table Reservation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'Table Reservation', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#2D1B11] text-[#F8F2EA] relative overflow-hidden">
      {/* Background Ornate Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A15D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F2EA]">
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-base text-[#F8F2EA]/80 font-sans font-light">
            Have a question, feedback, or hosting a private event at Madhura Nagar? Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Actions & Brand Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#3A2418] p-8 rounded-3xl border border-[#C9A15D]/30 shadow-2xl flex flex-col items-center text-center">
              <Logo size="lg" variant="full" className="mb-4" />
              <p className="text-sm font-serif italic text-[#C9A15D] mb-6">
                "Where Every Sip Creates a Memory."
              </p>

              {/* Quick Action Buttons */}
              <div className="w-full space-y-3 pt-4 border-t border-[#C9A15D]/20">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-3.5 rounded-xl bg-[#C9A15D] text-[#2D1B11] font-bold text-sm shadow-md hover:bg-[#E6C887] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Table
                </button>

                <button
                  onClick={onOpenOrder}
                  className="w-full py-3.5 rounded-xl bg-[#2D1B11] text-[#F8F2EA] border border-[#C9A15D]/40 font-bold text-sm hover:border-[#C9A15D] transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C9A15D]" />
                  Order Online
                </button>

                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="w-full py-3.5 rounded-xl bg-[#73815D] text-white font-bold text-sm shadow-md hover:bg-[#5f6c4c] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now ({CAFE_INFO.phone})
                </a>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 text-xs sm:text-sm text-[#F8F2EA]/85">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#3A2418]/60 border border-[#C9A15D]/20">
                <MapPin className="w-5 h-5 text-[#C9A15D] shrink-0" />
                <span>F18, Madhura Nagar, Hyderabad, Telangana 500038</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#3A2418]/60 border border-[#C9A15D]/20">
                <Mail className="w-5 h-5 text-[#C9A15D] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#3A2418] p-8 sm:p-10 rounded-3xl border border-[#C9A15D]/30 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#73815D] mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-[#F8F2EA]/80">
                  Thank you for reaching out to Aanati Cafe. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sen"
                      className="w-full px-4 py-3 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Event Catering">Private Event / Party</option>
                      <option value="Drive-through Inquiry">Drive-through Inquiry</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C9A15D] to-[#A88242] text-[#2D1B11] font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
