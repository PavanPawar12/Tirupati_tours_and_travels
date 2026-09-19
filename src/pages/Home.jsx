import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickContactBar from '../components/QuickContactBar';
import About from '../components/About';
import Services from '../components/Services';
import Vehicles from '../components/Vehicles';
import Destinations from '../components/Destinations';
import { Gallery, Faq } from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

function Marquee() {
  const items = ['Shirdi Darshan', 'Tirupati Yatra', 'Mumbai Airport', 'Lonavala Holidays', 'Trimbakeshwar', 'Wedding Groups', 'Outstation 24×7'];
  const row = [...items, ...items];
  return (
    <div className="bg-amber-400 overflow-hidden py-2.5 border-y border-amber-500">
      <div className="flex gap-8 whitespace-nowrap animate-marquee w-max">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[#081426] text-[13px] font-extrabold uppercase tracking-wider">
            {t} <span className="text-[#081426]/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickContactBar />
        <Marquee />
        <About />
        <Services />
        <Vehicles />
        <Destinations />
        <Gallery />
        <BookingForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
