"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative md:fixed md:top-0 md:left-0 md:w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full bg-[#B91C1C] flex items-center justify-center text-white text-xs font-bold tracking-wide">
            PC
          </span>
          <div className="leading-tight">
            <span className="text-gray-900 text-sm font-bold tracking-wider block">
              PERFECT CARE
            </span>
            <span className="text-gray-400 text-[10px] tracking-[0.15em] block">
              FAMILY SALON
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 text-sm font-medium hover:text-[#B91C1C] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B91C1C] after:rounded-full after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-4 right-4 transition-all duration-300 ease-out ${
          isOpen ? "top-full mt-2 opacity-100 translate-y-0" : "top-0 mt-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg px-3 py-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 hover:text-red-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-1 pt-2 border-t border-gray-100">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2.5 bg-[#B91C1C] text-white text-sm font-semibold rounded-lg hover:bg-[#991B1B] transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
