import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, shipping, discount, total, clearCart } = useCart();

  const [fullName, setFullName] = useState('Juan Santos');
  const [phone, setPhone] = useState('0917-555-1234');
  const [address, setAddress] = useState('Blk 4 Lot 12, Mahogany Hills');
  const [city, setCity] = useState('Roxas City');
  const [province, setProvince] = useState('Capiz');
  const [notes, setNotes] = useState('Please leave with security if not home.');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'gcash'>('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `OG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setOrderPlaced(true);
    clearCart();
  };

  const handleFinish = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#24140e]/10 my-8"
        onClick={e => e.stopPropagation()}
      >
        {orderPlaced ? (
          /* Order Confirmation Screen */
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#c8ebd2] text-[#44634f] flex items-center justify-center mb-4 shadow-xs">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
              Harvest Order Confirmed
            </span>

            <h2 className="font-serif text-[26px] font-bold text-[#1c1c19] mt-1">
              Salamat for Supporting Dad’s Farm!
            </h2>

            <p className="text-[13px] text-[#55433b] mt-2 max-w-sm">
              Your order <b>#{orderNumber}</b> is being freshly packed in hand-pressed parchment at our Maayon estate.
            </p>

            {/* Order Details Card */}
            <div className="w-full bg-[#f6f3ee] rounded-xl p-4 my-5 text-left border border-[#24140e]/5 text-[13px] space-y-2">
              <div className="flex justify-between pb-2 border-b border-[#e5e2dd]">
                <span className="text-[#705951]">Estimated Delivery</span>
                <span className="font-semibold text-[#1c1c19]">2–4 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#705951]">Recipient</span>
                <span className="font-medium text-[#1c1c19]">{fullName} ({phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#705951]">Shipping To</span>
                <span className="font-medium text-[#1c1c19] text-right truncate max-w-[200px]">
                  {address}, {city}, {province}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#705951]">Payment</span>
                <span className="font-semibold text-[#93461d] uppercase">
                  {paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'GCash / Maya QR'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#e5e2dd] font-bold">
                <span className="text-[#1c1c19]">Amount Due</span>
                <span className="font-serif text-[15px] text-[#93461d]">
                  ₱{total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-white font-semibold text-[14px] cursor-pointer shadow-md transition-transform active:scale-[0.98]"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <div className="flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#f0ede9] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-[20px] font-bold text-[#1c1c19]">
                  Checkout Order
                </h3>
                <span className="text-[12px] text-[#705951]">
                  Direct from Dad’s Cocoa Farm in Maayon, Capiz
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-[#f6f3ee] text-[#1c1c19] flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleSubmit} className="overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
              {/* Delivery Details */}
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#93461d] mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                  Shipping Details (Philippines)
                </h4>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                        Mobile Number
                      </label>
                      <input
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                      Street Address / House # / Barangay
                    </label>
                    <input
                      required
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                        City / Municipality
                      </label>
                      <input
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                        Province
                      </label>
                      <input
                        required
                        value={province}
                        onChange={e => setProvince(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                      Delivery Note (Optional)
                    </label>
                    <input
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="e.g. Call upon arrival, fragile cacao"
                      className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#93461d] mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">payments</span>
                  Payment Option
                </h4>

                <div className="space-y-2">
                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#93461d] bg-[#fcdcd1]/30 text-[#1c1c19]'
                        : 'border-[#24140e]/10 bg-[#fcf9f4] hover:bg-[#f6f3ee]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'cod' ? 'border-[#93461d] bg-[#93461d]' : 'border-[#88736a]'
                      }`}>
                        {paymentMethod === 'cod' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <span className="font-semibold text-[13px] block">Cash on Delivery (COD)</span>
                        <span className="text-[11px] text-[#705951]">Pay upon delivery at your doorstep</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#705951] text-[20px]">
                      local_atm
                    </span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('gcash')}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'gcash'
                        ? 'border-[#93461d] bg-[#fcdcd1]/30 text-[#1c1c19]'
                        : 'border-[#24140e]/10 bg-[#fcf9f4] hover:bg-[#f6f3ee]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'gcash' ? 'border-[#93461d] bg-[#93461d]' : 'border-[#88736a]'
                      }`}>
                        {paymentMethod === 'gcash' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <span className="font-semibold text-[13px] block">GCash / Maya QR</span>
                        <span className="text-[11px] text-[#705951]">Instant e-wallet transfer</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#705951] text-[20px]">
                      qr_code_2
                    </span>
                  </label>
                </div>
              </div>

              {/* Order Summary mini table */}
              <div className="p-3.5 rounded-xl bg-[#f6f3ee] border border-[#24140e]/5 text-[13px] space-y-1.5">
                <div className="flex justify-between text-[#55433b]">
                  <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                  <span>₱{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#55433b]">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₱${shipping}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#44634f]">
                    <span>Discount</span>
                    <span>-₱{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-[#e5e2dd] font-bold text-[15px] text-[#1c1c19]">
                  <span className="font-serif">Total to Pay</span>
                  <span className="font-serif text-[#93461d]">₱{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-white font-bold text-[14px] shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                Confirm &amp; Place Order (₱{total.toLocaleString()})
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
