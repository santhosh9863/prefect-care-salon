const services = [
  {
    name: "Haircut",
    desc: "Precision cuts styled to match your personality and face shape.",
    price: "₹300+",
    icon: "✂️",
  },
  {
    name: "Beard Trim",
    desc: "Sharp, clean beard shaping with hot towel finish.",
    price: "₹150+",
    icon: "🪒",
  },
  {
    name: "Facial",
    desc: "Deep cleansing facial for refreshed, glowing skin.",
    price: "₹1200+",
    icon: "✨",
  },
  {
    name: "Hair Coloring",
    desc: "Premium long-lasting color with L'Oréal products.",
    price: "₹2000+",
    icon: "🎨",
  },
  {
    name: "Head Massage",
    desc: "Relaxing scalp massage to relieve stress and tension.",
    price: "₹500+",
    icon: "💆",
  },
  {
    name: "Waxing",
    desc: "Smooth, gentle waxing for a clean, polished look.",
    price: "₹500+",
    icon: "🧖",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)]">
            Our Services
          </h2>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Premium grooming tailored for you and your family
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-xl">
                  {service.icon}
                </div>
                <span className="text-red-600 font-semibold text-sm">
                  {service.price}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 tracking-wide font-[var(--font-playfair)]">
                  {service.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}