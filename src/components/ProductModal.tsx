import React, { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#24140e]/10 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1c1c19] flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar">
          {/* Product Hero Image */}
          <div className="relative aspect-4/3 w-full bg-[#f6f3ee]">
            <img
              alt={product.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src={product.image}
            />
            <span className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${product.badgeClass}`}>
              {product.badge}
            </span>
          </div>

          <div className="p-5 sm:p-6 flex flex-col gap-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
                  Single-Estate Cacao • Maayon
                </span>
                <div className="flex items-center gap-1 text-[12px] font-bold text-[#1c1c19]">
                  <span className="material-symbols-outlined text-[#93461d] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-[#705951] font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#1c1c19] leading-tight">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-serif text-[22px] font-bold text-[#93461d]">
                  ₱{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-[13px] line-through text-[#705951]">
                    ₱{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.usdPrice && (
                  <span className="text-[12px] text-[#705951] font-mono">
                    (${product.usdPrice.toFixed(2)} USD)
                  </span>
                )}
                <span className="text-[12px] text-[#705951] ml-auto">
                  Net Wt. {product.weight}
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#55433b] leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Notes */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#705951] font-bold block mb-2">
                Tasting Notes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.flavorNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#f6f3ee] text-[#1c1c19] text-[12px] font-medium border border-[#24140e]/5"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="p-3.5 rounded-xl bg-[#f6f3ee] border border-[#24140e]/5">
              <span className="text-[11px] uppercase tracking-wider text-[#705951] font-bold block mb-1">
                Pure Ingredients
              </span>
              <p className="text-[12px] text-[#55433b]">
                {product.ingredients.join(', ')}. No palm oil, artificial flavors, or synthetic emulsifiers.
              </p>
            </div>

            {/* Quantity and Add to Bag */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-[#24140e]/15 bg-[#f6f3ee] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#1c1c19] hover:bg-white rounded-md active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="w-10 text-center font-bold text-[14px] text-[#1c1c19]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#1c1c19] hover:bg-white rounded-md active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 h-11 rounded-lg text-[14px] font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer ${
                  justAdded
                    ? 'bg-[#44634f] text-white'
                    : 'bg-[#93461d] hover:bg-[#7b3714] text-white'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {justAdded ? 'check' : 'add_shopping_cart'}
                </span>
                <span>
                  {justAdded
                    ? 'Added to Bag'
                    : `Add to Bag • ₱${(product.price * quantity).toLocaleString()}`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
