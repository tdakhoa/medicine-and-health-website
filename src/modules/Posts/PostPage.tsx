import React, { useState } from "react";
import { styled, Box, Grid } from "@mui/material";

import Layout from "../Layout";
import { Sidebar, Typography } from "../../components";
import PostTitle from "./components/PostTitle";
import Main from "./Main";
import PostCarousel from "./components/PostCarousel";

const PostPage = () => {
    return (
        <Layout>
            <PostTitle title={postData.title} date={postData.date} author={postData.author} />

            <Grid container columnSpacing={2} sx={{ padding: "5% 10% 2%" }}>
                <Grid item xs={8}>
                    <Main />
                </Grid>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
            </Grid>

            <PostCarousel />
        </Layout>
    );
};

export default PostPage;

const postData = {
    title: "Những điều cần biết về ngộ độc",
    date: "Ngày 21 tháng 04 năm 2023",
    author: "GS. Ngân Lam"
};
