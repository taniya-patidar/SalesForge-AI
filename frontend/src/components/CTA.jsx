import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="sf-cta-wrap">
      <div className="sf-cta-box">
        <h2>Ready to Transform Your Sales?</h2>
        <p>Join thousands of businesses already using SalesForge AI.</p>
        <Link to="/signup" className="sf-cta-btn">
          Start Your Free Trial
        </Link>
      </div>
    </section>
  );
}