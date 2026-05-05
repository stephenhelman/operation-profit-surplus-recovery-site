import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import HowItWorks from "@/components/HowItWorks";
import TrustBar from "@/components/TrustBar";
import StatesWeServe from "@/components/StatesWeServe";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactNumbers />
      <HowItWorks />
      <TrustBar />
      <StatesWeServe />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
