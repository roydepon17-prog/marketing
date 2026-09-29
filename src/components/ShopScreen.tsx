import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS, TASTING_FLIGHT } from '../data/products';
import { useCart } from '../context/CartContext';

interface ShopScreenProps {
  onSelectProduct: (product: Product) => void;
}

export const ShopScreen: React.FC<ShopScreenProps> = ({ onSelectProduct }) => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<'all' | 'dark' | 'native' | 'tablea' | 'keto'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [claimedFlight, setClaimedFlight] = useState(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { key: 'all' as const, label: 'All (12)' },
    { key: 'dark' as const, label: 'Dark Chocolate' },
    { key: 'native' as const, label: 'Native Infusions' },
    { key: 'tablea' as const, label: 'Tablea' },
    { key: 'keto' as const, label: 'Sugar-Free / Keto' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory =
        activeFilter === 'all' ? true : p.category === activeFilter;
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.flavorNotes.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  const handleClaimFlight = () => {
    // Create a product representation of tasting flight
    const flightProduct: Product = {
      id: TASTING_FLIGHT.id,
      name: TASTING_FLIGHT.name,
      shortName: 'Tasting Flight 8-Bar',
      price: TASTING_FLIGHT.price,
      originalPrice: TASTING_FLIGHT.originalPrice,
      rating: 5.0,
      reviewsCount: 142,
      badge: 'Limited Reserve',
      badgeClass: 'bg-[#93461d] text-white',
      category: 'all',
      description: TASTING_FLIGHT.description,
      image: TASTING_FLIGHT.image,
      imageAlt: TASTING_FLIGHT.imageAlt,
      flavorNotes: ['Complete Origin Set', '8 Unique Bars', 'Tasting Guide Included'],
      weight: '400g total',
      ingredients: ['Curated 8-bar set from Capiz single-origin harvests']
    };
    addToCart(flightProduct, 1);
    setClaimedFlight(true);
    setTimeout(() => setClaimedFlight(false), 2000);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-16 gap-6">
      {/* 1. Page Header & Story Introduction */}
      <section className="flex flex-col gap-1.5 mt-1">
        <div className="flex items-center gap-1.5 text-[#93461d]">
          <span className="material-symbols-outlined text-[18px]">eco</span>
          <span className="text-[12px] uppercase tracking-widest text-[#705951] font-semibold">
            Single-Origin Estate
          </span>
        </div>
        <h1 className="font-serif text-[30px] sm:text-[36px] text-[#1c1c19] font-semibold tracking-tight leading-tight">
          Artisan Collection
        </h1>
        <p className="text-[14px] text-[#55433b] leading-relaxed max-w-2xl">
          Small-batch chocolate bars &amp; heirloom tablea, crafted from hand-selected fermented cacao beans in Maayon, Capiz.
        </p>
      </section>

      {/* 2. Search & Filter Controls */}
      <section className="flex flex-col gap-3">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#55433b]/70 text-[20px]">
            search
          </span>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-[#f6f3ee] text-[#1c1c19] placeholder:text-[#55433b]/70 text-[14px] pl-10 pr-10 py-3 rounded-xl outline-none focus:bg-[#ffffff] focus:ring-2 focus:ring-[#93461d]/30 transition-all shadow-xs border border-[#24140e]/5"
            placeholder="Search variants, percentage, flavor notes..."
            type="search"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#705951] hover:text-[#1c1c19]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          ) : (
            <button
              aria-label="Filter"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#93461d] hover:text-[#7b3714]"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          )}
        </div>

        {/* Filter Pills (Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {filterTabs.map(tab => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] uppercase font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#93461d] text-[#ffffff] shadow-xs active:scale-95'
                    : 'bg-[#f0ede9] text-[#55433b] hover:bg-[#ebe8e3]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Collection Banner: Tasting Flight */}
      <section className="relative w-full rounded-2xl bg-[#31302d] text-[#f3f0eb] overflow-hidden shadow-xl p-4 sm:p-5 flex flex-col justify-between gap-4 border border-black/10">
        <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden shadow-inner">
          <img
            alt={TASTING_FLIGHT.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            src={TASTING_FLIGHT.image}
          />
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#93461d] text-[#ffffff] text-[11px] font-semibold uppercase tracking-wider shadow-xs">
            {TASTING_FLIGHT.tag}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-widest text-[#ffb694] font-semibold">
              {TASTING_FLIGHT.subtitle}
            </span>
            <span className="text-[11px] bg-[#5c7c67] text-[#f6fff5] px-2.5 py-0.5 rounded-full font-semibold">
              {TASTING_FLIGHT.savings}
            </span>
          </div>
          <h2 className="font-serif text-[22px] sm:text-[24px] text-[#f3f0eb] font-semibold leading-snug">
            {TASTING_FLIGHT.name}
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#e5e2dd]/80 leading-relaxed">
            {TASTING_FLIGHT.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-[12px] line-through text-[#dbc1b7]">
              ₱{TASTING_FLIGHT.originalPrice.toLocaleString()}
            </span>
            <span className="font-serif text-[20px] font-bold text-[#ffdbcc]">
              ₱{TASTING_FLIGHT.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleClaimFlight}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] text-[13px] font-semibold shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {claimedFlight ? 'check' : 'add_shopping_cart'}
            </span>
            <span>{claimedFlight ? 'Flight Added!' : 'Claim Flight'}</span>
          </button>
        </div>
      </section>

      {/* 4. Product Catalog Grid (2-Column Mobile Bento) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1c1c19] font-semibold">
            Handcrafted Bars &amp; Tablea
          </h3>
          <span className="text-[12px] text-[#705951]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Variety' : 'Varieties'} available
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center text-[#705951] bg-[#f6f3ee] rounded-xl p-6">
            <span className="material-symbols-outlined text-[36px] text-[#93461d] mb-2">search_off</span>
            <p className="font-serif text-[18px] font-semibold text-[#1c1c19]">No matching cacao treats found</p>
            <p className="text-[13px] mt-1">Try another keyword or tap "All (12)" to reset.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded bg-[#93461d] text-white text-[12px] font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            {filteredProducts.map(product => {
              const isAdded = !!addedIds[product.id];
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group flex flex-col justify-between bg-[#ffffff] rounded-xl shadow-xs hover:shadow-md p-2.5 transition-all cursor-pointer border border-[#24140e]/5"
                >
                  <div className="flex flex-col gap-2">
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#f6f3ee] shadow-inner">
                      <img
                        alt={product.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        src={product.image}
                      />
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${product.badgeClass}`}>
                        {product.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-[#93461d] text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="text-[11px] font-bold text-[#1c1c19]">
                          {product.rating.toFixed(1)}
                        </span>
                        <span className="text-[10px] text-[#705951]">
                          ({product.reviewsCount})
                        </span>
                      </div>
                      <h4 className="font-serif text-[15px] font-semibold text-[#1c1c19] leading-snug truncate">
                        {product.name}
                      </h4>
                      <p className="text-[12px] text-[#55433b] line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[#f0ede9]">
                    <div className="flex flex-col">
                      <span className="font-serif text-[15px] font-bold text-[#93461d]">
                        ₱{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] line-through text-[#705951]">
                          ₱{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={e => handleAddToCart(e, product)}
                      aria-label={`Add ${product.name} to cart`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-xs active:scale-90 transition-transform cursor-pointer ${
                        isAdded
                          ? 'bg-[#44634f] text-[#ffffff]'
                          : 'bg-[#b25d33] hover:bg-[#93461d] text-[#fffbff]'
                      }`}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {isAdded ? 'check' : 'add'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Interactive Tasting Profile & Pairing Guide */}
      <section className="bg-[#f6f3ee] rounded-2xl p-4 sm:p-6 shadow-xs border border-[#24140e]/5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[#93461d]">
            <span className="material-symbols-outlined text-[20px]">local_cafe</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#705951]">
              The Sensory Ritual
            </span>
          </div>
          <h3 className="font-serif text-[22px] sm:text-[24px] text-[#1c1c19] font-semibold">
            How to Taste Artisan Cacao
          </h3>
          <p className="text-[13px] text-[#55433b]">
            Follow the 4 steps of single-origin appreciation practiced at our Maayon estate.
          </p>
        </div>

        {/* Accordion Steps */}
        <div className="flex flex-col gap-2.5">
          {/* Step 1 */}
          <div
            onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
            className="rounded-xl bg-[#ffffff] p-3.5 shadow-xs cursor-pointer border border-[#24140e]/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#fcdcd1] text-[#281811] text-[12px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="font-serif text-[15px] font-semibold text-[#1c1c19]">
                  The Snap
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-[#705951] transition-transform duration-300 ${
                  activeStep === 1 ? 'rotate-180 text-[#93461d]' : ''
                }`}
              >
                expand_more
              </span>
            </div>
            {activeStep === 1 && (
              <div className="pt-2.5 mt-1 text-[#55433b] text-[13px] leading-relaxed border-t border-[#f0ede9]">
                Break a piece near your ear. A clean, crisp snap indicates proper cacao butter tempering and solid crystal formation.
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
            className="rounded-xl bg-[#ffffff] p-3.5 shadow-xs cursor-pointer border border-[#24140e]/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#fcdcd1] text-[#281811] text-[12px] font-bold flex items-center justify-center">
                  2
                </span>
                <span className="font-serif text-[15px] font-semibold text-[#1c1c19]">
                  The Aroma
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-[#705951] transition-transform duration-300 ${
                  activeStep === 2 ? 'rotate-180 text-[#93461d]' : ''
                }`}
              >
                expand_more
              </span>
            </div>
            {activeStep === 2 && (
              <div className="pt-2.5 mt-1 text-[#55433b] text-[13px] leading-relaxed border-t border-[#f0ede9]">
                Rub the square lightly to release warmth. Inhale deeply to identify red fruit, deep oak, molasses, and roasted almond notes.
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
            className="rounded-xl bg-[#ffffff] p-3.5 shadow-xs cursor-pointer border border-[#24140e]/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#fcdcd1] text-[#281811] text-[12px] font-bold flex items-center justify-center">
                  3
                </span>
                <span className="font-serif text-[15px] font-semibold text-[#1c1c19]">
                  The Melt
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-[#705951] transition-transform duration-300 ${
                  activeStep === 3 ? 'rotate-180 text-[#93461d]' : ''
                }`}
              >
                expand_more
              </span>
            </div>
            {activeStep === 3 && (
              <div className="pt-2.5 mt-1 text-[#55433b] text-[13px] leading-relaxed border-t border-[#f0ede9]">
                Place it on your tongue without chewing. Allow the natural warmth of your palate to melt the cacao butter, releasing acidity and sweetness.
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div
            onClick={() => setActiveStep(activeStep === 4 ? null : 4)}
            className="rounded-xl bg-[#ffffff] p-3.5 shadow-xs cursor-pointer border border-[#24140e]/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#fcdcd1] text-[#281811] text-[12px] font-bold flex items-center justify-center">
                  4
                </span>
                <span className="font-serif text-[15px] font-semibold text-[#1c1c19]">
                  The Lingering Finish
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-[#705951] transition-transform duration-300 ${
                  activeStep === 4 ? 'rotate-180 text-[#93461d]' : ''
                }`}
              >
                expand_more
              </span>
            </div>
            {activeStep === 4 && (
              <div className="pt-2.5 mt-1 text-[#55433b] text-[13px] leading-relaxed border-t border-[#f0ede9]">
                Observe how the flavors evolve. Pure single-origin Capiz beans leave a warm, pleasant floral resonance long after melting.
              </div>
            )}
          </div>
        </div>

        {/* Quick Pairing Suggestion Card */}
        <div className="bg-[#f0ede9] rounded-xl p-3.5 flex items-center gap-3 border border-[#24140e]/5">
          <div className="w-12 h-12 rounded-lg bg-[#adcfb7] flex items-center justify-center shrink-0 text-[#44634f]">
            <span className="material-symbols-outlined text-[24px]">coffee</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] uppercase tracking-wider text-[#705951] font-bold">
              Tasting Recommendation
            </span>
            <span className="font-serif text-[15px] font-bold text-[#1c1c19] truncate">
              Dark 70% + Liberica Barako
            </span>
            <span className="text-[12px] text-[#55433b]">
              The citrus undertones harmonize beautifully.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Farm Assurance Pill Footer */}
      <section className="flex items-center justify-around py-3.5 px-3 rounded-xl bg-[#e5e2dd]/60 text-[#705951] border border-[#24140e]/5">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-[#93461d]">
            volunteer_activism
          </span>
          <span className="text-[11px] font-semibold">Fair Farmer Pay</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[#dbc1b7]"></div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-[#93461d]">
            solar_power
          </span>
          <span className="text-[11px] font-semibold">Sun-Dried Beans</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-[#dbc1b7]"></div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-[#93461d]">
            verified
          </span>
          <span className="text-[11px] font-semibold">100% Capiz Origin</span>
        </div>
      </section>
    </div>
  );
};
