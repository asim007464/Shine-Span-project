import React, { useEffect } from "react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-jakarta bg-white text-slate-700 pb-20">
      <Navbar />

      {/* --- PAGE HEADER --- */}
      <section className="bg-white py-16 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-[#1e293b] uppercase tracking-tighter mb-4">
            Shine<span className="text-[#448cff]"> Span</span>
          </h1>
          <p className="text-[#448cff] font-black uppercase tracking-widest text-sm mb-4">
            Terms and Conditions
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <span>Effective Date: 31 January 2026</span>
            <span className="hidden md:block">|</span>
            <span>Last Updated: 31 January 2026</span>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="space-y-16">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              1. Introduction
            </h2>
            <p className="leading-relaxed mb-4 text-center">
              These Terms and Conditions ("Terms") govern the provision of
              cleaning services by ShineSpan ("we", "us", "our", "the Company")
              to customers ("you", "your", "the Customer"). By booking our
              services, you agree to be bound by these Terms.
            </p>
            <p className="leading-relaxed text-center font-bold">
              Please read these Terms carefully before using our services. If
              you do not agree with any part of these Terms, you should not use
              our services.
            </p>
          </section>

          {/* 2. Services Provided */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              2. Services Provided
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-black text-slate-800 text-sm uppercase mb-4 tracking-widest">
                  2.1 Scope of Services
                </h3>
                <p className="mb-4">
                  ShineSpan provides professional cleaning services including:
                </p>
                <ul className="list-inside list-disc space-y-2 text-center">
                  <li>Regular domestic cleaning</li>
                  <li>Deep cleaning</li>
                  <li>End of tenancy cleaning</li>
                  <li>Office cleaning</li>
                  <li>Post-construction cleaning</li>
                  <li>Carpet and upholstery cleaning</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                <strong>2.2 Service Customization:</strong> Services can be
                customized based on requirements. Special requests may incur
                additional charges.
              </p>
              <p className="leading-relaxed">
                <strong>2.3 Service Standards:</strong> We use
                professional-grade products. All cleaners are trained, insured,
                and background-checked.
              </p>
            </div>
          </section>

          {/* 3. Booking and Scheduling */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              3. Booking and Scheduling
            </h2>
            <ul className="list-inside list-disc space-y-4 text-center leading-relaxed">
              <li>
                <strong>3.1 How to Book:</strong> Via website, app, telephone,
                or email.
              </li>
              <li>
                <strong>3.2 Confirmation:</strong> Booking is confirmed only via
                a confirmation email/message.
              </li>
              <li>
                <strong>3.3 Rescheduling:</strong> At least 24 hours' notice
                required. Less notice may incur a £25 fee.
              </li>
              <li>
                <strong>3.4 Access:</strong> If cleaners cannot access the
                property, the full fee will be charged.
              </li>
            </ul>
          </section>

          {/* 4. Pricing and Payment */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              4. Pricing and Payment
            </h2>
            <p className="mb-6">
              Pricing is based on service type, size, and duration in British
              Pounds (£).
            </p>
            <ul className="list-inside list-disc space-y-3 text-center">
              <li>
                <strong>Payment:</strong> Due at booking or immediately after
                completion.
              </li>
              <li>
                <strong>Late Payment:</strong> If not received within 7 days, a
                £15 fee applies.
              </li>
              <li>
                <strong>Price Changes:</strong> We provide 30 days' notice for
                regular contract increases.
              </li>
            </ul>
          </section>

          {/* 5. Cancellation and Refunds */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              5. Cancellation and Refunds
            </h2>
            <div className="space-y-6 leading-relaxed">
              <p>
                <strong>5.1 Fees:</strong> 24h notice: No fee. Under 24h: 50%
                fee. Under 2h: 100% fee.
              </p>
              <p>
                <strong>5.2 Refund Policy:</strong> Contact us within 24 hours
                if unsatisfied. We may offer a re-clean or refund.
              </p>
              <p>
                <strong>5.3 No Refunds:</strong> No refund if the complaint is
                made after 24 hours or if access was inadequate.
              </p>
            </div>
          </section>

          {/* 6. Customer Responsibilities */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block">
              6. Customer Responsibilities
            </h2>
            <ul className="list-inside list-disc space-y-4 text-center leading-relaxed">
              <li>
                <strong>6.1 Preparation:</strong> Property must be reasonably
                tidy. We clean, we don't tidy clutter.
              </li>
              <li>
                <strong>6.2 Safety:</strong> Inform us of mold, asbestos, or
                hazardous materials in advance.
              </li>
              <li>
                <strong>6.3 Pets:</strong> Please secure pets in a separate room
                during the service.
              </li>
              <li>
                <strong>6.4 Valuables:</strong> Secure fragile items. We are not
                liable for unsecured valuables.
              </li>
            </ul>
          </section>

          {/* 7. Liability and Insurance */}
          <section>
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-6 tracking-tight border-b-2 border-gray-100 pb-2 inline-block text-center">
              7. Liability and Insurance
            </h2>
            <p className="mb-4">
              ShineSpan maintains public and employer's liability insurance.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>7.2 Limitation:</strong> Total liability is limited to the
              cost of service or £1,000, whichever is lower.
            </p>
            <p className="leading-relaxed italic">
              Damage must be reported within 24 hours of service completion.
            </p>
          </section>

          {/* 8, 9, 10, 11 (Brief Sections) */}
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-4 border-b-2 border-gray-100 pb-2 inline-block">
                8. Data Protection
              </h2>
              <p className="text-center leading-relaxed">
                We process data in accordance with UK GDPR. See our Privacy
                Policy for details.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-4 border-b-2 border-gray-100 pb-2 inline-block">
                9. Complaints
              </h2>
              <p className="text-center leading-relaxed">
                Contact support@ShineSpan.co.uk within 24 hours. We respond
                within 5 working days.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-4 border-b-2 border-gray-100 pb-2 inline-block">
                10. Termination
              </h2>
              <p className="text-center leading-relaxed">
                Customers must provide 7 days' notice. We may terminate
                immediately for breach or safety issues.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-4 border-b-2 border-gray-100 pb-2 inline-block">
                11. General Provisions
              </h2>
              <p className="text-center leading-relaxed text-sm">
                Terms are subject to change with 30 days' notice. Severability
                and assignment clauses apply.
              </p>
            </div>
          </section>

          {/* 12. Contact Us */}
          <section className="bg-slate-50 border border-gray-400 p-8 md:p-12 rounded-sm text-center">
            <h2 className="text-2xl font-black text-[#1e293b] uppercase mb-8 tracking-widest text-center">
              12. Contact Information
            </h2>
            <div className="space-y-2 font-bold text-slate-800 text-lg text-center">
              <p className="text-[#448cff] uppercase text-xs tracking-[0.2em] mb-2 font-black text-center">
                Get in Touch
              </p>
              <p>ShineSpan</p>
              <p>Email: support@ShineSpan.co.uk</p>
              <p>Phone: +44 20 XXXX XXXX</p>
              <p>Address: [Your Business Address]</p>
            </div>
          </section>

          {/* FINAL FOOTNOTE */}
          <div className="text-center pt-10 border-t border-gray-100">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] text-center">
              By booking ShineSpan services, you acknowledge that you have read
              and understood these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
