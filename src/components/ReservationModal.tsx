import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '17:00',
    guests: 2,
    occasion: 'Casual Coffee',
    seatingPref: 'Indoor Cozy Seating',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM',
    '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '09:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `AANATI-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback if confetti unavailable
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-[#2D1B11] rounded-3xl overflow-hidden border border-[#C9A15D]/40 shadow-2xl text-[#F8F2EA] my-8"
        >
          {/* Top Header */}
          <div className="p-6 sm:p-8 bg-[#3A2418] border-b border-[#C9A15D]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#C9A15D] text-[#2D1B11]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8F2EA]">
                  Reserve a Table
                </h3>
                <span className="text-xs text-[#C9A15D] font-sans">
                  Aanati Cafe • F18 Madhura Nagar, Hyderabad
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#2D1B11] text-[#F8F2EA]/80 hover:text-white hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#73815D] text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#C9A15D]">
                    Booking Confirmed!
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8F2EA] mt-1">
                    We Look Forward to Welcoming You
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F8F2EA]/80 max-w-md mx-auto mt-2">
                    A confirmation SMS & Email has been sent to <strong className="text-[#C9A15D]">{formData.phone}</strong>.
                  </p>
                </div>

                {/* Ticket Pass */}
                <div className="bg-[#3A2418] p-6 rounded-2xl border border-[#C9A15D]/40 text-left space-y-3 max-w-md mx-auto">
                  <div className="flex justify-between items-center border-b border-[#C9A15D]/20 pb-3">
                    <span className="text-xs text-[#F8F2EA]/60 font-mono">Reference Code:</span>
                    <span className="text-sm font-mono font-bold text-[#C9A15D]">{bookingRef}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#F8F2EA]/60 block">Guest Name:</span>
                      <strong className="text-white">{formData.name}</strong>
                    </div>
                    <div>
                      <span className="text-[#F8F2EA]/60 block">Party Size:</span>
                      <strong className="text-white">{formData.guests} Guests</strong>
                    </div>
                    <div>
                      <span className="text-[#F8F2EA]/60 block">Date & Time:</span>
                      <strong className="text-white">{formData.date} @ {formData.time}</strong>
                    </div>
                    <div>
                      <span className="text-[#F8F2EA]/60 block">Seating:</span>
                      <strong className="text-[#C9A15D]">{formData.seatingPref}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full bg-[#C9A15D] text-[#2D1B11] font-bold text-sm shadow-lg hover:bg-[#E6C887]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>
                </div>

                {/* Email & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" /> Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num} className="bg-[#2D1B11]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Reservation Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot} className="bg-[#2D1B11]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Seating Area</label>
                    <select
                      value={formData.seatingPref}
                      onChange={(e) => setFormData({ ...formData, seatingPref: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    >
                      <option value="Indoor Cozy Seating">Indoor Vintage Seating</option>
                      <option value="Parkside Outdoor Terrace">Parkside Outdoor Terrace</option>
                      <option value="Quiet Work Corner">Quiet Work Corner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Occasion</label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    >
                      <option value="Casual Coffee">Casual Coffee / Hangout</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary / Date">Anniversary / Date Night</option>
                      <option value="Business Meeting">Work & Business Meeting</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Special Requests</label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Need high chair for toddler, birthday candle on dessert..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl border border-[#C9A15D]/30 text-xs font-bold hover:bg-[#3A2418]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#C9A15D] to-[#A88242] text-[#2D1B11] font-bold text-xs shadow-lg hover:scale-105 transition-all"
                  >
                    Confirm Table Reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
