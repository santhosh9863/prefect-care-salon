const reviews = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    text: "Best salon in JP Nagar! The haircut was precise and the stylists really understand what you want. Highly recommend!",
    rating: 5,
    service: "Haircut"
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    text: "Amazing facial treatment! My skin feels so refreshed and glowing. The staff is professional and the ambiance is premium.",
    rating: 5,
    service: "Facial"
  },
  {
    name: "Anil Kumar",
    initials: "AK",
    text: "Got an excellent beard trim here. The hot towel finish was incredibly relaxing. Great value for money!",
    rating: 5,
    service: "Beard Trim"
  },
  {
    name: "Sneha Reddy",
    initials: "SR",
    text: "Had my hair colored here and the results were stunning! L'Oréal products made a noticeable difference.",
    rating: 5,
    service: "Hair Coloring"
  },
  {
    name: "Vikram Joshi",
    initials: "VJ",
    text: "Premium quality service at reasonable prices. The head massage is super relaxing after a long week.",
    rating: 5,
    service: "Head Massage"
  },
  {
    name: "Meera Patel",
    initials: "MP",
    text: "Family-friendly salon with great hygiene standards. My entire family loves coming here!",
    rating: 5,
    service: "Facial"
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide font-[var(--font-playfair)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their grooming needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B91C1C]/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <StarRating rating={review.rating} />
                
                <blockquote className="mt-4 mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#B91C1C]/20">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {review.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {review.service}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#B91C1C]/5 text-[#B91C1C]">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-[#B91C1C] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Join 2500+ happy customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
