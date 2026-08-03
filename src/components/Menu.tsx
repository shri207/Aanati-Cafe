import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Plus, Check, Star, Filter } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem, CategoryType } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Record<string, number>;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const categories: { key: CategoryType; label: string; icon: string }[] = [
    { key: 'all', label: 'All Delights', icon: '✨' },
    { key: 'coffee', label: 'Artisanal Coffee', icon: '☕' },
    { key: 'cold-coffee', label: 'Cold Coffee', icon: '🧋' },
    { key: 'mojitos', label: 'Special Mojitos', icon: '🍹' },
    { key: 'burgers', label: 'Gourmet Burgers', icon: '🍔' },
    { key: 'wraps', label: 'Tasty Wraps', icon: '🌯' },
    { key: 'sandwiches', label: 'Club Sandwiches', icon: '🥪' },
    { key: 'nuggets', label: 'Chicken Nuggets', icon: '🍗' },
    { key: 'fries', label: 'Crispy Fries', icon: '🍟' },
    { key: 'desserts', label: 'Decadent Desserts', icon: '🍰' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags?.some((t) => t.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-24 bg-[#2D1B11] text-[#F8F2EA] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9A15D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#3A2418]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9A15D] uppercase font-sans flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Culinary Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8F2EA]">
            Our Signature Menu
          </h2>
          <p className="mt-4 text-base text-[#F8F2EA]/80 font-sans font-light">
            Handcrafted with organic local ingredients, artisanal single-origin coffee beans, and authentic recipes.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#3A2418]/60 p-4 rounded-2xl border border-[#C9A15D]/30 backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A15D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, mojitos, cold coffee..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#2D1B11] border border-[#C9A15D]/30 text-sm text-[#F8F2EA] placeholder-[#F8F2EA]/50 focus:outline-none focus:border-[#C9A15D]"
            />
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-[#C9A15D] font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                dietaryFilter === 'all'
                  ? 'bg-[#C9A15D] text-[#2D1B11]'
                  : 'bg-[#2D1B11] text-[#F8F2EA]/80 hover:text-white border border-[#C9A15D]/20'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                dietaryFilter === 'veg'
                  ? 'bg-[#73815D] text-white'
                  : 'bg-[#2D1B11] text-[#F8F2EA]/80 hover:text-white border border-[#C9A15D]/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" /> Veg Only
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-800 text-white'
                  : 'bg-[#2D1B11] text-[#F8F2EA]/80 hover:text-white border border-[#C9A15D]/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" /> Non-Veg
            </button>
          </div>
        </div>

        {/* Category Tabs Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                selectedCategory === cat.key
                  ? 'bg-[#C9A15D] text-[#2D1B11] border-[#C9A15D] shadow-lg font-bold scale-105'
                  : 'bg-[#3A2418]/50 text-[#F8F2EA]/80 border-[#C9A15D]/20 hover:border-[#C9A15D]/50 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery + dietaryFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => {
              const qtyInCart = cartItemIds[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="group bg-[#3A2418]/80 rounded-2xl overflow-hidden border border-[#C9A15D]/25 hover:border-[#C9A15D]/70 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
                >
                  {/* Card Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A2418] via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {/* Chef Recommended */}
                      {item.isChefRecommended ? (
                        <span className="px-2.5 py-1 rounded-full bg-[#C9A15D] text-[#2D1B11] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Star className="w-3 h-3 fill-[#2D1B11]" /> Chef's Choice
                        </span>
                      ) : (
                        <span />
                      )}

                      {/* Veg / Non-Veg Indicator */}
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center border bg-black/60 backdrop-blur-xs ${
                          item.isVeg ? 'border-green-500' : 'border-red-500'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#2D1B11]/90 backdrop-blur-md border border-[#C9A15D]/50 text-[#C9A15D] font-serif font-bold text-base">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-serif font-bold text-[#F8F2EA] group-hover:text-[#C9A15D] transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#F8F2EA]/75 font-sans leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags & Action Button */}
                    <div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#2D1B11] text-[#C9A15D] font-medium border border-[#C9A15D]/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => onAddToCart(item)}
                        className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 ${
                          qtyInCart > 0
                            ? 'bg-[#73815D] text-white hover:bg-[#5c684a]'
                            : 'bg-[#C9A15D] text-[#2D1B11] hover:bg-[#E6C887]'
                        }`}
                      >
                        {qtyInCart > 0 ? (
                          <>
                            <Check className="w-4 h-4" /> Added ({qtyInCart})
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#3A2418]/40 rounded-3xl border border-[#C9A15D]/20">
            <p className="text-lg text-[#F8F2EA]/80 font-serif">No menu items found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#C9A15D] text-[#2D1B11] font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
