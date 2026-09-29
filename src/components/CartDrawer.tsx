import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalCount,
    subtotal,
    shipping,
    discount,
    total,
    applyPromoCode,
    promoCode
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyPromoCode(promoInput);
    if (!success) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2500);
    } else {
      setPromoInput('');
      setPromoError(false);
    }
  };

  const freeShippingThreshold = 1000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      {/* Click outside to close */}
      <div
        className="flex-1"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer Container */}
      <div className="w-full max-w-md bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between border-l border-[#24140e]/10 animate-slide-left">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#f0ede9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#93461d] text-[24px]">shopping_bag</span>
            <h2 className="font-serif text-[20px] font-bold text-[#1c1c19]">
              Harvest Bag ({totalCount})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Bag"
            className="w-8 h-8 rounded-full hover:bg-[#f6f3ee] text-[#1c1c19] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-4 sm:px-5 py-3 bg-[#f6f3ee] border-b border-[#24140e]/5">
          <div className="flex justify-between text-[12px] text-[#55433b] font-medium mb-1.5">
            {remainingForFreeShipping > 0 ? (
              <span>Add <b>₱{remainingForFreeShipping.toLocaleString()}</b> for Free PH Shipping</span>
            ) : (
              <span className="text-[#44634f] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                You unlocked FREE shipping across the Philippines!
              </span>
            )}
            <span className="font-bold">{freeShippingPercent}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#dbc1b7]/40 overflow-hidden">
            <div
              className="h-full bg-[#44634f] rounded-full transition-all duration-500"
              style={{ width: `${freeShippingPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#705951]">
              <span className="material-symbols-outlined text-[48px] text-[#93461d]/50 mb-3">
                shopping_basket
              </span>
              <p className="font-serif text-[18px] font-semibold text-[#1c1c19]">
                Your bag is empty
              </p>
              <p className="text-[13px] text-[#55433b] mt-1 max-w-xs">
                Explore our single-origin chocolate bars &amp; heirloom tablea to fill it.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-5 px-5 py-2.5 rounded-lg bg-[#93461d] text-white text-[13px] font-semibold cursor-pointer shadow-xs"
              >
                Browse Artisan Collection
              </button>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-xl bg-[#fcf9f4] border border-[#24140e]/5 shadow-xs"
              >
                <img
                  alt={item.product.name}
                  className="w-18 h-18 rounded-lg object-cover bg-[#f0ede9] shrink-0"
                  referrerPolicy="no-referrer"
                  src={item.product.image}
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-[14px] font-semibold text-[#1c1c19] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] text-[#705951]">
                        ₱{item.product.price} each
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#705951] hover:text-[#ba1a1a] transition-colors p-1"
                      title="Remove"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center rounded border border-[#24140e]/15 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#f0ede9] text-[#1c1c19] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="w-7 text-center text-[12px] font-bold text-[#1c1c19]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#f0ede9] text-[#1c1c19] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                    </div>

                    <span className="font-serif text-[14px] font-bold text-[#93461d]">
                      ₱{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#ffffff] border-t border-[#f0ede9] space-y-3">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                value={promoInput}
                onChange={e => setPromoInput(e.target.value)}
                placeholder="Promo Code (Try CAPIZ15)"
                className="flex-1 px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] outline-none focus:ring-1 focus:ring-[#93461d] border border-[#24140e]/10 uppercase"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#f0ede9] hover:bg-[#ebe8e3] text-[#1c1c19] text-[12px] font-bold transition-colors cursor-pointer shrink-0"
              >
                Apply
              </button>
            </form>

            {promoError && (
              <p className="text-[11px] text-[#ba1a1a]">
                Invalid code. Try <b>CAPIZ15</b> for 15% off your harvest order.
              </p>
            )}

            {promoCode && (
              <div className="flex items-center justify-between text-[12px] text-[#44634f] font-semibold bg-[#c8ebd2]/40 px-3 py-1.5 rounded-md">
                <span>Code '{promoCode}' active</span>
                <span>-₱{discount.toLocaleString()}</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 pt-1 text-[13px] text-[#55433b]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#1c1c19]">₱{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>PH Shipping</span>
                <span className="font-medium text-[#1c1c19]">
                  {shipping === 0 ? (
                    <span className="text-[#44634f] font-bold uppercase text-[12px]">FREE</span>
                  ) : (
                    `₱${shipping}`
                  )}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#44634f]">
                  <span>Harvest Discount (15%)</span>
                  <span>-₱{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-[#f0ede9] text-[16px] font-bold text-[#1c1c19]">
                <span className="font-serif">Total</span>
                <span className="font-serif text-[#93461d]">₱{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3.5 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
