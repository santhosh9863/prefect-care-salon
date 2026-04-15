'use client';

import { useState } from 'react';

const servicesList = [
  'Haircut',
  'Beard Trim',
  'Facial',
  'Hair Coloring',
  'Head Massage',
  'Waxing',
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert('Please select at least one service');
      return;
    }

    setIsSubmitting(true);

    const message = `Hi, I want to book an appointment.
Name: ${formData.name}
Phone: ${formData.phone}
Services: ${selectedServices.join(', ')}
Date: ${formData.date}
Time: ${formData.time}`;

    const url = `https://wa.me/919538111909?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      window.location.href = '/';
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitting) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl text-center max-w-sm">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">Redirecting to WhatsApp...</h2>
          <p className="text-gray-600">Please complete your booking there</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white overflow-x-hidden">
      <div className="max-w-md mx-auto px-4 py-10 w-full">
        <a
          href="/"
          className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-6 w-fit"
        >
          ← Back to Home
        </a>

        <h1 className="text-3xl font-bold text-center mb-8">Book Appointment</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div className="space-y-3">
            <label className="block font-medium">Services</label>

            <div className="grid grid-cols-2 gap-3">
              {servicesList.map(service => (
                <label
                  key={service}
                  className="flex items-center gap-2 p-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-4 h-4 accent-red-700"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block mb-1 font-medium">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-1 font-medium">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-700 text-white py-3 rounded-full font-semibold disabled:opacity-50"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
