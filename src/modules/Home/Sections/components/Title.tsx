import React from "react";
import Link from "next/link";
import { Box, styled } from "@mui/material";

import { Typography } from "../../../../components";

const StyleSeeAll = {
    position: "relative",
    "&:hover": {
        fontStyle: "italic"
    }
};
const StyleDivider = {
    height: 2,
    width: 50,
    backgroundColor: "var(--palette-02)",
    margin: "0.8rem 0px"
};

const StyledTitle = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "uppercase",
    marginBottom: "3rem"
}));

interface TitleProps {
    text: string;
    link?: string;
    sx?: object;
}
const Title = ({ text, link = "", sx = {}, ...props }: TitleProps) => {
    return (
        <StyledTitle sx={sx}>
            <Typography size="h2" weight="bold" color="secondary" transform="uppercase">
                {text}
            </Typography>
            <Link className="see-more" href={link}>
                <Typography size="p" weight="semiBold" color="secondary" transform="uppercase" sx={StyleSeeAll}>
                    xem tất cả
                </Typography>
            </Link>
            <Box sx={StyleDivider}></Box>
        </StyledTitle>
    );
};

export default Title;
