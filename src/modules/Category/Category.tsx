import { Grid } from "@mui/material";
import React from "react";
import { Sidebar } from "../../components";
import Layout from "../Layout";
import MainTitle from "./components/MainTitle";

const Category = () => {
  return (
    <Layout>
      <MainTitle title="Y học cổ truyền" />
      <Grid container columnSpacing={2} sx={{ padding: "5% 10%" }}>
        <Grid item xs={8}>
          main
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Category;
