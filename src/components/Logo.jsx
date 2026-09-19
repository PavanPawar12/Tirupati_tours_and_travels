import { useState } from 'react';

/**
 * Recreation of the owner's logo:
 * gold temple gopuram + location pin, navy winding road, navy car,
 * "TIRUPATI" navy + "TOURS & TRAVEL" teal — matches Image 7.
 * If the real logo.png is uploaded to /public/images, it uses that instead.
 */
export default function Logo({ size = 46, withText = true, light = false }) {
  const [logoMissing, setLogoMissing] = useState(false);
  const showReal = !logoMissing;

  return (
    <span className="flex items-center gap-2.5">
      <span
        className="relative grid place-items-center rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm shrink-0"
        style={{ width: size, height: size }}
      >
        {showReal ? (
          <img
            src="/images/logo.png"
            alt="Tirupati Tours & Travels logo"
            className="w-full h-full object-contain p-1"
            onError={() => setLogoMissing(true)}
          />
        ) : (
          <svg viewBox="0 0 64 64" className="w-full h-full p-1.5">
            {/* temple tower */}
            <path d="M22 6h20l2 6-2 4 2 5-2 4 2 6H20l2-6-2-4 2-5-2-4z" fill="#E8A81C" />
            <rect x="20" y="4" width="24" height="3" rx="1" fill="#C77F0A" />
            {/* pin */}
            <circle cx="32" cy="17" r="6.5" fill="#fff" />
            <path d="M32 12.5c-2.5 0-4 1.8-4 3.7 0 2.8 4 6 4 6s4-3.2 4-6c0-1.9-1.5-3.7-4-3.7zm0 2.6a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" fill="#E8A81C" />
            {/* road */}
            <path d="M6 52C16 44 26 40 34 34c6-4.5 10-9 14-14" stroke="#0F2A4A" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M10 56c10-7 20-11 27-16" stroke="#0F2A4A" strokeWidth="2" strokeDasharray="4 4" fill="none" strokeLinecap="round" opacity=".55" />
            {/* car */}
            <g transform="translate(32 33)">
              <rect x="-11" y="-4" width="22" height="7" rx="3.2" fill="#0F2A4A" />
              <path d="M-6-4l3-4h7l3 4z" fill="#0F2A4A" />
              <rect x="-7.5" y="-6.4" width="5" height="2.6" rx="1" fill="#9fd8ef" />
              <circle cx="-6" cy="3.6" r="2.4" fill="#0F2A4A" />
              <circle cx="-6" cy="3.6" r="1" fill="#fff" />
              <circle cx="6" cy="3.6" r="2.4" fill="#0F2A4A" />
              <circle cx="6" cy="3.6" r="1" fill="#fff" />
            </g>
          </svg>
        )}
      </span>
      {withText && (
        <span className="leading-none">
          <span className={`block font-extrabold tracking-tight text-[17px] ${light ? 'text-white' : 'text-[#0F2A4A]'}`}>
            TIRUPATI
          </span>
          <span className="block text-[10.5px] font-bold tracking-[0.24em] text-teal-700 mt-1">
            TOURS & TRAVELS
          </span>
        </span>
      )}
    </span>
  );
}
