import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

import ConsulationForm from "./components/ConsulationForm";
import Layout from "../Layout";
import Main from "./Main";
import MainTitle from "./components/MainTitle";
import { Sidebar } from "../../components";
import { TitleLink } from "../../constants";

const Category = () => {
    const router = useRouter();
    const mainTitleId = TitleLink.link.indexOf(router.asPath);

    useEffect(() => {
        if (mainTitleId === -1) {
            router.push("/404");
        }
    }, [mainTitleId]);

    return (
        <Layout>
            <MainTitle
                title={TitleLink.title[mainTitleId] || "ERROR! 404"}
                subTitle={TitleLink.subTitle[mainTitleId]}
            />
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
