import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, MessageCircle, MapPin, Car, Utensils, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, MenuItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart
}) => {
  const [serviceMode, setServiceMode] = useState<'delivery' | 'takeaway' | 'drive-through'>('takeaway');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: 'F18, Madhura Nagar, Hyderabad',
    notes: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const gstTax = Math.round(subtotal * 0.05);
  const deliveryFee = serviceMode === 'delivery' ? 30 : 0;
  const grandTotal = subtotal + gstTax + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const id = `AAN-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(id);
    setOrderPlaced(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    const itemsText = cartItems
      .map((c) => `• ${c.quantity}x ${c.item.name} (₹${c.item.price * c.quantity})`)
      .join('%0A');

    const message = `Hello Aanati Cafe! I would like to place an order:%0A%0A*Order Mode:* ${serviceMode.toUpperCase()}%0A*Customer:* ${customerInfo.name || 'Guest'} (${customerInfo.phone || 'N/A'})%0A%0A*Items:*%0A${itemsText}%0A%0A*Subtotal:* ₹${subtotal}%0A*Tax (GST):* ₹${gstTax}%0A*Grand Total:* ₹${grandTotal}%0A%0A*Notes:* ${customerInfo.notes || 'None'}`;

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleDone = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Slide-over Drawer Panel */}
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#2D1B11] text-[#F8F2EA] border-l border-[#C9A15D]/30 shadow-2xl flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-6 bg-[#3A2418] border-b border-[#C9A15D]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#C9A15D] text-[#2D1B11]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#F8F2EA]">Your Order</h3>
                  <span className="text-xs text-[#C9A15D]">Aanati Cafe • Madhura Nagar</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#2D1B11] text-[#F8F2EA]/80 hover:text-white"
                aria-label="Close Order Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {orderPlaced ? (
                /* Order Receipt Confirmation Screen */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#73815D] text-white flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#C9A15D] uppercase tracking-wider">
                      Order Placed Successfully!
                    </span>
                    <h4 className="text-2xl font-serif font-bold text-white mt-1">
                      Kitchen is Preparing Your Food
                    </h4>
                    <p className="text-xs text-[#F8F2EA]/80 mt-1">
                      Order ID: <strong className="text-[#C9A15D]">{orderId}</strong>
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="bg-[#3A2418] p-4 rounded-2xl border border-[#C9A15D]/30 text-left space-y-2 text-xs">
                    <div className="flex justify-between font-semibold border-b border-[#C9A15D]/20 pb-2">
                      <span>Service Mode:</span>
                      <span className="text-[#C9A15D] uppercase font-bold">{serviceMode}</span>
                    </div>
                    <div className="space-y-1 py-1">
                      {cartItems.map((c) => (
                        <div key={c.item.id} className="flex justify-between text-[#F8F2EA]/80">
                          <span>{c.quantity}x {c.item.name}</span>
                          <span>₹{c.item.price * c.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-[#C9A15D]/20 flex justify-between font-bold text-sm text-[#C9A15D]">
                      <span>Total Paid:</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleDone}
                    className="w-full py-3.5 rounded-xl bg-[#C9A15D] text-[#2D1B11] font-bold text-sm shadow-lg hover:bg-[#E6C887]"
                  >
                    Back to Cafe
                  </button>
                </div>
              ) : cartItems.length === 0 ? (
                /* Empty Cart Screen */
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#3A2418] text-[#C9A15D] flex items-center justify-center mx-auto border border-[#C9A15D]/30">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white">Your Order is Empty</h4>
                  <p className="text-xs text-[#F8F2EA]/75 max-w-xs mx-auto">
                    Explore our signature coffee, burgers, wraps, and mojitos to add your favorite delights!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-6 py-2.5 rounded-full bg-[#C9A15D] text-[#2D1B11] font-bold text-xs"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Service Mode Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A15D] uppercase tracking-wider mb-2">
                      Fulfillment Option
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setServiceMode('takeaway')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 border ${
                          serviceMode === 'takeaway'
                            ? 'bg-[#C9A15D] text-[#2D1B11] border-[#C9A15D]'
                            : 'bg-[#3A2418] text-[#F8F2EA]/80 border-[#C9A15D]/20'
                        }`}
                      >
                        <Utensils className="w-4 h-4" />
                        Takeaway
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceMode('drive-through')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 border ${
                          serviceMode === 'drive-through'
                            ? 'bg-[#C9A15D] text-[#2D1B11] border-[#C9A15D]'
                            : 'bg-[#3A2418] text-[#F8F2EA]/80 border-[#C9A15D]/20'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        Drive-thru
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceMode('delivery')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 border ${
                          serviceMode === 'delivery'
                            ? 'bg-[#C9A15D] text-[#2D1B11] border-[#C9A15D]'
                            : 'bg-[#3A2418] text-[#F8F2EA]/80 border-[#C9A15D]/20'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        Delivery
                      </button>
                    </div>
                  </div>

                  {/* Cart Items List */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-[#C9A15D] uppercase tracking-wider">
                      Selected Items ({cartItems.length})
                    </label>
                    {cartItems.map((c) => (
                      <div
                        key={c.item.id}
                        className="bg-[#3A2418]/80 p-3.5 rounded-xl border border-[#C9A15D]/20 flex items-center justify-between gap-3"
                      >
                        <img
                          src={c.item.image}
                          alt={c.item.name}
                          className="w-14 h-14 rounded-lg object-cover shrink-0 border border-[#C9A15D]/30"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-serif font-bold text-white truncate">
                            {c.item.name}
                          </h5>
                          <span className="text-xs text-[#C9A15D] font-semibold">
                            ₹{c.item.price} x {c.quantity} = ₹{c.item.price * c.quantity}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-[#2D1B11] px-2 py-1 rounded-lg border border-[#C9A15D]/30">
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, -1)}
                            className="p-1 hover:text-[#C9A15D]"
                            aria-label="Decrease"
                          >
                            {c.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-red-400" /> : <Minus className="w-3.5 h-3.5" />}
                          </button>
                          <span className="text-xs font-bold px-1.5">{c.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(c.item.id, 1)}
                            className="p-1 hover:text-[#C9A15D]"
                            aria-label="Increase"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Information Form */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-semibold text-[#C9A15D] uppercase tracking-wider">
                      Customer Details
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-xs text-white focus:outline-none focus:border-[#C9A15D]"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-xs text-white focus:outline-none focus:border-[#C9A15D]"
                    />
                    {serviceMode === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Delivery Address in Hyderabad *"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-xs text-white focus:outline-none focus:border-[#C9A15D]"
                      />
                    )}
                    <textarea
                      rows={2}
                      placeholder="Special instructions (e.g. less sugar, extra dip)..."
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#3A2418] border border-[#C9A15D]/30 text-xs text-white focus:outline-none focus:border-[#C9A15D]"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & Checkout Button */}
            {!orderPlaced && cartItems.length > 0 && (
              <div className="p-6 bg-[#3A2418] border-t border-[#C9A15D]/20 space-y-4">
                <div className="space-y-1.5 text-xs text-[#F8F2EA]/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span>₹{gstTax}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fulfillment ({serviceMode})</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="pt-2 border-t border-[#C9A15D]/20 flex justify-between text-base font-serif font-bold text-[#C9A15D]">
                    <span>Grand Total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="py-3 px-3 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-md hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Order
                  </button>

                  <button
                    onClick={handlePlaceOrder}
                    className="py-3 px-3 rounded-xl bg-[#C9A15D] text-[#2D1B11] font-bold text-xs shadow-md hover:bg-[#E6C887] transition-colors flex items-center justify-center gap-1.5"
                  >
                    Direct Order
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
