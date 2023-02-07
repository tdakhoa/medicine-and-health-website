import React from "react";
import { Box, styled } from "@mui/material";

import Tags from "./components/Tags";
import Sharing from "./components/Sharing";

const Main = () => {
    return (
        <Root>
            <Box>content nef</Box>
            <Divider />
            <Tags data={tagsData} />
            <Sharing />
          
        </Root>
    );
};

export default Main;

const tagsData = ["thuoc", "ngo doc", "thuoc va suc khoe", "content"];

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginRight: "3%",
    width: "100%"
}));

const Divider = styled(Box)(({ theme }) => ({
    height: "1px",
    background: "linear-gradient(-90deg, rgba(23, 96, 118, 0) 0.04%, rgba(23, 96, 118, 0.6) 55.73%)",
    margin: "1.2rem 0rem",
    width: "100%"
}));
