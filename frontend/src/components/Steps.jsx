import { STEPS } from "../data/landingData";

export default function Steps() {
  return (
    <section className="sf-section" id="how">
      <h2 className="sf-section-title">How it Works</h2>

      <div className="sf-steps">
        {STEPS.map((s) => (
          <div className="sf-step" key={s.num}>
            <div className="sf-step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}