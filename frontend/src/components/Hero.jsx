import { Link } from "react-router-dom";

const CONVERSATION = [
  { role: "agent", text: "Hi there! I'm your SalesForge AI assistant. How can I help you today?" },
  { role: "user", text: "I need help automating our sales outreach" },
  { role: "agent", text: "Great! I'd love to help. Tell me about your team size and current outreach process." },
  { role: "user", text: "We're a team of 12 sales reps, doing manual outreach" },
  { role: "agent", text: "Perfect. And what's your average deal size?" }
];

export default function Hero() {
  return (
    <section className="sf-hero">
      <div className="sf-hero-layout">
        <div className="sf-hero-text">
          <p className="sf-hero-label">AI-Powered Sales Automation</p>
          <h1 className="sf-hero-title">
            Your new<br />
            <span className="sf-hero-accent">sales teammate</span>
          </h1>
          <p className="sf-hero-desc">
            Meet your AI sales rep that works 24/7, qualifies leads, and books meetings while you focus on closing.
          </p>
          <Link to="/signup" className="sf-hero-cta">
            Start Free Trial
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="sf-hero-chat">
          <div className="sf-chat-header">
            <div className="sf-chat-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="sf-chat-status">
              <span className="sf-chat-name">SalesForge Agent</span>
              <span className="sf-chat-badge">Active</span>
            </div>
          </div>

          <div className="sf-chat-messages">
            {CONVERSATION.map((msg, i) => (
              <div key={i} className={`sf-msg sf-msg-${msg.role}`}>
                <div className="sf-msg-bubble">{msg.text}</div>
              </div>
            ))}
            <div className="sf-msg sf-msg-agent">
              <div className="sf-msg-bubble sf-msg-typing">
                <span className="sf-typing-dot"></span>
                <span className="sf-typing-dot"></span>
                <span className="sf-typing-dot"></span>
              </div>
            </div>
          </div>

          <div className="sf-chat-input">
            <input
              type="text"
              placeholder="Ask anything..."
              disabled
            />
            <button className="sf-chat-send" disabled>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}