import "./App.css";
import Banner from "./components/banner/Banner";
import BuildYourDream from "./components/BuildYourDream";
import Card from "./components/Card";
import KeyPointCard from "./components/Utility/KeyPointCard";
import WeAreBest from "./components/WeAreBest";
import keyAreas from "./lib/KeyAreas";

function App() {
  return (
    <div className="">
      <Banner />
      <Card />
      <BuildYourDream />
      <WeAreBest />
      <div className="flex flex-wrap justify-center">
        {keyAreas.map((item, index) => (
          <KeyPointCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
