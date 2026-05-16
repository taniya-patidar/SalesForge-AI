import { FEATURES } from "../data/landingData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ICONS = {
  chat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10H8.01M12 10H12.01M16 10H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  email: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M22 4L12 13L2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  scoring: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  analytics: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Features() {
  const headerRef = useScrollAnimation();

  return (
    <section className="sf-section" id="features">
      <h2 className="sf-section-title sf-animate" ref={headerRef}>Built for Revenue Teams</h2>

      <div className="sf-features-grid">
        {FEATURES.map((feature, i) => (
          <div className={`sf-feat sf-animate sf-animate-delay-${i + 1}`} key={feature.title}>
            <div className="sf-feat-icon">{ICONS[feature.icon]}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}