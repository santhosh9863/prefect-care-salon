"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-md border-b border-gray-100"}`} style={{ height: '60px' }}>
        <nav className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br from-[#B91C1C] to-[#991B1B]">PC</span>
            <span className="text-xs font-bold text-gray-900 hidden xs:block">PERFECT CARE</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#B91C1C] transition-colors relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B91C1C] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/919538111909" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-500 hover:text-green-500 hover:bg-gray-50 transition-all" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a href="/book" className="px-4 py-1.5 bg-[#B91C1C] text-white text-xs font-semibold rounded-full hover:bg-[#991B1B] transition-all">Book Now</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menu">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div ref={menuRef} className="lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg z-40 mx-2 rounded-xl overflow-hidden animate-fade-in-up">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:text-[#B91C1C] hover:bg-gray-50 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-100 mt-2 pt-2">
              <a href="/book" onClick={() => setMenuOpen(false)} className="block m-3 py-3 bg-[#B91C1C] text-white text-center font-medium rounded-lg hover:bg-[#991B1B] transition-colors">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="h-[60px]" />
    </>
  );
}