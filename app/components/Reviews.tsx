"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    text: "Best salon in JP Nagar! The haircut was precise and the stylists really understand what you want. Highly recommend for anyone looking for quality service.",
    rating: 5,
    service: "Haircut & Styling",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    text: "Amazing facial treatment! My skin feels so refreshed and glowing. The staff is professional and the ambiance is premium. Will definitely come back!",
    rating: 5,
    service: "Signature Facial",
  },
  {
    name: "Anil Kumar",
    initials: "AK",
    text: "Got an excellent beard trim here. The hot towel finish was incredibly relaxing. Great value for money and the hygiene standards are top-notch.",
    rating: 5,
    service: "Beard Sculpting",
  },
  {
    name: "Sneha Reddy",
    initials: "SR",
    text: "Had my hair colored here and the results were stunning! L'Oréal products made a noticeable difference. The color lasted for weeks without fading.",
    rating: 5,
    service: "Hair Coloring",
  },
  {
    name: "Vikram Joshi",
    initials: "VJ",
    text: "Premium quality service at reasonable prices. The head massage is super relaxing after a long week. My go-to place for grooming now!",
    rating: 5,
    service: "Royal Head Massage",
  },
  {
    name: "Meera Patel",
    initials: "MP",
    text: "Family-friendly salon with great hygiene standards. My entire family loves coming here! They handle kids with so much patience.",
    rating: 5,
    service: "Family Visit",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[number];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B91C1C]/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B91C1C]/20 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <StarRating rating={review.rating} />
          <span className="text-xs text-gray-400 px-3 py-1 bg-gray-50 rounded-full">
            {review.service}
          </span>
        </div>

        <blockquote className="mb-8">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            &ldquo;{review.text}&rdquo;
          </p>
        </blockquote>

        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#B91C1C]/20">
              {review.initials}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-gray-400 text-xs">Verified Customer</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Verified
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative py-28 px-4 sm:px-6 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 warm-lighting pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B91C1C]/8 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full" />
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their
            grooming needs. Your satisfaction is our greatest achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full glass-card">
            <div className="flex -space-x-3">
              {["RS", "PM", "AK", "SR"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                >
                  {initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold">
                +2K
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Join <span className="text-[#B91C1C] font-semibold">2,500+</span> happy
              customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
