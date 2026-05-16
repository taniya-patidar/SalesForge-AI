import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LiveAgentDemo from "../components/LiveAgentDemo";
import OutcomeCards from "../components/OutcomeCards";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import "../styles/landing.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveAgentDemo />
      <OutcomeCards />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}