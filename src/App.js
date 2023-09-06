import "./App.css";
import Banner from "./components/banner/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import KeyPointCard from "./components/Utility/KeyPointCard";
import keyAreas from "./lib/KeyAreas";



function App() {
  return (
    <div className="">
      <Banner />
      <Card/>
      <div className="flex flex-wrap justify-center">
        {keyAreas.map((item, index) => (
          <KeyPointCard key={index} {...item} />
        ))}
        <div className=" min-w-full">
          <Footer/>
        </div>
      </div>

    </div>
  );
}


export default App;
