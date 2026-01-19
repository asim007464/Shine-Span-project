import React from "react";
import { Link } from "react-router-dom";

const BookCTA = () => {
  return (
    <section className="bg-[#1b89ff] py-20 px-4 text-center font-jakarta">
      <div className="max-w-6xl flex flex-col justify-center items-center  mx-auto">
        <h2 className="text-white max-w-2xl text-4xl md:text-5xl font-black mb-6 leading-13.5 tracking-tight">
          Quality Service & Fair Wages Our Pricing Explained
        </h2>

        <p className="text-blue-50  text-lg md:text-xl mb-10 leading-relaxed   font-medium opacity-90">
          We put quality first – and 58% of people agree it’s the most important
          factor when choosing a cleaning service. That’s why we charge
          appropriate rates: we deliver premium results and invest heavily in
          our team. Our vetted, insured cleaners are paid higher wages than
          those at other cleaning companies, with extra pay for work outside
          regular 9am–5pm hours. They also receive continuous training and enjoy
          additional perks to stay up to date with the latest cleaning hygiene
          standards. Happy, well-compensated staff take pride in their work and
          go the extra mile to leave your home sparkling clean and safe. We
          guarantee 100% satisfaction with free re-cleans if needed, giving you
          total peace of mind.
        </p>

        <Link
          to="/register"
          className="inline-block bg-[#f8fbff] text-[#1b89ff] hover:bg-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl active:scale-95"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default BookCTA;
