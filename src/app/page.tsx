import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <ShowcaseGrid />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
