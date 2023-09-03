import "./App.css";
import Banner from "./components/Banner";
import BuildYourDream from "./components/BuildYourDream";
import Potpholio from "./components/Potpholio";
import TeamMember from "./components/TeamMember";
import WeAreBest from "./components/WeAreBest";
function App() {
  return (
    <div className="App">
      <div style={{ background: "yellow", marginTop: "8%" }}>
        <BuildYourDream />
      </div>
      <div style={{ background: "green" }}>
        <Potpholio />
      </div>
      <TeamMember />
      <WeAreBest />
    </div>
  );
}

export default App;
