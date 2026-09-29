import React from 'react';

export type NavTab = 'home' | 'shop' | 'heritage' | 'account';

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 bg-[#fcf9f4]/95 backdrop-blur-xl border-t border-[#24140e]/5 shadow-[0_-4px_20px_rgba(36,20,14,0.05)] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-18 sm:h-20 px-4">
        {/* Home */}
        <button
          onClick={() => onSelectTab('home')}
          aria-current={currentTab === 'home' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
            currentTab === 'home'
              ? 'text-[#93461d] font-semibold'
              : 'text-[#55433b] hover:text-[#93461d]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="text-[11px] uppercase tracking-wider font-medium">Home</span>
        </button>

        {/* Shop */}
        <button
          onClick={() => onSelectTab('shop')}
          aria-current={currentTab === 'shop' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
            currentTab === 'shop'
              ? 'text-[#93461d] font-semibold'
              : 'text-[#55433b] hover:text-[#93461d]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">storefront</span>
          <span className="text-[11px] uppercase tracking-wider font-medium">Shop</span>
        </button>

        {/* Heritage */}
        <button
          onClick={() => onSelectTab('heritage')}
          aria-current={currentTab === 'heritage' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
            currentTab === 'heritage'
              ? 'text-[#93461d] font-semibold'
              : 'text-[#55433b] hover:text-[#93461d]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">potted_plant</span>
          <span className="text-[11px] uppercase tracking-wider font-medium">Heritage</span>
        </button>

        {/* Account */}
        <button
          onClick={() => onSelectTab('account')}
          aria-current={currentTab === 'account' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-colors ${
            currentTab === 'account'
              ? 'text-[#93461d] font-semibold'
              : 'text-[#55433b] hover:text-[#93461d]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
          <span className="text-[11px] uppercase tracking-wider font-medium">Account</span>
        </button>
      </div>
    </nav>
  );
};
