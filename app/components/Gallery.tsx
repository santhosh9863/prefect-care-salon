"use client";

import { useState } from "react";

const galleryImages = [
  { 
    label: "Premium Styling", 
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    span: "col-span-2 row-span-2"
  },
  { 
    label: "Hair Treatment", 
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    span: ""
  },
  { 
    label: "Grooming", 
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    span: ""
  },
  { 
    label: "Color Magic", 
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    span: ""
  },
  { 
    label: "Salon Ambiance", 
    src: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&q=80",
    span: ""
  },
  { 
    label: "Client Care", 
    src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    span: ""
  },
];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const openLightbox = (src: string) => {
    setActiveImg(src);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImg(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section id="gallery" className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-4">
              A Glimpse of Our Work
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              See the artistry and precision that goes into every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(img.src)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ""} ${
                  !isLoaded ? "opacity-0" : "opacity-100"
                } transition-all duration-700`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  opacity: isLoaded ? undefined : 0
                }}
                onLoad={() => setIsLoaded(true)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="absolute inset-0 flex items-end justify-center pb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    {img.label}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImg && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
            onClick={closeLightbox}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(img => img.src === activeImg);
              const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
              setActiveImg(galleryImages[prevIndex].src);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(img => img.src === activeImg);
              const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
              setActiveImg(galleryImages[nextIndex].src);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <img
            src={activeImg}
            alt="Gallery"
            className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-sm">
            <span className="w-2 h-2 bg-[#B91C1C] rounded-full"></span>
            Click outside to close
          </div>
        </div>
      )}
    </>
  );
}
