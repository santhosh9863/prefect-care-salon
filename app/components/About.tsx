"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "5+",
    label: "Years of Excellence",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "10K+",
    label: "Happy Clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "4.9",
    label: "Star Rating",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Premium Products",
    desc: "We use only L'Oréal and Rica products for superior results.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Expert Stylists",
    desc: "Trained professionals who understand your unique needs.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Hygienic Space",
    desc: "Sanitized tools and clean environment for your safety.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Family Friendly",
    desc: "Services for all ages - kids, adults, and seniors.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 px-4 sm:px-6 salon-ambient overflow-hidden"
    >
      <div className="absolute inset-0 warm-lighting pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Perfect Care Family Salon Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#B91C1C]/15 to-[#B91C1C]/5 rounded-3xl -z-10 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#B91C1C]/10 to-transparent rounded-3xl -z-10" />

            <div className="absolute -bottom-4 left-8 glass-card rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#B91C1C]/10 flex items-center justify-center text-[#B91C1C]">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    Premium Quality
                  </p>
                  <p className="text-gray-500 text-sm">L&apos;Oréal Products Only</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B91C1C]/8 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full" />
                About Us
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-8">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Welcome to <span className="text-[#B91C1C] font-semibold">Perfect Care Family Salon</span>, 
                  where beauty meets hospitality in the heart of JP Nagar, Bangalore. 
                  Our salon is designed to feel like a second home — warm, welcoming, 
                  and dedicated to making you look and feel your absolute best.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  With over 5 years of experience, our team of skilled stylists combines 
                  artistry with precision. We use only premium products like L&apos;Oréal to 
                  ensure every service leaves you transformed and confident.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-5 sm:p-6 rounded-2xl glass-card hover-lift"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#B91C1C]/10 flex items-center justify-center text-[#B91C1C] mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl glass-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B91C1C]/10 flex items-center justify-center text-[#B91C1C] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </p>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[#B91C1C] font-semibold hover:gap-5 transition-all duration-300 group"
            >
              Explore our services
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
    </section>
  );
}
