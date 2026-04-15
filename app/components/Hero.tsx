export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1920&q=80"
        alt="Salon Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-gray-300 text-xs tracking-[0.15em] uppercase mb-6 backdrop-blur-sm">
          JP Nagar, Bangalore
        </span>

        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider leading-tight font-[var(--font-playfair)] drop-shadow-lg">
          PERFECT CARE
        </h1>

        <p className="text-gray-200 mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase">
          Family Salon
        </p>

        <p className="text-gray-300 mt-6 max-w-lg text-base sm:text-lg leading-relaxed px-4 drop-shadow-md">
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
