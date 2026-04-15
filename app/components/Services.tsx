'use client';

import { useState } from 'react';

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
                onClick={() => setActiveService(service)}
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

      {activeService && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setActiveService(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-md w-full transform scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <span className="text-5xl mb-4 block">{activeService.icon}</span>
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                {activeService.name}
              </h2>
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-red-600 font-semibold text-lg">
                  {activeService.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {activeService.duration}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activeService.desc}
            </p>

            <button
              onClick={() => window.location.href = '/book'}
              className="w-full bg-red-700 text-white py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
            >
              Book Appointment
            </button>

            <button
              onClick={() => setActiveService(null)}
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
