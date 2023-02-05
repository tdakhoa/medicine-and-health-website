import React, { useState } from "react";
import { InputBase, styled, Box, Grid, Pagination, Tab, Tabs } from "@mui/material";

import Layout from "../Layout";
import MainTitle from "./components/MainTitle";
import { ArrowDownwardOutlined, Search } from "@mui/icons-material";
import { Button, QuestionAccordion, Typography } from "../../components";
import ConsulationForm from "./components/ConsulationForm";
import { faq, faqFormData, questionsData, questionTitle } from "../../constants";

const FAQ = () => {
    const [page, setPage] = useState(1);
    const [value, setValue] = useState(0);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Layout>
            <MainTitle title="have question?" />
            <Box sx={{ display: "flex", justifyContent: "center", margin: "4% 0%" }}>
                <SearchBox>
                    <StyledInputBase placeholder="Find out if we have any answered question you need" />
                    <Search />
                </SearchBox>
            </Box>
            <CenterBox>
                <Typography size="h4" weight="bold" format="center" sx={{ whiteSpace: "pre-line" }}>
                    We{"'"}re here to answer! If you don{"'"}t see your question,{"\n"}drop us a line!
                </Typography>
                <Button
                    bgcolor="primary"
                    sx={{ marginTop: "1.4rem", display: { xs: "none", md: "flex" } }}
                    endIcon={<ArrowDownwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                    <Typography size="p">Ask new question</Typography>
                </Button>
            </CenterBox>
            <Root>
                <Typography
                    transform="uppercase"
                    size={{ lg: "h3", md: "h4", xs: "h4" }}
                    weight="extraBold"
                    color="secondary"
                    format={{ lg: "center", md: "center", xs: "center" }}>
                    latest question
                </Typography>

                <Grid container sx={{ justifyContent: "space-between", flexGrow: 1 }}>
                    {questionsData.map((item, i) => (
                        <QuestionGrid item xs={3.5} key={i}>
                            <Typography size="h5" weight="bold">
                                {item.title}
                            </Typography>
                            <Typography size="p" sx={{ padding: "1rem", paddingLeft: 0 }}>
                                {item.description}
                            </Typography>
                        </QuestionGrid>
                    ))}
                </Grid>

                <Typography
                    transform="uppercase"
                    size={{ lg: "h3", md: "h4", xs: "h4" }}
                    weight="extraBold"
                    color="secondary"
                    format={{ lg: "center", md: "center", xs: "center" }}>
                    other question
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ width: "50%", marginTop: "2rem", marginBottom: "1rem" }}>
                        <MyTabs value={value} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
                            {questionTitle.map((item, i) => (
                                <Tab label={item.title} />
                            ))}
                        </MyTabs>
                    </Box>
                    <AccordionBox>
                        <QuestionAccordion data={faq} />
                    </AccordionBox>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Pagination page={page} onChange={handlePageChange} count={10} size="large" />
                    </Box>
                </Box>
            </Root>

            <ConsulationForm title={faqFormData.title} description={faqFormData.description} img={faqFormData.img} />
        </Layout>
    );
};

export default FAQ;

const Root = styled(Box)(({ theme }) => ({
    margin: "5%"
}));

const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
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

const CenterBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5% 0%",
    padding: "3% 0%",
    backgroundColor: "rgba(23, 96, 118, 0.2)"
}));

const QuestionGrid = styled(Grid)(({ theme }) => ({
    padding: "1.5rem 2.5rem",
    margin: "2rem 0 3.5rem",
    backgroundColor: "rgba(23, 96, 118, 0.2)",
    borderRadius: "10px"
}));

const AccordionBox = styled(Box)(({ theme }) => ({
    border: "1px solid rgba(23, 96, 118, 0.4)",
    boxShadow: "0px 0px 30px rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    width: "55%",
    margin: "1.5rem 0rem"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    paddingRight: "0.5rem",
    "& .MuiInputBase-root": {
        width: "100%"
    }
}));

const MyTabs = styled(Tabs)(() => ({
    "& .MuiTabs-flexContainer": {
        gap: "1rem"
    },
    "& .MuiTabs-indicator": {
        display: "none"
    },
    "& .MuiTab-root, .Mui-disabled": {
        padding: "0.6rem 2rem ",
        borderRadius: 999,
        textTransform: "initial",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        border: "1px solid var(--palette-02)",
        color: "var(--palette-02)"
    },
    "& .Mui-selected": {
        border: "none",
        background: "linear-gradient(90deg, #176076 0.04%, rgba(23, 96, 118, 0.5) 99.96%)",
        color: "white !important"
    }
}));
