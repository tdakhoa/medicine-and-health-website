import React from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

import ConsulationForm from "./components/ConsulationForm";
import Layout from "../Layout";
import Main from "./Main";
import MainTitle from "./components/MainTitle";
import { Sidebar } from "../../components";
import { homeData } from "../../constants";

const Category = () => {
    const router = useRouter();

    let title = "",
        subtitle = "";
    for (let i of homeData) {
        if (i.link == router.asPath) title = i.title;
        if (i.item.length > 0) {
            for (let j of i.item) {
                if (j.link == router.asPath) {
                    title = j.title;
                    subtitle = i.title;
                }
            }
        }
    }

    return (
        <Layout>
            <MainTitle title={title} subTitle={subtitle} />
            <Grid container columnSpacing={2} sx={{ padding: "5% 10% 2%", flexDirection: { xs: "column", md: "row" } }}>
                <Grid item xs={12} md={8}>
                    <Main />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Sidebar />
                </Grid>
            </Grid>
            <ConsulationForm title={catFormData.title} description={catFormData.description} img={catFormData.img} />
        </Layout>
    );
};

export default Category;

const catFormData = {
    title: "TƯ VẤN PHÁP LUẬT MIỄN PHÍ ",
    description: "HÃY ĐỂ LẠI THÔNG TIN LIÊN HỆ CỦA BẠN",
    img: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
};
