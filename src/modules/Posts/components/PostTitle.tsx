import React from "react";
import { Box, styled } from "@mui/material";

import { Typography } from "../../../components";

const PostTitle = ({ title, date, author, ...props }: PostTitleProps) => {
    return (
        <MainTitleContainer>
            <Overlay></Overlay>
            <img
                className="thumbnail"
                src="https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="thumbnail"
            />

            <TextBox>
                <Typography>{date}</Typography>
                <Typography size={{ lg: "h2", md: "h4" }} weight="extraBold" transform="uppercase">
                    {title}
                </Typography>
                <Typography>{author}</Typography>
            </TextBox>
        </MainTitleContainer>
    );
};

export default PostTitle;

interface PostTitleProps {
    title: string;
    date: string;
    author: string;
}

const MainTitleContainer = styled(Box)(() => ({
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
    }
}));

const TextBox = styled(Box)(({ theme }) => ({
    maxWidth: "70%",
    padding: "2rem 10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "left",
    gap: "0.5rem",
    color: "white",
    textShadow: "0px 0px 20px black",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%"
    }
}));

const Overlay = styled(Box)(() => ({
    width: "100%",
    height: "inherit",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: "rgba(7, 27, 33, 0.6)"
}));
