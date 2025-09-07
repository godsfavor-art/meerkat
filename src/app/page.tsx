"use client";
import About from "@/components/About";
import Pumpfun from "@/components/Pumpfun";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Support from "@/components/Support";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Pumpfun />
      <Roadmap />
      <Support />
      <Footer />
    </div>
  );
}
