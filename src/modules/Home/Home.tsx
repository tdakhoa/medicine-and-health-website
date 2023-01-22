import React from "react";
import Heart from "./Sections/Heart";
import Hero from "./Sections/Hero";
import Medical from "./Sections/Medical";
import Meds from "./Sections/Meds";
import News from "./Sections/News";
import Diseases from "./Sections/Diseases";
import { NavBar } from "../../components";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Diseases />
      <Heart />
      <Medical />
      <Meds />
      <News />
    </>
  );
};

export default Home;
