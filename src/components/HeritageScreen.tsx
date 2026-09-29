import React, { useState } from 'react';

interface HeritageScreenProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const HeritageScreen: React.FC<HeritageScreenProps> = ({
  onOpenBooking,
  onOpenContact
}) => {
  const [bookingToast, setBookingToast] = useState(false);

  const handleQuickBook = () => {
    onOpenBooking();
  };

  return (
    <div className="flex flex-col w-full pb-16">
      {/* 1. Story Hero Section */}
      <section className="relative px-4 sm:px-6 pt-3 pb-8 flex flex-col items-center max-w-4xl mx-auto w-full">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-[#ebe8e3] border border-[#24140e]/5">
          <div className="relative h-96 sm:h-[440px] w-full">
            <img
              alt="Warm authentic portrait of Filipino cacao farm founders"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC97xVi0yZy_4Dbzb9RFGKJ8ovB4LrsiGlCNhTxPyKTbBHFvNmoTXqFZXkUCVKp3n93B0JEwNzfgHl_EKzwAnQwIoeRqHngyEu17yw3DIRQMuUBrYaLXeKAXK7a63bMqdIRw5JmNdKlY54MoTcVepKRn2NOcPdO6vD3VgXo6KMs9a8odyFkVfBSpKgwS_XcyxlnhJX88Ojhd-AlDFgUK7qL2tmbpbKm81EdLFlVS5I5YVWn2ZHUAJ9K3xT1uInm33gMNN41HY0nFw1aA2w"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#31302d]/95 via-[#31302d]/40 to-transparent"></div>

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col text-[#ffffff]">
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#44634f] text-[#ffffff] text-[11px] tracking-widest uppercase shadow-xs mb-3 font-semibold">
                <span className="material-symbols-outlined text-[15px]">eco</span>
                Roots in Maayon, Capiz
              </div>
              <h1 className="font-serif text-[30px] sm:text-[38px] text-[#f3f0eb] leading-tight font-semibold">
                Grown with Pride, <br />
                <span className="italic font-normal text-[#fcdcd1]">Crafted with Purpose</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Editorial Narrative Excerpt */}
        <div className="mt-6 px-2 text-center max-w-lg">
          <p className="text-[15px] sm:text-[16px] text-[#55433b] leading-relaxed">
            Started on Dad’s Farm, <span className="font-serif text-[18px] text-[#93461d] font-semibold">O’guia</span> was born out of a deep reverence for the soil, community spirit, and heirloom agricultural heritage of Capiz.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#dbc1b7]"></span>
            <span className="material-symbols-outlined text-[#93461d] text-[18px]">
              temp_preferences_custom
            </span>
            <span className="h-[1px] w-12 bg-[#dbc1b7]"></span>
          </div>
        </div>
      </section>

      {/* 2. 4-Stage Tree-to-Bar Process (Illustrated Timeline) */}
      <section className="px-4 sm:px-6 py-8 bg-[#f6f3ee] border-y border-[#24140e]/5">
        <div className="max-w-4xl mx-auto flex flex-col mb-6">
          <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
            The Craft Method
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px] text-[#1c1c19] mt-1 font-semibold">
            Tree-to-Bar Odyssey
          </h2>
          <p className="text-[14px] text-[#55433b] mt-1">
            From hand-tended orchard flora to artisanal stone-ground chocolate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative flex flex-col gap-6">
          {/* Stage 1: Harvest */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 shadow-xs border border-[#24140e]/5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#93461d] text-[#ffffff] text-[12px] flex items-center justify-center font-bold">
                  1
                </span>
                <span className="text-[12px] tracking-wider uppercase text-[#705951] font-bold">
                  Harvest Phase
                </span>
              </div>
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">
                agriculture
              </span>
            </div>

            <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1c1c19] font-semibold">
              Heirloom Cultivation &amp; Hand Harvest
            </h3>
            <p className="text-[14px] text-[#55433b] leading-relaxed">
              Only ripe, hand-selected heirloom pods are picked individually at peak brix sugar content to preserve authentic varietal purity.
            </p>

            <div className="w-full h-48 sm:h-60 rounded-xl overflow-hidden shadow-inner mt-1">
              <img
                alt="Freshly harvested colorful cacao pods in rich warm shades"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Jz5Q1UDvVyb8ERvH-rhvMzNK0ormDMRJkr8k37W0PehhpgcFzZL58_6Q8y2ap1EGjA0udwVnL5wPLcW6Dx-Yn1HMRb36Hwn3gsiv15RAcJkt3XMUtCtMD6T-ePa3wBElJHoRtQ_ZZRRay0RxZrHtyCTFwTjiD8re9LFMrKnHYMHsH8771O60XZhbw5EBdZqRpD2YFmpR6Nr3WleInzg8m-K-5UzHf-IXFVveGr6EsdaoJnV2sTCzjw"
              />
            </div>
          </div>

          {/* Stage 2: Fermentation */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 shadow-xs border border-[#24140e]/5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#44634f] text-[#ffffff] text-[12px] flex items-center justify-center font-bold">
                  2
                </span>
                <span className="text-[12px] tracking-wider uppercase text-[#705951] font-bold">
                  Fermentation
                </span>
              </div>
              <span className="material-symbols-outlined text-[#44634f] text-[20px]">
                wb_sunny
              </span>
            </div>

            <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1c1c19] font-semibold">
              Banana-Leaf Fermentation &amp; Sun Drying
            </h3>
            <p className="text-[14px] text-[#55433b] leading-relaxed">
              A meticulous 6-day wild fermentation wrapped in fresh native banana leaves, followed by gradual solar drying under the Capiz sky to coax out bright tropical acidity and dried stone fruit notes.
            </p>

            <div className="flex items-center gap-2 py-2 px-3.5 rounded-lg bg-[#f0ede9] text-[#55433b] w-fit">
              <span className="material-symbols-outlined text-[#93461d] text-[18px]">schedule</span>
              <span className="text-[12px] font-semibold">6 Days Natural Aerobic Cycle</span>
            </div>
          </div>

          {/* Stage 3: Roasting */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 shadow-xs border border-[#24140e]/5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#b25d33] text-[#ffffff] text-[12px] flex items-center justify-center font-bold">
                  3
                </span>
                <span className="text-[12px] tracking-wider uppercase text-[#705951] font-bold">
                  Roasting
                </span>
              </div>
              <span className="material-symbols-outlined text-[#b25d33] text-[20px]">
                local_fire_department
              </span>
            </div>

            <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1c1c19] font-semibold">
              Gentle Micro-Batch Roasting
            </h3>
            <p className="text-[14px] text-[#55433b] leading-relaxed">
              Precision-calibrated low-temperature roasting respects each single-origin bean, unlocking deep cocoa aroma while preserving delicate heart-healthy flavonoids and antioxidants.
            </p>

            {/* Flavor Meter */}
            <div className="mt-1 p-3.5 rounded-xl bg-[#f6f3ee] flex flex-col gap-2 border border-[#24140e]/5">
              <span className="text-[11px] text-[#705951] font-bold uppercase tracking-wider">
                Roast Profile Balance
              </span>
              <div className="flex items-center justify-between text-[#55433b] text-[12px]">
                <span>Floral &amp; Fruity</span>
                <span className="text-[#93461d] font-bold">Deep Roasted (72%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#dbc1b7] overflow-hidden flex">
                <div className="bg-[#93461d] h-full w-[72%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stage 4: Finishing */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 shadow-xs border border-[#24140e]/5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#31302d] text-[#ffffff] text-[12px] flex items-center justify-center font-bold">
                  4
                </span>
                <span className="text-[12px] tracking-wider uppercase text-[#705951] font-bold">
                  Finishing
                </span>
              </div>
              <span className="material-symbols-outlined text-[#93461d] text-[20px]">
                cookie
              </span>
            </div>

            <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1c1c19] font-semibold">
              Stone Conching &amp; Artisanal Tempering
            </h3>
            <p className="text-[14px] text-[#55433b] leading-relaxed">
              Over 48 hours of granite stone-wheel refinement yielding a silky mouthfeel, hand-poured into our distinct tablets with a satisfying clean snap and glossy finish.
            </p>

            <div className="w-full h-48 sm:h-60 rounded-xl overflow-hidden shadow-inner mt-1">
              <img
                alt="Handcrafted O'guia artisan chocolate tablets stack"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcpNloNdhzjWJzPDU9PU4cMZD70SQiGmUkCObAVtz7AQA28GnxYHsRS0Mr9DXR7VEq3jmSOnCaL-QLNexBaNnZipIhhQhozhRPklyvOQy-pm7s2cyiqzgUNK7_3H7uvoWZxeI4jEXPOQhHUVyHn7U32kco2Ble7sXQ1BQb-rAESlXOevi4rYazsSnSnjBRtxzlqBvee-udYMzfipYYKYxHgdCpn3sinn7CA3zCkQ1wyDw-PpsAWlL8WROXzbth7-76Gac"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Farm Family & Community Section */}
      <section className="px-4 sm:px-6 py-8 flex flex-col max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#93461d] text-[22px]">diversity_1</span>
          <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
            Our People
          </span>
        </div>
        <h2 className="font-serif text-[26px] sm:text-[30px] text-[#1c1c19] font-semibold leading-snug">
          The Hands Behind the Harvest
        </h2>

        {/* Founder Card */}
        <div className="mt-4 rounded-2xl overflow-hidden bg-[#f0ede9] shadow-md border border-[#24140e]/5 flex flex-col">
          <div className="h-64 sm:h-72 w-full relative">
            <img
              alt="Proud Filipino chocolate maker and farmer behind exhibition table"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlyO4Oo4iW-UZS-P7sHI8axHqBQhJfdAp3ll9bOLq8hqGQvoopjjqdoSD8lvrD25QTfO7snSET_4SNdhBogzOF7LhJH3HJ1_oJmLaoy6K-qYT4jTrrfypJX_mJ411L43HoBu_kt-cNV0BGudMPUvAIRYQsT1T4drCdfBp6BVoQWV-4XLYgSYFHIsgVa8cvMblQmcdIUZ-twXfMyTWMtUOGUDsyEgH58npJ__voHi3ARVCPkaDxsvTQNIa9pF37d2aZ3lhFTG_aH9QDD3I"
            />
            <div className="absolute top-3 right-3 bg-[#44634f] text-[#ffffff] px-3 py-1 rounded-full text-[11px] font-semibold shadow-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">favorite</span>
              Good for the Heart
            </div>
          </div>

          <div className="p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-[20px] text-[#1c1c19] font-semibold">
                Dad &amp; The O’guia Family
              </h3>
              <span className="text-[12px] text-[#705951] font-medium">Maayon, Capiz</span>
            </div>

            <p className="text-[14px] text-[#55433b] leading-relaxed">
              More than confectioners, we are stewards of ancestral soil. By directly employing local Capiz farm families and partnering with regional schools for youth packaging design programs, every tablet supports livelihood and crafts pride.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-[#fcdcd1] text-[#775f57] text-[12px] font-semibold">
                100% Capiz Grown
              </span>
              <span className="px-3 py-1 rounded-full bg-[#c8ebd2] text-[#022112] text-[12px] font-semibold">
                Fair Share Agri-Pledge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Orchard & Terroir */}
      <section className="px-4 sm:px-6 py-8 bg-[#ebe8e3] border-y border-[#24140e]/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-widest text-[#44634f] font-bold">
            Terroir &amp; Environment
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px] text-[#1c1c19] font-semibold leading-tight">
            The Canopy of Maayon
          </h2>
          <p className="text-[14px] text-[#55433b] max-w-xl">
            Our cocoa trees thrive under the shade of native fruit trees in rich volcanic and river loam soil, nurtured by rhythmic seasonal rains.
          </p>

          {/* Grove Photo */}
          <div className="mt-4 rounded-2xl overflow-hidden shadow-xs relative h-56 sm:h-72 w-full border border-black/5">
            <img
              alt="Woman holding vibrant yellow cacao pod smiling gently beside mossy tree trunk"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYS5DmU08Lg7CCsAiga3zzsOKvZ47Uf_14jKpGl_VAWf4pYZreHL4-TFuglTL6qUuPzTlrfIdllcaIBgTWD18GmTcq4sD3wlwgPyimWpqyQCSAFcH2jIaNc1ISiPoJCfJGGNNjocLFzH0xpQyHsRVC-fcziDN0M6b7dNWJiGODBwVnLnSkMp6ouiuPUAL73u6Vj9JbU3Th8Drp7YddmHVjUBL9qvUZgkN37kIarupqWm9IAgyib9XWMfMvgEMDpxTh0Qw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#31302d]/85 via-transparent to-transparent"></div>
            <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[#ffffff]">
              <div>
                <span className="font-serif text-[17px] font-semibold block">
                  Rich Alluvial Soil
                </span>
                <span className="text-[12px] text-[#ffdbcc]">
                  Natural Agroforestry Shade
                </span>
              </div>
              <span className="material-symbols-outlined text-[#c8ebd2] text-[28px]">
                forest
              </span>
            </div>
          </div>

          {/* Terroir Badges Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-4 rounded-xl bg-[#ffffff] flex flex-col gap-1 shadow-xs border border-[#24140e]/5">
              <span className="text-[11px] text-[#93461d] font-bold uppercase tracking-wider">
                Elevation
              </span>
              <span className="font-serif text-[22px] font-semibold text-[#1c1c19]">
                140m MSL
              </span>
              <span className="text-[12px] text-[#55433b]">Rolling inland hills</span>
            </div>

            <div className="p-4 rounded-xl bg-[#ffffff] flex flex-col gap-1 shadow-xs border border-[#24140e]/5">
              <span className="text-[11px] text-[#44634f] font-bold uppercase tracking-wider">
                Microclimate
              </span>
              <span className="font-serif text-[22px] font-semibold text-[#1c1c19]">
                Tropical humid
              </span>
              <span className="text-[12px] text-[#55433b]">High organic mulch</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Farm Tour & Workshop Invitation */}
      <section className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
        <div className="rounded-3xl p-6 sm:p-8 bg-[#31302d] text-[#f3f0eb] shadow-xl flex flex-col gap-4 relative overflow-hidden border border-black/10">
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#93461d]/25 blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#93461d] flex items-center justify-center text-[#ffffff]">
              <span className="material-symbols-outlined text-[18px]">nature_people</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#ffdbcc] font-bold">
              Tasting &amp; Immersion
            </span>
          </div>

          <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#f3f0eb] leading-tight">
            Experience Dad’s Cocoa Farm in Person
          </h2>

          <p className="text-[14px] text-[#dcdad5] leading-relaxed max-w-xl">
            Walk under the shaded branches, crack open fresh sweet cocoa pods straight from the trunk, and join an intimate chocolate tempering session in Maayon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleQuickBook}
              className="flex-1 h-12 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-[#ffffff] text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              <span>Book a Farm Visit</span>
            </button>

            <button
              onClick={onOpenContact}
              className="flex-1 h-12 rounded-lg bg-white/10 text-[#f3f0eb] hover:bg-white/20 text-[14px] font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer border border-white/10"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Contact Dad’s Farm</span>
            </button>
          </div>

          {bookingToast && (
            <div className="mt-2 p-3 rounded-lg bg-[#5c7c67] text-[#f6fff5] text-center text-[13px] font-medium animate-fade-in">
              ✨ Salamat! Our farm host will reach out to confirm your itinerary.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
