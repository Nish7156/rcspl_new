import React, { useEffect } from "react";
import WhyChooseUs from "./WhyChooseUs";
import Accordion from "./Accordian";
import Address from "./Address";
import TestiMonials from "./TestiMonials";
import Clients from "./Clients";
import keyAreas from "../lib/KeyAreas";
import Expirence from "./Expirence";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Home() {
 
  return (
    <>
      <WhyChooseUs />
      <Expirence />
      <Accordion keyAreas={keyAreas} />
      <section style={{ height: "88px" }} id='about'></section>
      <Address />
      <TestiMonials />
      <Clients />
    </>
  );
}

export default Home;
