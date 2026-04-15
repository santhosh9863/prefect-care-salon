"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="animate-blur-in">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}
