import Hero from "../Hero";
import Services from "../Services";
import Gallery from "../Gallery";
import About from "../About";
import Reviews from "../Reviews";
import Contact from "../Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
  );
}