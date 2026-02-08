import React, { useEffect } from "react";
import {
  Check,
  Clock,
  ShieldCheck,
  Star,
  Plus,
  Wallet,
  Zap,
  Flame,
  CalendarDays,
  Sun,
  Layers,
  Wind,
  Droplets,
  Moon,
  Refrigerator,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Homecomponents/Navbar";
import Footer from "../components/Homecomponents/Footer";
import { Link } from "react-router-dom";

const PricingGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-jakarta bg-[#f8fbff] text-slate-700">
      <Navbar />

      {/* --- SECTION HEADER (Matches your image) --- */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] mb-4 uppercase tracking-tight">
            Our <span className="text-[#448cff]">Pricing</span> Guide
          </h2>
          {/* Decorative Blue Line from image */}
          <div className="w-20 h-1.5 bg-[#448cff] mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            We’re committed to providing transparent rates with reliability and
            quality at the heart of everything we do.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* --- 1. CORE SERVICES (Styled like the image cards) --- */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PricingCard
              icon={<Sparkles size={24} />}
              title="Regular Cleaning"
              price="£32/hr"
              desc="Perfect for routine maintenance. Minimum 2 hours (£64)."
              items={["Dusting", "Vacuuming", "Kitchen", "General Tidying"]}
            />
            <PricingCard
              icon={<Zap size={24} />}
              title="Deep Cleaning"
              price="£34/hr"
              desc="Intensive restoration clean. Minimum 3 hours (£102)."
              items={[
                "Deep Scrubbing",
                "Inside Cabinets",
                "Hard-to-reach areas",
              ]}
              highlight
            />
          </div>
        </section>
        {/* --- 2. SURCHARGES (4-Column Grid exactly like image) --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h3 className="text-2xl font-black uppercase text-[#1e293b]">
              Hours & Surcharges
            </h3>
            <div className="w-12 h-1 bg-[#448cff] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Sun size={24} />}
              title="Early Morning"
              desc="7am - 9am slot (+£2/hr surcharge)."
            />
            <FeatureCard
              icon={<Moon size={24} />}
              title="Evening Clean"
              desc="5pm - 8pm slot (+£2/hr surcharge)."
            />
            <FeatureCard
              icon={<CalendarDays size={24} />}
              title="Weekend"
              desc="Sat - Sun service (+£3/hr surcharge)."
            />
            <FeatureCard
              icon={<AlertTriangle size={24} />}
              title="Emergency"
              desc="Same-day booking (+£8/hr surcharge)."
            />
          </div>
        </section>
        {/* --- SECTION 3: ADD-ON SERVICES (REDESIGNED) --- */}
        <section className="space-y-16">
          {/* Centered Header with Blue Bar */}
          <div className="text-center">
            <h3 className="text-3xl font-black uppercase text-[#1e293b] tracking-tight">
              Add-On <span className="text-[#448cff]">Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-[#448cff] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-slate-500 font-medium text-lg">
              Enhance your cleaning with these optional extras:
            </p>
          </div>

          {/* 3-Column Grid for Add-ons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AddonCard
              icon={<Flame size={24} />}
              title="Oven Deep Clean"
              price="£25"
              desc="Complete interior and exterior oven cleaning. Removes baked-on grease and grime."
            />
            <AddonCard
              icon={<Layers size={24} />}
              title="Carpet Steam Cleaning"
              price="£40"
              desc="Professional steam cleaning for carpets. Removes deep stains and refreshes fibers."
              subtext="Priced per room"
            />
            <AddonCard
              icon={<Wind size={24} />}
              title="Window (Interior)"
              price="£30"
              desc="All interior windows cleaned to a streak-free shine using premium glass treatment."
            />
            <AddonCard
              icon={<Droplets size={24} />}
              title="Window (Full)"
              price="£50"
              desc="Complete window cleaning service, inside and outside, for maximum clarity."
            />
            <AddonCard
              icon={<Refrigerator size={24} />}
              title="Fridge Deep Clean"
              price="£20"
              desc="Complete interior fridge cleaning. Includes deep sanitization of shelves and seals."
            />
          </div>
        </section>
        ;{/* --- FINAL CTA --- */}
        <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-xl shadow-blue-100/50">
          <h2 className="text-3xl font-black text-[#1e293b] uppercase mb-6 tracking-tight">
            Ready for a <span className="text-[#448cff]">Spotless</span> Home?
          </h2>
          <p className="text-slate-500 mb-10 font-medium max-w-xl mx-auto">
            Get an instant estimate for your specific rooms using our automated
            tool.
          </p>
          <Link
            to="/BookingCalculator"
            className="bg-[#448cff] hover:bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95 inline-flex items-center gap-3"
          >
            Open Price Calculator <ArrowRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- SUB-COMPONENTS (Styled to match your image) ---

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 text-[#448cff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#448cff] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-black text-[#1e293b] mb-4 uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
  </div>
);

const PricingCard = ({ icon, title, price, desc, items, highlight }) => (
  <div
    className={`p-10 rounded-2xl border transition-all duration-300 group ${highlight ? "bg-white border-[#448cff] shadow-xl shadow-blue-100/50" : "bg-white border-gray-100 shadow-sm"}`}
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${highlight ? "bg-[#448cff] text-white" : "bg-blue-50 text-[#448cff]"}`}
    >
      {icon}
    </div>
    <h3 className="text-2xl font-black text-[#1e293b] mb-2 uppercase tracking-tight">
      {title}
    </h3>
    <div className="text-3xl font-black text-[#448cff] mb-4">{price}</div>
    <p className="text-slate-500 font-medium mb-8 text-sm leading-relaxed">
      {desc}
    </p>
    <ul className="space-y-3 border-t border-slate-50 pt-8">
      {items.map((i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-xs font-black uppercase text-slate-700 tracking-tight"
        >
          <CheckCircle2 size={16} className="text-[#448cff]" /> {i}
        </li>
      ))}
    </ul>
  </div>
);

// --- Updated AddonCard Sub-component (Paste this at the bottom of About.jsx or Pricing.jsx) ---

const AddonCard = ({ icon, title, price, desc, subtext }) => (
  <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col items-center text-center h-full">
    {/* Icon Container - Matches "Why Choose Us" style */}
    <div className="w-16 h-16 bg-blue-50 text-[#448cff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#448cff] group-hover:text-white transition-colors duration-500">
      {icon}
    </div>

    {/* Title & Price */}
    <h4 className="text-xl font-black text-[#1e293b] uppercase tracking-tight mb-2">
      {title}
    </h4>
    <div className="text-2xl font-black text-[#448cff] mb-4">
      {price}{" "}
      {subtext && (
        <span className="text-[10px] text-slate-300 uppercase tracking-widest block mt-1">
          {subtext}
        </span>
      )}
    </div>

    {/* Description - Keeping your wording exactly */}
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default PricingGuide;
