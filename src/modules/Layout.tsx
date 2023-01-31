import React from "react";
import { Box } from "@mui/material";

import { Footer, NavBar } from "../components";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <Box sx={{ width: "100%" }}>
            <NavBar />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
