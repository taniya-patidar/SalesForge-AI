import { PLANS } from "../data/landingData";

export default function Pricing() {
  return (
    <section className="sf-section" id="pricing">
      <h2 className="sf-section-title">Pricing</h2>

      <div className="sf-price-grid">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`sf-price-card ${p.popular ? "popular" : ""}`}
          >
            <h3>{p.name}</h3>

            <div className="sf-plan-price">
              {p.price === "Custom" ? "Custom" : `₹${p.price}`}
            </div>

            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <button className={p.btnClass}>
              {p.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}