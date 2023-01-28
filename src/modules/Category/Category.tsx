import { Grid } from "@mui/material";
import React from "react";
import { Sidebar } from "../../components";
import Layout from "../Layout";
import ConsulationForm from "./components/ConsulationForm";
import MainTitle from "./components/MainTitle";
import Main from "./Main";

const Category = () => {
  return (
    <Layout>
      <MainTitle title="Y học cổ truyền" />
      <Grid container columnSpacing={2} sx={{ padding: "5% 10%" }}>
        <Grid item xs={8}>
          <Main />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
      <ConsulationForm />
    </Layout>
  );
};

export default Category;
