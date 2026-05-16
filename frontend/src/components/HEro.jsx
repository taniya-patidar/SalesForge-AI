import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="sf-hero">
      <div className="sf-orb" />

      <motion.h1
        className="sf-h1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Forge Your <span className="sf-grad">Sales Future</span>
      </motion.h1>

      <p className="sf-sub">AI-powered sales automation platform</p>

      <div className="sf-btns">
        <Link to="/signup" className="sf-btn-primary">Start Free</Link>
        <a href="#how" className="sf-btn-secondary">How it Works</a>
      </div>
    </section>
  );
}