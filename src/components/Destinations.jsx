import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import { DESTINATIONS_FEATURED, DESTINATIONS_STRIP } from '../data/site';

export default function Destinations() {
  const wa = (to) =>
    `https://wa.me/919307220512?text=${encodeURIComponent(`Hi Tirupati Tours & Travels! I want a trip quote for ${to}. Date: ___, Persons: ___`)}`;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Popular destinations"
          title="Nashik · Shirdi · Lonavala & beyond"
          desc="The same circuits you loved in the reference — vineyards, pilgrimage and misty hill retreats, all driven by drivers who know every ghat."
        />

        {/* featured 3 cards (Image 5 recreation) */}
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {DESTINATIONS_FEATURED.map((d, i) => (
            <motion.a
              key={d.name}
              href={wa(d.name)}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden h-72 shadow-card hover:shadow-soft transition"
            >
              <SmartImage local={d.local} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="font-extrabold text-xl">{d.name}</p>
                <p className="text-slate-300 text-[13px] font-semibold">{d.sub}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-extrabold bg-white/15 backdrop-blur border border-white/25 px-3 py-1.5 rounded-full group-hover:bg-brand-600 group-hover:border-brand-600 transition">
                  Get trip fare <ArrowRight size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* strip (Image 6 recreation) */}
        <div className="mt-12">
          <p className="text-center text-[12px] font-extrabold tracking-[0.22em] uppercase text-teal-700">Popular routes</p>
          <h3 className="text-center font-display font-bold text-2xl sm:text-3xl text-[#0B1F3A] mt-1">Travel Across Pune & Beyond</h3>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-3 snap-x" style={{ scrollbarWidth: 'thin' }}>
            {DESTINATIONS_STRIP.map((d) => (
              <a key={d.name} href={wa(d.name)} target="_blank" rel="noreferrer" className="snap-start shrink-0 w-36 sm:w-44 text-center group">
                <span className="block w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-card">
                  <SmartImage local={d.local} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </span>
                <span className="block mt-2 text-[13px] font-bold text-ink-900 leading-tight">{d.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
