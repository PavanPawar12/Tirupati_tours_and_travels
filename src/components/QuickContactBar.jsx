import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '../data/site';

const ITEMS = [
  { icon: Phone, label: 'Call Now', sub: BUSINESS.primaryPhoneDisplay, href: BUSINESS.primaryPhoneTel, bg: 'bg-brand-600 hover:bg-brand-500' },
  { icon: MessageCircle, label: 'WhatsApp', sub: 'Instant reply', href: BUSINESS.primaryWhatsApp, bg: 'bg-[#25D366] hover:bg-[#1eb856]' },
  { icon: MapPin, label: 'Get Directions', sub: 'Google Maps', href: BUSINESS.mapsLink, bg: 'bg-[#0B1F3A] hover:bg-slate-800' },
  { icon: Mail, label: 'Email Us', sub: 'Quick quote', href: `mailto:${BUSINESS.email}`, bg: 'bg-white hover:bg-slate-50 !text-ink-900 border border-slate-200' },
];

export default function QuickContactBar() {
  return (
    <section className="relative z-10 -mt-0 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {ITEMS.map((it, i) => (
          <motion.a
            key={it.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            href={it.href}
            target={it.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className={`${it.bg} rounded-2xl px-4 py-3.5 flex items-center gap-3 text-white shadow-card transition active:scale-[0.98]`}
          >
            <span className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 ${it.label === 'Email Us' ? 'bg-slate-100 text-ink-900' : 'bg-white/20'}`}>
              <it.icon size={20} />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-[15px]">{it.label}</span>
              <span className={`block text-[12px] ${it.label === 'Email Us' ? 'text-slate-500' : 'text-white/80'} truncate max-w-[150px] sm:max-w-[200px]`}>{it.sub}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
