import './App.css';
import WhyChooseUs from  "./components/WhyChooseUs"
import ContactUs from './components/ContactUs';
import Address from './components/Address';
import TestiMonials from './components/TestiMonials';
import Client from './components/Client';
import Accordion from "./components/Accordian"

import keyAreas from "./lib/KeyAreas"

function App() {
  const accordionItems = [
    {
      title: 'Section 1',
      content: 'Content for Section 1',
    },
    {
      title: 'Section 2',
      content: 'Content for Section 2',
    },
    {
      title: 'Section 3',
      content: 'Content for Section 3',
    },
  ];
  return (
    <>
      <WhyChooseUs/>
      <Accordion items={accordionItems} />
      <Address/>
      <TestiMonials/>
      <Client/>
      <ContactUs/>
    </>
  );
}

export default App;
