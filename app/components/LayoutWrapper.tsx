"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-[60] transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 translate-x-4"
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <a
        href="https://wa.me/919538111909?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Perfect%20Care%20Family%20Salon"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl shadow-green-900/40 hover:shadow-green-900/50 transition-all duration-300 animate-whatsapp-pulse"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-whatsapp-pulse" />
        
        <svg
          className="relative z-10 w-8 h-8 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        <span className={`absolute right-full mr-3 px-5 py-3 bg-white text-gray-800 text-sm font-medium rounded-2xl shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent" />
          Chat with us now!
        </span>

        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full border-[2.5px] border-white animate-pulse flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
        </span>
      </a>
    </div>
  );
}

function StickyMobileBooking() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-[55] transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <div className="relative">
        <div className="absolute -top-8 inset-x-0 h-8 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        
        <div className="mx-3 mb-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-[0_-4px_30px_rgba(0,0,0,0.15)] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-red-900/30">
                  PC
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="leading-tight hidden sm:block">
                <span className="text-sm font-bold text-gray-900 block">
                  Perfect Care
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Family Salon</span>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-end">
              <a
                href="tel:+919538111909"
                className="touch-feedback flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 transition-all shadow-sm"
                aria-label="Call us"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              
              <a
                href="https://wa.me/919538111909?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Perfect%20Care%20Family%20Salon"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-feedback flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500 text-white hover:bg-green-600 active:bg-green-700 transition-all shadow-lg shadow-green-900/30"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              
              <a
                href="/book"
                className="touch-feedback flex-1 max-w-[160px] flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-red-900/30 active:scale-[0.98] transition-all"
              >
                Book Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";

  return (
    <>
      {!isBookPage && <Navbar />}
      {children}
      {!isBookPage && <Footer />}
      {!isBookPage && <FloatingWhatsApp />}
      {!isBookPage && <StickyMobileBooking />}
    </>
  );
}
