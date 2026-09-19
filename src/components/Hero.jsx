import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Star, Clock, BadgeCheck } from 'lucide-react';
import { BUSINESS, HERO_BG } from '../data/site';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-[#081426]">
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Lonavala green hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081426]/95 via-[#081426]/75 to-[#081426]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-[#081426]/40" />
        <div className="absolute inset-0 texture-dots opacity-30" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur text-[12px] font-bold tracking-wide text-amber-200"
          >
            <ShieldCheck size={14} />
            TRUSTED TOURS & TRAVELS · OWN ERTIGA + DZIRE FLEET
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display font-bold text-white text-4xl sm:text-5xl lg:text-[58px] leading-[1.05]"
          >
            Travel Comfortably.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-400 to-amber-200">
              Travel Confidently.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-[15px] sm:text-lg max-w-xl leading-relaxed"
          >
            Reliable travel services for local trips, outstation journeys, tours and group travel —
            our own white Ertigas & Dzire, polite verified drivers, honest upfront pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo('#booking')}
              className="px-7 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-[15px] shadow-soft transition active:scale-95"
            >
              Book Your Ride →
            </button>
            <a
              href={BUSINESS.primaryWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1eb856] text-white font-bold text-[15px] shadow-soft transition active:scale-95"
            >
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.primaryPhoneTel}
              className="px-7 py-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white font-bold text-[15px] hover:bg-white/20 transition active:scale-95 flex items-center gap-2"
            >
              <Phone size={17} /> Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-slate-300"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <b className="text-white">4.9</b> · 5000+ happy trips
            </span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-400" /> 24×7 · night trips OK</span>
            <span className="flex items-center gap-1.5"><BadgeCheck size={14} className="text-brand-400" /> MH commercial registered</span>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.04] backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            ['10+', 'Years experience'],
            ['5000+', 'Trips completed'],
            ['Own fleet', 'Ertiga + Dzire'],
            ['4.9★', 'Traveller rating'],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-white font-display font-bold text-xl sm:text-2xl">{v}</p>
              <p className="text-slate-400 text-[12px] uppercase tracking-wider font-semibold">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
