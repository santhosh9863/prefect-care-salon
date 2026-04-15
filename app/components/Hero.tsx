export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Perfect Care Family Salon Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,black/30_100%)]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs tracking-[0.2em] uppercase text-gray-300">Now Open in JP Nagar</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide font-[var(--font-playfair)] mb-2">
          PERFECT
          <span className="block text-[#B91C1C]">CARE</span>
        </h1>

        <p className="text-gray-200 mt-4 text-sm sm:text-base tracking-[0.3em] uppercase">
          Family Salon
        </p>

        <div className="mt-6 flex items-center gap-2 text-yellow-400">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
          <span className="text-sm font-medium">Rated 4.9 by 2500+ customers</span>
        </div>

        <p className="text-gray-300 mt-8 max-w-xl text-base sm:text-lg leading-relaxed">
          Experience premium grooming with expert stylists in a relaxing environment. Your satisfaction is our priority.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/book"
            className="group relative px-10 py-4 bg-[#B91C1C] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Appointment
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
