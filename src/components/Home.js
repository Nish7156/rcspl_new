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
import NewClients from "./NewClients";
import NewServices from "./NewServices";
import NewAbout from "./NewAbout";

function Home() {
  return (
    <>
      <WhyChooseUs />
      <Expirence />
      <NewServices />
      <section style={{ height: "88px" }} id="about"></section>
      <NewAbout />
      <NewClients />
      <TestiMonials />
      <Address />
    </>
  );
}

export default Home;
