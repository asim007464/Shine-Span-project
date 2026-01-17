import React, { useState } from "react";
import {
  Plus,
  Minus,
  Check,
  HelpCircle,
  Clock,
  Refrigerator,
  Microwave,
  CheckCircle2,
  Calendar,
  Info,
  Lock,
  ChevronLeft,
  MapPin,
  User,
  CreditCard,
} from "lucide-react";
import Navbar from "../components/Homecomponents/Navbar";
import Footer from "../components/Homecomponents/Footer";

const Register = () => {
  const [step, setStep] = useState(1);

  // --- Centralized Form State ---
  const [formData, setFormData] = useState({
    // Step 1: Cleaning
    postcode: "",
    serviceType: "General House Cleaning",
    propertyType: "",
    bedrooms: 0,
    bathrooms: 0,
    extras: [],
    duration: 4,
    products: "I will provide",
    frequency: "Weekly",
    email: "igwereinhard@gmail.com",
    details: "",

    // Step 2: Time
    arrivalTime: "09:00",
    accessMethod: "Spare keys",
    firstCleanDate: "January 18th, 2026",

    // Step 3: Address
    firstName: "asim",
    surname: "asdf",
    phone: "030195207928",
    addressLine1: "asdfadsf",
    addressLine2: "asdfadsf",
    city: "adsffsa",
    addressPostcode: "SW1A 0AA",

    // Step 4: Payment
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const updateData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* --- 1. Progress Stepper --- */}
        <div className="flex items-center justify-center space-x-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          <StepItem label="Cleaning" status={step > 1 ? "done" : "active"} />
          <Line />
          <StepItem
            label="Time"
            status={step === 2 ? "active" : step > 2 ? "done" : "idle"}
          />
          <Line />
          <StepItem
            label="Address"
            status={step === 3 ? "active" : step > 3 ? "done" : "idle"}
          />
          <Line />
          <StepItem label="Payment" status={step === 4 ? "active" : "idle"} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* --- LEFT: Form Section --- */}
          <div className="lg:col-span-2">
            {/* STEP 1: CUSTOMISE CLEAN */}
            {step === 1 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Customise your clean
                </h1>

                <Section title="Your postcode">
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="form-input w-full md:w-2/3"
                    onChange={(e) => updateData({ postcode: e.target.value })}
                    value={formData.postcode}
                  />
                </Section>

                <Section title="Service Type *">
                  <div className="flex flex-wrap gap-3">
                    {[
                      "General House Cleaning",
                      "Deep Cleaning",
                      "Carpet Cleaning",
                      "Oven Cleaning",
                      "Pressure Washing",
                      "Gutter Cleaning",
                      "Office Cleaning",
                      "End of Tenancy Cleaning",
                      "Airbnb Cleaning",
                    ].map((opt) => (
                      <Chip
                        key={opt}
                        label={opt}
                        active={formData.serviceType === opt}
                        onClick={() => updateData({ serviceType: opt })}
                      />
                    ))}
                  </div>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Section title="How many bedrooms?">
                    <Counter
                      value={formData.bedrooms}
                      onChange={(v) => updateData({ bedrooms: v })}
                      label="bedrooms"
                    />
                  </Section>
                  <Section title="How many bathrooms?">
                    <Counter
                      value={formData.bathrooms}
                      onChange={(v) => updateData({ bathrooms: v })}
                      label="bathrooms"
                    />
                  </Section>
                </div>

                <Section title="Extra Tasks">
                  <div className="grid grid-cols-2 gap-4">
                    <ExtraCard
                      label="Inside fridge"
                      icon={<Refrigerator size={32} />}
                      active={formData.extras.includes("fridge")}
                      onClick={() =>
                        updateData({
                          extras: formData.extras.includes("fridge")
                            ? formData.extras.filter((e) => e !== "fridge")
                            : [...formData.extras, "fridge"],
                        })
                      }
                    />
                    <ExtraCard
                      label="Inside oven"
                      icon={<Microwave size={32} />}
                      active={formData.extras.includes("oven")}
                      onClick={() =>
                        updateData({
                          extras: formData.extras.includes("oven")
                            ? formData.extras.filter((e) => e !== "oven")
                            : [...formData.extras, "oven"],
                        })
                      }
                    />
                  </div>
                </Section>

                <Section
                  title="How many hours?"
                  subtitle="Minimum duration is 2 hours."
                >
                  <div className="grid grid-cols-4 gap-4">
                    {[2, 4, 6, 8].map((h) => (
                      <button
                        key={h}
                        onClick={() => updateData({ duration: h })}
                        className={`p-4 rounded-xl border-2 font-bold transition-all ${
                          formData.duration === h
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-slate-200 text-slate-400"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </Section>

                <Section title="How often?">
                  <div className="space-y-4">
                    <FrequencyCard
                      title="Recurring"
                      active={formData.frequency === "Weekly"}
                      onClick={() => updateData({ frequency: "Weekly" })}
                      bullets={[
                        "Get a 5-star clean weekly",
                        "Same cleaner every time",
                        "Flexible & commitment-free",
                      ]}
                    />
                    <FrequencyCard
                      title="One-off deep clean"
                      active={formData.frequency === "One-off"}
                      onClick={() => updateData({ frequency: "One-off" })}
                      bullets={["Ideal for big cleans", "Cleans on demand"]}
                    />
                  </div>
                </Section>

                <Section title="Email">
                  <input
                    type="email"
                    value={formData.email}
                    className="form-input w-full"
                    onChange={(e) => updateData({ email: e.target.value })}
                  />
                </Section>
              </div>
            )}

            {/* STEP 2: TIME & ACCESS */}
            {step === 2 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                <h1 className="text-3xl font-extrabold text-slate-900">
                  What time would you like your cleaner to arrive?
                </h1>
                <div className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-center font-medium text-slate-500">
                  Daytime 09:00 - 17:00
                </div>

                <div className="space-y-8">
                  <TimeGrid
                    label="Morning arrival"
                    times={["08:00", "09:00", "10:00", "11:00"]}
                    selected={formData.arrivalTime}
                    onSelect={(t) => updateData({ arrivalTime: t })}
                  />
                  <TimeGrid
                    label="Afternoon arrival"
                    times={["12:00", "13:00", "14:00", "15:00"]}
                    selected={formData.arrivalTime}
                    onSelect={(t) => updateData({ arrivalTime: t })}
                  />
                </div>

                <Section title="How can your cleaner access the property?">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Spare keys",
                      "Someone at home",
                      "Concierge",
                      "Key safe",
                      "Key hidden",
                    ].map((m) => (
                      <button
                        key={m}
                        onClick={() => updateData({ accessMethod: m })}
                        className={`p-5 text-left border-2 rounded-xl font-semibold transition-all ${
                          formData.accessMethod === m
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </Section>

                <Section title="When would you like your first clean?">
                  <div className="relative">
                    <Calendar
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={formData.firstCleanDate}
                      className="form-input w-full pl-12"
                      onChange={(e) =>
                        updateData({ firstCleanDate: e.target.value })
                      }
                    />
                  </div>
                </Section>
              </div>
            )}

            {/* STEP 3: ADDRESS DETAILS */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h1 className="text-3xl font-extrabold text-slate-900">
                  Address details
                </h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      className="form-input w-full"
                      onChange={(e) =>
                        updateData({ firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">
                      Surname *
                    </label>
                    <input
                      type="text"
                      value={formData.surname}
                      className="form-input w-full"
                      onChange={(e) => updateData({ surname: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    className="form-input w-full"
                    onChange={(e) => updateData({ phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    value={formData.addressLine1}
                    className="form-input w-full"
                    onChange={(e) =>
                      updateData({ addressLine1: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.addressLine2}
                    className="form-input w-full"
                    onChange={(e) =>
                      updateData({ addressLine2: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    className="form-input w-full"
                    onChange={(e) => updateData({ city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Postcode
                  </label>
                  <input
                    type="text"
                    value={formData.addressPostcode}
                    className="form-input w-full bg-slate-50"
                    onChange={(e) =>
                      updateData({ addressPostcode: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* STEP 4: PAYMENT */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start space-x-3 text-sm text-blue-700">
                  <Info size={20} className="shrink-0 mt-0.5" />
                  <p>You can edit, reschedule or cancel your cleans anytime.</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex items-start space-x-3 text-sm text-green-700">
                  <Lock size={20} className="shrink-0 mt-0.5" />
                  <p>
                    We use <strong>Stripe</strong> for secure payments. It is
                    one of the world's best payment platforms, ensuring your
                    data is protected.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="form-input w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="form-input w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="form-input w-full"
                      />
                    </div>
                  </div>
                  <label className="flex items-start space-x-3 group cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600"
                    />
                    <span className="text-sm text-slate-500 leading-relaxed">
                      I accept the terms and conditions, have read the privacy
                      policy...
                    </span>
                  </label>
                  <div className="w-48 h-16 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-xs text-slate-400">
                    Captcha Placeholder
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* --- RIGHT: Summary Sidebar --- */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Summary</h2>
              <div className="space-y-5">
                <SummaryRow label="Service" value={formData.serviceType} />
                <SummaryRow
                  label="Duration"
                  value={`${formData.duration} hours`}
                />
                <SummaryRow label="Frequency" value={formData.frequency} />

                {step >= 3 && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Address
                    </p>
                    <p className="text-sm text-slate-700 leading-tight">
                      {formData.addressLine1}, {formData.addressLine2}
                      <br />
                      {formData.city}, {formData.addressPostcode}
                    </p>
                  </div>
                )}

                {step === 4 && (
                  <div className="pt-6 flex justify-between items-center text-xl font-bold border-t border-slate-100">
                    <span>Total</span>
                    <span className="text-blue-600">£100.00</span>
                  </div>
                )}
              </div>

              <div className="mt-10 flex gap-3">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 py-4 rounded-xl font-bold transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={nextStep}
                  className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-100"
                >
                  {step === 4 ? "Complete" : "Continue"}
                </button>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="w-full mt-6 text-red-500 text-sm font-semibold hover:underline"
              >
                Clear Form
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Embedded CSS for form inputs */}
      <style>{`
        .form-input { @apply p-3.5 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

// --- Modular Sub-Components ---

const StepItem = ({ label, status }) => (
  <div className="flex items-center space-x-2 shrink-0">
    {status === "done" ? (
      <div className="bg-blue-600 rounded-full p-1">
        <Check size={12} className="text-white" />
      </div>
    ) : (
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
          status === "active"
            ? "border-blue-600 text-blue-600"
            : "border-slate-300 text-slate-300"
        }`}
      />
    )}
    <span
      className={`text-sm font-bold ${
        status === "active" ? "text-blue-600" : "text-slate-400"
      }`}
    >
      {label}
    </span>
  </div>
);

const Line = () => <div className="w-12 h-px bg-slate-200 hidden md:block" />;

const Section = ({ title, subtitle, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    {subtitle && (
      <p className="text-sm text-slate-500 leading-relaxed">{subtitle}</p>
    )}
    <div className="pt-1">{children}</div>
  </div>
);

const Chip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
      active
        ? "bg-blue-50 border-blue-600 text-blue-600 ring-1 ring-blue-600"
        : "border-slate-200 text-slate-500 hover:border-slate-300"
    }`}
  >
    {label}
  </button>
);

const Counter = ({ value, onChange, label }) => (
  <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl">
    <button
      onClick={() => onChange(Math.max(0, value - 1))}
      className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"
    >
      <Minus size={18} />
    </button>
    <span className="font-bold text-slate-700">
      {value} {label}
    </span>
    <button
      onClick={() => onChange(value + 1)}
      className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"
    >
      <Plus size={18} />
    </button>
  </div>
);

const ExtraCard = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center p-8 border-2 rounded-2xl transition-all space-y-4 ${
      active
        ? "border-blue-600 bg-blue-50/50"
        : "border-slate-100 hover:border-slate-200"
    }`}
  >
    <div className={active ? "text-blue-600" : "text-slate-300"}>{icon}</div>
    <span className="font-bold text-slate-700">{label}</span>
  </button>
);

const FrequencyCard = ({ title, active, onClick, bullets }) => (
  <div
    onClick={onClick}
    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
      active ? "border-blue-600" : "border-slate-100 hover:border-slate-200"
    }`}
  >
    <div className="flex justify-between mb-4 font-bold">
      <h4>{title}</h4>
      <span>£100.00</span>
    </div>
    <ul className="space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-center text-sm text-slate-500">
          <Check size={14} className="text-blue-500 mr-2" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const TimeGrid = ({ label, times, selected, onSelect }) => (
  <div className="space-y-4">
    <p className="text-xs font-black uppercase text-slate-400 tracking-wider">
      {label}
    </p>
    <div className="grid grid-cols-4 gap-3">
      {times.map((t) => (
        <button
          key={t}
          onClick={() => onSelect(t)}
          className={`py-3 border-2 rounded-xl text-sm font-bold transition-all ${
            selected === t
              ? "border-blue-600 bg-blue-50 text-blue-600"
              : "border-slate-100 text-slate-400 hover:border-slate-200"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between items-start text-sm gap-4">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className="font-bold text-slate-800 text-right">{value || "-"}</span>
  </div>
);

export default Register;
