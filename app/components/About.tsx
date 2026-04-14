const stats = [
  { value: "5+", label: "Years" },
  { value: "10K+", label: "Clients" },
  { value: "4.9★", label: "Rating" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl bg-gray-100 aspect-video h-64 lg:h-auto lg:aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-400 text-sm">Salon Image</span>
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-[#B91C1C]/10 -z-10" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div>
              <span className="text-red-600 tracking-widest text-xs uppercase font-medium">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)]">
                About Us
              </h2>
            </div>

            <div className="space-y-4 max-w-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                Perfect Care Family Salon has been serving JP Nagar, Bangalore
                with premium grooming services in a clean, modern environment.
                We believe everyone deserves to look and feel their best.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our experienced stylists use top-brand products like L&apos;Oréal
                to deliver results that match your personality. From sharp
                haircuts to relaxing head massages — we&apos;ve got you covered.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-red-600 text-xl sm:text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
