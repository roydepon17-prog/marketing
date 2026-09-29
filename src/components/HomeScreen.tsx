import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

interface HomeScreenProps {
  onNavigateToShop: () => void;
  onNavigateToHeritage: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenRecipe: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToShop,
  onNavigateToHeritage,
  onSelectProduct,
  onOpenRecipe
}) => {
  const { addToCart } = useCart();
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // 4 items for featured confectionery section on home screen
  const homeProducts = PRODUCTS.slice(0, 4);

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedItemIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="flex flex-col w-full pb-12">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#ebe8e3]">
        <div className="relative w-full h-[470px] sm:h-[520px]">
          <img
            alt="Lush cacao grove at Dad's Farm in Maayon Capiz"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl1LdGxl6YtrWg04ySC9UKIh2aYfNH6Q_M43a_4SjnBq2DkqLghYC1_QMv52uskie608qOYx2u5ef94IMbdm81rj24iQdyT9L8DHtgPim9Q7868wTx1naofUIo-hhlmoV5vod6gHHAaP5WHY_4gQVm962RP4sKAVX6i2H2puHe3TQwOB4GM_sQCIhHo1v2VyHO0_rKz1zD3KXtBmhD4svem6blSG-UjI3NoycXH2EzvqiDC3OVQfTLj3iyMajDqnBrnSuB92I8DktjMpw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24140e] via-[#24140e]/65 to-black/25"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 pb-8 text-[#ffffff] max-w-xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#44634f]/90 backdrop-blur-md mb-3 shadow-xs">
              <span className="material-symbols-outlined text-[14px] text-[#c8ebd2]">eco</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#f6fff5]">
                Single-Origin • Maayon, Capiz
              </span>
            </div>

            <h1 className="font-serif text-[32px] sm:text-[40px] font-bold tracking-tight mb-2 leading-tight drop-shadow-sm text-[#fcf9f4]">
              From Soil to Soul: Handcrafted Capiz Cacao
            </h1>

            <p className="text-[14px] sm:text-[15px] text-[#e5e2dd] max-w-sm mb-6 leading-relaxed">
              Tree-to-bar artisan chocolate and heirloom tablea nurtured with love on Dad’s Farm.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateToShop}
                className="flex-1 py-3 px-4 rounded bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] text-[14px] font-semibold text-center shadow-md active:scale-[0.98] transition-transform cursor-pointer"
                type="button"
              >
                Explore Collection
              </button>

              <button
                onClick={onNavigateToHeritage}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-white/20 backdrop-blur-md text-[#fcf9f4] hover:bg-white/30 text-[14px] font-medium active:scale-[0.98] transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] text-[#ffb694]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_circle
                </span>
                <span>Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Micro-Origin Harvest Highlights */}
      <section className="w-full py-6 bg-[#fcf9f4] max-w-4xl mx-auto">
        <div className="px-4 sm:px-6 flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
              Heirloom Terroir
            </span>
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#1c1c19]">
              Harvest Distinctions
            </h2>
          </div>
          <div className="flex items-center gap-1 text-[#705951]">
            <span className="text-[12px] font-medium">Swipe</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </div>

        {/* Horizontal Badges */}
        <div className="flex gap-2 px-4 sm:px-6 overflow-x-auto no-scrollbar pb-3">
          <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcdcd1] text-[#775f57] text-[12px] font-semibold tracking-wide uppercase">
            <span className="material-symbols-outlined text-[16px]">park</span>
            <span>100% Tree-to-Bar</span>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44634f]/15 text-[#44634f] text-[12px] font-semibold tracking-wide uppercase">
            <span className="material-symbols-outlined text-[16px]">science</span>
            <span>Small Batch Ferment</span>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcc] text-[#783108] text-[12px] font-semibold tracking-wide uppercase">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            <span>Good for the Heart</span>
          </div>
        </div>

        {/* Terroir Micro-Banner */}
        <div className="px-4 sm:px-6 pt-2">
          <div
            onClick={onNavigateToHeritage}
            className="relative w-full rounded-xl overflow-hidden bg-[#f6f3ee] border border-[#24140e]/5 shadow-xs p-4 flex gap-4 items-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <img
              alt="Fresh harvested cacao pods in vibrant greens, yellows, and oranges"
              className="w-20 h-20 rounded-lg object-cover shrink-0"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXsv7fy7xVwMcow8sfBq-JcECTO_aqMlnJpONt05aQB0o5kXtmZg6f6rtx0MhPAoOEa0sOgf-M26OMKGicihP3oydKbfP2eBZalCzruv-dbEc6Japse5B7Gj1dul2Yh-Cz3QDpaoMK_7WqcEEyU4aN-7jfO0AbdQNtc1FZoYpRP0uPl5WTtO3q8aoaOM7VCiN_aB6MTmHMEVQkcyMhyFARSmVYuaYntQ9r52aIa--OZCymf-8EOxtbLReo7OP3HZ4KDc"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[11px] text-[#93461d] uppercase font-bold tracking-wider">
                Criollo &amp; Trinitario
              </span>
              <h3 className="font-serif text-[17px] sm:text-[18px] text-[#1c1c19] font-semibold truncate">
                Sun-Ripened Pods
              </h3>
              <p className="text-[13px] text-[#55433b] line-clamp-2 mt-0.5 leading-relaxed">
                Hand-plucked at peak sucrose balance in the volcanic hills of Maayon.
              </p>
            </div>
            <span className="material-symbols-outlined text-[#705951] text-[20px] shrink-0">
              chevron_right
            </span>
          </div>
        </div>
      </section>

      {/* 3. Featured Artisan Bars */}
      <section className="w-full py-8 bg-[#f6f3ee] border-y border-[#24140e]/5" id="collection">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#93461d]"></span>
              <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
                The Confectionery
              </span>
            </div>
            <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#1c1c19]">
              Artisan Chocolate Bars
            </h2>
            <p className="text-[14px] text-[#55433b] mt-1">
              Pure single-origin cacao wrapped in artisanal hand-pressed parchment.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            {homeProducts.map(product => {
              const isAdded = !!addedItemIds[product.id];
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group flex flex-col bg-[#ffffff] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer border border-[#24140e]/5"
                >
                  <div className="relative aspect-square w-full bg-[#ebe8e3] overflow-hidden">
                    <img
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      src={product.image}
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#24140e] text-[#ffdbcc] text-[10px] font-bold">
                      {product.cacaoPercentage || product.badge}
                    </span>
                  </div>

                  <div className="p-3 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-[15px] sm:text-[16px] text-[#1c1c19] font-semibold leading-tight line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[12px] text-[#55433b] line-clamp-2 mt-1 leading-snug">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[15px] font-bold text-[#93461d]">
                          ₱{product.price}
                        </span>
                        {product.usdPrice && (
                          <span className="text-[11px] text-[#705951] font-mono">
                            ${product.usdPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={e => handleAdd(e, product)}
                        className={`w-full py-2 px-2 rounded text-[12px] font-semibold flex items-center justify-center gap-1 transition-all ${
                          isAdded
                            ? 'bg-[#44634f] text-[#ffffff]'
                            : 'bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] active:scale-95'
                        }`}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {isAdded ? 'check' : 'add_shopping_cart'}
                        </span>
                        <span>{isAdded ? 'Added' : 'Add to Bag'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Maayon Cacao Profile Box */}
          <div className="mt-6">
            <div className="p-4 sm:p-5 rounded-xl bg-[#ffffff] border border-[#24140e]/5 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#705951] font-bold">
                  Maayon Cacao Profile
                </span>
                <span className="material-symbols-outlined text-[#93461d] text-[20px]">
                  psychiatry
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[12px] text-[#55433b] mb-1 font-medium">
                    <span>Deep Roast &amp; Earth</span>
                    <span className="font-bold text-[#93461d]">85%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#e5e2dd] overflow-hidden">
                    <div className="h-full bg-[#93461d] rounded-full w-[85%] transition-all duration-1000"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[12px] text-[#55433b] mb-1 font-medium">
                    <span>Fruity Red Berry Undertones</span>
                    <span className="font-bold text-[#93461d]">70%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#e5e2dd] overflow-hidden">
                    <div className="h-full bg-[#93461d] rounded-full w-[70%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Heritage Spotlight Banner: Rolled Oats Champorado */}
      <section className="w-full py-8 sm:py-12 bg-[#24140e] text-[#fcf9f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcdcd1] text-[#775f57] mb-3">
            <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Heritage Breakfast
            </span>
          </div>

          <h2 className="font-serif text-[24px] sm:text-[30px] font-bold leading-tight mb-2 text-[#fffbff]">
            The Healthy Filipino Upgrade: Rolled Oats Champorado
          </h2>

          <p className="text-[14px] text-[#ebe8e3] leading-relaxed mb-5 max-w-2xl">
            Indulge guilt-free with our nutritious twist on classic Champorado. 100% Pure Cacao Tablea melts seamlessly into rolled oats, creating a rich, satisfying breakfast loaded with cacao flavonoids.
          </p>

          {/* Tablea Highlight Card */}
          <div
            onClick={onOpenRecipe}
            className="relative rounded-xl overflow-hidden bg-[#351000] p-4 mb-4 flex items-center gap-4 shadow-lg border border-[#ffb694]/20 cursor-pointer hover:border-[#ffb694]/50 transition-colors"
          >
            <img
              alt="O'guia Tablea Pure Cacao pouch and Rolled Oats Champorado bowl"
              className="w-24 h-24 rounded-lg object-cover shrink-0"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam-qV5E6BPSXPt8TAvl3v629M-EX9wgdJlu0tGA_FY0psjMZsN18KzvY07gQ4bCbGWgkVIZVYdNqDDwVakJwC033buV65e8E77izVe4fkIfwySryhvq1_HSiXwlSyolpIUS5dONoho0adhwNdSgNGCdG_oTHfynwjwGIkaOT9Aq-WjgL7G6MdYU6_RSwAEze2YhoSnTQFPNibMq05SYvUO0W7dK8ST8YYStLgbeiyf7Fii5V3qhLmmfBJ1bOzWYF-JoL8GiLGdT4pXWc"
            />
            <div className="flex-1 min-w-0">
              <div className="inline-block px-2 py-0.5 rounded bg-[#93461d] text-[#ffffff] text-[10px] uppercase font-bold tracking-wider mb-1">
                Pure Cacao Tablea
              </div>
              <h3 className="font-serif text-[17px] text-[#fffbff] font-semibold truncate">
                Traditional Round Discs
              </h3>
              <p className="text-[13px] text-[#e5e2dd] mt-0.5 line-clamp-2 leading-snug">
                No additives, zero refined sugars. Roasted in heritage iron pans.
              </p>
            </div>
            <span className="material-symbols-outlined text-[#ffb694] text-[22px] shrink-0">
              restaurant_menu
            </span>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/5">
              <span className="material-symbols-outlined text-[#ffb694] text-[20px]">nutrition</span>
              <span className="text-[13px] text-[#f6f3ee] font-medium">High Fiber Oats</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/5">
              <span className="material-symbols-outlined text-[#ffb694] text-[20px]">monitor_heart</span>
              <span className="text-[13px] text-[#f6f3ee] font-medium">Heart Healthy</span>
            </div>
          </div>

          <button
            onClick={onOpenRecipe}
            className="w-full py-3.5 px-4 rounded bg-[#93461d] hover:bg-[#b25d33] text-[#ffffff] text-[14px] font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">menu_book</span>
            <span>Shop Tablea &amp; Recipes</span>
          </button>
        </div>
      </section>

      {/* 5. Farmer & Maker Signature Quote + Newsletter */}
      <section className="w-full py-8 sm:py-12 bg-[#fcf9f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Quote Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#f6f3ee] border border-[#24140e]/5 shadow-xs overflow-hidden mb-8">
            <div className="absolute -right-4 -bottom-4 text-[#e5e2dd]/60 select-none pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">format_quote</span>
            </div>

            <div className="flex items-center gap-3.5 mb-4">
              <img
                alt="Dad and Family in the Cacao Grove"
                className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-[#ffffff]"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYdOuOR9eovfVPTNbCnCRr_L5FT10Yk3-UdcQg3PnfZGHGYFCOHTci0Rq7iIVsZe9J1_Y2wxr262n4HxFvlLH8-i20UaUsnfFDdoK2gEoWC4y6WA6RUWh3BC9LsDtM5HvXx8t2hHygJUbXw4eWoPfTpc3MfFPAIk6yj8gsE3pH6uGqPImmxHVBufHfycJGupQU7lW1PPKkwyNY67KyzCZ9K6URhAYeQuAggzfT3ZnHIIM-q9GE4i5csA1YUnTEf-J2uI"
              />
              <div>
                <h4 className="font-serif text-[18px] text-[#1c1c19] font-semibold">
                  Dad’s Farm Family
                </h4>
                <span className="text-[12px] text-[#705951]">Growers &amp; Chocolatiers • Capiz</span>
              </div>
            </div>

            <p className="font-serif text-[18px] sm:text-[20px] italic text-[#1c1c19] leading-snug relative z-10 max-w-xl">
              “We honor the land, our heirloom trees, and every gentle harvest. When you taste O’guia, you taste our home.”
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#f0ede9] text-[#1c1c19] border border-[#24140e]/5">
            <div className="w-10 h-10 rounded-full bg-[#ffdbcc] text-[#783108] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">mail</span>
            </div>
            <h3 className="font-serif text-[22px] font-semibold mb-1">Direct from Dad’s Farm</h3>
            <p className="text-[14px] text-[#55433b] mb-4 leading-relaxed">
              Be notified when seasonal micro-lots of single-origin bars and unrefined tablea are fresh off the cooling racks.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-lg bg-[#c8ebd2]/40 text-[#022112] text-[13px] font-semibold flex items-center gap-2 border border-[#44634f]/20">
                <span className="material-symbols-outlined text-[18px] text-[#44634f]">check_circle</span>
                <span>Salamat! You are on Dad's VIP harvest list.</span>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <div className="relative flex-1">
                  <input
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#ffffff] text-[#1c1c19] text-[14px] placeholder:text-[#88736a] focus:outline-none focus:ring-2 focus:ring-[#93461d] shadow-xs border border-[#24140e]/10"
                    placeholder="Enter your email address"
                    required
                    type="email"
                  />
                </div>
                <button
                  className="py-3 px-5 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] text-[14px] font-semibold shadow-xs active:scale-[0.98] transition-transform cursor-pointer shrink-0"
                  type="submit"
                >
                  Notify Me on Harvest Drops
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
