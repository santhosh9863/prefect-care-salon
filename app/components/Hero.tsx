"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Perfect Care Family Salon Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center text-white min-h-screen px-5 sm:px-8 py-20 sm:py-0">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-gray-300 font-medium">
              Open Now
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-light">
              Welcome to
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[var(--font-playfair)] leading-[1.1]">
              <span className="block text-white/95">PERFECT</span>
              <span className="block bg-gradient-to-r from-[#B91C1C] via-red-500 to-[#B91C1C] bg-clip-text text-transparent">
                CARE
              </span>
            </h1>
            <p className="text-gray-300 text-xs tracking-[0.35em] uppercase font-light">
              Family Salon
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 text-yellow-400">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-white/80 ml-2">
              Rated 4.9 by 2,500+ clients
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Step into a world of premium grooming. Expert stylists, luxurious
            treatments, and an ambiance designed for your perfect care.
          </p>

          <div className="pt-4">
            <a
              href="/book"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#B91C1C] text-white font-semibold text-base rounded-full hover:bg-[#991B1B] transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30"
            >
              Book Appointment
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
              <span className="text-[10px] tracking-[0.25em] uppercase">
                Scroll
              </span>
              <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1">
                <div className="w-1 h-1.5 bg-white/50 rounded-full" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none" />
    </section>
  );
}