import { motion } from 'framer-motion';
import { Users, Luggage, Snowflake, Phone, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import { VEHICLES, BUSINESS } from '../data/site';

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-16 sm:py-20 bg-[#0B1F3A] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 texture-dots opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeading
          light
          eyebrow="Our fleet"
          title="Real cars. Real number plates. No surprises."
          desc="These are photos of our actual Ertiga (MH 12 WJ 6901) and Dzire — the same cars that will come to your door. Bigger vehicles arranged via trusted partners."
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {VEHICLES.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="relative h-52">
                <SmartImage local={v.local} alt={v.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                {v.tag && (
                  <span className="absolute top-3 left-3 text-[11px] font-extrabold bg-amber-400 text-[#081426] px-3 py-1 rounded-full uppercase tracking-wide">
                    {v.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 text-[11px] font-extrabold bg-white/95 text-ink-900 px-3 py-1 rounded-full">
                  {v.price}
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-extrabold text-lg leading-tight">{v.name}</p>
                  <p className="text-slate-300 text-[12px] font-semibold">{v.type} · {v.number}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-[12px] font-bold text-slate-600">
                  <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full"><Users size={13} className="text-brand-600" /> {v.seats}</span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full"><Luggage size={13} className="text-brand-600" /> {v.bags}</span>
                  <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full"><Snowflake size={13} className="text-brand-600" /> {v.ac}</span>
                </div>
                <p className="mt-3 text-[13px] text-slate-500"><b className="text-ink-900">Best for:</b> {v.bestFor}</p>
                <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                  {v.features.map((ft) => (
                    <span key={ft} className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600">
                      <Check size={13} className="text-green-600 shrink-0" /> {ft}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a href={BUSINESS.primaryPhoneTel} className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-600 text-white text-[13px] font-extrabold hover:bg-brand-500 transition">
                    <Phone size={14} /> Book
                  </a>
                  <a
                    href={`https://wa.me/919307220512?text=${encodeURIComponent(`Hi! I want to book ${v.name} (${v.type}). Date: ___, Route: ___`)}`}
                    target="_blank" rel="noreferrer"
                    className="flex items-center justify-center py-2.5 rounded-xl border-2 border-slate-200 text-[13px] font-extrabold text-ink-900 hover:border-green-500 hover:text-green-700 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 max-w-4xl mx-auto rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-200 text-[13.5px] font-semibold text-center sm:text-left">
            Need <b className="text-white">Innova, Tempo Traveller or Bus</b> for a bigger group? Arranged via trusted partners.
          </p>
          <a href={`https://wa.me/919307220512?text=${encodeURIComponent('Hi! I need Innova / Traveller / Bus for a group trip. Date: ___, Persons: ___')}}`} target="_blank" rel="noreferrer" className="shrink-0 px-5 py-2.5 rounded-full bg-amber-400 text-[#081426] text-[13px] font-extrabold hover:bg-amber-300 transition">
            Ask on WhatsApp
          </a>
        </div>
        <p className="text-center text-slate-400 text-[12.5px] mt-6">*Indicative per-km fares for round trips. Final fare confirmed on call/WhatsApp as per route, days & season.</p>
      </div>
    </section>
  );
}
