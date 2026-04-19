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
        className="relative py-24 px-4 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
              Our Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide font-[var(--font-playfair)] mb-4 sm:mb-6">
              Gallery
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              A glimpse into our world of beauty and precision. Every detail,
              every transformation, captured for you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                data-index={i}
                onClick={() => openLightbox(img.src)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  img.span || ""
                } transition-all duration-500 ${
                  isVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white text-xs font-medium px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block">
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
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-all duration-300"
            onClick={closeLightbox}
          >
            <svg
              className="w-5 h-5"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <svg
              className="w-5 h-5"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <svg
              className="w-5 h-5"
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
            className="max-w-[90%] max-h-[90%] rounded-xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-sm">
            Click outside or press ESC to close
          </div>
        </div>
      )}
    </>
  );
}
