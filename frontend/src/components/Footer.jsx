import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sf-footer">
      <div className="sf-footer-brand">SalesForge AI</div>

      <div className="sf-footer-links">
        <Link to="#">Product</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Features</Link>
        <Link to="#">About</Link>
        <Link to="#">Blog</Link>
      </div>

      <div className="sf-footer-copy">
        © 2026 SalesForge AI. All rights reserved.
      </div>
    </footer>
  );
}