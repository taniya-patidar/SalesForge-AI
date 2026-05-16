import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sf-nav">
      <Link to="/" className="sf-logo">SalesForge AI</Link>

      <ul className="sf-nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><Link to="/login">Log in</Link></li>
        <li>
          <Link to="/signup" className="sf-nav-cta">Start Free</Link>
        </li>
      </ul>
    </nav>
  );
}