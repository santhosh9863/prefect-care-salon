"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold tracking-wider transition-all duration-300 ${
            scrolled ? "bg-[#B91C1C]" : "bg-white/20 backdrop-blur-sm border border-white/30"
          } group-hover:scale-105`}>
            PC
          </span>
          <div className="leading-tight hidden sm:block">
            <span className={`text-sm font-bold tracking-wider block transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}>
              PERFECT CARE
            </span>
            <span className={`text-[9px] tracking-[0.2em] block ${
              scrolled ? "text-gray-400" : "text-white/70"
            }`}>
              FAMILY SALON
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled ? "text-gray-600 hover:text-[#B91C1C]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B91C1C] rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919538111909"
            className={`p-3 rounded-full transition-all duration-300 ${
              scrolled 
                ? "bg-gray-100 text-gray-700 hover:bg-[#B91C1C] hover:text-white" 
                : "bg-white/10 text-white backdrop-blur-sm border border-white/30 hover:bg-white hover:text-gray-900"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a
            href="/book"
            className="px-6 py-2.5 bg-[#B91C1C] text-white text-sm font-semibold rounded-full hover:bg-[#991B1B] transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[6px] rounded-xl transition-colors duration-300 ${
            scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[10px]" : ""
            } ${scrolled ? "bg-gray-800" : "bg-white"}`}
          />
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            } ${scrolled ? "bg-gray-800" : "bg-white"}`}
          />
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[10px]" : ""
            } ${scrolled ? "bg-gray-800" : "bg-white"}`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden absolute inset-0 top-full transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isOpen ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`relative bg-white rounded-b-2xl shadow-2xl mx-4 mt-2 p-6 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-[#B91C1C] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+919538111909"
              className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="/book"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-3 bg-[#B91C1C] text-white font-semibold rounded-xl hover:bg-[#991B1B] transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
