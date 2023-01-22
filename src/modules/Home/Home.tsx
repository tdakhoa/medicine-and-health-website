import React from "react";
import Heart from "./Sections/Heart";
import Hero from "./Sections/Hero";
import NormalSection from "./Sections/Normal";
import Meds from "./Sections/Meds";
import News from "./Sections/News";
import Diseases from "./Sections/Diseases";
import { NavBar } from "../../components";

const Home = () => {
  return (
    <>
      <NavBar />
      <News />
      <NormalSection />
      <Hero />
      <Diseases />
      <Heart />
      <Meds />
    </>
  );
};

export default Home;
