import React from "react";

const Inclusions = () => {
  const features = [
    {
      title: "Professional Equipment",
      desc: "High-quality tools and eco-friendly products for superior results",
      // Sparkles Icon
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
          />
        </svg>
      ),
    },
    {
      title: "Trained Professionals",
      desc: "Vetted, insured cleaners who treat your space with care and respect",
      // Users Icon
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Flexible Scheduling",
      desc: "One-time, weekly, or monthly services to fit your lifestyle",
      // Calendar Icon
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#fcfdfe] font-jakarta">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] mb-6 tracking-tight">
            What's Included in{" "}
            <span className="text-[#448cff]">Every Service</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
            No matter which service you choose, you can expect the same high
            standards and attention to detail that make us the trusted choice.
            We offer 100% customer satisfaction with reclean of areas you wish.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-blue-50 text-[#448cff] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#448cff] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-[#1e293b] mb-4 group-hover:text-[#448cff] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px] font-medium opacity-90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
