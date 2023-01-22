import { Link, Box } from "@mui/material";
import React from "react";
import { Typography } from "../../../../components";

const StyleSeeAll = {
  position: "relative",
  "&:hover": {
    fontStyle: "italic",
  },
};
const StyleDivider = {
  height: 2,
  width: 50,
  backgroundColor: "var(--palette-02)",
  margin: "0.8rem 0px",
};
const StyleTitle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textTransform: "uppercase",
  marginBottom: "3rem",
};

interface TitleProps {
  text: string;
  link?: string;
  sx?: object;
}
const Title = ({ text, link = "#", sx = {}, ...props }: TitleProps) => {
  return (
    <Box sx={StyleTitle}>
      <Typography size="h2" weight="bold" color="secondary">
        {text}
      </Typography>
      <Link href={link} underline="none">
        <Typography
          size="p"
          weight="semiBold"
          color="secondary"
          sx={StyleSeeAll}
        >
          xem tất cả
        </Typography>
      </Link>
      <Box sx={StyleDivider}></Box>
    </Box>
  );
};

export default Title;
