import About from "@/components/About";
import EconomicModel from "@/components/EconomicModel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurRoadmap from "@/components/OurRoadmap";
import Support from "@/components/Support";



export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <EconomicModel />
      <OurRoadmap />
      <Support />
      <Footer />
    </div>
  );
}
