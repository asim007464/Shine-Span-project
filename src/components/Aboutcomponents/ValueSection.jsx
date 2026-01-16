import React from "react";

const ValuesSection = () => {
  const values = [
    {
      title: "Customer First",
      desc: "Your satisfaction is our top priority in every service",
      // User icon
      icon: (
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Trust & Reliability",
      desc: "Fully vetted, insured professionals you can depend",
      // Shield icon
      icon: (
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Standards",
      desc: "Professional equipment and eco-friendly products",
      // Award/Ribbon icon (exactly like your picture)
      icon: (
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
          <circle cx="12" cy="7" r="3" strokeWidth="1.8" />
          <path d="M12 10v2M9 17l-1 4m7-4l1 4" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Care & Attention",
      desc: "We treat your home with the same care as our own",
      // Heart icon
      icon: (
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 bg-[#f7fbff] font-jakarta">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] mb-6 tracking-tight">
            Our <span className="text-[#448cff]">Values</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium opacity-80">
            These core values guide everything we do and ensure we deliver
            exceptional service every time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Subtle Blue Glow Background (only visible on hover) */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-[#f0f7ff] text-[#448cff] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#448cff] group-hover:text-white  transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-black text-[#1e293b] mb-4 group-hover:text-[#448cff] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-500 leading-relaxed text-[15px] font-medium ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
