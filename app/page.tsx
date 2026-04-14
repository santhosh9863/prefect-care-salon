import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

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