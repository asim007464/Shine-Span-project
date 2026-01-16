import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                className="h-16 w-auto"
                src="./websitelogo.png"
                alt="Shine & Span"
              />
            </NavLink>
          </div>

          {/* Nav Links (Centered) */}
          <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative py-2 text-[15px] transition-colors font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold text-sm hover:border-blue-500 hover:text-blue-500 transition-all">
              Login
            </button>
            <button className="btn-shiny px-7 py-2.5 text-white rounded-lg font-bold bg-blue-600 text-sm hover:bg-blue-800 transition-all active:scale-95">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Icon (FIXED PATH HERE) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-bold transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-3 border border-gray-300 rounded-xl font-bold">
              Login
            </button>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
