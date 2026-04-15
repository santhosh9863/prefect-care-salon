"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import OpeningAnimation from "./components/OpeningAnimation";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  if (showOpening) {
    return <OpeningAnimation onComplete={handleOpeningComplete} />;
  }

  return (
    <main className={showContent ? "animate-in fade-in-up" : "opacity-0"}>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}