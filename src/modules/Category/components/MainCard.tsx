import * as React from "react";
import { styled, Box } from "@mui/material";
import { KeyboardDoubleArrowRight, Share } from "@mui/icons-material";

import { Typography } from "../../../components";

const MainCardBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "70px",
    display: "flex",
    alignItems: "stretch",
    cursor: "pointer",
    gap: "1rem",
    "& img": {
        width: "30%",
        height: "100%",
        borderRadius: "10px"
    }
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#A3A3A3",
    marginTop: "0.5rem"
}));

interface MainCardProps {
    title?: string;
    date?: string;
    img?: string;
    description?: string;
}

const MainCard = ({ title = "", date = "", description = "", img = "", ...props }: MainCardProps) => {
    return (
        <MainCardBox>
            <img src={img} alt="main card img" />
            <Box>
                <Typography weight="light" size="p">
                    {date}
                </Typography>
                <Box sx={{ padding: "0.5rem 30% 0.5rem 0" }}>
                    <Typography size="h6" weight="bold">
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
