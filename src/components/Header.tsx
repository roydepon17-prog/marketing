import React from 'react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenAccount }) => {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[#fcf9f4]/90 backdrop-blur-xl border-b border-[#24140e]/5 shadow-[0_1px_12px_rgba(36,20,14,0.04)]">
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Left Menu Button */}
        <button
          onClick={onOpenMenu}
          aria-label="Navigation Menu"
          className="w-11 h-11 flex items-center justify-center text-[#1c1c19] transition-colors hover:text-[#93461d] rounded-lg active:bg-[#f0ede9]"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        {/* Center Brand Lockup */}
        <div className="flex flex-col items-center justify-center text-center select-none cursor-pointer">
          <span className="font-serif text-[28px] sm:text-[30px] font-semibold tracking-tight text-[#93461d] leading-none">
            O’guia
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#705951] mt-1 font-semibold opacity-90">
            Dad’s Cocoa Farm • Capiz
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Shopping Bag */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="relative w-11 h-11 flex items-center justify-center text-[#1c1c19] transition-colors hover:text-[#93461d] rounded-lg active:bg-[#f0ede9]"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {totalCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 rounded-full bg-[#93461d] text-[#ffffff] text-[10px] font-bold leading-tight flex items-center justify-center shadow-xs">
                {totalCount}
              </span>
            )}
          </button>

          {/* Account Profile Avatar */}
          <button
            onClick={onOpenAccount}
            aria-label="User Account"
            className="w-8 h-8 rounded-full bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] flex items-center justify-center shrink-0 ml-1 transition-transform active:scale-95 shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
