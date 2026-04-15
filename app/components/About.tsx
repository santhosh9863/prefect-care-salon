const stats = [
  { 
    value: "5+", 
    label: "Years Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "10K+", 
    label: "Happy Clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    value: "4.9★", 
    label: "Average Rating",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Perfect Care Family Salon Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B91C1C]/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B91C1C]/5 rounded-3xl -z-10" />

            <div className="absolute -bottom-4 left-8 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#B91C1C]/10 flex items-center justify-center text-[#B91C1C]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Premium Quality</p>
                  <p className="text-sm text-gray-500">L'Oréal Products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-6">
                Our Story
              </h2>
              <div className="space-y-5">
                <p className="text-gray-600 text-base leading-relaxed">
                  Perfect Care Family Salon has been serving JP Nagar, Bangalore with premium grooming services in a clean, modern environment. We believe everyone deserves to look and feel their best.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our experienced stylists use top-brand products like L&apos;Oréal to deliver results that match your personality. From sharp haircuts to relaxing head massages — we&apos;ve got you covered.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-[#B91C1C]/5 transition-colors duration-300"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#B91C1C]/10 flex items-center justify-center text-[#B91C1C] mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[#B91C1C] font-semibold hover:gap-4 transition-all duration-300"
            >
              Explore our services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
