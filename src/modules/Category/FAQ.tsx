import React from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

import ConsulationForm from "./components/ConsulationForm";
import Layout from "../Layout";
import Main from "./Main";
import MainTitle from "./components/MainTitle";
import { Sidebar } from "../../components";
import { TitleLink } from "../../constants";

const FAQ = () => {
    const router = useRouter();
    const mainTitleId = TitleLink.link.indexOf(router.asPath);

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

export default FAQ;
