import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn, Star, Quote, ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import { GALLERY, TESTIMONIALS, FAQS } from '../data/site';

export function Gallery() {
  const [light, setLight] = useState(null);
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Gallery"
          title="Our actual cars — not stock photos"
          desc="Tap any photo to view. Once you upload your 4 car photos to public/images, they appear here automatically."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06 }}
              onClick={() => setLight(i)}
              className={`group relative rounded-2xl overflow-hidden shadow-card text-left ${i % 4 === 0 ? 'row-span-2 h-72 lg:h-[380px]' : 'h-36 lg:h-[184px]'}`}
            >
              <SmartImage local={g.local} alt={g.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11.5px] font-bold leading-tight">{g.label}</span>
              <span className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur grid place-items-center text-white opacity-0 group-hover:opacity-100 transition"><ZoomIn size={15} /></span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {light !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/85 backdrop-blur flex items-center justify-center p-4" onClick={() => setLight(null)}>
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <SmartImage local={GALLERY[light].local} alt={GALLERY[light].label} className="w-full max-h-[75vh] object-contain rounded-2xl" />
              <p className="text-center text-white font-bold mt-3 text-sm">{GALLERY[light].label}</p>
              <button onClick={() => setLight(null)} className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white grid place-items-center shadow" aria-label="Close"><X size={18} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Reviews"
          title="Families who rode with us"
          desc="Real trips in our Ertiga & Dzire — Shirdi darshan, airport drops, weddings and hill holidays."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 flex flex-col hover:shadow-card hover:-translate-y-1 transition">
              <Quote size={22} className="text-brand-300" />
              <span className="flex gap-0.5 mt-2 text-amber-500">{[...Array(t.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}</span>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600 flex-1">“{t.text}”</p>
              <div className="mt-4 pt-3 border-t border-slate-200">
                <p className="font-extrabold text-ink-900 text-[14px]">{t.name}</p>
                <p className="text-[11.5px] font-semibold text-brand-700">{t.trip}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="pb-16 sm:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading eyebrow="FAQs" title="Questions? Answered." />
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`rounded-2xl border transition ${open === i ? 'border-brand-300 bg-brand-50' : 'border-slate-200 bg-slate-50'}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-extrabold text-ink-900 text-[15px]">
                {f.q}
                <ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-slate-600">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
