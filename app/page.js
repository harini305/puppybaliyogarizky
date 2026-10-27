import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Journal from "@/components/Journal";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SmoothScroll>
        <Header />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Gallery />
          <Journal />
          <Booking />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
      <Motion />
    </>
  );
}
