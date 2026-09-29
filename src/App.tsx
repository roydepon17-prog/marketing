import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { BottomNav, NavTab } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { ShopScreen } from './components/ShopScreen';
import { HeritageScreen } from './components/HeritageScreen';
import { AccountScreen } from './components/AccountScreen';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ChamporadoRecipeModal } from './components/ChamporadoRecipeModal';
import { FarmVisitModal } from './components/FarmVisitModal';
import { ContactModal } from './components/ContactModal';
import { SideMenuDrawer } from './components/SideMenuDrawer';
import { Product } from './data/products';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<NavTab>('shop');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { toastMessage, setIsCartOpen } = useCart();

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] flex flex-col font-sans relative selection:bg-[#ffb694] selection:text-[#351000]">
      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenAccount={() => handleSelectTab('account')}
      />

      {/* Main Screen Container with padding for fixed top header and bottom nav */}
      <main className="flex-1 w-full pt-20 pb-24">
        {currentTab === 'home' && (
          <HomeScreen
            onNavigateToShop={() => handleSelectTab('shop')}
            onNavigateToHeritage={() => handleSelectTab('heritage')}
            onSelectProduct={setSelectedProduct}
            onOpenRecipe={() => setIsRecipeOpen(true)}
          />
        )}

        {currentTab === 'shop' && (
          <ShopScreen
            onSelectProduct={setSelectedProduct}
          />
        )}

        {currentTab === 'heritage' && (
          <HeritageScreen
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentTab === 'account' && (
          <AccountScreen
            onNavigateToShop={() => handleSelectTab('shop')}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Floating Add to Bag Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-auto transition-all animate-bounce-short">
          <div className="bg-[#31302d] text-[#f3f0eb] px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between border border-white/10">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[#ffdbcc] text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-[13px] font-medium">{toastMessage}</span>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-[12px] font-bold text-[#ffb694] uppercase tracking-wider hover:underline cursor-pointer ml-2"
            >
              View Bag
            </button>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation */}
      <BottomNav currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Champorado Recipe Modal */}
      <ChamporadoRecipeModal
        isOpen={isRecipeOpen}
        onClose={() => setIsRecipeOpen(false)}
      />

      {/* Farm Visit Booking Modal */}
      <FarmVisitModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Contact Farm Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Side Navigation Menu Drawer */}
      <SideMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={handleSelectTab}
        onOpenRecipe={() => setIsRecipeOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
