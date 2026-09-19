export const BUSINESS = {
  name: 'Tirupati Tours & Travels',
  short: 'Tirupati Travels',
  tagline: 'Travel Comfortably. Travel Confidently.',
  email: 'dipakkaknale1215@gmail.com',
  primaryPhoneDisplay: '+91 93072 20512',
  primaryPhoneTel: 'tel:+919307220512',
  primaryWhatsApp: 'https://wa.me/919307220512?text=Hi%20Tirupati%20Tours%20%26%20Travels!%20I%20want%20to%20book%20a%20ride.',
  backupPhoneDisplay: '+91 96073 86139',
  backupPhoneTel: 'tel:+919607386139',
  backupWhatsApp: 'https://wa.me/919607386139?text=Hi%20Tirupati%20Tours%20%26%20Travels!%20I%20want%20to%20book%20a%20ride.',
  mapsLink: 'https://maps.app.goo.gl/bZV9o4R1fSPpiqUF7?g_st=aw',
  mapsEmbed: 'https://www.google.com/maps?q=Tirupati+Tours+%26+Travels&output=embed',
  hours: 'Open Daily · 6:00 AM – 11:00 PM',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

/* ---------- HERO background: Lonavala green hills ---------- */
export const HERO_BG = '/images/destinationimage/lonavala.jpg';

/* ---------- REAL FLEET — only your car photos ---------- */
export const FLEET_REAL = [
  {
    local: '/images/carimage/car3.jpeg',
    title: 'Ertiga · MH 12 WJ 6901',
    sub: 'Our flagship family MUV — TIRUPATI windshield branding',
    badge: 'Most Booked',
  },
  {
    local: '/images/carimage/car1.jpeg',
    title: 'Swift Dzire — new addition',
    sub: 'Pooja-blessed new sedan for airport drops & city rides',
    badge: 'New & Clean',
  },
  {
    local: '/images/carimage/car4.jpeg',
    title: 'Ertiga rear · MH 12 WJ 6901',
    sub: 'Commercial yellow-plate, fully documented tourist vehicle',
    badge: 'Verified',
  },
];

export const SERVICES = [
  {
    icon: 'MapPin',
    title: 'Local Trips & Sightseeing',
    desc: 'Hourly & full-day city packages for shopping, darshan, family functions and local sightseeing with flexible halts.',
    points: ['4 / 8 hr packages', 'Doorstep pickup', 'Experienced local drivers'],
  },
  {
    icon: 'Route',
    title: 'Outstation Journeys',
    desc: 'One-way drops & round trips to Shirdi, Mumbai, Pune, Nashik, Trimbakeshwar, Grishneshwar and beyond.',
    points: ['Transparent per-km pricing', 'Clean AC cars', 'No hidden charges'],
  },
  {
    icon: 'Plane',
    title: 'Airport Transfers',
    desc: 'On-time pickups & drops for Mumbai, Pune & Shirdi airports — early-morning and late-night specialists.',
    points: ['24×7 availability', 'Early-morning ready', 'Extra luggage space'],
  },
  {
    icon: 'Palmtree',
    title: 'Yatra & Tour Packages',
    desc: 'Shirdi, Tirupati Balaji, Trimbakeshwar–Nashik, Grishneshwar + Lonavala hill holidays planned end-to-end.',
    points: ['Custom itineraries', 'Hotel + cab combos', 'Group discounts'],
  },
  {
    icon: 'Users',
    title: 'Group & Wedding Travel',
    desc: 'Multiple cars together for baraat, family functions, corporate offsites and yatra groups.',
    points: ['Multi-car groups', 'Event coordination', 'Night-halt capable'],
  },
  {
    icon: 'Briefcase',
    title: 'Corporate & Daily Rental',
    desc: 'Monthly & corporate billing for staff transport, client pickups and long-term rentals with GST invoice.',
    points: ['GST billing', 'Dedicated driver', 'Priority support'],
  },
];

/* ---------- VEHICLES — only cars with real photos ---------- */
export const VEHICLES = [
  {
    name: 'Maruti Ertiga',
    type: 'MUV · 6+1 Seats · Our Flagship',
    local: '/images/carimage/car3.jpeg',
    seats: '6 + Driver',
    bags: '3–4 Bags',
    ac: 'AC',
    bestFor: 'Family trips, Shirdi & Tirupati yatra',
    price: '₹14 / km*',
    tag: 'Most Booked',
    number: 'MH 12 WJ 6901',
    features: ['TIRUPATI branded fleet', 'Pushback comfort', 'Luggage space', 'Music system'],
  },
  {
    name: 'Swift Dzire Sedan',
    type: 'Sedan · 4+1 Seats',
    local: '/images/carimage/car1.jpeg',
    seats: '4 + Driver',
    bags: '2 Bags',
    ac: 'AC',
    bestFor: 'Couples, airport drop, city ride',
    price: '₹11 / km*',
    tag: 'New Car',
    number: 'MH registered',
    features: ['Brand-new interiors', 'Silent AC', 'Phone charging', 'Boot space'],
  },
];

/* ---------- DESTINATIONS — only your 3 destination photos ---------- */
export const DESTINATIONS_FEATURED = [
  {
    name: 'Nashik',
    sub: 'Temples, Trails & Trimbakeshwar',
    local: '/images/destinationimage/nashik.jpg',
  },
  {
    name: 'Shirdi',
    sub: 'Sai Baba Pilgrimage Journey',
    local: '/images/destinationimage/shirdi_mandir.webp',
  },
  {
    name: 'Lonavala',
    sub: 'Hill Station Retreat',
    local: '/images/destinationimage/lonavala.jpg',
  },
];

export const DESTINATIONS_STRIP = [
  { name: 'Nashik', local: '/images/destinationimage/nashik.jpg' },
  { name: 'Shirdi', local: '/images/destinationimage/shirdi_mandir.webp' },
  { name: 'Lonavala', local: '/images/destinationimage/lonavala.jpg' },
  { name: 'Pune', local: '/images/destinationimage/pune.jpg' },
  { name: 'Mumbai', local: '/images/destinationimage/mumbai.jpg' },
];

export const POPULAR_ROUTES = [
  { from: 'Pune / Sinnar', to: 'Shirdi Sai Darshan', time: 'Same-day return', price: 'from ₹3,499' },
  { from: 'Pune / Sinnar', to: 'Trimbakeshwar + Nashik', time: '1 Day trip', price: 'from ₹3,999' },
  { from: 'Pune / Sinnar', to: 'Mumbai Airport', time: 'One-way drop', price: 'from ₹4,999' },
  { from: 'Pune / Sinnar', to: 'Lonavala Hill Holiday', time: '1–2 Day trip', price: 'from ₹5,999' },
  { from: 'Pune / Sinnar', to: 'Grishneshwar · Ellora', time: '2 Day tour', price: 'from ₹9,499' },
  { from: 'Pune / Sinnar', to: 'Tirupati Balaji Yatra', time: 'Custom package', price: 'On request' },
];

/* ---------- GALLERY — only your 6 photos ---------- */
export const GALLERY = [
  { local: '/images/carimage/car3.jpeg', label: 'Ertiga · MH 12 WJ 6901 — side view' },
  { local: '/images/carimage/car1.jpeg', label: 'New Dzire — pooja blessed, spotless' },
  { local: '/images/carimage/car4.jpeg', label: 'Ertiga rear — commercial tourist vehicle' },
  { local: '/images/destinationimage/shirdi_mandir.webp', label: 'Shirdi — Sai Baba pilgrimage' },
  { local: '/images/destinationimage/nashik.jpg', label: 'Nashik — Trimbakeshwar temple' },
  { local: '/images/destinationimage/lonavala.jpg', label: 'Lonavala — green hill retreats' },
];

export const TESTIMONIALS = [
  {
    name: 'Santosh Patil',
    trip: 'Shirdi – Shani Shingnapur · Ertiga MH 12 WJ 6901',
    text: 'Very polite driver, neat and clean Ertiga. Reached Shirdi on time for Kakad Aarti. Pricing was exactly as told on phone. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Priya Deshmukh',
    trip: 'Pune → Mumbai Airport Drop · Sedan',
    text: 'Booked at 10pm for a 4am airport drop. Driver arrived 15 minutes early, helped with luggage and drove safely. Truly professional service.',
    stars: 5,
  },
  {
    name: 'Rahul & Family',
    trip: 'Trimbakeshwar + Nashik · Ertiga',
    text: 'Travelled with kids and senior citizens. Comfortable seats, frequent halts, no rush. Felt like travelling with family. Will book again.',
    stars: 5,
  },
  {
    name: 'Wedding Group, Sinnar',
    trip: 'Baraat · Ertigas together',
    text: 'Managed guests across two cars for a wedding. Coordinated pickup points perfectly. Guests are still praising the arrangement.',
    stars: 5,
  },
];

export const FAQS = [
  {
    q: 'How do I book a cab?',
    a: 'Call +91 93072 20512 or tap WhatsApp Us. Share date, pickup point, destination and group size — we confirm vehicle, driver details and exact fare within minutes.',
  },
  {
    q: 'Which cars do you actually own?',
    a: 'Our own fleet is Maruti Ertiga (MH 12 WJ 6901) and a new Swift Dzire — both white, commercial-registered, TIRUPATI-branded. See real photos in Vehicles & Gallery.',
  },
  {
    q: 'What is included in the fare?',
    a: 'Vehicle, driver allowance, fuel for the decided route. Toll, state tax, parking and night halt (if any) are extra at actuals and told upfront — no hidden charges.',
  },
  {
    q: 'Do you provide one-way drops?',
    a: 'Yes. One-way drops for Mumbai, Pune, Nashik, Shirdi and nearby cities. You pay only for the decided route — ask us for the best one-way rate.',
  },
  {
    q: 'Do you do night / early-morning trips?',
    a: 'Yes — 4am airport drops, late-night returns and multi-day yatras are our specialty. Same-day bookings possible, subject to availability.',
  },
];
