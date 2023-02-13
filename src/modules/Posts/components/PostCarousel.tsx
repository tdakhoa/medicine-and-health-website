import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import { Typography } from "../../../components";
import { postsData } from "../../../constants";

const PostCarousel = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Root>
            <Swiper
                spaceBetween={matches ? 0 : 16}
                slidesPerView={matches ? 1 : 5}
                freeMode
                centeredSlides
                centeredSlidesBounds
                modules={[FreeMode]}>
                {postsData.map((item, i) => (
                    <SwiperSlide style={matches ? { display: "flex", justifyContent: "center" } : {}} key={i}>
                        <SwiperCard>
                            <Overlay />
                            <TextContainter>
                                <Typography size="p" weight="bold">
                                    {item.title}
                                </Typography>
                                <Typography size="small" weight="regular">
                                    {item.date}
                                </Typography>
                            </TextContainter>
                            <img src={item.img} />
                        </SwiperCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Root>
    );
};

export default PostCarousel;

const Root = styled("div")(({ theme }) => ({
    margin: "5%",
    marginBottom: "40%"
}));

const TextContainter = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    zIndex: 2,
    width: "100%",
    height: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "0rem 2rem",
    [theme.breakpoints.down("sm")]: {
        width: "70%"
    }
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    background: "rgba(7, 27, 33, 0.6)",
    [theme.breakpoints.down("sm")]: {
        width: "70%"
    }
}));

const SwiperCard = styled(Box)(({ theme }) => ({
    height: "19rem",
    width: "100%",
    borderRadius: "16px",
    "& img": {
        position: "absolute",
        top: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        objectFit: "cover"
    },
    [theme.breakpoints.down("sm")]: {
        width: "70%",
        "& img": {
            width: "70%"
        }
    }
}));
