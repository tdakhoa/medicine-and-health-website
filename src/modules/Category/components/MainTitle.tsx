import React from "react";
import { Box, styled } from "@mui/material";

import { Typography } from "../../../components";

const MainTitle = ({ title, subTitle = "", ...props }: MainTitleProps) => {
    return (
        <MainTitleContainer>
            <Overlay></Overlay>
            <img
                className="thumbnail"
                src="https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="thumbnail"
            />
            <TextContainer>
                <TitleBox>
                    <Typography
                        component="h2"
                        color="secondary"
                        size="h5"
                        weight="bold"
                        sx={{ textTransform: "uppercase" }}>
                        {subTitle}
                    </Typography>

                    <Typography
                        component="h1"
                        color="secondary"
                        size={{ lg: "h3", md: "h3", xs: "h4" }}
                        weight="bold"
                        transform="uppercase">
                        {title}
                    </Typography>
                </TitleBox>
                <Box className="background"></Box>
            </TextContainer>
        </MainTitleContainer>
    );
};

export default MainTitle;

interface MainTitleProps {
    title: string;
    subTitle?: string;
}

const MainTitleContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "50vh",
    "& .thumbnail": {
        width: "100%",
        height: "inherit",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
    },
    [theme.breakpoints.down("md")]: {
        height: "40vh"
    },
    [theme.breakpoints.down("sm")]: {
        height: "30vh"
    }
}));

const TitleBox = styled(Box)(({ theme }) => ({
    minWidth: "32rem",
    padding: "2rem 3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
        minWidth: "16rem",
        padding: "1rem",
        gap: "0.5rem"
    }
}));

const Overlay = styled(Box)(() => ({
    width: "100%",
    height: "inherit",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: "linear-gradient(180deg, rgba(23, 96, 118, 0.8) 20.31%, rgba(23, 96, 118, 0) 100%)"
}));

const borderRadius = 30;

const TextContainer = styled(Box)(() => ({
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: `${borderRadius}px ${borderRadius}px 0px 0px`,
    "& .background": {
        width: "100%",
        position: "absolute",
        zIndex: 3,
        "&:before, :after": {
            content: "''",
            position: "absolute",
            height: `${borderRadius}px`,
            width: `${borderRadius * 2}px`,
            bottom: 0
        },
        "&:after": {
            right: `${-2 * borderRadius}px`,
            borderRadius: `0px 0px 0px ${borderRadius}px`,
            boxShadow: `${-1 * borderRadius}px 0px 0px 0px #fff`
        },
        "&:before": {
            left: `${-2 * borderRadius}px`,
            borderRadius: `0 0 ${borderRadius}px 0`,
            boxShadow: `${borderRadius}px 0 0 0 #fff`
        }
    }
}));
