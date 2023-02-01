import React from "react";
import { Box } from "@mui/material";

import { Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";

const Admin = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <ToggleDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Typography size="p">Admin</Typography>
            </Box>
        </Box>
    );
};

export default Admin;
