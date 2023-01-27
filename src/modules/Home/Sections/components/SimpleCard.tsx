import { styled, Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Typography } from "../../../../components";

const Root = styled(Grid)((props: SimpleCardProps) => ({
  cursor: "pointer",
  "& .media-container": {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    "& .media-image": {
      width: "100%",
      height: "100%",
    },
    "& .media-overlay": {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(7, 27, 33, 0.3)",
    },
  },
  "&:hover": {
    color: "var(--palette-02)",
    "& .media-overlay": {
      transition: "all .4s ease-in-out",
      backgroundColor: "rgba(7, 27, 33, 0)",
    },
    "& .media-image": {
      transition: "all .4s ease-in-out",
      transform: "scale(1.1)",
    },
  },
}));

interface SimpleCardProps {
  title?: string;
  content?: string;
  img?: string;
  imgRatio?: number;
  contentRatio?: number;
  overlay?: boolean;
  borderRadius?: string;
  sx?: object;
}
const SimpleCard = ({
  title = "",
  content = "",
  img = "",
  imgRatio = 6,
  contentRatio = 6,
  overlay = true,
  borderRadius = "0px",
  sx = {},
  ...props
}: SimpleCardProps) => {
  return (
    <Root container sx={sx} {...props} direction="column" spacing={2}>
      <Grid item xs={imgRatio}>
        <Box className="media-container" sx={{ borderRadius: `${borderRadius}` }}>
          {overlay === true ? <Box className="media-overlay"></Box> : <></>}
          <CardMedia image={img} title="" className="media-image" />
        </Box>
      </Grid>
      <Grid item xs={contentRatio} sx={{ overflow: "hidden" }}>
        <Typography size="h6" weight="bold">
          {title}
        </Typography>
        <Typography size="p">{content}</Typography>
      </Grid>
    </Root>
  );
};

export default SimpleCard;
