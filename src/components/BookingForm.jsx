import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle2, CalendarDays } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { BUSINESS } from '../data/site';

const VEHICLE_OPTS = ['Ertiga (6+1) — Recommended', 'Swift Dzire Sedan (4+1)', 'Innova / Crysta (7+1)', 'Tempo Traveller (12–20)', 'Mini Bus (25–45)', 'Not sure — advise me'];

export default function BookingForm() {
  const [f, setF] = useState({
    name: '', phone: '', pickup: '', drop: '', date: '', time: '', vehicle: VEHICLE_OPTS[0], notes: '',
  });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const msg = `Hi Tirupati Tours & Travels! New booking enquiry:%0AName: ${f.name}%0APhone: ${f.phone}%0APickup: ${f.pickup}%0ADrop: ${f.drop}%0ADate: ${f.date} ${f.time}%0AVehicle: ${f.vehicle}%0ANotes: ${f.notes || '-'}`;

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi Tirupati Tours & Travels! New booking enquiry:\nName: ${f.name}\nPhone: ${f.phone}\nPickup: ${f.pickup}\nDrop: ${f.drop}\nDate: ${f.date} ${f.time}\nVehicle: ${f.vehicle}\nNotes: ${f.notes || '-'}`;
    window.open(`https://wa.me/919307220512?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const input = 'w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] font-semibold text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white';

  return (
    <section id="booking" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-brand-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Book / Enquire"
          title="Request a quotation in 30 seconds"
          desc="Fill this — it opens WhatsApp with your trip pre-typed. Or just call. We confirm fare, car & driver within minutes."
        />
        <div className="mt-10 grid lg:grid-cols-[.9fr_1.1fr] gap-6 items-stretch">
          {/* contact panel */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-[#0B1F3A] text-white p-7 sm:p-9 relative overflow-hidden">
            <div className="absolute inset-0 texture-dots opacity-20" />
            <div className="relative">
              <p className="text-[12px] font-extrabold tracking-[0.2em] text-amber-300 uppercase">Fastest response</p>
              <h3 className="font-display font-bold text-3xl mt-2">Call or WhatsApp —<br />we pick up.</h3>
              <p className="text-slate-300 text-[14px] mt-3">6 AM – 11 PM, all days. Early-morning airport & late-night returns welcome.</p>
              <div className="mt-6 space-y-3">
                <a href={BUSINESS.primaryPhoneTel} className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 hover:bg-white/20 transition">
                  <span className="w-11 h-11 rounded-xl bg-brand-600 grid place-items-center shrink-0"><Phone size={19} /></span>
                  <span><b className="block text-[16px]">{BUSINESS.primaryPhoneDisplay}</b><span className="text-[12px] text-slate-300">Primary — tap to call</span></span>
                </a>
                <a href={BUSINESS.primaryWhatsApp} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25D366] rounded-2xl px-4 py-3.5 hover:bg-[#1eb856] transition">
                  <span className="w-11 h-11 rounded-xl bg-white/20 grid place-items-center shrink-0"><MessageCircle size={19} /></span>
                  <span><b className="block text-[16px]">WhatsApp Us</b><span className="text-[12px] text-white/85">Instant fare & booking</span></span>
                </a>
                <a href={BUSINESS.backupPhoneTel} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 transition">
                  <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0"><Phone size={19} /></span>
                  <span><b className="block text-[15px]">{BUSINESS.backupPhoneDisplay}</b><span className="text-[12px] text-slate-400">Backup number</span></span>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[13px] text-slate-300">
                <CalendarDays size={15} className="text-amber-300" /> Same-day bookings possible — subject to availability.
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.form onSubmit={submit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white border border-slate-200 shadow-card p-6 sm:p-8 grid sm:grid-cols-2 gap-3.5">
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Your name *</span><input required value={f.name} onChange={set('name')} placeholder="e.g. Dipak Patil" className={`${input} mt-1`} /></label>
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Phone *</span><input required pattern="[0-9+ ]{10,15}" value={f.phone} onChange={set('phone')} placeholder="98XXXXXXXX" className={`${input} mt-1`} /></label>
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Pickup *</span><input required value={f.pickup} onChange={set('pickup')} placeholder="e.g. Sinnar / Pune" className={`${input} mt-1`} /></label>
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Drop / Destination *</span><input required value={f.drop} onChange={set('drop')} placeholder="e.g. Shirdi" className={`${input} mt-1`} /></label>
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Date *</span><input required type="date" value={f.date} onChange={set('date')} className={`${input} mt-1`} /></label>
            <label className="text-left"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Time</span><input type="time" value={f.time} onChange={set('time')} className={`${input} mt-1`} /></label>
            <label className="text-left sm:col-span-2"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Vehicle</span>
              <select value={f.vehicle} onChange={set('vehicle')} className={`${input} mt-1`}>{VEHICLE_OPTS.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className="text-left sm:col-span-2"><span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500">Notes (persons, luggage, return?)</span><textarea rows={3} value={f.notes} onChange={set('notes')} placeholder="e.g. 5 adults + 2 kids, return next day evening" className={`${input} mt-1 resize-none`} /></label>
            <button className="sm:col-span-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1eb856] text-white font-extrabold text-[15px] transition active:scale-[0.99]">
              Send Booking on WhatsApp →
            </button>
            <a href={`${BUSINESS.primaryPhoneTel}`} className="sm:col-span-2 text-center py-3 rounded-xl bg-ink-950 text-white font-extrabold text-[14px] hover:bg-brand-600 transition">Or Call {BUSINESS.primaryPhoneDisplay}</a>
            {sent && <p className="sm:col-span-2 flex items-center justify-center gap-2 text-green-700 font-bold text-[13.5px] bg-green-50 border border-green-200 rounded-xl py-2.5"><CheckCircle2 size={17} /> Opening WhatsApp… we’ll confirm your fare shortly!</p>}
            <p className="sm:col-span-2 text-center text-[11.5px] text-slate-400">No advance needed for most trips · Free cancellation up to 12 hrs before</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
