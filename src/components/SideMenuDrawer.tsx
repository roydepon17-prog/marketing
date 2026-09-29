import React from 'react';
import { NavTab } from './BottomNav';

interface SideMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
  onOpenRecipe: () => void;
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const SideMenuDrawer: React.FC<SideMenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenRecipe,
  onOpenBooking,
  onOpenContact
}) => {
  if (!isOpen) return null;

  const handleNav = (tab: NavTab) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs">
      {/* Side Menu Content */}
      <div
        className="w-full max-w-xs bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-r border-[#24140e]/10 animate-slide-right"
        onClick={e => e.stopPropagation()}
      >
        <div>
          {/* Brand header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#f0ede9]">
            <div>
              <span className="font-serif text-[24px] font-bold text-[#93461d] block leading-none">
                O’guia
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#705951] font-semibold">
                Dad’s Cocoa Farm • Capiz
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#f6f3ee] text-[#1c1c19] flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Primary Nav Links */}
          <nav className="py-4 space-y-1">
            <button
              onClick={() => handleNav('home')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-[15px] font-medium text-[#1c1c19] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">home</span>
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('shop')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-[15px] font-medium text-[#1c1c19] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">storefront</span>
              <span>Artisan Shop</span>
            </button>

            <button
              onClick={() => handleNav('heritage')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-[15px] font-medium text-[#1c1c19] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">potted_plant</span>
              <span>Heritage &amp; Farm Story</span>
            </button>

            <button
              onClick={() => handleNav('account')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-[15px] font-medium text-[#1c1c19] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">account_circle</span>
              <span>My Account &amp; Rewards</span>
            </button>
          </nav>

          {/* Special Quick Actions */}
          <div className="pt-4 border-t border-[#f0ede9] space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#705951] px-3 block">
              Experiences
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenRecipe();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-[14px] text-[#55433b] hover:bg-[#f6f3ee] hover:text-[#93461d] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">skillet</span>
              <span>Champorado Recipe</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-[14px] text-[#55433b] hover:bg-[#f6f3ee] hover:text-[#93461d] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Book a Farm Tour</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-[14px] text-[#55433b] hover:bg-[#f6f3ee] hover:text-[#93461d] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Contact Dad’s Farm</span>
            </button>
          </div>
        </div>

        {/* Estate Footer Info */}
        <div className="pt-4 border-t border-[#f0ede9] text-[12px] text-[#705951] space-y-2">
          <div className="flex items-center gap-1.5 text-[#93461d] font-semibold">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Single-Origin • Maayon, Capiz</span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#55433b]">
            Handcrafted with love from bean to bar on Dad's Farm.
          </p>
          <div className="text-[10px] text-[#88736a] pt-1">
            © 2026 O'guia Farm &amp; Chocolaterie
          </div>
        </div>
      </div>

      {/* Backdrop tap to close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
