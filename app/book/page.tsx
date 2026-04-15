'use client';

import { useState } from 'react';

const services = [
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
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi, I want to book an appointment.
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}`;

    const whatsappUrl = `https://wa.me/919538111909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-md mx-auto">
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

          <div>
            <label htmlFor="service" className="block mb-1 font-medium">
              Service
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
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
            className="w-full bg-red-700 text-white py-3 rounded-full font-semibold"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
