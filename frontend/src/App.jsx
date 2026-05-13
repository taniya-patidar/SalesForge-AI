import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import DashboardContent from "./components/DashboardContent";
import ChatSection from "./components/ChatSection";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="main-layout">

      <Sidebar />

      <div className="main-content">

        <TopBar />

        <HeroSection />

        <div className="content-layout">

          <div className="left-section">

            <StatsCards />

            <DashboardContent />

          </div>

          <ChatSection />

        </div>

      </div>

    </div>
  );
}

export default App;