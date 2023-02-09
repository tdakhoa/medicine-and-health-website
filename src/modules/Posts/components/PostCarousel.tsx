import { Box, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import { Typography } from "../../../components";
import { postsData } from "../../../constants";

const PostCarousel = () => {
    return (
        <Root>
            <Swiper
                spaceBetween={16}
                slidesPerView={5}
                freeMode
                centeredSlides
                centeredSlidesBounds
                modules={[FreeMode]}>
                {postsData.map((item, i) => (
                    <SwiperSlide key={i}>
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
    marginBottom: "10%"
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
    padding: "0rem 2rem"
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    background: "rgba(7, 27, 33, 0.6)"
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
    }
}));
