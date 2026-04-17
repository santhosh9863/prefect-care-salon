"use client";

import { useFadeIn, fadeInClass, fadeInTransition } from "@/app/ui/useFadeIn";

export default function Contact() {
  const { ref, isVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-6">
      <div ref={ref} className={`max-w-4xl mx-auto ${fadeInTransition} ${fadeInClass(isVisible)}`}>
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Perfect Care Family Salon
          </h2>
          <p className="text-gray-600 text-sm">
            JP Nagar 7th Phase, Bangalore
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-700">+91 95381 11909</p>
            <p className="text-gray-600 text-sm">Mon – Sun: 10 AM – 8 PM</p>
            <a
              href="https://maps.app.goo.gl/zHSHvKRMqg3JRHqF6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs underline hover:text-gray-700 transition-colors"
            >
              View on Google Maps
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-3">
            <a
              href="tel:+919538111909"
              className="w-full block py-4 bg-red-700 hover:bg-red-800 text-white text-lg font-semibold rounded-full text-center shadow-lg transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919538111909?text=Hi%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-4 border border-gray-300 text-black bg-white hover:bg-gray-50 text-lg font-semibold rounded-full text-center transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
