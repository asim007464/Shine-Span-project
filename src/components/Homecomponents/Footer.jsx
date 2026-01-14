import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                className="h-10 w-auto"
                src="./websitelogo.png"
                alt="Shine & Span Logo"
              />
              <span className="ml-3 text-xl font-extrabold text-[#1e293b] tracking-tight">
                Shine <span className="text-[#448cff]">&</span> Span
              </span>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs">
              SHINE & SPAN CLEANING SERVICES LTD – Professional cleaning
              services for homes and businesses. Trusted, reliable, and thorough
              cleaning solutions for a healthier environment.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {[
                {
                  name: "Facebook",
                  path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                },
                {
                  name: "Twitter",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  name: "LinkedIn",
                  path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                },
                {
                  name: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#448cff] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#1e293b] font-bold text-lg mb-7">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#448cff] transition-colors text-[15px] flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-[#448cff] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Split into 2 columns if list is long) */}
          <div className="lg:col-span-1">
            <h4 className="text-[#1e293b] font-bold text-lg mb-7">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "General House Cleaning",
                "Deep Cleaning",
                "Carpet Cleaning",
                "Office Cleaning",
                "End of Tenancy",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#448cff] transition-colors text-[15px]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[#1e293b] font-bold text-lg mb-7">
              Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#448cff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-gray-700 font-semibold">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#448cff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-gray-700 font-semibold">
                    cleaning@shinespan.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} SHINE & SPAN CLEANING SERVICES LTD. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-[#448cff]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#448cff]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
