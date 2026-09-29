import React from 'react';

interface AccountScreenProps {
  onNavigateToShop: () => void;
  onOpenBooking: () => void;
}

export const AccountScreen: React.FC<AccountScreenProps> = ({
  onNavigateToShop,
  onOpenBooking
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 pt-3 pb-20 space-y-6">
      {/* Profile Header Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#24140e]/5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#93461d] text-white flex items-center justify-center text-[28px] font-serif font-bold shadow-md">
            JS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-[22px] font-bold text-[#1c1c19]">
                Juan Santos
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#c8ebd2] text-[#022112] text-[10px] font-bold uppercase tracking-wider">
                Estate VIP
              </span>
            </div>
            <p className="text-[13px] text-[#55433b]">
              roydepon17@gmail.com • Capiz, Philippines
            </p>
            <span className="text-[11px] text-[#705951]">
              Harvest Member since August 2024
            </span>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="py-2.5 px-4 rounded-lg bg-[#f6f3ee] hover:bg-[#ebe8e3] text-[#93461d] text-[13px] font-bold flex items-center gap-1.5 self-start sm:self-auto cursor-pointer border border-[#24140e]/5"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Book Tour</span>
        </button>
      </div>

      {/* Cacao Loyalty Beans Reward Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#31302d] text-[#f3f0eb] shadow-md border border-black/10 flex flex-col gap-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#ffb694]">
            <span className="material-symbols-outlined text-[20px]">eco</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Dad’s Cacao Beans Rewards
            </span>
          </div>
          <span className="text-[12px] text-[#dcdad5]">Tier 2 Connoisseur</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-serif text-[36px] font-bold text-[#ffdbcc]">420</span>
          <span className="text-[14px] text-[#dcdad5]">Beans Earned</span>
        </div>

        <div>
          <div className="flex justify-between text-[12px] text-[#dcdad5] mb-1.5">
            <span>80 beans to Free 70% Dark Chocolate Bar</span>
            <span className="font-semibold text-[#ffdbcc]">420 / 500</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full bg-[#93461d] rounded-full w-[84%]"></div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-[18px] font-semibold text-[#1c1c19]">
            Recent Harvest Orders
          </h3>
          <span className="text-[12px] text-[#705951]">2 Orders</span>
        </div>

        <div className="space-y-2.5">
          {/* Order 1 */}
          <div className="p-4 rounded-xl bg-[#ffffff] border border-[#24140e]/5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[14px] text-[#1c1c19]">
                  Order #OG-2026-6819
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#c8ebd2] text-[#022112] text-[10px] font-bold uppercase">
                  Delivered
                </span>
              </div>
              <p className="text-[12px] text-[#55433b] mt-0.5">
                The Tasting Flight: Try All 8 Flavors (Complete Origin Set)
              </p>
              <span className="text-[11px] text-[#705951]">Delivered to Roxas City on Sept 18, 2026</span>
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1">
              <span className="font-serif text-[15px] font-bold text-[#93461d]">
                ₱1,460
              </span>
              <button
                onClick={onNavigateToShop}
                className="text-[12px] text-[#93461d] font-semibold hover:underline"
              >
                Buy Again
              </button>
            </div>
          </div>

          {/* Order 2 */}
          <div className="p-4 rounded-xl bg-[#ffffff] border border-[#24140e]/5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[14px] text-[#1c1c19]">
                  Order #OG-2026-5120
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#c8ebd2] text-[#022112] text-[10px] font-bold uppercase">
                  Delivered
                </span>
              </div>
              <p className="text-[12px] text-[#55433b] mt-0.5">
                70% Dark Chocolate x 1, Pure Tablea Disk x 1
              </p>
              <span className="text-[11px] text-[#705951]">Delivered to Roxas City on Aug 29, 2026</span>
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1">
              <span className="font-serif text-[15px] font-bold text-[#93461d]">
                ₱360
              </span>
              <button
                onClick={onNavigateToShop}
                className="text-[12px] text-[#93461d] font-semibold hover:underline"
              >
                Buy Again
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Delivery Address */}
      <div className="space-y-3">
        <h3 className="font-serif text-[18px] font-semibold text-[#1c1c19]">
          Saved Delivery Address
        </h3>
        <div className="p-4 rounded-xl bg-[#ffffff] border border-[#24140e]/5 shadow-xs flex items-start justify-between">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#93461d] text-[22px] mt-0.5">
              home
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[14px] text-[#1c1c19]">Juan Santos (Home)</span>
                <span className="px-2 py-0.5 rounded bg-[#f6f3ee] text-[#705951] text-[10px] font-bold uppercase">Default</span>
              </div>
              <p className="text-[13px] text-[#55433b] mt-0.5">
                Blk 4 Lot 12, Mahogany Hills, Roxas City, Capiz 5800
              </p>
              <span className="text-[12px] text-[#705951]">+63 917-555-1234</span>
            </div>
          </div>
          <button className="text-[12px] text-[#93461d] font-semibold hover:underline cursor-pointer">
            Edit
          </button>
        </div>
      </div>

      {/* Farm News & Preferences */}
      <div className="p-4 rounded-xl bg-[#f6f3ee] border border-[#24140e]/5 text-[13px] flex items-center justify-between">
        <div>
          <span className="font-semibold text-[#1c1c19] block">Harvest Micro-Lot VIP Alerts</span>
          <span className="text-[#55433b] text-[12px]">Receiving notifications for fresh cooling rack drops</span>
        </div>
        <span className="material-symbols-outlined text-[#44634f] text-[24px]">toggle_on</span>
      </div>
    </div>
  );
};
