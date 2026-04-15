'use client';

import { useState } from 'react';

const images = [
  { label: "Salon Interior", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80" },
  { label: "Hair Styling", src: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=1200&q=80" },
  { label: "Grooming Station", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80" },
  { label: "Hair Coloring", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80" },
  { label: "Product Display", src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80" },
  { label: "Client Transformation", src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200&q=80" },
];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)]">
              A glimpse of our salon experience
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(img.src)}
                className="overflow-hidden rounded-xl cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-48 md:h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={() => setActiveImg(null)}
          >
            ✕
          </button>
          <img
            src={activeImg}
            alt="Gallery image"
            className="max-w-[90%] max-h-[90%] rounded-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
