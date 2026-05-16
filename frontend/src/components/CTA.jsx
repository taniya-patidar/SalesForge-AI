import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="sf-cta-wrap">
      <div className="sf-cta-box">
        <h2>Ready to start?</h2>
        <Link to="/signup" className="sf-btn-primary">
          Get Started
        </Link>
      </div>
    </section>
  );
}