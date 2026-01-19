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
  FileText,
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
    experienceLevel: "", // Added
    experienceTypes: [],
    availability: {
      Monday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Tuesday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Wednesday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Thursday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Friday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Saturday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Sunday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
    },
    // Added Eligibility
    eligibility: {
      rightToWork: false,
      bankAccount: false,
      selfEmployed: false,
      noCriminalRecord: false,
    },
  });
  const timeOptions = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];
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

  const updateEligibility = (field) => {
    setFormData((prev) => ({
      ...prev,
      eligibility: { ...prev.eligibility, [field]: !prev.eligibility[field] },
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navbar --- */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="./websitelogo.png" className="w-[100px]" alt="" />
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
                    <button
                      onClick={() => window.location.reload()}
                      className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors"
                    >
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
                        value={formData.gender}
                        onChange={(e) => updateField("gender", e.target.value)}
                      >
                        <option value="">Select gender</option>
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
                  <h2 className="text-2xl font-black text-slate-900">
                    Experience
                  </h2>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      How much experience do you have in cleaning? *
                    </label>
                    <div className="relative">
                      <Briefcase
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <select
                        className="w-full pl-12 pr-10 py-3 border border-slate-200 rounded-xl appearance-none focus:border-blue-600 outline-none transition-all"
                        value={formData.experienceLevel}
                        onChange={(e) =>
                          updateField("experienceLevel", e.target.value)
                        }
                      >
                        <option value="">Select experience level</option>
                        <option value="Less than 6 months">
                          Less than 6 months
                        </option>
                        <option value="More than 6 months">
                          More than 6 months
                        </option>
                        <option value="More than 2 years">
                          More than 2 years
                        </option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 block">
                      Cleaning type *
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
                  <h2 className="text-2xl font-black text-slate-900">
                    Availability
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    Our requirement is up to 6 hours per day. Please state your
                    available times for each day you want to work (e.g., 10am
                    till 2pm).
                  </p>
                  <div className="space-y-3">
                    {Object.keys(formData.availability).map((day) => (
                      <div
                        key={day}
                        className={`mb-4 overflow-hidden rounded-sm border transition-all duration-300 ${
                          formData.availability[day].enabled
                            ? "border-gray-400 bg-white shadow-md"
                            : "border-gray-200 bg-slate-50/50"
                        }`}
                      >
                        {/* --- DAY HEADER --- */}
                        <div
                          className={`flex items-center justify-between p-4 ${formData.availability[day].enabled ? "bg-slate-50 border-b border-gray-200" : ""}`}
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
                          {!formData.availability[day].enabled && (
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              Unavailable
                            </span>
                          )}
                        </div>

                        {/* --- SHIFT SELECTION AREA --- */}
                        {formData.availability[day].enabled && (
                          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                            {/* --- SHIFT 1 --- */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 text-[#448cff]">
                                <Clock size={14} strokeWidth={3} />
                                <p className="text-[10px] font-black uppercase tracking-widest">
                                  Shift 1 (Morning)
                                </p>
                              </div>
                              <div className="flex items-center bg-white border border-gray-400 rounded-sm overflow-hidden focus-within:border-[#448cff] transition-colors">
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s1_start}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s1_start",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                                <div className="h-8 w-px bg-gray-200"></div>
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s1_end}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s1_end",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* --- SHIFT 2 --- */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 text-orange-500">
                                <Clock size={14} strokeWidth={3} />
                                <p className="text-[10px] font-black uppercase tracking-widest">
                                  Shift 2 (Afternoon)
                                </p>
                              </div>
                              <div className="flex items-center bg-white border border-gray-400 rounded-sm overflow-hidden focus-within:border-orange-500 transition-colors">
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s2_start}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s2_start",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                                <div className="h-8 w-px bg-gray-200"></div>
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s2_end}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s2_end",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* --- SHIFT 3 --- */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 text-green-600">
                                <Clock size={14} strokeWidth={3} />
                                <p className="text-[10px] font-black uppercase tracking-widest">
                                  Shift 3 (Evening)
                                </p>
                              </div>
                              <div className="flex items-center bg-white border border-gray-400 rounded-sm overflow-hidden focus-within:border-green-600 transition-colors">
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s3_start}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s3_start",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                                <div className="h-8 w-px bg-gray-200"></div>
                                <select
                                  className="flex-1 p-3 text-sm font-bold bg-transparent outline-none cursor-pointer appearance-none text-center"
                                  value={formData.availability[day].s3_end}
                                  onChange={(e) =>
                                    updateAvailability(
                                      day,
                                      "s3_end",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">00</option>
                                  {timeOptions.map((t) => (
                                    <option key={t} value={t}>
                                      {t}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Eligibility (NEW) */}
              {/* STEP 4: Eligibility */}
              {step === 4 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-900">
                      Eligibility
                    </h2>
                  </div>

                  <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-200">
                    <label className="text-sm font-bold text-slate-700 block mb-2">
                      Please confirm your eligibility to work with us:
                    </label>

                    <div className="space-y-4">
                      <CheckboxItem
                        label="I have the right to work in the UK"
                        checked={formData.eligibility.rightToWork}
                        onToggle={() => updateEligibility("rightToWork")}
                      />
                      <CheckboxItem
                        label="I have a UK bank account"
                        checked={formData.eligibility.bankAccount}
                        onToggle={() => updateEligibility("bankAccount")}
                      />
                      <CheckboxItem
                        label="I understand I will be self-employed"
                        checked={formData.eligibility.selfEmployed}
                        onToggle={() => updateEligibility("selfEmployed")}
                      />
                      <CheckboxItem
                        label="I do not have a criminal record or any police convictions"
                        checked={formData.eligibility.noCriminalRecord}
                        onToggle={() => updateEligibility("noCriminalRecord")}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Final Review (NEW) */}
              {step === 5 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <FileText size={32} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Ready to Submit?
                  </h2>
                  <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <p className="text-sm">
                      <strong>Name:</strong> {formData.firstName}{" "}
                      {formData.surname}
                    </p>
                    <p className="text-sm">
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p className="text-sm">
                      <strong>Experience:</strong> {formData.experienceLevel}
                    </p>
                    <p className="text-sm">
                      <strong>Days to work:</strong>{" "}
                      {Object.keys(formData.availability)
                        .filter((d) => formData.availability[d].enabled)
                        .join(", ")}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500">
                    By clicking submit, you confirm that all provided info is
                    accurate.
                  </p>
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
                    onClick={
                      step === 5
                        ? () => alert("Application Submitted!")
                        : nextStep
                    }
                    className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                  >
                    {step === 5 ? "Submit Application" : "Next Step"}
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

// --- Sub-Components (Unchanged design) ---

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
      className={`text-sm font-medium transition-colors ${checked ? "text-slate-900 font-bold" : "text-slate-500"}`}
    >
      {label}
    </span>
  </label>
);

export default CleanerApplication;
