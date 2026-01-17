import React from "react";
import WhyChooseUs from "../components/Homecomponents/WhyChooseUs";
import Services from "../components/Homecomponents/Services";
import CTA from "../components/Homecomponents/CTA";
import Navbar from "../components/Homecomponents/Navbar";

import Footer from "../components/Homecomponents/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="font-jakarta">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center py-10 px-4 bg-[#0f1216]">
          {/* Decorative Background Glow (matches the premium dark look) */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#448cff]/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* 1. Top Badge */}
            <div className="inline-block mb-8">
              <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-[#448cff] text-[13px] font-semibold tracking-wide uppercase">
                Premium Cleaning Services
              </span>
            </div>

            {/* 2. Main Heading (Extra Bold) */}
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Professional Cleaning Service <br />
              in London <br />
              <span className="text-[#448cff]">You Can Trust</span>
            </h1>

            {/* 3. Description */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              From regular house cleaning to deep cleans and specialized
              services, we make your home or office spotless while you focus on
              what matters most.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="btn-shiny w-full sm:w-auto bg-[#007BFF] hover:bg-[#015bbdec] text-white px-10 py-5 rounded-2xl font-bold text-[15px] shadow-xl shadow-blue-600/20  transition-all active:scale-95">
                Book Now
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-700 bg-gray-800/20 text-white px-10 py-5 rounded-2xl font-bold text-[15px] hover:bg-gray-800 transition-all group"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* --- REST OF THE PAGE --- */}
        <WhyChooseUs />
        <Services />
        <CTA />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
