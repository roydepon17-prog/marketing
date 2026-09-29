import React, { useState } from 'react';

interface FarmVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmVisitModal: React.FC<FarmVisitModalProps> = ({ isOpen, onClose }) => {
  const [session, setSession] = useState<'walk' | 'workshop' | 'tasting'>('workshop');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-15');
  const [time, setTime] = useState('09:00 AM');
  const [name, setName] = useState('Juan Santos');
  const [contact, setContact] = useState('0917-555-1234');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const sessionDetails = {
    walk: { title: 'Orchard Walk & Fresh Pod Cracking', price: 450, duration: '1.5 hrs' },
    workshop: { title: 'Tree-to-Bar Chocolate Making & Tempering', price: 1200, duration: '3.5 hrs' },
    tasting: { title: 'Sunset Cacao Flight & Barako Pairing', price: 850, duration: '2 hrs' },
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleDone = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#24140e]/10 my-6"
        onClick={e => e.stopPropagation()}
      >
        {confirmed ? (
          <div className="p-6 sm:p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#c8ebd2] text-[#44634f] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[36px]">nature_people</span>
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#93461d] font-bold">
              Reservation Requested
            </span>
            <h2 className="font-serif text-[24px] font-bold text-[#1c1c19] mt-1">
              See You at Dad's Farm!
            </h2>
            <p className="text-[13px] text-[#55433b] mt-2 max-w-sm">
              We look forward to welcoming you to Maayon, Capiz on <b>{date} at {time}</b>. Our farm host will contact <b>{contact}</b> for directions and entry pass details.
            </p>

            <div className="w-full bg-[#f6f3ee] rounded-xl p-4 my-5 text-left border border-[#24140e]/5 text-[13px] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#705951]">Experience</span>
                <span className="font-semibold text-[#1c1c19] text-right">{sessionDetails[session].title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#705951]">Party Size</span>
                <span className="font-medium text-[#1c1c19]">{guests} Guest{guests > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#705951]">Location</span>
                <span className="font-medium text-[#1c1c19]">Dad's Cocoa Farm, Maayon, Capiz</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#e5e2dd] font-bold">
                <span>Total Fee</span>
                <span className="font-serif text-[15px] text-[#93461d]">
                  ₱{(sessionDetails[session].price * guests).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-white font-semibold text-[14px] cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#f0ede9] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-[20px] font-bold text-[#1c1c19]">
                  Book an Estate Visit
                </h3>
                <span className="text-[12px] text-[#705951]">
                  Dad's Cocoa Farm • Maayon, Capiz
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-[#f6f3ee] text-[#1c1c19] flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleBook} className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
              {/* Session Picker */}
              <div>
                <label className="block text-[12px] uppercase font-bold text-[#705951] mb-2">
                  Select Immersion Type
                </label>
                <div className="space-y-2">
                  {(Object.keys(sessionDetails) as Array<keyof typeof sessionDetails>).map(key => {
                    const item = sessionDetails[key];
                    const isSelected = session === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setSession(key)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#93461d] bg-[#fcdcd1]/35'
                            : 'border-[#24140e]/10 bg-[#fcf9f4] hover:bg-[#f6f3ee]'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-[14px] font-bold text-[#1c1c19] block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-[#705951]">
                            Duration: {item.duration}
                          </span>
                        </div>
                        <span className="font-bold text-[14px] text-[#93461d]">
                          ₱{item.price}/pax
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                    Guests (Pax)
                  </label>
                  <select
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time slot */}
              <div>
                <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00 AM', '01:30 PM', '04:00 PM'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 px-2 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                        time === t
                          ? 'bg-[#93461d] text-white'
                          : 'bg-[#f6f3ee] text-[#1c1c19] hover:bg-[#ebe8e3]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                    Contact Name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] text-[#55433b] font-medium mb-1">
                    Mobile Phone
                  </label>
                  <input
                    required
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#f6f3ee] text-[13px] text-[#1c1c19] border border-[#24140e]/10 outline-none focus:ring-1 focus:ring-[#93461d]"
                  />
                </div>
              </div>

              {/* Price summary */}
              <div className="p-3 rounded-xl bg-[#f6f3ee] flex justify-between items-center text-[13px]">
                <span className="text-[#55433b]">Estimated Total ({guests} guests)</span>
                <span className="font-serif text-[16px] font-bold text-[#93461d]">
                  ₱{(sessionDetails[session].price * guests).toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-lg bg-[#93461d] hover:bg-[#7b3714] text-white font-bold text-[14px] shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                Reserve Farm Visit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
