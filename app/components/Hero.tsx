"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Perfect Care Family Salon Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="warm-lighting absolute inset-0 z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center text-white min-h-screen px-5 sm:px-8 py-20 sm:py-0">
        <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full glass-card-dark mb-6 sm:mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-300 font-medium">
                Now Open · JP Nagar, Bangalore
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-white/50 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 font-light">
              Welcome to
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[var(--font-playfair)] leading-[1.1]">
              <span className="block text-white/95">PERFECT</span>
              <span className="block bg-gradient-to-r from-[#B91C1C] via-red-500 to-[#B91C1C] bg-clip-text text-transparent">
                CARE
              </span>
            </h1>
            <p className="text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] uppercase font-light">
              Family Salon
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-yellow-400">
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
              <span className="text-xs sm:text-sm font-medium text-white/80">
                Rated 4.9 by 2,500+ happy clients
              </span>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto px-4">
              Step into a world of premium grooming. Expert stylists, luxurious
              treatments, and an ambiance designed for your perfect care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-4 sm:pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="/book"
              className="group touch-feedback relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-4.5 bg-[#B91C1C] text-white font-semibold text-sm sm:text-base rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/40 hover:scale-105 active:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Book Appointment
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </span>
            </a>
            <a
              href="#services"
              className="touch-feedback group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-4.5 glass-card-dark text-white font-medium text-sm sm:text-base rounded-full transition-all duration-500 hover:bg-white/20 hover:scale-105 active:scale-100 backdrop-blur-lg"
            >
              <span className="flex items-center justify-center gap-3">
                Explore Services
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
            <span className="text-[10px] tracking-[0.25em] uppercase">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2.5 bg-white/50 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
