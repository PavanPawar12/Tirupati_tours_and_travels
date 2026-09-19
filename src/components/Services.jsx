import { motion } from 'framer-motion';
import { MapPin, Route, Plane, Palmtree, Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SERVICES, BUSINESS } from '../data/site';

const ICONS = { MapPin, Route, Plane, Palmtree, Users, Briefcase };

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything from airport drops to full yatra planning"
          desc="One call covers the car, the driver, the route plan and the fare — no apps, no surge, no confusion."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || MapPin;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group rounded-3xl border border-slate-150 bg-slate-50 hover:bg-[#0B1F3A] p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 border-slate-200"
              >
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 grid place-items-center shadow-sm group-hover:bg-brand-600 group-hover:border-brand-600 transition">
                  <Icon size={21} className="text-brand-600 group-hover:text-white transition" />
                </span>
                <h3 className="mt-4 font-extrabold text-ink-900 text-[17px] group-hover:text-white transition">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600 group-hover:text-slate-300 transition">{s.desc}</p>
                <ul className="mt-3.5 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[13px] font-semibold text-slate-700 group-hover:text-slate-200">
                      <Check size={14} className="text-green-600 group-hover:text-green-400 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={BUSINESS.primaryWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-extrabold text-brand-700 group-hover:text-amber-300"
                >
                  Enquire on WhatsApp <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
