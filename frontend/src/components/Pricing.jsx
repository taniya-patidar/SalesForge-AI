import { Link } from "react-router-dom";
import { PLANS } from "../data/landingData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Pricing() {
  const headerRef = useScrollAnimation();

  return (
    <section className="sf-section" id="pricing">
      <h2 className="sf-section-title sf-animate" ref={headerRef}>Simple, Transparent Pricing</h2>

      <div className="sf-price-grid">
        {PLANS.map((plan, i) => (
          <div
            key={plan.name}
            className={`sf-price-card sf-animate sf-animate-delay-${i + 1} ${plan.popular ? "popular" : ""}`}
          >
            <h3>{plan.name}</h3>

            <div className="sf-plan-price">
              {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
              {plan.priceUnit && <span>{plan.priceUnit}</span>}
            </div>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Link
              to="/signup"
              className={`sf-price-btn ${plan.btnClass}`}
            >
              {plan.btnLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}