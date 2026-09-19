import { Phone, Mail, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Logo from './Logo';
import { BUSINESS } from '../data/site';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Call, WhatsApp, or drop by"
          desc="Fastest is a phone call. For fares & photos of the exact car, WhatsApp is best."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            <Logo size={52} />
            <h3 className="mt-4 font-extrabold text-ink-900 text-xl">{BUSINESS.name}</h3>
            <p className="text-[13.5px] text-slate-500 mt-1">Own Ertiga + Dzire fleet · Outstation & yatra specialists</p>
            <div className="mt-6 space-y-4 text-[14px]">
              <a href={BUSINESS.primaryPhoneTel} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-2xl bg-brand-600 text-white grid place-items-center shrink-0"><Phone size={18} /></span>
                <span><b className="block text-ink-900 group-hover:text-brand-700">{BUSINESS.primaryPhoneDisplay} (Primary)</b><span className="text-slate-500 text-[12.5px]">Tap to call — 6 AM to 11 PM</span></span>
              </a>
              <a href={BUSINESS.backupPhoneTel} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-2xl bg-ink-950 text-white grid place-items-center shrink-0"><Phone size={18} /></span>
                <span><b className="block text-ink-900">{BUSINESS.backupPhoneDisplay} (Backup)</b><span className="text-slate-500 text-[12.5px]">If primary is busy / on-trip</span></span>
              </a>
              <a href={BUSINESS.primaryWhatsApp} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-2xl bg-[#25D366] text-white grid place-items-center shrink-0"><MessageCircle size={18} /></span>
                <span><b className="block text-ink-900">Chat on WhatsApp</b><span className="text-slate-500 text-[12.5px]">Fare quotes, car photos, live location</span></span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 group">
                <span className="w-11 h-11 rounded-2xl bg-white border border-slate-200 grid place-items-center shrink-0"><Mail size={18} className="text-brand-600" /></span>
                <span><b className="block text-ink-900 break-all">{BUSINESS.email}</b><span className="text-slate-500 text-[12.5px]">For invoices & corporate billing</span></span>
              </a>
              <p className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-white border border-slate-200 grid place-items-center shrink-0"><Clock size={18} className="text-brand-600" /></span>
                <span><b className="block text-ink-900">{BUSINESS.hours}</b><span className="text-slate-500 text-[12.5px]">Night / early-morning trips on request</span></span>
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0B1F3A] text-white font-extrabold text-[13.5px] hover:bg-brand-600 transition">
                <Navigation size={15} /> Get Directions
              </a>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 font-extrabold text-[13.5px] text-ink-900 hover:border-brand-400 transition">
                <MapPin size={15} /> View on Maps
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl overflow-hidden border border-slate-200 shadow-card min-h-[380px] relative">
            <iframe
              title="Tirupati Tours & Travels location"
              src={BUSINESS.mapsEmbed}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 hover:shadow-soft transition">
              <span className="w-10 h-10 rounded-xl bg-brand-600 text-white grid place-items-center shrink-0"><MapPin size={18} /></span>
              <span className="text-left">
                <b className="block text-ink-900 text-[13.5px]">Tirupati Tours & Travels</b>
                <span className="text-brand-700 text-[12.5px] font-bold underline underline-offset-2">Open in Google Maps →</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
