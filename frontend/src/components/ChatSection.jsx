function ChatSection() {
  return (
    <div className="chat-section">

      <div className="chat-header">
        <h2>Live AI Conversation</h2>
      </div>

      <div className="chat-messages">

        <div className="message user-message">
          Hi, I want pricing details.
        </div>

        <div className="message ai-message">
          Sure! I can help you with our pricing plans.
        </div>

        <div className="message user-message">
          Can you send me a proposal?
        </div>

        <div className="message ai-message">
          Proposal generated successfully ✅
        </div>

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Type your message..."
        />

        <button className="mic-button">
          🎤
        </button>

      </div>

    </div>
  );
}

export default ChatSection;