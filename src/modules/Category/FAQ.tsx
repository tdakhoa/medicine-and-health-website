import React from "react";
import { InputBase, styled, Box } from "@mui/material";

import Layout from "../Layout";
import MainTitle from "./components/MainTitle";
import { ArrowDownwardOutlined, Search } from "@mui/icons-material";
import { Button, Typography } from "../../components";
import Title from "../Home/Sections/components/Title";

const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(23, 96, 118, 0.2)",
    "&:hover": {
        backgroundColor: "rgba(23, 96, 118, 0.15)"
    },
    width: "40%",
    color: "var(--palette-02)",
    [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(1),
        width: "100%"
    }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-root": {
        width: "100%"
    }
}));

const FAQ = () => {
    return (
        <Layout>
            <MainTitle title="have question?" />
            <Box sx={{ display: "flex", justifyContent: "center", margin: "4% 0%" }}>
                <SearchBox>
                    <StyledInputBase placeholder="Find out if we have any answered question you need" />
                    <Search />
                </SearchBox>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "5% 0%",
                    padding: "3% 0%",
                    backgroundColor: "rgba(23, 96, 118, 0.2)"
                }}>
                <Typography size="h4" weight="bold" format="center" sx={{ whiteSpace: "pre-line" }}>
                    We{"'"}re here to answer! If you don{"'"}t see your question,{"\n"}drop us a line!
                </Typography>
                <Button
                    bgcolor="primary"
                    sx={{ marginTop: "1.4rem", display: { xs: "none", md: "flex" } }}
                    endIcon={<ArrowDownwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                    <Typography size="p">Ask new question</Typography>
                </Button>
            </Box>
            <Typography
                transform="uppercase"
                size={{ lg: "h3", md: "h4", xs: "h4" }}
                weight="extraBold"
                color="secondary"
                format={{ lg: "center", md: "center", xs: "center" }}>
                latest question
            </Typography>
        </Layout>
    );
};

export default FAQ;
