import React from "react";
import CardCarousel from "./Sections/CardCarousel";
import Hero from "./Sections/Hero";
import NormalSection from "./Sections/Normal";
import Mix from "./Sections/Mix";
import News from "./Sections/News";
import Alternate from "./Sections/Alternate";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <News />
      <NormalSection />
      <Alternate />
      <CardCarousel />
      <Mix />
    </Layout>
  );
};

export default Home;
