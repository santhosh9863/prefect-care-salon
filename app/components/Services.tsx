'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const services = [
  {
    name: "Haircut",
    desc: "Precision cuts styled to match your personality and face shape. Our expert stylists analyze your face shape and hair texture to deliver the perfect cut every time.",
    price: "₹300+",
    duration: "30-45 mins",
    icon: "✂️",
  },
  {
    name: "Beard Trim",
    desc: "Sharp, clean beard shaping with hot towel finish. Get the perfect beard line and style that complements your features.",
    price: "₹150+",
    duration: "20-30 mins",
    icon: "🪒",
  },
  {
    name: "Facial",
    desc: "Deep cleansing facial for refreshed, glowing skin. Includes steam, extraction, massage, and mask for ultimate relaxation.",
    price: "₹1200+",
    duration: "45-60 mins",
    icon: "✨",
  },
  {
    name: "Hair Coloring",
    desc: "Premium long-lasting color with L'Oréal products. Choose from a wide range of shades for a natural or bold look.",
    price: "₹2000+",
    duration: "90-120 mins",
    icon: "🎨",
  },
  {
    name: "Head Massage",
    desc: "Relaxing scalp massage to relieve stress and tension. Uses premium oils for deep relaxation and improved blood circulation.",
    price: "₹500+",
    duration: "20-30 mins",
    icon: "💆",
  },
  {
    name: "Waxing",
    desc: "Smooth, gentle waxing for a clean, polished look. Using premium wax for minimal discomfort and maximum results.",
    price: "₹500+",
    duration: "30-60 mins",
    icon: "🧖",
  },
];

type Service = typeof services[number];

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveService(null);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleFocus = () => {
      setActiveService(null);
      setIsOpen(false);
    };

    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <>
      <section id="services" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)]">
              Our Services
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Premium grooming tailored for you and your family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                onClick={() => {
                  setActiveService(service);
                  setIsOpen(false);
                  setTimeout(() => setIsOpen(true), 10);
                }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                  <span className="text-red-600 font-semibold text-sm">
                    {service.price}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-wide font-[var(--font-playfair)]">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeService && isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-all duration-300 ${
            isOpen ? "bg-black/60 backdrop-blur-sm opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={() => {
            setIsOpen(false);
            setTimeout(() => setActiveService(null), 200);
          }}
        >
          <div
            className={`bg-white rounded-2xl p-6 max-w-md w-full relative transform transition-all duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="text-center space-y-4">
              <div className="text-4xl mb-2">{activeService.icon}</div>
              <h2 className="text-xl font-bold text-gray-900">
                {activeService.name}
              </h2>
              <div className="flex items-center justify-center gap-4">
                <span className="text-red-600 font-semibold text-lg">
                  {activeService.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {activeService.duration}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed my-6">
              {activeService.desc}
            </p>

            <a
              href="/book"
              onClick={() => {
                setIsOpen(false);
                setActiveService(null);
              }}
              className="block w-full bg-red-700 text-white py-3 rounded-full font-semibold hover:bg-red-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Book Appointment
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => setActiveService(null), 200);
              }}
              className="mt-3 text-sm text-gray-500 w-full text-center hover:text-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
