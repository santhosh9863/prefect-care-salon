"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [shouldShowLoader, setShouldShowLoader] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShouldShowLoader(false);
      sessionStorage.setItem("perfectCareLoaded", "true");
    }, 1800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (shouldShowLoader) {
    return <LoadingScreen />;
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
