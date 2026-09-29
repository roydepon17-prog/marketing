import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  applyPromoCode: (code: string) => boolean;
  promoCode: string;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Prepopulate with 2 items as shown in screenshots (badge count = 2)
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 'dark-70',
      product: {
        id: 'dark-70',
        name: '70% Dark Chocolate',
        shortName: '70% Dark Cacao',
        price: 170,
        usdPrice: 5.50,
        rating: 4.9,
        reviewsCount: 84,
        badge: 'Best Seller',
        badgeClass: 'bg-[#93461d] text-[#ffffff]',
        category: 'dark',
        description: 'Single-origin dark cacao bar with subtle floral finish and deep roasted molasses undertone.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz4Od1YA_GySoWAP4rsHFi8vf9S3eCXG4jmThr4Q7OgF7t-4DbaHLskWts7zD45vA42j_u--5VZdPrP0AsiKxSoajXMmq1hfxJz7bu8cKswy1OZirJoBmwkbEx1EHTzSMlXR-mkx0Gz5fFlOfQOrHO4y9Mh8lKZVb7RHnllM6E27G8hu7TCj7bsC0-IH-_BQ-YLG7oV0QiFh-6uhc7LcmdO_GCeyy3VoeAUuoAs5UmhS_v4sWXBjgvc5VZwAli1MbpqfR0JyB4JltjohY',
        imageAlt: 'O\'guia 70% Dark Chocolate bar',
        cacaoPercentage: '70% Cacao',
        flavorNotes: ['Fruity Molasses', 'Wild Honey', 'Warm Oak'],
        weight: '50g',
        ingredients: ['Fermented Capiz Cacao Beans', 'Unrefined Cane Sugar', 'Cacao Butter']
      },
      quantity: 1
    },
    {
      id: 'pure-tablea',
      product: {
        id: 'pure-tablea',
        name: 'Pure Tablea Disk',
        shortName: 'Traditional Round Discs',
        price: 190,
        usdPrice: 4.80,
        rating: 4.9,
        reviewsCount: 93,
        badge: 'Heirloom',
        badgeClass: 'bg-[#fcdcd1] text-[#281811]',
        category: 'tablea',
        description: '100% pure unsweetened cacao rounds roasted in heritage iron pans for rich sikwate & rolled oats champorado.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKeACNttp4CGLyy8e2EZp7l3PRws0LagxJM3Q7kWexo2WXUgi38IypYn34D03SO64DTWA-len6XUIzmSyGpoKAp59VDbiaL2NLIBzvsC3YROq61X6VzmCn_mzt_IN8C1hRhSWIL51Cboi_d_XXtPSeMsxAPmdZOOP91SVwLA69TJs1kwqJqh4JD7r7MKqcBY8PGx13OFT3ifJf4D0aOnS8id7XZ0FKMvy_79NZummDY_-2cCiSkhqjzlGv81hJNgN3orE',
        imageAlt: 'O\'guia Heirloom pure cacao tablea disk roll wrapper',
        cacaoPercentage: '100% Pure Cacao',
        flavorNotes: ['Smoky Iron Roast', 'Earthy Dark Cacao', 'Rich Sikwate Froth'],
        weight: '150g (10 tablets)',
        ingredients: ['100% Unsweetened Fermented Capiz Cacao Mass']
      },
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: product.id, product, quantity }];
    });
    showToast(`${product.name} added to bag`);
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'CAPIZ15' || clean === 'DADSFARM') {
      setPromoCode(clean);
      setDiscountPercent(0.15);
      showToast('15% Harvest Discount Applied!');
      return true;
    }
    return false;
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 1000 || items.length === 0 ? 0 : 85;
  const discount = Math.round(subtotal * discountPercent);
  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        shipping,
        discount,
        total,
        applyPromoCode,
        promoCode,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
