"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Button from "@/app/ui/Button";

const services = [
  {
    name: "Haircut & Styling",
    desc: "Precision cuts styled to match your personality and face shape. Our expert stylists analyze your features to deliver the perfect look.",
    price: "₹300",
    duration: "30-45 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zM12 12L9.121 9.121M12 12V7m0 5l2.879 2.879M12 12L9.121 9.121" />
      </svg>
    ),
  },
  {
    name: "Beard Sculpting",
    desc: "Sharp, clean beard shaping with hot towel finish. Get the perfect beard line and style that complements your features.",
    price: "₹150",
    duration: "20-30 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804l-3.12-3.121a1 1 0 011.414-1.414l3.121 3.12M18.364 5.636l-3.536-3.536a1 1 0 011.414-1.414l3.536 3.536M8.464 15.536l-3.535-3.536a1 1 0 011.414-1.414l3.535 3.536M15.536 8.464l3.535 3.536a1 1 0 01-1.414 1.414l-3.535-3.536M12 12v-2.5m0 5l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    name: "Signature Facial",
    desc: "Deep cleansing facial for refreshed, glowing skin. Includes steam, extraction, massage, and premium mask for ultimate relaxation.",
    price: "₹1,200",
    duration: "45-60 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "Hair Coloring",
    desc: "Premium long-lasting color with L'Oréal products. Choose from a wide range of shades for a natural or bold transformation.",
    price: "₹2,000",
    duration: "90-120 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: "Royal Head Massage",
    desc: "Relaxing scalp massage to relieve stress and tension. Uses premium oils for deep relaxation and improved blood circulation.",
    price: "₹500",
    duration: "20-30 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Premium Waxing",
    desc: "Smooth, gentle waxing for a clean, polished look. Using premium Rica wax for minimal discomfort and maximum results.",
    price: "₹500",
    duration: "30-60 mins",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const serviceSlogans: Record<string, string> = {
  "Haircut & Styling": "Skip the wait. Get styled faster.",
  "Beard Sculpting": "Sharp look, zero waiting.",
  "Signature Facial": "Glow faster with priority booking.",
  "Hair Coloring": "Book ahead for a smooth session.",
  "Royal Head Massage": "Relax sooner — reserve your slot.",
  "Premium Waxing": "Smooth skin, no waiting line.",
};

type Service = (typeof services)[number];

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: Service;
  index: number;
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current?.style.setProperty("--rx", `${x}%`);
      ref.current?.style.setProperty("--ry", `${y}%`);
    }
    onClick();
  };

  return (
    <motion.div
      layoutId={`card-${service.name}`}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
      ref={ref}
      onClick={handleClick}
      className={`rounded-2xl bg-white border border-[#7F1635]/10 p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div>
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#7F1635]/10 text-[#7F1635]">
          {service.icon}
        </div>

        <div className="mb-4">
          <span className="text-[#7F1635] font-medium text-lg">
            {service.price}
          </span>
          <span className="block text-gray-500 text-xs mt-0.5">Starting</span>
        </div>

        <h3 className="text-gray-900 font-semibold text-lg mb-3">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {service.desc}
        </p>

        <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
          <span className="text-gray-500 text-xs flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {service.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const closeModalHandler = () => {
    setActiveService(null);
  };

  useEffect(() => {
    const handleFocus = () => {
      closeModalHandler();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const openModal = (service: Service) => {
    setActiveService(service);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  return (
    <>
      <section id="services" className="relative py-24 px-4 salon-ambient overflow-hidden">
        <div className="absolute inset-0 warm-lighting pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7F1635]/10 text-[#7F1635] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-[#7F1635] rounded-full" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-4 sm:mb-6">
              Premium Workstations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Each service station is equipped with the finest tools and
              products, ensuring you receive nothing but the best care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.name}
                service={service}
                index={index}
                onClick={() => openModal(service)}
              />
            ))}
          </div>

          <AnimatePresence>
            {activeService && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeModal}
              >
                <motion.div
                  layoutId={`card-${activeService.name}`}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="text-center mb-6">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#7F1635]/10 text-[#7F1635]">
                      {activeService.icon}
                    </div>
                    <h2 className="text-gray-900 font-semibold text-xl mb-3">
                      {activeService.name}
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-[#7F1635] font-medium text-2xl">
                        {activeService.price}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {activeService.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                    {activeService.desc}
                  </p>

                  {serviceSlogans[activeService.name] && (
                    <p className="text-gray-500 text-xs text-center leading-tight mt-2 mb-2">
                      {serviceSlogans[activeService.name]}
                    </p>
                  )}

                  <a
                    href={`/book?service=${encodeURIComponent(activeService.name)}`}
                    onClick={closeModal}
                    className="block w-full bg-[#7F1635] text-white py-3 rounded-full font-semibold text-center hover:scale-105 active:scale-95 transition-all duration-300 mb-3"
                  >
                    Book Appointment
                  </a>

                  <Button variant="ghost" size="md" onClick={closeModal} fullWidth>
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 sm:mt-16 text-center">
            <Button href="/book" variant="primary" size="md" className="touch-feedback">
              Book Your Session
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
