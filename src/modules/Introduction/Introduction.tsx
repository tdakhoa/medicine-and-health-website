import React from "react";
import { Box, Grid, Pagination, CardMedia } from "@mui/material";
import { ArrowDownwardOutlined } from "@mui/icons-material";

import Layout from "../Layout";
import MainTitle from "../Category/components/MainTitle";
import Information from "./Sections/Information";
import Contact from "./Sections/Contact";

const Introduction = () => {
  return (
    <Layout>
      <MainTitle title="Giới thiệu" />
      <Information />
      <Contact />
    </Layout>
  );
};

export default Introduction;
