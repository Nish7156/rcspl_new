import "./App.css";
import {useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(window.location.href);

  useEffect(() => {
    console.log(window.location.hash, "hask");
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log("urlParams", urlParams);
    if (id) {
      scrollToSection(id);
    }
  },[window.location]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
