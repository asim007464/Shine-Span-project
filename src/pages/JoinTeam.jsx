import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Clock,
  Shield,
  CheckCircle2,
  ChevronDown,
  ArrowLeft,
  Save,
  Check,
  ShieldCheck,
  FileText,
} from "lucide-react";
import Navbar from "../components/Homecomponents/Navbar";
import Footer from "../components/Homecomponents/Footer";

const JoinTeam = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // --- Form State ---
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    gender: "",
    mobile: "",
    email: "",
    postcode: "",
    experienceLevel: "",
    experienceTypes: [],
    availability: {
      Monday: { enabled: true, time: "" },
      Tuesday: { enabled: true, time: "" },
      Wednesday: { enabled: false, time: "" },
      Thursday: { enabled: false, time: "" },
      Friday: { enabled: false, time: "" },
      Saturday: { enabled: false, time: "" },
      Sunday: { enabled: false, time: "" },
    },
    eligibility: {
      rightToWork: false,
      bankAccount: false,
      selfEmployed: false,
      noCriminalRecord: false,
    },
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleExperienceType = (type) => {
    setFormData((prev) => ({
      ...prev,
      experienceTypes: prev.experienceTypes.includes(type)
        ? prev.experienceTypes.filter((t) => t !== type)
        : [...prev.experienceTypes, type],
    }));
  };

  const updateAvailability = (day, field, value) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], [field]: value },
      },
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-slate-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* --- LEFT SIDEBAR --- */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Join Our <span className="text-blue-600">Professional Team</span>
            </h1>
            <p className="text-slate-500 leading-relaxed font-medium">
              We are looking for self-employed Cleaners for regular clients in
              London. Work full-time or part-time.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="flex items-center font-black text-slate-900 mb-6">
              <Shield className="text-blue-600 mr-3" size={20} />
              Requirements
            </h3>
            <ul className="space-y-5">
              <FeatureItem
                icon={<Clock size={18} />}
                label="Flexible scheduling"
              />
              <FeatureItem
                icon={<MapPin size={18} />}
                label="Work in your local area"
              />
              <FeatureItem
                icon={<Phone size={18} />}
                label="Competitive hourly rates"
              />
              <FeatureItem
                icon={<User size={18} />}
                label="Professional support"
              />
            </ul>
          </div>
        </div>

        {/* --- RIGHT SIDE: Form Card --- */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-sm border border-gray-400 shadow-sm overflow-hidden">
            {/* Progress Bar */}
            <div className="p-8 border-b border-gray-200 bg-slate-50">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-black uppercase text-slate-400 tracking-widest">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm font-black text-blue-600">
                  {Math.round((step / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-black text-slate-900">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      label="First name *"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(v) => updateField("firstName", v)}
                    />
                    <Input
                      label="Middle name"
                      placeholder="William"
                      value={formData.middleName}
                      onChange={(v) => updateField("middleName", v)}
                    />
                    <Input
                      label="Surname *"
                      placeholder="Doe"
                      value={formData.surname}
                      onChange={(v) => updateField("surname", v)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500">
                        Gender (Optional)
                      </label>
                      <select
                        className="form-input"
                        value={formData.gender}
                        onChange={(e) => updateField("gender", e.target.value)}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <Input
                      label="Mobile number *"
                      placeholder="07123456789"
                      value={formData.mobile}
                      onChange={(v) => updateField("mobile", v)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email address *"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(v) => updateField("email", v)}
                    />
                    <Input
                      label="Home postcode *"
                      placeholder="SW1A 1AA"
                      value={formData.postcode}
                      onChange={(v) => updateField("postcode", v)}
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Experience */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-black text-slate-900">
                    Experience
                  </h2>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500">
                      Cleaning Experience *
                    </label>
                    <select
                      className="form-input"
                      value={formData.experienceLevel}
                      onChange={(e) =>
                        updateField("experienceLevel", e.target.value)
                      }
                    >
                      <option value="">Select experience level</option>
                      <option>Less than 6 months</option>
                      <option>More than 6 months</option>
                      <option>More than 2 years</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase text-slate-500 block">
                      Cleaning Types *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Residential",
                        "End of Tenancy",
                        "Airbnb",
                        "Commercial/Office",
                        "Other",
                      ].map((type) => (
                        <CheckboxItem
                          key={type}
                          label={type}
                          checked={formData.experienceTypes.includes(type)}
                          onToggle={() => toggleExperienceType(type)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Availability */}
              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-black text-slate-900">
                    Availability
                  </h2>
                  <p className="text-sm bg-blue-50 p-4 border border-blue-100 rounded-sm text-blue-800 font-medium">
                    Our requirement is up to 6 hours per day. Please state your
                    times (e.g., 10am - 4pm).
                  </p>
                  <div className="space-y-4">
                    {Object.keys(formData.availability).map((day) => (
                      <div
                        key={day}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-b border-gray-100 pb-4"
                      >
                        <CheckboxItem
                          label={day}
                          checked={formData.availability[day].enabled}
                          onToggle={() =>
                            updateAvailability(
                              day,
                              "enabled",
                              !formData.availability[day].enabled,
                            )
                          }
                        />
                        {formData.availability[day].enabled && (
                          <input
                            type="text"
                            placeholder="e.g. 9am - 3pm"
                            className="form-input"
                            value={formData.availability[day].time}
                            onChange={(e) =>
                              updateAvailability(day, "time", e.target.value)
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Eligibility */}
              {step === 4 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-2xl font-black text-slate-900">
                    Eligibility
                  </h2>
                  <div className="space-y-4 bg-slate-50 p-6 rounded-sm border border-gray-400">
                    <CheckboxItem
                      label="I have the right to work in the UK"
                      checked={formData.eligibility.rightToWork}
                      onToggle={() =>
                        updateField("eligibility", {
                          ...formData.eligibility,
                          rightToWork: !formData.eligibility.rightToWork,
                        })
                      }
                    />
                    <CheckboxItem
                      label="I have a UK bank account"
                      checked={formData.eligibility.bankAccount}
                      onToggle={() =>
                        updateField("eligibility", {
                          ...formData.eligibility,
                          bankAccount: !formData.eligibility.bankAccount,
                        })
                      }
                    />
                    <CheckboxItem
                      label="I understand I will be self-employed"
                      checked={formData.eligibility.selfEmployed}
                      onToggle={() =>
                        updateField("eligibility", {
                          ...formData.eligibility,
                          selfEmployed: !formData.eligibility.selfEmployed,
                        })
                      }
                    />
                    <CheckboxItem
                      label="I do not have a criminal record"
                      checked={formData.eligibility.noCriminalRecord}
                      onToggle={() =>
                        updateField("eligibility", {
                          ...formData.eligibility,
                          noCriminalRecord:
                            !formData.eligibility.noCriminalRecord,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Review */}
              {step === 5 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText size={40} />
                  </div>
                  <h2 className="text-3xl font-black">Ready to Submit?</h2>
                  <p className="text-slate-500 font-medium">
                    Please review your details before submitting your
                    application. Our team will contact you within 48 hours.
                  </p>
                  <div className="text-left bg-gray-50 p-6 rounded-sm border border-gray-400 space-y-2 text-sm">
                    <p>
                      <strong>Name:</strong> {formData.firstName}{" "}
                      {formData.surname}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>Experience:</strong> {formData.experienceLevel}
                    </p>
                  </div>
                </div>
              )}

              {/* NAVIGATION */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 py-4 border border-gray-400 rounded-sm font-bold text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={
                    step === totalSteps ? () => alert("Submitted!") : nextStep
                  }
                  className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-sm shadow-lg transition-all uppercase tracking-widest text-xs"
                >
                  {step === totalSteps ? "Submit Application" : "Next Step"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .form-input {
          @apply w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-blue-600 transition-all font-medium text-slate-700 bg-white;
        }
      `}</style>
    </div>
  );
};

// --- Sub-Components ---

const FeatureItem = ({ icon, label }) => (
  <li className="flex items-center space-x-4 text-slate-500 font-bold text-sm">
    <div className="text-blue-600">{icon}</div>
    <span>{label}</span>
  </li>
);

const Input = ({ label, placeholder, value, onChange }) => (
  <div className="space-y-2 w-full">
    <label className="text-xs font-black uppercase text-slate-500">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-input"
    />
  </div>
);

const CheckboxItem = ({ label, checked, onToggle }) => (
  <label className="flex items-center space-x-4 cursor-pointer group">
    <div
      onClick={onToggle}
      className={`w-6 h-6 rounded-sm border border-gray-400 transition-all flex items-center justify-center ${
        checked ? "bg-blue-600 border-blue-600" : "bg-white"
      }`}
    >
      {checked && <Check size={16} className="text-white" strokeWidth={4} />}
    </div>
    <span
      className={`text-[15px] font-bold ${checked ? "text-blue-600" : "text-slate-600"}`}
    >
      {label}
    </span>
  </label>
);

export default JoinTeam;
