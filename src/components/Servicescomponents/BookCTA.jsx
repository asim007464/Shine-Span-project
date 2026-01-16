import React from "react";
import { Link } from "react-router-dom";

const BookCTA = () => {
  return (
    <section className="bg-[#1b89ff] py-20 px-4 text-center font-jakarta">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Ready to Book Your Service?
        </h2>

        <p className="text-blue-50 text-lg md:text-xl mb-10 leading-relaxed font-medium opacity-90">
          Choose any of our above services or contact us for a custom cleaning
          plan.
          <br className="hidden md:block" />
          We’re here to make your space spotless and your life easier.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#f8fbff] text-[#1b89ff] hover:bg-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl active:scale-95"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default BookCTA;
