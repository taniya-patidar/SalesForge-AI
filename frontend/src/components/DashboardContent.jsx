function DashboardContent() {
  return (
    <div className="dashboard-content">

      <div className="assistant-panel">

        <h2>AI Sales Assistant</h2>

        <p>
          Your AI assistant is actively analyzing
          conversations and identifying high-conversion leads.
        </p>

        <button>
          Start AI Conversation
        </button>

      </div>

      <div className="conversation-panel">

        <h2>Recent Conversations</h2>

        <div className="conversation-item">
          <h4>Riya Sharma</h4>
          <p>Interested in enterprise pricing...</p>
        </div>

        <div className="conversation-item">
          <h4>Aman Verma</h4>
          <p>Requested product demo...</p>
        </div>

        <div className="conversation-item">
          <h4>NexaTech</h4>
          <p>Hot lead detected by AI...</p>
        </div>

      </div>

    </div>
  );
}

export default DashboardContent;