import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ServiceDetailsPage from "./components/serviceDetailsPage";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      scrollToSection(id);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/service/:slug' element={<ServiceDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
