"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import OpeningAnimation from "./components/OpeningAnimation";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  if (showOpening) {
    return <OpeningAnimation onComplete={handleOpeningComplete} />;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}