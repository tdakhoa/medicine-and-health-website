import { Box, styled } from "@mui/material";
import React from "react";
import { Typography } from "../../../components";

const MainTitleContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "50vh",
  "& .thumbnail": {
    width: "100%",
    height: "inherit",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
}));

const Overlay = styled(Box)(() => ({
  width: "100%",
  height: "inherit",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  background: "linear-gradient(180deg, rgba(23, 96, 118, 0.8) 20.31%, rgba(23, 96, 118, 0) 100%)",
}));

const borderRadius = 30;

const TextContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  backgroundColor: "white",
  borderRadius: `${borderRadius}px ${borderRadius}px 0px 0px`,
  "& .background": {
    width: "100%",
    position: "absolute",
    zIndex: 3,
    "&:before, :after": {
      content: "''",
      position: "absolute",
      height: `${borderRadius}px`,
      width: `${borderRadius * 2}px`,
      bottom: 0,
    },
    "&:after": {
      right: `${-2 * borderRadius}px`,
      borderRadius: `0px 0px 0px ${borderRadius}px`,
      boxShadow: `${-1 * borderRadius}px 0px 0px 0px #fff`,
    },
    "&:before": {
      left: `${-2 * borderRadius}px`,
      borderRadius: `0 0 ${borderRadius}px 0`,
      boxShadow: `${borderRadius}px 0 0 0 #fff`,
    },
  },
}));

interface MainTitleProps {
  title: string;
}

const MainTitle = ({ title, ...props }: MainTitleProps) => {
  return (
    <MainTitleContainer>
      <Overlay></Overlay>
      <img
        className="thumbnail"
        src="https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="thumbnail"
      />
      <TextContainer>
        <Box sx={{ padding: "2rem 3rem" }}>
          <Typography color="secondary" size="h3" weight="bold" sx={{ textTransform: "uppercase" }}>
            {title}
          </Typography>
        </Box>
        <Box className="background"></Box>
      </TextContainer>
    </MainTitleContainer>
  );
};

export default MainTitle;