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

  const openModal = (service: Service) => {
    setActiveService(service);
    setIsOpen(false);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setActiveService(null), 300);
  };

  return (
    <>
      <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              Premium grooming services tailored for you and your family. Experience excellence in every service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                onClick={() => openModal(service)}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#B91C1C]/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B91C1C]/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B91C1C]/10 to-[#B91C1C]/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-[#B91C1C] font-bold text-xl">
                        {service.price}
                      </span>
                      <span className="block text-gray-400 text-xs mt-0.5">
                        Starting
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-playfair)] group-hover:text-[#B91C1C] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc.slice(0, 80)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <span className="text-[#B91C1C] text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeService && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 px-4 transition-all duration-500 ${
            isOpen ? "bg-black/70 backdrop-blur-sm opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-3xl p-8 max-w-md w-full relative transform transition-all duration-500 ${
              isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-8"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#B91C1C]/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#B91C1C]/10 to-[#B91C1C]/5 flex items-center justify-center text-5xl mb-4">
                {activeService.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">
                {activeService.name}
              </h2>
              <div className="flex items-center justify-center gap-6">
                <span className="text-[#B91C1C] font-bold text-2xl">
                  {activeService.price}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {activeService.duration}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 text-center">
              {activeService.desc}
            </p>

            <a
              href="/book"
              onClick={() => {
                setIsOpen(false);
                setActiveService(null);
              }}
              className="block w-full bg-[#B91C1C] text-white py-4 rounded-full font-semibold text-center hover:bg-[#991B1B] hover:shadow-xl hover:shadow-[#B91C1C]/30 active:scale-[0.98] transition-all duration-300 mb-3"
            >
              Book Appointment
            </a>

            <button
              onClick={closeModal}
              className="w-full py-3 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
