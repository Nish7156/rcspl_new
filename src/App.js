import './App.css';
import WhyChooseUs from  "./components/WhyChooseUs"
import ContactUs from './components/ContactUs';
import Address from './components/Address';
import TestiMonials from './components/TestiMonials';
import Client from './components/Client';
import Accordion from "./components/Accordian"

import keyAreas from "./lib/KeyAreas"

function App() {
  return (
    <>
      <WhyChooseUs/>
      <Accordion keyAreas={keyAreas}/>
      <Address/>
      <TestiMonials/>
      <Client/>
      <ContactUs/>
    </>
  );
}

export default App;
