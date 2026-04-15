"use client";

import { useState, useEffect } from "react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [phase, setPhase] = useState<"wave" | "fade" | "complete">("wave");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const waveTimer = setTimeout(() => {
      setPhase("fade");
    }, 1200);

    const fadeTimer = setTimeout(() => {
      setPhase("complete");
    }, 1800);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2200);

    return () => {
      clearTimeout(waveTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,50 C25,35 35,65 50,50 C65,35 75,65 100,50 L100,100 L0,100 Z"
          fill="url(#waveGradient)"
          className={`transform origin-left transition-transform duration-[1200ms] ease-in-out ${
            phase === "wave" ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: phase === "wave" ? "translateX(0)" : "translateX(100%)",
            transitionDuration: "1200ms"
          }}
        />
        
        <path
          d="M0,60 C20,45 40,75 60,60 C80,45 100,75 100,60 L100,100 L0,100 Z"
          fill="url(#waveGradient)"
          opacity="0.5"
          className="transform origin-left transition-transform duration-[1200ms] ease-in-out delay-75"
          style={{
            transform: phase === "wave" ? "translateX(0)" : "translateX(100%)",
            transitionDuration: "1200ms",
            transitionDelay: "100ms"
          }}
        />
      </svg>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          phase === "complete" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center transition-all duration-1000 ease-out ${
            phase === "wave" ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        >
          <span className="text-white text-2xl font-bold">PC</span>
        </div>
      </div>
    </div>
  );
}