import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, desc, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl`}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${
          light ? 'bg-white/10 text-brand-200' : 'bg-brand-50 text-brand-700 border border-brand-100'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className={`mt-4 font-display text-3xl sm:text-4xl leading-tight font-bold ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={`mt-3 text-[15px] leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
