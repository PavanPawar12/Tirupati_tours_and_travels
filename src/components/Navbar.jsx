import { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/site';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="bg-[#0B1F3A] text-slate-300 text-[12.5px] hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2">
            <MapPin size={13} className="text-amber-400" />
            Ertiga · Dzire fleet · {BUSINESS.hours}
          </p>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.primaryPhoneTel} className="hover:text-white font-semibold">
              {BUSINESS.primaryPhoneDisplay}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-white truncate max-w-[240px]">
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-card border-b border-slate-100'
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">
            <button onClick={() => go('#home')} className="text-left" aria-label="Home">
              <Logo size={48} />
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => go(l.href)}
                  className="px-4 py-2 rounded-full text-[14px] font-semibold text-slate-600 hover:text-[#0B1F3A] hover:bg-slate-100 transition"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.primaryPhoneTel}
                className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-brand-700"
              >
                <span className="w-9 h-9 rounded-full bg-brand-50 border border-brand-100 grid place-items-center">
                  <Phone size={16} className="text-brand-600" />
                </span>
                {BUSINESS.primaryPhoneDisplay}
              </a>
              <button
                onClick={() => go('#booking')}
                className="px-5 py-2.5 rounded-full bg-[#0B1F3A] text-white text-sm font-bold hover:bg-brand-600 transition shadow-card"
              >
                Book / Enquire
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-xl border border-slate-200 bg-white"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl px-4 pb-5 pt-2 shadow-soft">
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => go(l.href)}
                  className="text-left px-3 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:text-ink-900 border-b border-slate-50 last:border-0"
                >
                  {l.label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <a
                  href={BUSINESS.primaryPhoneTel}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm"
                >
                  <Phone size={16} /> Call Now
                </a>
                <button
                  onClick={() => go('#booking')}
                  className="px-4 py-3 rounded-xl bg-[#0B1F3A] text-white font-bold text-sm"
                >
                  Book / Enquire
                </button>
              </div>
              <p className="text-center text-xs text-slate-500 mt-3">
                Backup: <a className="font-bold text-ink-900" href={BUSINESS.backupPhoneTel}>{BUSINESS.backupPhoneDisplay}</a>
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
