const galleryItems = [
  { label: "Salon Interior", image: "" },
  { label: "Hair Styling", image: "" },
  { label: "Grooming Station", image: "" },
  { label: "Hair Coloring", image: "" },
  { label: "Product Display", image: "" },
  { label: "Client Transformation", image: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)]">
            A glimpse of our salon experience
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square bg-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                  {item.label}
                </span>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-in-out" />

              <div className="absolute inset-0 flex items-center justify-center scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <span className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
