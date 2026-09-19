import { useState } from 'react';
import { MapPin } from 'lucide-react';

/**
 * Local-only image from public/images.
 * If the file isn't uploaded yet, shows a premium
 * navy gradient placeholder with the place name —
 * no stock photos, nothing broken.
 */
export default function SmartImage({ local, alt = '', className = '' }) {
  const [err, setErr] = useState(false);
  if (err || !local) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-[#0B1F3A] via-[#123a5c] to-teal-800 text-white`}
        role="img"
        aria-label={alt}
      >
        <MapPin size={22} className="text-amber-300" />
        <span className="text-[11px] font-extrabold tracking-wide px-2 text-center leading-tight">
          {alt || 'Photo coming soon'}
        </span>
      </div>
    );
  }
  return (
    <img src={local} alt={alt} className={className} loading="lazy" onError={() => setErr(true)} />
  );
}
