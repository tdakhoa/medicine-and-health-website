import React from "react";
import { Box, styled } from "@mui/material";

import Typography from "../Typography/Typography";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
import { MenuItems } from "../../constants";

const CategoryBox = () => {
    return (
        <Root>
            <Typography size="h5" weight="bold" color="secondary" alignn="center" transform="uppercase">
                danh mục bài viết
            </Typography>
            <CategoryAccordion data={MenuItems} />
        </Root>
    );
};

export default CategoryBox;

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    border: "0.5px solid rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    padding: "1.5rem"
}));
