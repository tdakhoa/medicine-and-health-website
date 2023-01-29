import React from "react";
import { Box, styled } from "@mui/material";

import Accordion from "./CategoryBox";
import Proposal from "./Proposal";
import Tabs from "./Tabs";

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
}));

const Sidebar = () => {
    return (
        <Root>
            <Tabs />
            <Accordion />
            <Proposal />
        </Root>
    );
};

export default Sidebar;
