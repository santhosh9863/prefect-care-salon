import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Perfect Care Family Salon | JP Nagar, Bangalore",
  description:
    "Premium family salon in JP Nagar offering haircuts, facials, hair coloring, beard trims, head massage, and waxing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-[var(--font-poppins)] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}