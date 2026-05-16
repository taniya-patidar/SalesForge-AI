export default function OutcomeCards() {
  const outcomes = [
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
      label: "more demos"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Scored Leads",
      desc: "Every conversation is analyzed in real-time to identify buying signals and prioritize your hottest prospects.",
      value: "89%",
      label: "accuracy"
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
      label: "sent this week"
    }
  ];

  return (
    <section className="sf-outcomes-section">
      <div className="sf-outcomes-header">
        <h2>What the bot delivers</h2>
        <p>Real outcomes from every conversation. No manual intervention required.</p>
      </div>

      <div className="sf-outcomes-grid">
        {outcomes.map((outcome, i) => (
          <div key={i} className="sf-outcome-card">
            <div className="sf-outcome-icon">{outcome.icon}</div>
            <h3>{outcome.title}</h3>
            <p>{outcome.desc}</p>
            <div className="sf-outcome-stats">
              <span className="sf-outcome-value">{outcome.value}</span>
              <span className="sf-outcome-label">{outcome.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}