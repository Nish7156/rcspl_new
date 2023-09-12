import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
