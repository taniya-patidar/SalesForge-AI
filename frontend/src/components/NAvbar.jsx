import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="sf-nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link to="/" className="sf-logo">SalesForge AI</Link>

      <ul className="sf-nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How it Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li>
          <Link to="/login" className="sf-nav-cta">Get Started</Link>
        </li>
      </ul>
    </motion.nav>
  );
}