"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import OpeningAnimation from "./components/OpeningAnimation";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const handleOpeningComplete = () => {
    setShowOpening(false);
    window.scrollTo(0, 0);
  };

  if (!mounted) return null;
  
  if (showOpening) {
    return <OpeningAnimation onComplete={handleOpeningComplete} />;
  }

  return (
    <main style={{ marginTop: 0 }}>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}