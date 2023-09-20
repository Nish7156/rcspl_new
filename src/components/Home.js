import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import Accordion from "./Accordian";
import Address from "./Address";
import TestiMonials from "./TestiMonials";
import Clients from "./Clients";
import keyAreas from "../lib/KeyAreas";
import Expirence from "./Expirence";

function Home() {
  return (
    <>
      <WhyChooseUs />
      <Expirence/>
      <Accordion keyAreas={keyAreas} />
      <section id="about">

      <Address />
      </section>
      <TestiMonials />
      <Clients />
    </>
  );
}

export default Home;
