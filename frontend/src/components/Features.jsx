import Reveal from "./Reveal";
import { FEATURES } from "../data/landingData";

export default function Features() {
  return (
    <section className="sf-section" id="features">
      <Reveal>
        <h2 className="sf-section-title">Features</h2>
      </Reveal>

      <Reveal>
        <div className="sf-features-grid">
          {FEATURES.map((f) => (
            <div className="sf-feat" key={f.title}>
              <div className="sf-feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}