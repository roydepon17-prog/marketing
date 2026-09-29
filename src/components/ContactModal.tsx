import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('Bulk Gifting / Corporate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#24140e]/10 my-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-[#f0ede9] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-[20px] font-bold text-[#1c1c19]">
              Contact Dad’s Farm
            </h3>
            <span className="text-[12px] text-[#705951]">
              Maayon, Capiz • Single-Origin Estate
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#f6f3ee] text-[#1c1c19] flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#c8ebd2] text-[#44634f] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h4 className="font-serif text-[20px] font-bold text-[#1c1c19]">
              Message Received!
            </h4>
            <p className="text-[13px] text-[#55433b] mt-1">
              Dad and our estate team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5">
            <div className="p-3 rounded-xl bg-[#f6f3ee] text-[12px] text-[#55433b] space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#1c1c19]">
                <span className="material-symbols-outlined text-[16px] text-[#93461d]">location_on</span>
                <span>Barangay Tuburan, Maayon, Capiz, Western Visayas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#93461d]">call</span>
                <span>+63 (036) 621-8890 / 0917-555-CACAO</span>
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#55433b] mb-1">Inquiry Purpose</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
              >
                <option value="Bulk Gifting / Corporate">Bulk Gifting &amp; Custom Orders</option>
                <option value="Farm Visit Booking">Private Farm Visit &amp; Workshop</option>
                <option value="Distribution / Wholesale">Distribution &amp; Retail Partnerships</option>
                <option value="General Question">General Inquiry / Feedback</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-medium text-[#55433b] mb-1">Your Name</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  placeholder="Maria Cruz"
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#55433b] mb-1">Email or Phone</label>
                <input
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  placeholder="maria@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#55433b] mb-1">Message</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell us what you're looking for..."
                className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-white font-bold text-[14px] shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Send Message to Dad's Farm
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
