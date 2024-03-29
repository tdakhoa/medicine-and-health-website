import React from "react";
import { Box, styled } from "@mui/material";
import { Carousel as NPMCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousel = ({
    listData = [],
    time = 4000,
    indicators = false,
    animation = "fade",
    sx = {},
    ...props
}: CarouselProps) => {
    return (
        <StyledCarousel
            autoPlay={true}
            interval={time}
            infiniteLoop={true}
            showIndicators={indicators}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            animationHandler={animation}
            swipeable={false}
            stopOnHover={false}
            dynamicHeight={false}>
            {listData.map((data, i) => (
                <Box sx={{ height: "inherit" }} key={i}>
                    {data}
                </Box>
            ))}
        </StyledCarousel>
    );
};

export default Carousel;

interface CarouselProps {
    listData?: JSX.Element[];
    time?: number;
    indicators?: boolean;
    animation?: "fade" | "slide" | undefined;
    sx?: object;
}

const StyledCarousel = styled(NPMCarousel)((props: CarouselProps) => ({
    height: "inherit",
    "& .carousel-slider, .slider-wrapper, .slider, .slide": {
        height: "inherit"
    },
    "& .control-dots": {},
    ...props.sx
}));
