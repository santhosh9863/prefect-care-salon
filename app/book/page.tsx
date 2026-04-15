"use client";

import { useState } from "react";
import Link from "next/link";

const servicesList = [
  { name: "Haircut & Styling", price: "₹300" },
  { name: "Beard Sculpting", price: "₹150" },
  { name: "Signature Facial", price: "₹1,200" },
  { name: "Hair Coloring", price: "₹2,000" },
  { name: "Royal Head Massage", price: "₹500" },
  { name: "Premium Waxing", price: "₹500" },
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      return;
    }

    setIsSubmitting(true);

    const message = `🏠 *Perfect Care Family Salon*

📋 *Booking Details:*

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}

✂️ *Services Required:*
${selectedServices.map((s) => `• ${s}`).join("\n")}

Total Services: ${selectedServices.length}`;

    const url = `https://wa.me/919538111909?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(url, "_blank");

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[var(--font-playfair)]">
            Booking Submitted!
          </h2>
          <p className="text-gray-600 mb-8">
            Your appointment request has been sent to WhatsApp. Please complete
            the booking there. We&apos;ll see you soon!
          </p>
          <div className="animate-pulse flex items-center justify-center gap-2 text-sm text-gray-400">
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Redirecting to home...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-lg mx-auto px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#B91C1C] mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <div className="text-center mb-10">
            <div className="w-18 h-18 mx-auto mb-6 rounded-2xl bg-[#B91C1C]/10 flex items-center justify-center">
              <svg
                className="w-9 h-9 text-[#B91C1C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">
              Book Appointment
            </h1>
            <p className="text-gray-500 text-sm">
              Fill the form below and we&apos;ll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all bg-white/80"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 95381 11909"
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Services
              </label>
              <div className="grid grid-cols-2 gap-3">
                {servicesList.map((service) => (
                  <label
                    key={service.name}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedServices.includes(service.name)
                        ? "border-[#B91C1C] bg-[#B91C1C]/5"
                        : "border-gray-200 hover:border-gray-300 bg-white/80"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.name)}
                      onChange={() => toggleService(service.name)}
                      className="w-5 h-5 rounded border-gray-300 text-[#B91C1C] focus:ring-[#B91C1C]"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-900 block">
                        {service.name}
                      </span>
                      <span className="text-xs text-[#B91C1C]">
                        {service.price}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {selectedServices.length === 0 && (
                <p className="text-xs text-gray-400 mt-2">
                  Select at least one service
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all bg-white/80"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 outline-none transition-all bg-white/80"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || selectedServices.length === 0}
              className="w-full bg-[#B91C1C] text-white py-4 rounded-xl font-semibold hover:bg-[#991B1B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#B91C1C]/30 hover:shadow-xl hover:shadow-[#B91C1C]/40 active:scale-[0.98] sweep-effect"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Or call us directly at{" "}
          <a
            href="tel:+919538111909"
            className="text-[#B91C1C] font-medium hover:underline"
          >
            +91 95381 11909
          </a>
        </p>
      </div>
    </div>
  );
}
