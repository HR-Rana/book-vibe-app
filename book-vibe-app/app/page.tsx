import Image from "next/image";
import HeroSection from "./comopnents/HomePage/heroSection";
import Books from "./comopnents/HomePage/books";


export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="">
        <HeroSection />
      </div>
      <div className="books-section">
        <Books />
      </div>
    </section>
  );
}
