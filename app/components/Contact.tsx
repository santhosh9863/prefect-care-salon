export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Perfect Care Family Salon
          </h2>
          <p className="text-gray-600 text-sm">
            JP Nagar 7th Phase, Bangalore
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-700">08041644448</p>
            <p className="text-gray-600 text-sm">Mon – Sun: 10 AM – 8 PM</p>
            <a
              href="https://maps.app.goo.gl/zHSHvKRMqg3JRHqF6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs underline hover:text-gray-700 transition-colors"
            >
              View on Google Maps
            </a>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-3">
            <a
              href="tel:08041644448"
              className="w-full block py-4 bg-red-700 hover:bg-red-800 text-white text-lg font-semibold rounded-full text-center shadow-lg transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918041644448?text=Hi%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-4 border border-gray-300 text-black bg-white hover:bg-gray-50 text-lg font-semibold rounded-full text-center transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
