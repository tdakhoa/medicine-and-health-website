import React from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

import { Sidebar } from "../../components";
import Layout from "../Layout";
import ConsulationForm from "./components/ConsulationForm";
import MainTitle from "./components/MainTitle";
import Main from "./Main";
import { TitleLink } from "../../constants";

const Category = () => {
    const { asPath } = useRouter();
    const mainTitleId = TitleLink.link.indexOf(asPath);
    return (
        <Layout>
            <MainTitle title={TitleLink.title[mainTitleId]} subTitle={TitleLink.subTitle[mainTitleId]} />
            <Grid container columnSpacing={2} sx={{ padding: "5% 10% 2%" }}>
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
