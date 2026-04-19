"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border ${
        isOpen
          ? "bg-green-500/20 border-green-500/30"
          : "bg-red-500/20 border-red-500/30"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}
      />
      <span
        className={`text-xs tracking-[0.25em] uppercase font-medium ${
          isOpen ? "text-green-400" : "text-red-400"
        }`}
      >
        {isOpen ? "Open Now" : "Closed"}
      </span>
    </motion.div>
  );
}

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0" viewport={{ once: true }}>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Perfect Care Family Salon Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <SalonStatus />

          <div className="space-y-4">
            <p className="text-[#7F1635] text-xs tracking-[0.4em] uppercase font-light">
              Beverly Hills, CA
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center">
              Perfect Care
            </h1>
            <p className="text-gray-700 text-lg md:text-xl uppercase tracking-[0.3em]">
              Where Luxury Meets Precision
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 text-[#7F1635]">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium ml-2">Rated 4.9 by 2,500+ clients</span>
          </div>

          <p className="text-gray-700 text-lg text-center max-w-xl mx-auto">
            Experience transformative treatments in our exclusive sanctuary. Where every detail is crafted to enhance your natural radiance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/services" className="px-8 py-4 rounded-full bg-[#7F1635] text-white hover:scale-105 transition">
              Explore Services
            </a>
            <a href="/book" className="px-8 py-4 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition">
              Book Now
            </a>
          </div>

          <p className="text-gray-600 text-sm">Skip the wait. Book now.</p>
        </div>
      </motion.div>
    </section>
  );
}