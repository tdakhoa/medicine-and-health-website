import React from "react";
import Heart from "./Sections/Heart";
import Hero from "./Sections/Hero";
import NormalSection from "./Sections/Normal";
import Meds from "./Sections/Meds";
import News from "./Sections/News";
import Alternate from "./Sections/Alternate";
import { NavBar } from "../../components";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <News />
      <NormalSection />
      <Alternate />
      <Heart />
      <Meds />
    </>
  );
};

export default Home;
