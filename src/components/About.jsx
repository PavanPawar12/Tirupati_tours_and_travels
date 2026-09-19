import { motion } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Sparkles, Fuel } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import { FLEET_REAL } from '../data/site';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="About us"
          title="Your neighbours with their own cars — not just agents"
          desc="Tirupati Tours & Travels runs its own white Ertigas and a new Dzire on Pune–Mumbai–Nashik–Shirdi routes. When you call, you talk directly to the car owner."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* photo collage of REAL cars */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-card col-span-2 h-64 sm:h-80 relative">
              <SmartImage local={FLEET_REAL[0].local} alt="Ertiga MH 12 WJ 6901" className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[12px] font-bold px-3 py-1.5 rounded-full">Our Ertiga MH 12 WJ 6901 — TIRUPATI branded</span>
            </motion.div>
            {[FLEET_REAL[1], FLEET_REAL[2]].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }} className="rounded-3xl overflow-hidden shadow-card h-44 sm:h-56 relative">
                <SmartImage local={c.local} fallback={c.fallback} alt={c.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">{c.title}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl shadow-card border border-slate-100 p-7 sm:p-9">
            <h3 className="font-display font-bold text-2xl text-ink-900">Why families trust us with yatra & airport runs</h3>
            <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
              New, pooja-blessed cars. TIRUPATI branding on every windshield. Commercial yellow plates,
              clean interiors, careful highway driving — and fares told clearly on the phone before you sit in.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                [BadgeCheck, 'Own Ertiga MH 12 WJ 6901 + new Dzire', 'No middlemen — direct owner contact on both numbers'],
                [Sparkles, 'Spotless, sanitised before every trip', 'AC checked, tyres checked, phone charger onboard'],
                [ShieldCheck, 'Verified highway + ghat drivers', 'Shirdi, Trimbak, Lonavala & Mumbai routes by heart'],
                [Fuel, 'Honest per-km billing', 'Toll/parking at actuals. Night-halt told upfront, never hidden'],
              ].map(([Icon, t, d]) => (
                <li key={t} className="flex gap-3.5">
                  <span className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100 grid place-items-center shrink-0">
                    <Icon size={19} className="text-brand-600" />
                  </span>
                  <span>
                    <b className="block text-ink-900 text-[15px]">{t}</b>
                    <span className="text-[13.5px] text-slate-500">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:+919307220512" className="px-6 py-3 rounded-full bg-brand-600 text-white font-bold text-sm hover:bg-brand-500 transition">Call Owner Directly</a>
              <a href="#vehicles" className="px-6 py-3 rounded-full border-2 border-slate-200 font-bold text-sm text-ink-900 hover:border-brand-400 transition">See Our Cars ↓</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
