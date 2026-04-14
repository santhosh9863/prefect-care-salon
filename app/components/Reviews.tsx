const reviews = [
  {
    name: "Rahul S.",
    text: "Best salon in JP Nagar! Clean environment and skilled stylists.",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Love the facial services. Staff is professional and results are amazing.",
    rating: 5,
  },
  {
    name: "Anil K.",
    text: "Good pricing and excellent service. The head massage is super relaxing.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    text: "Got my hair colored here — results were stunning!",
    rating: 5,
  },
  {
    name: "Vikram J.",
    text: "Premium quality service. Will definitely come back again.",
    rating: 5,
  },
  {
    name: "Meera P.",
    text: "Family-friendly salon with great hygiene standards.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-red-600 font-semibold mt-2">
            4.9 ★ rating from 2500+ customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-500 text-sm">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B91C1C] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <p className="text-black text-sm font-semibold">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
