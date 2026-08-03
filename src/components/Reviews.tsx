import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, Quote, CheckCircle, ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5, itemRecommended: '' });
  const [userReviews, setUserReviews] = useState(REVIEWS);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % userReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + userReviews.length) % userReviews.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const added = {
      id: `r-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      verified: true,
      itemRecommended: newReview.itemRecommended || 'Signature Coffee'
    };

    setUserReviews([added, ...userReviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setShowAddReviewModal(false);
      setNewReview({ name: '', comment: '', rating: 5, itemRecommended: '' });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#2D1B11] text-[#F8F2EA] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C9A15D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Overall Google Rating Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-[#C9A15D]/20">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" />
              Verified Guest Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F2EA]">
              Loved by Hyderabad
            </h2>
          </div>

          {/* Floating Google Rating Card */}
          <div className="bg-[#3A2418] border border-[#C9A15D]/40 p-4 rounded-2xl flex items-center gap-5 shadow-xl">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif font-bold text-[#C9A15D]">5.0</span>
              <div className="flex text-[#C9A15D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A15D]" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#C9A15D]/20" />
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.28v3.15C3.25 21.3 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.28C.46 8.2.01 10.04.01 12c0 1.96.45 3.8 1.27 5.42l4-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.28 6.58l4 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                Google Reviews
              </div>
              <p className="text-xs text-[#F8F2EA]/70 mt-0.5">Based on 23 authentic guest ratings</p>
              <button
                onClick={() => setShowAddReviewModal(true)}
                className="mt-2 text-xs font-bold text-[#C9A15D] hover:underline flex items-center gap-1"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="relative max-w-4xl mx-auto my-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#3A2418]/90 rounded-3xl p-8 sm:p-12 border border-[#C9A15D]/30 shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#C9A15D]/15" />

              <div className="flex items-center gap-1 text-[#C9A15D] mb-4">
                {[...Array(Math.floor(userReviews[currentIndex].rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A15D]" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#F8F2EA] leading-relaxed mb-8">
                "{userReviews[currentIndex].comment}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#C9A15D]/20">
                <div className="flex items-center gap-4">
                  <img
                    src={userReviews[currentIndex].avatar}
                    alt={userReviews[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A15D]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#F8F2EA] flex items-center gap-1.5">
                      {userReviews[currentIndex].name}
                      {userReviews[currentIndex].verified && (
                        <CheckCircle className="w-4 h-4 text-[#73815D]" title="Verified Buyer" />
                      )}
                    </h4>
                    {userReviews[currentIndex].itemRecommended && (
                      <span className="text-xs text-[#C9A15D] font-sans">
                        Loved: {userReviews[currentIndex].itemRecommended}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-xs text-[#F8F2EA]/50 font-sans">
                  {userReviews[currentIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-[#3A2418] border border-[#C9A15D]/30 text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-[#3A2418] border border-[#C9A15D]/30 text-[#C9A15D] hover:bg-[#C9A15D] hover:text-[#2D1B11] transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {userReviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#3A2418]/60 p-6 rounded-2xl border border-[#C9A15D]/20 hover:border-[#C9A15D]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#C9A15D] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A15D]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#F8F2EA]/90 font-sans leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#C9A15D]/15">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#C9A15D]"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs">
                  <span className="font-serif font-bold text-white block">{rev.name}</span>
                  <span className="text-[#C9A15D] text-[10px]">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {showAddReviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#2D1B11] border border-[#C9A15D]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-[#F8F2EA] shadow-2xl relative"
            >
              <h3 className="text-2xl font-serif font-bold text-[#F8F2EA] mb-2">
                Share Your Aanati Experience
              </h3>
              <p className="text-xs text-[#F8F2EA]/70 mb-6">
                Your feedback helps us continuously brew perfection in Madhura Nagar.
              </p>

              {reviewSubmitted ? (
                <div className="py-8 text-center text-[#73815D] space-y-2">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                  <h4 className="text-lg font-serif font-bold">Thank You!</h4>
                  <p className="text-xs text-[#F8F2EA]/80">Your review has been successfully submitted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Ananya Rao"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Favorite Item (Optional)</label>
                    <input
                      type="text"
                      value={newReview.itemRecommended}
                      onChange={(e) => setNewReview({ ...newReview, itemRecommended: e.target.value })}
                      placeholder="e.g. Classic Chicken Burger / Cold Coffee"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating ? 'fill-[#C9A15D] text-[#C9A15D]' : 'text-[#F8F2EA]/30'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] mb-1">Review Comment</label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Tell us about the coffee, food, or ambience..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddReviewModal(false)}
                      className="flex-1 py-3 rounded-xl border border-[#C9A15D]/30 text-xs font-bold hover:bg-[#3A2418]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#C9A15D] text-[#2D1B11] text-xs font-bold hover:bg-[#E6C887]"
                    >
                      Post Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
