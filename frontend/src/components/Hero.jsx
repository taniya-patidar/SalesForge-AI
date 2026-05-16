import { useState } from "react";
import { Link } from "react-router-dom";

const DEMO_MESSAGES = [
  { role: "user", text: "Hi, I'm looking for a solution to automate our sales outreach" },
  { role: "agent", text: "Great! I'd love to help. Tell me a bit about your team size and current outreach process." },
  { role: "user", text: "We're a team of 12 sales reps, currently doing manual outreach" },
  { role: "agent", text: "Perfect. And what's your average deal size? This helps me recommend the right plan." },
  { role: "user", text: "Around $25k-$50k" },
  { role: "agent", text: "Excellent fit! Let me show you how we helped similar teams 3x their pipeline. Would you like to see a quick demo?", typing: true }
];

export default function Hero() {
  const [messages, setMessages] = useState(DEMO_MESSAGES.slice(0, 2));
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(DEMO_MESSAGES.slice(0, 4));
      setIsTyping(false);
    }, 800);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: "user", text: inputValue }]);
    setInputValue("");
    setTimeout(() => {
      const nextMsg = DEMO_MESSAGES.find(m => m.role === "agent" && !messages.some(cm => cm.text === m.text));
      if (nextMsg) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, nextMsg]);
          setIsTyping(false);
        }, 1000);
      }
    }, 500);
  };

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
            {messages.map((msg, i) => (
              <div key={i} className={`sf-msg sf-msg-${msg.role}`}>
                <div className="sf-msg-bubble">{msg.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="sf-msg sf-msg-agent">
                <div className="sf-msg-bubble sf-msg-typing">
                  <span className="sf-typing-dot"></span>
                  <span className="sf-typing-dot"></span>
                  <span className="sf-typing-dot"></span>
                </div>
              </div>
            )}
          </div>

          <form className="sf-chat-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="sf-chat-send">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}