import { useScrollAnimation } from "../hooks/useScrollAnimation";

const OUTCOMES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Booked Demos",
    desc: "The agent qualifies leads and automatically schedules meetings on your calendar using natural conversation.",
    value: "3x",
    label: "more demos booked",
    accent: "var(--success)"
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Scored Leads",
    desc: "Every conversation is analyzed in real-time to identify buying signals and prioritize your hottest prospects.",
    value: "89%",
    label: "accuracy rate",
    accent: "var(--accent)"
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sent Emails",
    desc: "The agent crafts personalized follow-up emails based on conversation context and sends them automatically.",
    value: "2.4k",
    label: "sent this week",
    accent: "var(--warning)"
  }
];

export default function OutcomeCards() {
  const headerRef = useScrollAnimation();

  return (
    <section className="sf-outcomes-section">
      <div className="sf-outcomes-header sf-animate" ref={headerRef}>
        <p className="sf-outcomes-label">Real Results</p>
        <h2 className="sf-outcomes-title">What the bot delivers</h2>
        <p className="sf-outcomes-desc">Real outcomes from every conversation. No manual intervention required.</p>
      </div>

      <div className="sf-outcomes-grid">
        {OUTCOMES.map((outcome, i) => (
          <div
            key={i}
            className="sf-outcome-card"
          >
            <div className="sf-outcome-icon" style={{ color: outcome.accent }}>
              {outcome.icon}
            </div>
            <h3 className="sf-outcome-title-text">{outcome.title}</h3>
            <p className="sf-outcome-desc-text">{outcome.desc}</p>
            <div className="sf-outcome-stats">
              <span className="sf-outcome-value" style={{ color: outcome.accent }}>{outcome.value}</span>
              <span className="sf-outcome-label">{outcome.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}