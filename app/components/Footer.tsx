const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#B91C1C] flex items-center justify-center text-white text-sm font-bold">
                PC
              </span>
              <div className="leading-tight">
                <span className="text-white text-sm font-bold tracking-wider block">
                  PERFECT CARE
                </span>
                <span className="text-gray-500 text-[10px] tracking-[0.2em] block">
                  FAMILY SALON
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Premium family salon in JP Nagar, Bangalore.
              Expert grooming in a clean, modern environment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/perfectcarefamilysalon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-gray-600 text-gray-300 hover:bg-white hover:text-black transition"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/918041644448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:08041644448"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition"
              >
                📞 Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Working Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Monday – Sunday</li>
              <li>10:00 AM – 8:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>JP Nagar, Bangalore</li>
              <li>08041644448</li>
            </ul>
          </div>

        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs w-full">
          <p>&copy; 2026 Perfect Care Family Salon. All rights reserved.</p>
          <p className="text-gray-600">
            Crafted with care in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
