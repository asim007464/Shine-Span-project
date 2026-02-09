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
  ChevronRight,
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

      {/* --- SECTION HEADER --- */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] mb-4 uppercase tracking-tight">
            Our <span className="text-[#448cff]">Pricing</span> Guide
          </h2>
          <div className="w-20 h-1.5 bg-[#448cff] mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Transparent, simple, and honest rates. No hidden costs—just
            exceptional cleaning services tailored to your specific timing and
            needs.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* --- 1. CORE SERVICES (REDESIGNED HORIZONTAL) --- */}
        <section className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <PricingCard
              icon={<Sparkles size={28} />}
              title="Regular Cleaning"
              price="32"
              desc="Perfect for routine maintenance. Keeps your home fresh and tidy with regular upkeep."
              items={[
                "Dusting & Surface Polishing",
                "Vacuuming & Mopping",
                "Kitchen & Bathroom",
                "General Tidying",
              ]}
            />
            <PricingCard
              icon={<Zap size={28} />}
              title="Deep Cleaning"
              price="34"
              desc="Intensive restoration clean. Every corner and every detail sanitized to the highest standard."
              items={[
                "Deep Scrubbing",
                "Inside Cabinets & Drawers",
                "Hard-to-reach areas",
                "Full Sanitization",
              ]}
              highlight
            />
          </div>
        </section>

        {/* --- 2. SURCHARGES --- */}
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
              desc="Monday to Friday morning cleaning slots."
              fee="+£2/hr"
            />
            <FeatureCard
              icon={<Moon size={24} />}
              title="Evening Clean"
              desc="After-work slots for busy professionals."
              fee="+£2/hr"
            />
            <FeatureCard
              icon={<CalendarDays size={24} />}
              title="Weekend"
              desc="Saturday and Sunday flexible cleaning."
              fee="+£3/hr"
            />
            <FeatureCard
              icon={<AlertTriangle size={24} />}
              title="Emergency"
              desc="Same-day cleaning subject to availability."
              fee="+£8/hr"
              urgent
            />
          </div>
        </section>

        {/* --- 3. ADD-ON SERVICES --- */}
        <section className="space-y-16">
          <div className="text-center">
            <h3 className="text-3xl font-black uppercase text-[#1e293b] tracking-tight">
              Add-On <span className="text-[#448cff]">Services</span>
            </h3>
            <div className="w-20 h-1.5 bg-[#448cff] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AddonCard
              icon={<Flame size={24} />}
              title="Oven Deep Clean"
              price="£25"
              desc="Complete interior and exterior oven cleaning. Removes baked-on grease."
            />
            <AddonCard
              icon={<Layers size={24} />}
              title="Carpet Steam"
              price="£40"
              desc="Professional steam cleaning per room. Removes deep stains and fibers."
            />
            <AddonCard
              icon={<Wind size={24} />}
              title="Window (Internal)"
              price="£30"
              desc="All interior windows cleaned to a streak-free shine."
            />
            <AddonCard
              icon={<Droplets size={24} />}
              title="Window (Full)"
              price="£50"
              desc="Complete window cleaning service, inside and outside."
            />
            <AddonCard
              icon={<Refrigerator size={24} />}
              title="Fridge Deep Clean"
              price="£20"
              desc="Complete interior fridge cleaning. Includes shelves and seals."
            />
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-xl shadow-blue-100/50">
          <h2 className="text-3xl font-black text-[#1e293b] uppercase mb-6 tracking-tight">
            Ready for a <span className="text-[#448cff]">Spotless</span> Home?
          </h2>
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

// --- REDESIGNED PRICING CARD (HORIZONTAL) ---
const PricingCard = ({ icon, title, price, desc, items, highlight }) => (
  <div
    className={`flex flex-col md:flex-row bg-white rounded-2xl border transition-all duration-500 overflow-hidden group ${highlight ? "border-[#448cff] shadow-xl shadow-blue-100/30" : "border-gray-100 shadow-sm hover:shadow-md"}`}
  >
    {/* Left Part: Price Badge */}
    <div
      className={`md:w-1/3 p-10 flex flex-col items-center justify-center text-center gap-4 ${highlight ? "bg-blue-50/50" : "bg-slate-50/50"}`}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 ${highlight ? "bg-[#448cff] text-white" : "bg-white border border-gray-200 text-[#448cff]"}`}
      >
        {icon}
      </div>
      <div>
        <div className="text-4xl font-black text-[#1e293b]">
          £{price}
          <span className="text-sm text-slate-400">/hr</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-[#448cff] mt-1">
          Starting Rate
        </p>
      </div>
    </div>

    {/* Right Part: Content */}
    <div className="md:w-2/3 p-10 flex flex-col justify-center">
      <h3 className="text-2xl font-black text-[#1e293b] uppercase tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-slate-500 font-medium mb-8 leading-relaxed text-[15px]">
        {desc}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 border-t border-slate-100 pt-8">
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-xs font-black uppercase text-slate-700 tracking-tight"
          >
            <CheckCircle2 size={16} className="text-[#448cff]" /> {i}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, fee, urgent }) => (
  <div
    className={`bg-white p-10 rounded-2xl border transition-all duration-300 group flex flex-col h-full ${"border-gray-100 shadow-sm hover:shadow-xl"}`}
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${"bg-blue-50 text-[#448cff] group-hover:bg-[#448cff] group-hover:text-white"}`}
    >
      {icon}
    </div>
    <h3 className="text-lg font-black text-[#1e293b] mb-3 uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 text-sm font-medium mb-6">{desc}</p>
    <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col">
      <span className="text-2xl font-black text-[#448cff]">{fee}</span>
      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">
        Surcharge / Hour
      </span>
    </div>
  </div>
);

const AddonCard = ({ icon, title, price, desc }) => (
  <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#448cff]/5 rounded-full blur-3xl group-hover:bg-[#448cff]/10 transition-colors"></div>
    <div className="relative mb-8">
      <div className="w-16 h-16 bg-blue-50 text-[#448cff] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#448cff] group-hover:text-white group-hover:rotate-[10deg] shadow-sm">
        {icon}
      </div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-[#448cff] rounded-full"></div>
      </div>
    </div>
    <div className="flex-1 space-y-3">
      <h4 className="text-xl font-black text-[#1e293b] uppercase tracking-tight leading-tight group-hover:text-[#448cff] transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">
        {desc}
      </p>
    </div>
    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Add-on Price
        </span>
        <span className="text-2xl font-black text-[#1e293b]">{price}</span>
      </div>
    </div>
  </div>
);

export default PricingGuide;
