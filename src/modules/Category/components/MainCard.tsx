import * as React from "react";
import { styled, Box } from "@mui/material";
import { KeyboardDoubleArrowRight, Share } from "@mui/icons-material";

import { Typography } from "../../../components";

const MainCard = ({ title = "", date = "", description = "", img = "", ...props }: MainCardProps) => {
    return (
        <MainCardBox>
            <img src={img} alt="main card img" />
            <Box>
                <Typography weight="light" size="p">
                    {date}
                </Typography>
                <Box sx={{ padding: { xs: 0, md: "0.5rem 30% 0.5rem 0" } }}>
                    <Typography component="h1" size="h6" weight="bold">
                        {title}
                    </Typography>
                </Box>
                <Box sx={{ paddingRight: "5%" }}>
                    <Typography size="p">{description}</Typography>
                </Box>
                <IconBox>
                    <KeyboardDoubleArrowRight />
                    <Share sx={{ fontSize: "1.2rem" }} />
                </IconBox>
            </Box>
        </MainCardBox>
    );
};

export default MainCard;

interface MainCardProps {
    title?: string;
    date?: string;
    img?: string;
    description?: string;
}

const MainCardBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "70px",
    display: "flex",
    maxHeight: "11rem",
    cursor: "pointer",
    gap: "1rem",
    "& img": {
        width: "30%",
        maxHeight: "100%",
        borderRadius: "10px",
        objectFit: "cover"
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        maxHeight: "100%",
        "& img": {
            width: "100%",
            height: "12rem"
        }
    }
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#A3A3A3",
    marginTop: "0.5rem"
}));
