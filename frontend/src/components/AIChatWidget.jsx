 import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AIChatWidget.css";

// ── AI Responses ──────────────────────────────────────────────────────────────
const AI_RESPONSES = {
  default: [
    "Great question! SalesForge AI can help you automate your entire sales pipeline. Would you like to see a demo?",
    "I can help you set up lead generation in under 5 minutes. Want me to walk you through it?",
    "Our customers see an average 3.2× increase in qualified leads within the first month. Want to know how?",
    "I'd love to help! Could you tell me more about your current sales process so I can suggest the best solution?",
    "SalesForge AI integrates with 50+ CRMs including HubSpot, Salesforce, and Pipedrive. Any specific one you use?",
  ],
  pricing: "Our Pro plan starts at ₹2,999/month with unlimited AI emails and 500 leads. Want to start with the free tier first?",
  demo:    "I'll connect you with our team for a personalized demo! Can I get your email? Usually takes just 15 mins.",
  leads:   "Our Lead Gen AI scans 200M+ company profiles to find your ideal buyers — scored by intent signals. Want a sample report?",
  email:   "The Email Assistant generates hyper-personalized cold emails in seconds. Users see 3-5× higher reply rates. Want a sample?",
};

const QUICK_REPLIES = ["📊 Show Pricing", "🎯 Generate Leads", "✍️ Email Assistant", "🚀 Book Demo"];

function getAIResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("plan") || lower.includes("📊")) return AI_RESPONSES.pricing;
  if (lower.includes("demo")||   lower.includes("book")||   lower.includes("🚀"))  return AI_RESPONSES.demo;
  if (lower.includes("lead")  || lower.includes("🎯"))   return AI_RESPONSES.leads;
  if (lower.includes("email") || lower.includes("✍️"))   return AI_RESPONSES.email;
  return AI_RESPONSES.default[Math.floor(Math.random() * AI_RESPONSES.default.length)];
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ── Sub-components ────────────────────────────────────────────────────────────
function ChatHeader({ onClose }) {
  return (
    <div className="cw-header">
      <div className="cw-header-avatar">
        🤖
        <div className="cw-header-status" />
      </div>
      <div className="cw-header-info">
        <div className="cw-header-name">Forge AI Assistant</div>
        <div className="cw-header-sub">
          <span className="cw-online-dot" />
          Online · Replies instantly
        </div>
      </div>
      <button className="cw-close-btn" onClick={onClose} aria-label="Close chat">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <motion.div
      className={`cw-msg ${message.role}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {message.role === "ai" && <div className="cw-msg-avatar">🤖</div>}
      <div>
        <div className="cw-bubble">{message.text}</div>
        <div className="cw-msg-time">{message.time}</div>
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      className="cw-typing"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="cw-msg-avatar">🤖</div>
      <div className="cw-typing-bubble">
        <div className="cw-typing-dot" />
        <div className="cw-typing-dot" />
        <div className="cw-typing-dot" />
      </div>
    </motion.div>
  );
}
function QuickReplies({ onSelect }) {
  return (
    <motion.div
      className="cw-quick-replies"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      {QUICK_REPLIES.map((q) => (
        <button key={q} className="cw-quick-btn" onClick={() => onSelect(q)}>
          {q}
        </button>
      ))}
    </motion.div>
  );
}

function ChatInput({ value, onChange, onSend, onKeyDown, disabled, inputRef }) {
  return (
    <div className="cw-input-area">
      <textarea
        ref={inputRef}
        className="cw-input"
        placeholder="Ask me anything about SalesForge..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        rows={1}
      />
      <button
        className="cw-send-btn"
        onClick={onSend}
        disabled={disabled}
        aria-label="Send message"
      >
        <svg className="cw-send-icon" viewBox="0 0 24 24" fill="none">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function FabButton({ open, showDot, onClick }) {
  return (
    <motion.button
      className="cw-fab"
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      aria-label={open ? "Close chat" : "Open AI chat"}
    >
      <div className="cw-fab-ring" />
      {showDot && !open && <div className="cw-notif" />}

      <AnimatePresence mode="wait">
        {open ? (
          <motion.svg
            key="close"
            className="cw-fab-icon"
            viewBox="0 0 24 24"
            fill="none"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate: 90,  opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </motion.svg>
        ) : (
          <motion.svg
            key="chat"
            className="cw-fab-icon"
            viewBox="0 0 24 24"
            fill="none"
            initial={{ rotate: 90,  opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9"  cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function AIChatWidget() {
  const [open, setOpen]           = useState(false);
  const [showDot, setShowDot]     = useState(true);
  const [input, setInput]         = useState("");
  const [typing, setTyping]       = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [messages, setMessages]   = useState([
    {
      id: 1,
      role: "ai",
      time: getTime(),
      text: "👋 Hi! I'm Forge, your AI sales assistant. I can help you with lead generation, email writing, analytics, and pricing. What would you like to know?",
    },
  ]);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setShowDot(false);
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);
 const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    setInput("");
    setShowQuick(false);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", time: getTime(), text: msg },
    ]);

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "ai", time: getTime(), text: getAIResponse(msg) },
      ]);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="cw-wrap">

      {/* ── Chat Popup ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="cw-popup"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.85, y: 20  }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            <ChatHeader onClose={() => setOpen(false)} />

            <div className="cw-messages">
              <AnimatePresence initial={false}>
                {messages.map((m) => <ChatMessage key={m.id} message={m} />)}
                {typing && <TypingIndicator key="typing" />}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            <AnimatePresence>
              {showQuick && <QuickReplies onSelect={sendMessage} />}
            </AnimatePresence>

            <ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSend={sendMessage}
              onKeyDown={handleKeyDown}
              disabled={!input.trim() || typing}
              inputRef={inputRef}
            />

            <div className="cw-footer">
              Powered by <span>SalesForge AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Button ── */}
      <FabButton
        open={open}
        showDot={showDot}
        onClick={() => setOpen((o) => !o)}
      />

    </div>
  );
}