import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Info,
  Clock,
  Bed,
  Bath,
  Utensils,
  Layout,
  Sofa,
  DoorOpen,
  ShieldCheck,
  Zap,
  Star,
  Plus,
  Refrigerator,
  Sun,
  Moon,
  AlertTriangle,
} from "lucide-react";
import Navbar from "../components/Homecomponents/Navbar";
import Footer from "../components/Homecomponents/Footer";

const BookingCalculator = () => {
  // --- STATE MANAGEMENT ---
  const [selectedService, setSelectedService] = useState("regular");
  const [selectedRooms, setSelectedRooms] = useState(new Set());
  const [selectedAddons, setSelectedAddons] = useState(new Set());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("weekday-standard");

  // --- PRICING DATA ---
  const PRICING = {
    regular: 32,
    deep: 34,
    minimums: { regular: 2, deep: 3 },
    timeSurcharges: {
      "weekday-standard": 0,
      "weekday-early": 2,
      "weekday-evening": 2,
      weekend: 3,
      emergency: 8,
    },
    addons: {
      oven: 25,
      carpet: 40,
      windowInterior: 30,
      windowBoth: 50,
      fridge: 20,
    },
  };

  const ROOM_TIMES = {
    regular: {
      kitchen: 0.5,
      living: 0.4,
      dining: 0.3,
      bedroom1: 0.3,
      bedroom2: 0.3,
      bedroom3: 0.3,
      bedroom4: 0.3,
      bedroom5: 0.3,
      bathroom1: 0.3,
      bathroom2: 0.3,
      hallway: 0.2,
    },
    deep: {
      kitchen: 1.0,
      living: 0.8,
      dining: 0.6,
      bedroom1: 0.6,
      bedroom2: 0.6,
      bedroom3: 0.6,
      bedroom4: 0.6,
      bedroom5: 0.6,
      bathroom1: 0.6,
      bathroom2: 0.6,
      hallway: 0.4,
    },
  };

  const ROOM_NAMES = {
    kitchen: "Kitchen",
    living: "Living Room",
    dining: "Dining Room",
    bedroom1: "Bedroom 1",
    bedroom2: "Bedroom 2",
    bedroom3: "Bedroom 3",
    bedroom4: "Bedroom 4",
    bedroom5: "Bedroom 5",
    bathroom1: "Bathroom 1",
    bathroom2: "Bathroom 2",
    hallway: "Hallway",
  };

  const calculateHours = () => {
    if (!selectedService || selectedRooms.size === 0) return 0;
    const timeTable = ROOM_TIMES[selectedService];
    let totalHours = 0;
    selectedRooms.forEach((room) => {
      totalHours += timeTable[room] || 0;
    });
    totalHours = Math.ceil(totalHours * 2) / 2;
    const minimum = PRICING.minimums[selectedService];
    return Math.max(totalHours, minimum);
  };

  const calculateTotal = () => {
    const hours = calculateHours();
    const subtotal = hours * PRICING[selectedService];
    const surcharge = selectedTimeSlot
      ? hours * PRICING.timeSurcharges[selectedTimeSlot]
      : 0;
    let addonsTotal = 0;
    selectedAddons.forEach((addon) => {
      addonsTotal += PRICING.addons[addon] || 0;
    });
    return subtotal + surcharge + addonsTotal;
  };

  const toggleRoom = (room) => {
    const newRooms = new Set(selectedRooms);
    newRooms.has(room) ? newRooms.delete(room) : newRooms.add(room);
    setSelectedRooms(newRooms);
  };

  const toggleAddon = (addon) => {
    const newAddons = new Set(selectedAddons);
    newAddons.has(addon) ? newAddons.delete(addon) : newAddons.add(addon);
    setSelectedAddons(newAddons);
  };

  const total = calculateTotal();
  const hours = calculateHours();

  return (
    <div className="font-jakarta bg-[#fcfdfe] min-h-screen">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="bg-white py-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#1e293b] uppercase tracking-tighter mb-6">
            Price <span className="text-[#448cff]">Calculator</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Select your service, rooms, and preferred time. See your price
            instantly with our transparent quote engine.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* --- LEFT: CONFIGURATION --- */}
        <div className="lg:col-span-8 space-y-24">
          {/* 1. Service Selection */}
          <SectionWrapper number="01" title="Choose Your Service">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <ServiceCard
                active={selectedService === "regular"}
                onClick={() => setSelectedService("regular")}
                title="Regular Cleaning"
                price="£32/hour"
                desc="Perfect for routine maintenance. Keeps your home fresh and tidy with consistent care."
              />
              <ServiceCard
                active={selectedService === "deep"}
                onClick={() => setSelectedService("deep")}
                title="Deep Cleaning"
                price="£34/hour"
                desc="Thorough, intensive clean. Every corner and every detail sanitized to the highest standard."
              />
            </div>
          </SectionWrapper>

          {/* 2. Room Selection */}
          <SectionWrapper number="02" title="Select Rooms to Clean">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
              {Object.entries(ROOM_NAMES).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => toggleRoom(key)}
                  className={`p-6 border rounded-sm transition-all flex flex-col items-center gap-4 ${
                    selectedRooms.has(key)
                      ? "border-[#448cff] bg-blue-50/50 text-[#448cff] shadow-sm"
                      : "border-slate-300 text-slate-500 bg-white hover:border-slate-400 hover:text-slate-700"
                  }`}
                >
                  {key.includes("bedroom") ? (
                    <Bed size={22} />
                  ) : key === "kitchen" ? (
                    <Utensils size={22} />
                  ) : key === "living" ? (
                    <Sofa size={22} />
                  ) : key === "dining" ? (
                    <Layout size={22} />
                  ) : key.includes("bathroom") ? (
                    <Bath size={22} />
                  ) : (
                    <DoorOpen size={22} />
                  )}
                  <span className="text-[11px] font-black uppercase tracking-[0.1em]">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </SectionWrapper>

          {/* 3. Add Extra Services */}
          <SectionWrapper number="03" title="Add Extra Services (Optional)">
            <div className="grid grid-cols-1 gap-4 mt-8">
              <AddonCard
                active={selectedAddons.has("oven")}
                onClick={() => toggleAddon("oven")}
                title="Oven Deep Clean"
                desc="Complete oven interior and exterior cleaning to remove burnt-on grease."
                price="25"
              />
              <AddonCard
                active={selectedAddons.has("carpet")}
                onClick={() => toggleAddon("carpet")}
                title="Carpet Steam Cleaning"
                desc="Professional high-pressure steam cleaning to refresh fibers and remove stains."
                price="40"
              />
              <AddonCard
                active={selectedAddons.has("windowInterior")}
                onClick={() => toggleAddon("windowInterior")}
                title="Window Cleaning (Interior)"
                desc="Detailed streak-free cleaning of all internal glass surfaces."
                price="30"
              />
              <AddonCard
                active={selectedAddons.has("windowBoth")}
                onClick={() => toggleAddon("windowBoth")}
                title="Window Cleaning (Interior + Exterior)"
                desc="Complete clarity for all windows, handled inside and out."
                price="50"
              />
              <AddonCard
                active={selectedAddons.has("fridge")}
                onClick={() => toggleAddon("fridge")}
                title="Fridge Deep Clean"
                desc="Complete interior fridge sanitization, including all shelves and drawers."
                price="20"
              />
            </div>
          </SectionWrapper>

          {/* 4. Time Slots */}
          <SectionWrapper number="04" title="Choose Your Time Slot">
            <div className="grid grid-cols-1 gap-4 mt-8">
              <TimeCard
                active={selectedTimeSlot === "weekday-standard"}
                onClick={() => setSelectedTimeSlot("weekday-standard")}
                title="Weekday Standard Hours"
                rate="Standard Rate"
                time="Monday-Friday, 9:00 AM - 5:00 PM"
                icon={<Clock size={20} />}
              />
              <TimeCard
                active={selectedTimeSlot === "weekday-early"}
                onClick={() => setSelectedTimeSlot("weekday-early")}
                title="Weekday Early Morning"
                rate="+£2/hour"
                time="Monday-Friday, 7:00 AM - 9:00 AM"
                icon={<Sun size={20} />}
              />
              <TimeCard
                active={selectedTimeSlot === "weekday-evening"}
                onClick={() => setSelectedTimeSlot("weekday-evening")}
                title="Weekday Evening"
                rate="+£2/hour"
                time="Monday-Friday, 5:00 PM - 8:00 PM"
                icon={<Moon size={20} />}
              />
              <TimeCard
                active={selectedTimeSlot === "weekend"}
                onClick={() => setSelectedTimeSlot("weekend")}
                title="Weekend (Saturday/Sunday)"
                rate="+£3/hour"
                time="Saturday-Sunday, 7:00 AM - 8:00 PM"
                icon={<Star size={20} />}
              />
              <TimeCard
                active={selectedTimeSlot === "emergency"}
                onClick={() => setSelectedTimeSlot("emergency")}
                title="Emergency Same-Day"
                rate="+£8/hour"
                time="Any day, subject to availability"
                icon={<AlertTriangle size={20} />}
              />
            </div>
          </SectionWrapper>
        </div>

        {/* --- RIGHT: SUMMARY SIDEBAR --- */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-black uppercase tracking-widest text-[#1e293b] mb-10 border-b border-slate-50 pb-4 text-center">
              Price Breakdown
            </h2>

            <div className="space-y-6">
              <SummaryRow
                label="Cleaning Plan"
                value={selectedService === "regular" ? "Regular" : "Deep"}
              />
              <SummaryRow
                label="Base Rate"
                value={
                  selectedService ? `£${PRICING[selectedService]}/hr` : "--"
                }
              />
              <SummaryRow
                label="Selected Areas"
                value={
                  selectedRooms.size > 0 ? `${selectedRooms.size} Rooms` : "--"
                }
              />
              <SummaryRow
                label="Estimated Time"
                value={hours > 0 ? `${hours} Hours` : "--"}
              />
              <SummaryRow
                label="Selected Slot"
                value={selectedTimeSlot.split("-").join(" ")}
              />
            </div>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-sm text-center">
              <p className="text-[11px] font-black uppercase text-slate-500 tracking-[0.2em] mb-2">
                Total Estimated Cost
              </p>
              <h3 className="text-5xl font-black text-[#1e293b]">£{total}</h3>
            </div>

            <div className="mt-10 space-y-4">
              <button className="w-full bg-[#448cff] text-white py-5 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95">
                Complete Booking
              </button>
              <div className="flex items-center gap-2 text-slate-500 justify-center font-bold text-[10px] uppercase tracking-[0.3em]">
                <ShieldCheck size={14} className="text-green-600" /> 100%
                Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- SUB-COMPONENTS ---

const SectionWrapper = ({ number, title, children }) => (
  <section className="animate-in fade-in slide-in-from-bottom-2 duration-700">
    <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
      <span className="text-xs font-black text-[#448cff] bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center border border-blue-100">
        {number}
      </span>
      <h2 className="text-lg font-black uppercase tracking-tight text-[#1e293b]">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const ServiceCard = ({ active, onClick, title, price, desc }) => (
  <div
    onClick={onClick}
    className={`p-8 border rounded-sm cursor-pointer transition-all duration-300 relative ${
      active
        ? "border-[#448cff] bg-white shadow-xl shadow-blue-100/30 ring-1 ring-[#448cff]"
        : "border-slate-300 bg-white hover:border-slate-400"
    }`}
  >
    {active && (
      <div className="absolute top-4 right-4 text-[#448cff]">
        <CheckCircle2 size={24} />
      </div>
    )}
    <h3 className="font-black uppercase text-sm text-slate-900 tracking-wide mb-1">
      {title}
    </h3>
    <p className="text-[#448cff] font-black text-2xl mb-4">{price}</p>
    <p className="text-slate-700 text-[14px] font-medium leading-relaxed">
      {desc}
    </p>
  </div>
);

const AddonCard = ({ active, onClick, title, desc, price }) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-between p-6 border rounded-sm cursor-pointer transition-all ${
      active
        ? "border-[#448cff] bg-blue-50/50 shadow-sm"
        : "border-slate-300 bg-white hover:bg-slate-50"
    }`}
  >
    <div className="flex items-center gap-6">
      <div
        className={`w-6 h-6 border rounded-sm flex items-center justify-center transition-all ${active ? "bg-[#448cff] border-[#448cff]" : "border-slate-400 bg-white"}`}
      >
        {active && (
          <CheckCircle2 size={16} className="text-white" strokeWidth={4} />
        )}
      </div>
      <div>
        <h4 className="text-[15px] font-black uppercase text-slate-800 tracking-tight">
          {title}
        </h4>
        <p className="text-[13px] text-slate-600 font-medium">{desc}</p>
      </div>
    </div>
    <span className="text-base font-black text-[#1e293b]">+£{price}</span>
  </div>
);

const TimeCard = ({ active, onClick, title, rate, time, icon }) => (
  <div
    onClick={onClick}
    className={`flex items-center p-6 border rounded-sm cursor-pointer transition-all gap-6 ${
      active
        ? "border-[#448cff] bg-white shadow-lg ring-1 ring-[#448cff]"
        : "border-slate-300 bg-white hover:border-slate-400"
    }`}
  >
    <div className={`${active ? "text-[#448cff]" : "text-slate-400"}`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-black uppercase text-sm text-slate-800 mb-1 tracking-tight">
        {title}
      </h4>
      <p className="text-[12px] text-slate-600 font-bold uppercase tracking-widest">
        {time}
      </p>
    </div>
    <span
      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${active ? "bg-[#448cff] text-white shadow-md shadow-blue-100" : "bg-slate-100 text-slate-600"}`}
    >
      {rate}
    </span>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-[11px] font-black uppercase text-slate-500 tracking-widest">
      {label}
    </span>
    <span className="text-[15px] font-black text-slate-800 text-right uppercase tracking-tighter">
      {value}
    </span>
  </div>
);

export default BookingCalculator;
