import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/site';

export default function FloatingButtons() {
  return (
    <>
      {/* desktop bottom-right stack */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2.5">
        <a
          href={BUSINESS.primaryWhatsApp}
          target="_blank" rel="noreferrer" aria-label="WhatsApp"
          className="wa-pulse w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-soft hover:scale-105 transition"
        >
          <MessageCircle size={26} />
        </a>
        <a
          href={BUSINESS.primaryPhoneTel} aria-label="Call"
          className="w-14 h-14 rounded-full bg-brand-600 text-white grid place-items-center shadow-soft hover:scale-105 transition"
        >
          <Phone size={24} />
        </a>
      </div>
      {/* mobile sticky bottom call bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-[60] grid grid-cols-2 gap-px bg-slate-200 border-t border-slate-200">
        <a href={BUSINESS.primaryPhoneTel} className="flex items-center justify-center gap-2 bg-brand-600 text-white font-extrabold text-[14px] py-3.5">
          <Phone size={17} /> Call Now
        </a>
        <a href={BUSINESS.primaryWhatsApp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold text-[14px] py-3.5">
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
      <div className="sm:hidden h-[52px]" />
    </>
  );
}
