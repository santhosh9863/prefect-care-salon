'use client';

import { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-[#B91C1C] rounded-full animate-spin"></div>
          </div>
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase">Loading</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}
