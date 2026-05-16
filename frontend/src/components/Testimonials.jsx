import { TESTIMONIALS } from "../data/landingData";

export default function Testimonials() {
  return (
    <section className="sf-testimonials">
      <div className="sf-testimonials-inner">
        <h2 className="sf-section-title">Loved by Sales Teams</h2>

        <div className="sf-testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div className="sf-test-card" key={test.author}>
              <p className="sf-test-quote">{test.quote}</p>
              <div className="sf-test-author">
                <div className="sf-test-avatar">{test.initials}</div>
                <div className="sf-test-info">
                  <h4>{test.author}</h4>
                  <span>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}