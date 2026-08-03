import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Specials } from './components/Specials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { VisitUs } from './components/VisitUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingUtilities } from './components/FloatingUtilities';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Cart helper maps for quick lookup count
  const cartItemIds = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((c) => {
      map[c.item.id] = c.quantity;
    });
    return map;
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F4] text-[#2A2A2A] selection:bg-[#C9A15D] selection:text-[#2D1B11]">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Main Navigation */}
          <Navbar
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenReservation={() => setIsReservationOpen(true)}
          />

          {/* Main Sections */}
          <main>
            <Hero
              onOpenMenu={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenOrder={() => setIsCartOpen(true)}
            />

            <About />

            <Menu
              onAddToCart={handleAddToCart}
              cartItemIds={cartItemIds}
            />

            <Specials
              onAddToCart={handleAddToCart}
            />

            <WhyChooseUs />

            <Gallery />

            <Reviews />

            <VisitUs />

            <Contact
              onOpenReservation={() => setIsReservationOpen(true)}
              onOpenOrder={() => setIsCartOpen(true)}
            />
          </main>

          {/* Luxury Footer */}
          <Footer />

          {/* Table Reservation Modal */}
          <ReservationModal
            isOpen={isReservationOpen}
            onClose={() => setIsReservationOpen(false)}
          />

          {/* Order Slide-over Drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onClearCart={handleClearCart}
          />

          {/* Scroll progress, WhatsApp floating trigger & scroll-to-top */}
          <FloatingUtilities />
        </>
      )}
    </div>
  );
}
