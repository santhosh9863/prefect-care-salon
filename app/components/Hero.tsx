export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1920&q=80"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-gray-300 text-xs tracking-[0.15em] uppercase mb-6 backdrop-blur-sm">
          JP Nagar, Bangalore
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide font-[var(--font-playfair)]">
          PERFECT CARE
        </h1>

        {/* ⭐ TRUST ELEMENT ADDED */}
        <p className="mt-2 text-yellow-400 font-semibold">
          ⭐ Rated 4.9 by 2500+ customers
        </p>

        <p className="text-gray-200 mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase">
          Family Salon
        </p>

        <p className="text-gray-300 mt-6 max-w-lg text-base sm:text-lg leading-relaxed px-4">
          Experience premium grooming with expert stylists and a relaxing environment.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/book"
            className="w-full sm:w-auto px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full shadow-lg hover:shadow-red-900/50 hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}