import React, { useState } from "react";
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
  Calendar,
  Check,
} from "lucide-react";

const CleanerApplication = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navbar --- */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="./websitelogo.png"
              className="w-[100px]"
              alt=""
              srcset=""
            />
          </Link>
        </div>
        <Link
          to="/"
          className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* --- LEFT SIDEBAR: Info --- */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Join Our Team
            </h1>
            <p className="text-slate-500 leading-relaxed">
              We are looking for self-employed Cleaners as we have regular
              clients in your area. You can work hours, full time or part time
              according to your convenience.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="flex items-center font-black text-slate-900 mb-6">
              <Shield className="text-blue-600 mr-3" size={20} />
              Why work with us?
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
              <FeatureItem icon={<User size={18} />} label="Supportive team" />
              <FeatureItem
                icon={<CheckCircle2 size={18} />}
                label="Quick onboarding"
              />
            </ul>
          </div>
        </div>

        {/* --- RIGHT SIDE: Form Card --- */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Progress Header */}
            <div className="p-8 border-b border-slate-100">
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold text-slate-400">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm font-black text-blue-600">
                  {(step / totalSteps) * 100}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-8">
              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-900">
                      Personal Details
                    </h2>
                    <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
                      Clear Form
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      label="First name *"
                      icon={<User size={18} />}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(v) => updateField("firstName", v)}
                    />
                    <Input
                      label="Middle name"
                      icon={<User size={18} />}
                      placeholder="William"
                      value={formData.middleName}
                      onChange={(v) => updateField("middleName", v)}
                    />
                    <Input
                      label="Surname *"
                      icon={<User size={18} />}
                      placeholder="Doe"
                      value={formData.surname}
                      onChange={(v) => updateField("surname", v)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Your Gender (Optional)
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <select
                        className="w-full pl-12 pr-10 py-3 bg-white border border-slate-200 rounded-xl appearance-none focus:border-blue-600 outline-none transition-all font-medium text-slate-600"
                        onChange={(e) => updateField("gender", e.target.value)}
                      >
                        <option>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <Input
                    label="Mobile number *"
                    icon={<Phone size={18} />}
                    placeholder="07123456789"
                    value={formData.mobile}
                    onChange={(v) => updateField("mobile", v)}
                  />
                  <Input
                    label="Email address *"
                    icon={<Mail size={18} />}
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(v) => updateField("email", v)}
                  />
                  <Input
                    label="Home postcode *"
                    icon={<MapPin size={18} />}
                    placeholder="SW1A 1AA"
                    value={formData.postcode}
                    onChange={(v) => updateField("postcode", v)}
                  />
                </div>
              )}

              {/* STEP 2: Experience */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-900">
                      Experience
                    </h2>
                    <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
                      Clear Form
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      How much experience do you have in cleaning? *
                    </label>
                    <div className="relative">
                      <Briefcase
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <select className="w-full pl-12 pr-10 py-3 border border-slate-200 rounded-xl appearance-none focus:border-blue-600 outline-none transition-all">
                        <option>Select experience level</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 block">
                      What type of cleaning experience do you have? *
                    </label>
                    <div className="space-y-3">
                      {[
                        "Residential",
                        "End of Tenancy",
                        "Airbnb",
                        "Commercial/Office cleaning",
                        "Any other type of Cleaning",
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
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-900">
                      Availability
                    </h2>
                    <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
                      Clear Form
                    </button>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Please state availability for days from Monday till Sunday
                    and your available times for each day (e.g., 10am till 2pm).
                    Our requirement is up to 6 hours per day, as per your
                    convenience.
                  </p>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 block mb-4">
                      Which days do you want to work? *
                    </label>
                    {Object.keys(formData.availability).map((day) => (
                      <div key={day} className="flex items-center space-x-4">
                        <div className="flex-1">
                          <button
                            onClick={() =>
                              updateAvailability(
                                day,
                                "enabled",
                                !formData.availability[day].enabled
                              )
                            }
                            className={`w-full flex items-center p-4 border rounded-xl transition-all ${
                              formData.availability[day].enabled
                                ? "border-blue-600 bg-blue-50/30"
                                : "border-slate-200"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center transition-all ${
                                formData.availability[day].enabled
                                  ? "bg-blue-600 border-blue-600"
                                  : "border-slate-300"
                              }`}
                            >
                              {formData.availability[day].enabled && (
                                <Check size={14} className="text-white" />
                              )}
                            </div>
                            <span
                              className={`font-bold ${
                                formData.availability[day].enabled
                                  ? "text-blue-900"
                                  : "text-slate-500"
                              }`}
                            >
                              {day}
                            </span>
                          </button>
                        </div>
                        {formData.availability[day].enabled && (
                          <div className="w-1/3 relative animate-in fade-in slide-in-from-left-2">
                            <Clock
                              size={16}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                            <input
                              type="text"
                              placeholder="e.g. 10am - 2pm"
                              className="w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl outline-none focus:border-blue-600 text-sm"
                              value={formData.availability[day].time}
                              onChange={(e) =>
                                updateAvailability(day, "time", e.target.value)
                              }
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center space-y-6">
                <div className="flex w-full space-x-4">
                  {step > 1 && (
                    <button
                      onClick={prevStep}
                      className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={nextStep}
                    className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                  >
                    Next Step
                  </button>
                </div>

                <button className="flex items-center text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
                  <Save size={16} className="mr-2" />
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components ---

const FeatureItem = ({ icon, label }) => (
  <li className="flex items-center space-x-4 text-slate-500 font-medium">
    <div className="text-blue-600">{icon}</div>
    <span>{label}</span>
  </li>
);

const Input = ({ label, icon, placeholder, value, onChange }) => (
  <div className="space-y-2 w-full">
    <label className="text-sm font-bold text-slate-700">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-slate-600"
      />
    </div>
  </div>
);

const CheckboxItem = ({ label, checked, onToggle }) => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <div
      onClick={onToggle}
      className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
        checked
          ? "bg-blue-600 border-blue-600"
          : "border-slate-300 group-hover:border-slate-400"
      }`}
    >
      {checked && <Check size={14} className="text-white" strokeWidth={3} />}
    </div>
    <span
      className={`text-sm font-medium transition-colors ${
        checked ? "text-slate-900 font-bold" : "text-slate-500"
      }`}
    >
      {label}
    </span>
  </label>
);

export default CleanerApplication;
