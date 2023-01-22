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
};

interface TitleProps {
  text: string;
  link?: string;
  sx?: object;
}
const Title = ({ text, link = "#", sx = {}, ...props }: TitleProps) => {
  return (
    <Box sx={StyleTitle}>
      <Typography text={text} size="h2" weight="bold" color="secondary" />
      <Link href={link} underline="none">
        <Typography
          text="see all posts"
          size="p"
          weight="semiBold"
          color="secondary"
          sx={StyleSeeAll}
        />
      </Link>
      <Box sx={StyleDivider}></Box>
    </Box>
  );
};

export default Title;
