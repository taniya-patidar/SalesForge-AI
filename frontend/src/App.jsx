import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import  AICapilot from "./components/AICapilot";
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
         <StatsCards />

           <AICapilot /> 
            </div>

       

          <div className="right-panel">

           

        

          <ChatSection />

        </div>

      </div>

   
  );
}

export default App;