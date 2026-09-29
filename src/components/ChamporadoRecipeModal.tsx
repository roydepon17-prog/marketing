import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

interface ChamporadoRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChamporadoRecipeModal: React.FC<ChamporadoRecipeModalProps> = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!isOpen) return null;

  const tableaProduct = PRODUCTS.find(p => p.id === 'pure-tablea') || PRODUCTS[5];

  const handleAddTablea = () => {
    addToCart(tableaProduct, 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#24140e]/10 my-6 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48 w-full bg-[#24140e] overflow-hidden">
          <img
            alt="Champorado bowl and tablea disks"
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam-qV5E6BPSXPt8TAvl3v629M-EX9wgdJlu0tGA_FY0psjMZsN18KzvY07gQ4bCbGWgkVIZVYdNqDDwVakJwC033buV65e8E77izVe4fkIfwySryhvq1_HSiXwlSyolpIUS5dONoho0adhwNdSgNGCdG_oTHfynwjwGIkaOT9Aq-WjgL7G6MdYU6_RSwAEze2YhoSnTQFPNibMq05SYvUO0W7dK8ST8YYStLgbeiyf7Fii5V3qhLmmfBJ1bOzWYF-JoL8GiLGdT4pXWc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24140e] via-transparent to-black/30" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[11px] uppercase tracking-widest text-[#ffb694] font-bold">
              Heritage Recipe
            </span>
            <h2 className="font-serif text-[22px] font-bold text-[#fcf9f4]">
              Healthy Rolled Oats Champorado
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4 text-[#1c1c19] text-[14px] no-scrollbar">
          <p className="text-[#55433b] leading-relaxed text-[13px]">
            A guilt-free, heart-healthy Filipino comfort breakfast. Our 100% pure unsweetened Capiz tablea delivers pure cacao flavonoids without added sugar.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-[#f6f3ee] text-center border border-[#24140e]/5 text-[12px]">
            <div>
              <span className="text-[#705951] block text-[11px]">Prep Time</span>
              <span className="font-bold text-[#1c1c19]">5 mins</span>
            </div>
            <div>
              <span className="text-[#705951] block text-[11px]">Cook Time</span>
              <span className="font-bold text-[#1c1c19]">15 mins</span>
            </div>
            <div>
              <span className="text-[#705951] block text-[11px]">Servings</span>
              <span className="font-bold text-[#1c1c19]">2–3 bowls</span>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-serif text-[16px] font-bold text-[#1c1c19] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#93461d] text-[18px]">grocery</span>
              Ingredients
            </h3>
            <ul className="space-y-1.5 text-[13px] text-[#55433b]">
              <li className="flex items-start gap-2">
                <span className="text-[#93461d] font-bold">•</span>
                <span><b>2 discs</b> O'guia Pure Cacao Tablea</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#93461d] font-bold">•</span>
                <span><b>1 cup</b> Whole rolled oats (high fiber)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#93461d] font-bold">•</span>
                <span><b>3 cups</b> Water (or coconut water for natural sweetness)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#93461d] font-bold">•</span>
                <span><b>2 tbsp</b> Muscovado sugar, honey, or monkfruit (to taste)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#93461d] font-bold">•</span>
                <span>A swirl of evaporated milk or coconut milk to serve</span>
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-serif text-[16px] font-bold text-[#1c1c19] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#93461d] text-[18px]">skillet</span>
              Preparation Steps
            </h3>
            <ol className="space-y-2 text-[13px] text-[#55433b] list-decimal list-inside">
              <li className="leading-snug">
                <b>Dissolve Tablea:</b> In a small pot, bring 1 cup of water to a gentle simmer. Drop 2 O'guia tablea discs and whisk briskly (preferably with a traditional batirol or frother) until rich, velvety, and completely melted.
              </li>
              <li className="leading-snug">
                <b>Cook the Oats:</b> Add remaining 2 cups of water and stir in the rolled oats. Cook over medium-low heat for 8–10 minutes, stirring occasionally to prevent sticking.
              </li>
              <li className="leading-snug">
                <b>Sweeten &amp; Infuse:</b> Add muscovado sugar or honey. Let simmer for 2 more minutes until thick and glossy.
              </li>
              <li className="leading-snug">
                <b>Serve Warm:</b> Ladle into bowls and drizzle with coconut milk or evaporated milk. Serve with crunchy toasted cacao nibs or crispy danggit!
              </li>
            </ol>
          </div>

          {/* Tablea Product Callout */}
          <div className="p-3.5 rounded-xl bg-[#fcdcd1]/40 border border-[#93461d]/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                alt="Tablea"
                className="w-12 h-12 rounded-lg object-cover bg-white"
                referrerPolicy="no-referrer"
                src={tableaProduct.image}
              />
              <div>
                <span className="font-serif text-[14px] font-bold text-[#1c1c19] block">
                  Pure Tablea Disk (150g)
                </span>
                <span className="text-[12px] font-bold text-[#93461d]">₱190</span>
              </div>
            </div>

            <button
              onClick={handleAddTablea}
              className={`px-3 py-2 rounded-lg text-[12px] font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer ${
                added
                  ? 'bg-[#44634f] text-white'
                  : 'bg-[#93461d] hover:bg-[#7b3714] text-white active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {added ? 'check' : 'add_shopping_cart'}
              </span>
              <span>{added ? 'Added!' : 'Add to Bag'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
