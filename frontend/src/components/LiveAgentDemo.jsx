import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function LiveAgentDemo() {
  const ref = useScrollAnimation();

  const conversation = [
    { role: "user", label: "You", text: "Hi, I'm looking for a solution to automate our sales outreach" },
    { role: "agent", label: "SalesForge Agent", text: "Great! I'd love to help. Can you tell me about your team size and current outreach challenges?" },
    { role: "user", label: "You", text: "We're a team of 12 sales reps, doing mostly manual outreach. It's taking up too much time." },
    { role: "agent", label: "SalesForge Agent", text: "Got it. And what's your average deal size? This helps me recommend the right plan for your needs." },
    { role: "user", label: "You", text: "Around $25k-$50k typically" },
    { role: "agent", label: "SalesForge Agent", text: "Perfect fit! We've helped similar teams 3x their pipeline. Would you like to see a quick demo? I have availability this Thursday at 2pm or Friday at 10am.", outcome: "Demo Booked" }
  ];

  return (
    <section className="sf-demo-section" id="demo">
      <div className="sf-demo-header sf-animate" ref={ref}>
        <h2>Watch the agent in action</h2>
        <p>See how SalesForge qualifies leads, handles objections, and books meetings automatically.</p>
      </div>

      <div className="sf-demo-container">
        <div className="sf-demo-conversation">
          {conversation.map((msg, i) => (
            <div key={i} className={`sf-convo-step ${msg.role}`}>
              <div className="sf-convo-icon">
                {msg.role === "user" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
              <div className="sf-convo-content">
                <p className="sf-convo-label">{msg.label}</p>
                <div className="sf-convo-text">
                  {msg.text}
                  {msg.outcome && (
                    <span className="sf-convo-outcome">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {msg.outcome}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}