import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS, NAV_LINKS } from '../data/site';

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="bg-[#060F22] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="bg-white rounded-2xl inline-block px-3 py-2"><Logo size={44} /></div>
          <p className="mt-4 text-[13.5px] leading-relaxed">
            {BUSINESS.name} — own Ertiga & Dzire fleet for local, outstation, yatra and group travel. Travel Comfortably. Travel Confidently.
          </p>
          <div className="mt-4 flex gap-2">
            <a href={BUSINESS.primaryPhoneTel} aria-label="Call" className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-brand-600 hover:text-white transition"><Phone size={17} /></a>
            <a href={BUSINESS.primaryWhatsApp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-[#25D366] hover:text-white transition"><MessageCircle size={17} /></a>
            <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" aria-label="Maps" className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-brand-600 hover:text-white transition"><MapPin size={17} /></a>
            <a href={`mailto:${BUSINESS.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-brand-600 hover:text-white transition"><Mail size={17} /></a>
          </div>
        </div>
        <div>
          <p className="text-white font-extrabold text-[14px] uppercase tracking-wider">Explore</p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] font-semibold">
            {NAV_LINKS.map((l) => (
              <li key={l.label}><button onClick={() => go(l.href)} className="hover:text-amber-300 transition">{l.label}</button></li>
            ))}
            <li><button onClick={() => go('#booking')} className="hover:text-amber-300 transition">Book / Enquire</button></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold text-[14px] uppercase tracking-wider">Top routes</p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] font-semibold">
            {['Shirdi Sai Darshan', 'Trimbakeshwar + Nashik', 'Mumbai Airport Drop', 'Lonavala · Mahabaleshwar', 'Tirupati Balaji Yatra'].map((r) => (
              <li key={r}>
                <a href={`https://wa.me/919307220512?text=${encodeURIComponent(`Hi! Quote for ${r} please.`)}`} target="_blank" rel="noreferrer" className="hover:text-amber-300 transition">{r}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold text-[14px] uppercase tracking-wider">Contact</p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] font-semibold">
            <li><a href={BUSINESS.primaryPhoneTel} className="text-white hover:text-amber-300">{BUSINESS.primaryPhoneDisplay}</a> <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full ml-1">Primary</span></li>
            <li><a href={BUSINESS.backupPhoneTel} className="hover:text-amber-300">{BUSINESS.backupPhoneDisplay}</a> <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full ml-1">Backup</span></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-amber-300 break-all">{BUSINESS.email}</a></li>
            <li><a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="hover:text-amber-300 underline underline-offset-2">View Location on Google Maps</a></li>
            <li className="text-slate-500">{BUSINESS.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px]">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-slate-500">Ertiga MH 12 WJ 6901 · Dzire · Innova · Traveller · Bus — Toll/parking extra at actuals.</p>
        </div>
      </div>
    </footer>
  );
}
