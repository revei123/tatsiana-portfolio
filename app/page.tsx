import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Why from "@/components/Why";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Services />
        <Works />
        <Why />
        <Process />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
