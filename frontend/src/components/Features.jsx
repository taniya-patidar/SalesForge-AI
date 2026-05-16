import { FEATURES } from "../data/landingData";

export default function Features() {
  return (
    <section className="sf-section" id="features">
      <h2 className="sf-section-title">Built for Revenue Teams</h2>

      <div className="sf-features-grid">
        {FEATURES.map((feature, i) => (
          <div className="sf-feat" key={feature.title}>
            <div className="sf-feat-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}