import { styled, Box } from "@mui/material";
import React from "react";
import { ArrowDownwardOutlined } from "@mui/icons-material";
import { Button, Carousel, Typography } from "../../../components";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "90vh" }}>
      <Overlay>
        <Box className="hero-introduction">
          <Typography text="THUỐC" size="h1" color="white" weight="extraBold" />
          <Typography text="VÀ" size="h2" color="white" weight="extraBold" />
          <Typography
            text="SỨC KHOẺ"
            size="h1"
            color="white"
            weight="extraBold"
          />
          <Typography
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            size="p"
            color="white"
            weight="light"
          />
          <Button
            bgColor="primary"
            sx={{ marginTop: "1.4rem" }}
            endIcon={
              <ArrowDownwardOutlined
                sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }}
              />
            }
          >
            <Typography
              text="Đọc thêm"
              size="p"
              color="inherit"
              weight="medium"
            />
          </Button>

        </Box>
      </Overlay>
      <Box sx={{ position: "absolute", zIndex: -999, height: "inherit" }}>
        <Carousel listData={dataList} />
      </Box>
    </Box>
  );
};

export default Hero;

// ------------------------------------OVERLAY------------------------------------

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  background:
    "linear-gradient(70deg, transparent 50%, rgba(113, 191, 218, 0.6) 50%)",
  width: "100%",
  height: "inherit",
  textAlign: "right",
  "& .hero-introduction": {
    position: "absolute",
    top: "5rem",
    right: "3rem",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center",
  },
}));

// ------------------------------------CAROUSEL------------------------------------

const imgLinks = [
  "https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
];

const CarouselItem = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "stretch",
  backgroundColor: "red",
  "& img": {
    objectFit: "cover !important",
  },
}));

const dataList = imgLinks.map((link) => (
  <CarouselItem>
    <img alt="" src={link} />
  </CarouselItem>
));
