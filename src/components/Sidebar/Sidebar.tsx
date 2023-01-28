import { Box } from "@mui/material";
import React from "react";
import Accordion from "./CategoryBox";
import Proposal from "./Proposal";
import Tabs from "./Tabs";

const Sidebar = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Tabs />
      <Accordion />
      <Proposal />
    </Box>
  );
};

export default Sidebar;
