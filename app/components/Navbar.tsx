"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export let isMobileMenuOpen = false;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isMobileMenuOpen = isOpen;
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('menustatechange', { detail: { open: true } }));
    } else {
      window.dispatchEvent(new CustomEvent('menustatechange', { detail: { open: false } }));
    }
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["services", "gallery", "about", "reviews", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-gray-200 transition-all duration-300 ease-in-out"
        style={{ height: scrolled ? '56px' : '64px' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <span
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br from-[#B91C1C] to-[#991B1B] shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              PC
            </span>
            <div className="leading-tight hidden sm:block">
              <span className="text-sm font-bold tracking-wider block text-gray-900">
                PERFECT CARE
              </span>
              <span className="text-[9px] tracking-[0.2em] block text-gray-500">
                FAMILY SALON
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-[#B91C1C] transition-all duration-300 relative"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/919538111909"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="/book"
              className="px-4 py-1.5 bg-[#B91C1C] text-white text-xs font-semibold rounded-full hover:bg-[#991B1B] transition-all duration-300 active:scale-95"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </nav>
      </header>

      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-[var(--z-menu-overlay)] transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white transition-all duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 pt-16">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-gray-900 tracking-wider">MENU</span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 30 + 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-3 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 hover:text-[#B91C1C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
              <a
                href="https://wa.me/919538111909"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-medium text-sm rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 bg-[#B91C1C] text-white font-medium text-sm rounded-lg hover:bg-[#991B1B] transition-colors"
              >
                Book Appointment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}