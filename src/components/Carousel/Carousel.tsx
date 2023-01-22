import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as NPMCarousel } from 'react-responsive-carousel';
import { styled } from '@mui/material';

interface CarouselProps {
    listData: JSX.Element[];
}

const StyledCarousel = styled(NPMCarousel)(({ theme }) => ({
    height: 'inherit',
    '& .carousel-slider, .slider-wrapper, .slider, .slide': {
        height: 'inherit'
    },
    '& .control-dots': {}
}));

const Carousel = ({ listData, ...props }: CarouselProps) => {
    return (
        <StyledCarousel
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            animationHandler="fade"
            swipeable={false}
            stopOnHover={false}
            dynamicHeight={false}>
            {listData.map((data) => data)}
        </StyledCarousel>
    );
};

export default Carousel;
