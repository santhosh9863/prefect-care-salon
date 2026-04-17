"use client";

import { useState, useEffect, useRef } from "react";

const galleryImages = [
  {
    label: "Premium Styling Suite",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    span: "col-span-2 row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Hair Treatment",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Beard Grooming",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Color Magic",
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Salon Ambiance",
    src: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&q=80",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "Client Care",
    src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    span: "",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setTimeout(() => {
              setIsVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImg]);

  const openLightbox = (src: string) => {
    setActiveImg(src);
  };

  const closeLightbox = () => {
    setActiveImg(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!activeImg) return;
    const currentIndex = galleryImages.findIndex((img) => img.src === activeImg);
    let newIndex: number;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    setActiveImg(galleryImages[newIndex].src);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B91C1C]/8 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full" />
              Our Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-4 sm:mb-6">
              Gallery
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              A glimpse into our world of beauty and precision. Every detail,
              every transformation, captured for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[280px] lg:auto-rows-[300px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                data-index={i}
                onClick={() => openLightbox(img.src)}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group touch-feedback ${
                  img.span || ""
                } transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`w-full h-full ${img.aspect || "aspect-square"}`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card-dark flex items-center justify-center mb-2 sm:mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block">
                    {img.label}
                  </span>
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImg && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-blur-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
            onClick={closeLightbox}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <img
            src={activeImg}
            alt="Gallery"
            className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-sm">
            <span className="w-2 h-2 bg-[#B91C1C] rounded-full animate-pulse" />
            Press ESC or click outside to close
          </div>
        </div>
      )}
    </>
  );
}
