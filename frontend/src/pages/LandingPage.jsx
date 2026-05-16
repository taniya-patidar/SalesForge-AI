import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import "../styles/landing.css";

export default function LandingPage() {
  return (
    <>
      <div className="sf-bg-mesh" />
      <div className="sf-grid" />

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}