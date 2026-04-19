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
    <section className="relative min-h-screen w-full overflow-hidden pt-[60px]">
      <motion.div style={{ y: bgY }} className="absolute inset-0" viewport={{ once: true }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
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

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        style={{ y: contentY }}
        className="relative z-30 flex flex-col items-center justify-center text-center text-white min-h-screen px-6 py-24 sm:py-0 backdrop-blur-sm"
      >
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.div custom={0} variants={fadeSlide}>
            <SalonStatus />
          </motion.div>

          <div className="space-y-4">
            <motion.p
              custom={1}
              variants={fadeSlide}
              className="text-[#7F1635] text-xs tracking-[0.4em] uppercase font-light"
            >
              Beverly Hills, CA
            </motion.p>
            <motion.h1
              custom={2}
              variants={fadeSlide}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight fade-up"
            >
              <span className="block text-white drop-shadow-md">Perfect Care</span>
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeSlide}
              className="text-gray-200 uppercase tracking-[0.3em] fade-up fade-up-delay-1"
            >
              Where Luxury Meets Precision
            </motion.p>
          </div>

          <motion.div
            custom={4}
            variants={fadeSlide}
            className="flex items-center justify-center gap-1 text-[#7F1635]"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium ml-2">
              Rated 4.9 by 2,500+ clients
            </span>
          </motion.div>

          <motion.p
            custom={5}
            variants={fadeSlide}
            className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto fade-up fade-up-delay-2"
          >
            Experience transformative treatments in our exclusive sanctuary. Where
            every detail is crafted to enhance your natural radiance.
          </motion.p>

          <motion.div custom={6} variants={fadeSlide} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-delay-3">
            <a href="/services" className="px-8 py-3 rounded-full bg-[#7F1635] text-white font-medium shadow-md hover:scale-105 transition-all duration-300">
              Explore Services
            </a>
            <a href="/book" className="px-8 py-3 rounded-full border border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              Book Now
            </a>
          </motion.div>

          <motion.p
            custom={7}
            variants={fadeSlide}
            className="text-gray-500 text-sm mt-3"
          >
            Skip the wait. Book now.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none" />
    </section>
  );
}