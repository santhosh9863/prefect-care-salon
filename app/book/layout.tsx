import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Book Appointment | Perfect Care Family Salon",
  description: "Book your appointment at Perfect Care Family Salon, JP Nagar, Bangalore. Premium grooming services including haircuts, facials, beard trims, and more.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
