"use client";

import { useState } from "react";

const images = [
  "/gallery/interior1.jpg",
  "/gallery/haircut1.jpg",
  "/gallery/beard1.jpg",
  "/gallery/facial1.jpg",
  "/gallery/coloring1.jpg",
  "/gallery/interior2.jpg",
];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">

      {/* TITLE */}
      <div className="text-center mb-12">
        <p className="text-red-600 text-xs tracking-[0.2em] uppercase">
          Our Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          A glimpse of our salon experience
        </h2>
      </div>

      {/* PREMIUM GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className={`relative overflow-hidden rounded-xl cursor-pointer group
              ${i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}
            `}
          >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}

      </div>

      {/* LIGHTBOX */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveImg(null)}
        >
          <img
            src={activeImg}
            className="max-w-[90%] max-h-[90%] rounded-xl transform transition-all duration-300 scale-100"
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setActiveImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}