import React from "react";
import { Box, CardMedia, styled, Grid } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import { mainNews, newsData } from "../../../constants";

const News = () => {
    var currentTime = new Date();
    var month = `${currentTime.getMonth() + 1}`;
    var day = `${currentTime.getDate()}`;
    var year = currentTime.getFullYear();

    if (currentTime.getDate() < 10) day = "0" + day;
    if (currentTime.getMonth() < 10) month = "0" + month;

    return (
        <Root>
            <Box sx={{ position: "relative", top: "-90px" }} id="news" />
            <TitleContainer>
                <TextBox>
                    <Typography
                        transform="uppercase"
                        size="h3"
                        weight="bold"
                        color="secondary"
                        format={{ lg: "left", md: "center", xs: "center" }}>
                        Tin mới nhất
                    </Typography>
                    <Typography
                        size={{ lg: "h5", md: "p", xs: "p" }}
                        weight="semiBold"
                        color="secondary"
                        format={{ lg: "left", md: "center", xs: "center" }}>
                        Ngày {day} tháng {month} năm {year}
                    </Typography>
                </TextBox>
                <Button
                    sx={{ display: { xs: "none", md: "flex" } }}
                    bgcolor="primary"
                    endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                    <Typography size="p">Đọc thêm</Typography>
                </Button>
            </TitleContainer>

            <ArticlesContainer>
                <MainArticle>
                    <CardMedia image={mainNews.img} className="media-image" />
                    <TextContainer className="main">
                        <Typography size={{ lg: "h2", md: "h3", xs: "h4" }} weight="bold" sx={{ zIndex: 1 }}>
                            {mainNews.title}
                        </Typography>
                        <Typography sx={{ zIndex: 1 }}>{mainNews.description}</Typography>
                    </TextContainer>
                </MainArticle>
                <SubArticles>
                    {newsData.map((item, i) => (
                        <Box key={i} sx={{ flexGrow: 1, position: "relative" }}>
                            <CardMedia image={item.img} className="media-image" />
                            <TextContainer className="sub">
                                <Typography weight="bold" sx={{ zIndex: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography size="0.9rem" weight="regular" sx={{ zIndex: 1 }}>
                                    {item.description}
                                </Typography>
                            </TextContainer>
                        </Box>
                    ))}
                </SubArticles>
            </ArticlesContainer>
        </Root>
    );
};

export default News;

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    margin: "5% 10%",
    [theme.breakpoints.down("sm")]: {
        margin: "5%"
    }
}));

const ArticlesContainer = styled(Box)(({ theme }) => ({
    height: "80vh",
    borderRadius: "50px",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "60vh"
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
}));

const MainArticle = styled(Box)(({ theme }) => ({
    width: "70%",
    cursor: "pointer",
    position: "relative",
    "& .media-image": {
        width: "100%",
        height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "60%"
    }
}));

const SubArticles = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    gap: "1rem",
    "& .media-image": {
        width: "100%",
        height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "40%",
        flexDirection: "row",
        "& div:nth-child(3)": {
            display: "none"
        }
    }
}));

const TextContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "&.main": {
        width: "100%",
        textAlign: "left",
        background: "linear-gradient(360deg, #71BFDA 0%, rgba(217, 217, 217, 0) 100%)",
        justifyContent: "end",
        transition: "all .5s ease-in-out",
        padding: "4rem",
        "&:hover": {
            textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
            color: "white",
            background: "none"
        },
        "&::before": {
            color: "white",
            background: "linear-gradient(360deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)",
            position: "absolute",
            content: '""',
            inset: 0,
            opacity: 0,
            transition: "all .5s ease-in-out"
        },
        "&:hover::before": {
            opacity: "1"
        }
    },
    "&.sub": {
        textAlign: "right",
        background: "linear-gradient(270deg, #71BFDA 15%, rgba(217, 217, 217, 0) 100%)",
        justifyContent: "start",
        transition: "all .5s ease-in-out",
        padding: "1rem",
        width: "60%",
        right: 0,
        "&:hover": {
            textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
            color: "white",
            background: "none"
        },
        "&::before": {
            color: "white",
            background: "linear-gradient(270deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)",
            position: "absolute",
            content: '""',
            inset: 0,
            opacity: 0,
            transition: "all .5s ease-in-out",
            zIndex: 1
        },
        "&:hover::before": {
            opacity: "1"
        }
    },
    [theme.breakpoints.down("sm")]: {
        "&.main": {
            padding: "1rem",
            justifyContent: "start"
        },

        "&.sub": {
            width: "100%",
            padding: "0.5rem",
            textAlign: "center",
            justifyContent: "start",
            background: "linear-gradient(180deg, #71BFDA 15%, rgba(217, 217, 217, 0) 100%)"
        }
    }
}));

const TitleContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        marginTop: "2rem"
    }
}));
