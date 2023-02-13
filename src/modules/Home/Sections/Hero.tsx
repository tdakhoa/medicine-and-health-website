import React from "react";
import { styled, Box } from "@mui/material";
import { ArrowDownwardOutlined } from "@mui/icons-material";

import { Button, Carousel, Typography } from "../../../components";

const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById("news");
        element?.scrollIntoView();
    };

    return (
        <Root>
            <Overlay>
                <Box className="hero-introduction">
                    <Typography size="h1" color="white" weight="extraBold">
                        THUỐC
                    </Typography>
                    <Typography size="h2" color="white" weight="extraBold">
                        VÀ
                    </Typography>
                    <Typography size="h1" color="white" weight="extraBold">
                        SỨC KHOẺ
                    </Typography>
                    <Typography size="p" color="white" weight="light" sx={{ width: { xs: "80%", md: "100%" } }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s.
                    </Typography>
                    <Button
                        bgcolor="primary"
                        sx={{
                            marginTop: { xs: "0.4rem", md: "1.4rem" },
                            padding: { xs: "0.5rem", md: "0.5rem 1rem" }
                        }}
                        onClick={handleScroll}
                        endIcon={<ArrowDownwardOutlined sx={{ fontSize: "1.2rem" }} />}>
                        <Typography
                            size="p"
                            color="inherit"
                            weight="medium"
                            sx={{ display: { xs: "none", sm: "block" }, paddingRight: "0.2rem" }}>
                            Đọc thêm
                        </Typography>
                    </Button>
                </Box>
            </Overlay>
            <Box sx={{ position: "absolute", zIndex: -999, height: "inherit" }}>
                <Carousel listData={dataList} />
            </Box>
        </Root>
    );
};

export default Hero;

// ------------------------------------OVERLAY------------------------------------

const Root = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "90vh",
    [theme.breakpoints.down("md")]: {
        height: "40rem"
    }
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    background: "linear-gradient(70deg, transparent 50%, rgba(113, 191, 218, 0.6) 50%)",
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
        justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
        background: "linear-gradient(180deg, rgba(113, 191, 218, 0.8) 40%, rgba(113, 191, 218, 0) 100%)",
        "& .hero-introduction": {
            justifyContent: "start",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            inset: 0,
            marginTop: "25%",
            padding: "0 1rem",
            gap: "0.5rem"
        }
    }
}));

// ------------------------------------CAROUSEL------------------------------------

const imgLinks = [
    "https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
];

const CarouselItem = styled(Box)(({ theme }) => ({
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "red",
    "& img": {
        objectFit: "cover !important"
    }
}));

const dataList = imgLinks.map((link, i) => (
    <CarouselItem key={i}>
        <img alt="" src={link} />
    </CarouselItem>
));
