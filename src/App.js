import "./App.css";
import Banner from "./components/Banner";
import BuildYourDream from "./components/BuildYourDream";
import Potpholio from "./components/Potpholio";
function App() {
  return (
    <div className="App">
      <Banner />
      <div style={{ background: "yellow" }}>
        <BuildYourDream />
      </div>
      <div style={{background:'green'}}>
        <Potpholio/>
      </div>
    </div>
  );
}

export default App;
