function TopBar() {
  return (
    <div className="topbar">

      <input
        type="text"
        placeholder="Search conversations..."
        className="search-bar"
      />

      <div className="top-icons">

        <button>🎤</button>

        <button>🔔</button>

        <button>⚙️</button>

        <div className="profile">
          M
        </div>

      </div>

    </div>
  );
}

export default TopBar;