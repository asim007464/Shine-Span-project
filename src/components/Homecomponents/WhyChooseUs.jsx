import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Professional Quality",
      desc: "Trained, vetted cleaners using industry-leading equipment.",
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
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.068-1.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      title: "Fully Insured",
      desc: "Complete insurance coverage for your total peace of mind.",
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
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 5.714z"
          />
        </svg>
      ),
    },
    {
      title: "Flexible Scheduling",
      desc: "We clean from 8AM to 8PM. One-time, weekly, or monthly.",
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
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Trusted Team",
      desc: "Background-checked professional you can trust in your home.",
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
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.946 5.946 0 00-.94 3.198l.001.031c0 .225.012.447.038.666A11.944 11.944 0 0112 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0118 18.719m-12 0a5.97 5.97 0 01.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 015.058 2.772m0 0a5.946 5.946 0 01.94 3.198l-.001.031a6.062 6.062 0 01-.038.666H6.038a6.062 6.062 0 01-.037-.666l-.001-.031zm1.25-11.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm13.36 2.214a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4">
            Why Choose <span className="text-[#448cff]">SHINE & SPAN?</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#448cff] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg leading-relaxed">
            We’re committed to providing exceptional cleaning services with
            reliability, quality, and customer satisfaction at the heart of
            everything we do.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#f0f7ff] text-[#448cff] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#448cff] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
