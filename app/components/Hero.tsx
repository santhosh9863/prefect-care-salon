export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-900" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-12">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-gray-400 text-xs tracking-[0.15em] uppercase mb-4">
          JP Nagar, Bangalore
        </span>

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight font-[var(--font-playfair)]">
          PERFECT CARE
        </h1>

        <p className="text-gray-300 mt-2 text-xs sm:text-sm tracking-[0.2em] uppercase">
          Family Salon
        </p>

        <p className="text-gray-200 mt-4 max-w-md text-sm leading-relaxed px-4">
          Experience premium grooming with expert stylists and a relaxing environment.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-6 sm:px-0">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-black bg-white hover:bg-gray-100 font-semibold rounded-full transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}