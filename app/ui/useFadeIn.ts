"use client";

import { useEffect, useRef, useState } from "react";

interface UseFadeInOptions {
  threshold?: number;
  delay?: number;
}

export function useFadeIn({ threshold = 0.1, delay = 0 }: UseFadeInOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
}

export function fadeInClass(isVisible: boolean) {
  return isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-5";
}

export const fadeInTransition = "transition-all duration-600 ease-out";
