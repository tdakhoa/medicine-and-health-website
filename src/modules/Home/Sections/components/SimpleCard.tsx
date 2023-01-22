import { styled, Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Typography } from "../../../../components";

const Root = styled(Grid)(({ theme }) => ({
<<<<<<< HEAD
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        "& .media-image": {
            width: "100%",
            height: "100%"
        },
        "& .media-overlay": {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(7, 27, 33, 0.3)"
        }
    },
    "&:hover": {
        color: "var(--palette-02)",
        "& .media-overlay": {
            backgroundColor: "rgba(7, 27, 33, 0)"
        }
    }
}));

interface SimpleCardProps {
    title?: string;
    content?: string;
    img?: string;
    imgRatio?: number;
    contentRatio?: number;
    overlay?: boolean;
    sx?: object;
}
const SimpleCard = ({ title = "", content = "", img = "", imgRatio = 6, contentRatio = 6, overlay = true, sx = {}, ...props }: SimpleCardProps) => {
    return (
        <Root container sx={sx} {...props} direction="column" spacing={2}>
            <Grid item xs={imgRatio} className="media-container">
                {overlay === true ? <Box className="media-overlay"></Box> : <></>}
                <CardMedia image={img} title="" className="media-image" />
            </Grid>
            <Grid item xs={contentRatio}>
                <Typography size="h6" weight="bold">
                    {title}
                </Typography>
                <Typography size="p">{content}</Typography>
            </Grid>
        </Root>
    );
=======
  cursor: "pointer",
  transition: "all .1s ease-in-out",
  overflow: "hidden",
  "& .media-container": {
    position: "relative",
    overflow: "hidden",
    borderRadius: "inherit",
    "& .media-image": {
      width: "100%",
      height: "100%",
      borderRadius: "inherit",
    },
    "& .media-overlay": {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(7, 27, 33, 0.3)",
      borderRadius: "inherit",
    },
  },
  "&:hover": {
    color: "var(--palette-02)",
    "& .media-overlay": {
      backgroundColor: "rgba(7, 27, 33, 0)",
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
  sx?: object;
}
const SimpleCard = ({
  title = "",
  content = "",
  img = "",
  imgRatio = 6,
  contentRatio = 6,
  overlay = true,
  sx = {},
  ...props
}: SimpleCardProps) => {
  return (
    <Root container sx={sx} {...props} direction="column" spacing={2}>
      <Grid item xs={imgRatio} className="media-container">
        {overlay === true ? (
          <CardMedia image="" title="" className="media-overlay" />
        ) : (
          <></>
        )}
        <CardMedia image={img} title="" className="media-image" />
      </Grid>
      <Grid item xs={contentRatio}>
        <Typography size="h6" weight="bold">
          {title}
        </Typography>
        <Typography size="p">{content}</Typography>
      </Grid>
    </Root>
  );
>>>>>>> 2b0105034f352842fbcaf2ed4a6098cee735a1f4
};

export default SimpleCard;
