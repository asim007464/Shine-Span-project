import React from "react";
const CTA = () => {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-[#448cff] to-[#3372db]">
      {/* Decorative Background Circles - Makes it look "Decent" */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-2xl"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready for a Spotless Home?
        </h2>

        <p className="text-blue-50 text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed font-medium">
          Get a free, no-obligation quote today. Our friendly team is ready to
          discuss your cleaning needs and create a customized solution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary Button */}
          <button className="w-full sm:w-auto bg-white text-[#448cff] px-6 py-4 rounded-xl font-semibold text-[13px] uppercase tracking-widest shadow-2xl shadow-blue-900/20 hover:bg-gray-100 hover:shadow-4xl   transition-all active:scale-95">
            Book Now
          </button>

          {/* Secondary Outline Button */}
          <button className="w-full sm:w-auto border-2 border-white/30 text-white px-6 py-4 rounded-2xl font-bold text-[13px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <svg
              className="w-5 h-5 text-blue-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTA;
