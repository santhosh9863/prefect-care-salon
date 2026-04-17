"use client";

import { useState, useEffect } from "react";
import Button from "@/app/ui/Button";

const OPEN_HOUR = 10;
const CLOSE_HOUR = 20;

function getSalonStatus() {
  const now = new Date();
  const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const currentHour = istTime.getHours();
  return currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR;
}

function SalonStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(getSalonStatus());
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border ${isOpen ? "bg-green-500/20 border-green-500/30" : "bg-red-500/20 border-red-500/30"}`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
      <span className={`text-xs tracking-[0.25em] uppercase font-medium ${isOpen ? "text-green-400" : "text-red-400"}`}>
        {isOpen ? "Open Now" : "Closed"}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-[60px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Perfect Care Family Salon Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center text-white min-h-screen px-5 sm:px-8 py-24 sm:py-0">
        <div className="w-full max-w-4xl mx-auto space-y-10">
          <SalonStatus />

          <div className="space-y-4">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase font-light">
              Welcome to
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[var(--font-playfair)] leading-[1.2]">
              <span className="block text-white drop-shadow-lg">PERFECT</span>
              <span className="block text-white drop-shadow-lg">
                CARE
              </span>
            </h1>
            <p className="text-gray-300 text-xs tracking-[0.35em] uppercase font-light">
              Family Salon
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 text-yellow-400">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300 ml-2">
              Rated 4.9 by 2,500+ clients
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Step into a world of premium grooming. Expert stylists, luxurious
            treatments, and an ambiance designed for your perfect care.
          </p>

          <div className="pt-4">
            <Button href="/book" variant="primary" size="lg">
              Book Appointment
              <svg
                className="w-5 h-5"
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
            </Button>
          </div>


        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none" />
    </section>
  );
}