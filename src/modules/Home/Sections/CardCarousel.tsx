import { useEffect, useState } from "react";
import { styled } from "@mui/material";

import Title from "./components/Title";
import Paginator from "./components/Paginator";
import RoundedCard from "./components/RoundedCard";
import { cardData } from "../../../constants";

const ChoosePosition = ({ index, i }: Position) => {
    if (index === cardData.length - 2) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else if (i === 0) return hideNextCard;
        else if (i < index - 1) return hidePrevCard;
        else if (i > index + 1) return hideNextCard;
    } else if (index === 1) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else if (i === cardData.length - 1) return hidePrevCard;
        else if (i < index - 1) return hidePrevCard;
        else if (i > index + 1) return hideNextCard;
    } else if (index >= 2 && index <= cardData.length - 3) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else if (i < index - 1) return hidePrevCard;
        else if (i > index + 1) return hideNextCard;
    } else if (index === 0) {
        if (i === index) return activeCard;
        else if (i === cardData.length - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else if (i > index + 1) return hideNextCard;
    } else if (index === cardData.length - 1) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === 0) return nextCard;
        else if (i < index - 1) return hidePrevCard;
    }
};

var timer: number;

const CarouselSection = () => {
    const [index, setIndex] = useState(0);

    const slideLeft = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else setIndex(cardData.length - 1);
    };

    const slideRight = () => {
        if (index + 1 <= cardData.length - 1) {
            setIndex(index + 1);
        } else setIndex(0);
    };

    const handlePageChange = (page: number) => {
        setIndex(page);
    };

    const handlePointerEvent = (e: PointerProps) => {
        let isTouchEvent = e.type === "touchstart" ? true : false;
        let card = e.target;
        let offset = 0;
        let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

        function onPointerEnd(e: PointerProps | MouseEvent) {
            if (e && "touches" in e) offset = 0;
            if (offset < 0 && offset > -100) {
                card.style.left = "0";
            }
            if (offset > 0 && offset < 100) {
                card.style.left = "0";

                return;
            }
            window.removeEventListener("mouseup", onPointerEnd);
            window.removeEventListener("mousemove", onPointerMove);
        }
        function onPointerMove(e: PointerProps | MouseEvent) {
            if (e && "touches" in e) offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
            else offset = e.clientX - initialX;
            if (offset <= -100) {
                slideRight();
                if (index === cardData.length - 1) {
                    card.style.left = "0";
                } else {
                    setTimeout(() => {
                        card.style.left = "0";
                    }, 800);
                }
                return;
            }
            if (offset >= 100) {
                slideLeft();
                if (index === 0) {
                    card.style.left = "0";
                } else {
                    setTimeout(() => {
                        card.style.left = "0";
                    }, 800);
                }
                return;
            }
        }
        card.style.left = offset + "px";
        window.addEventListener("mouseup", onPointerEnd);
        window.addEventListener("mousemove", onPointerMove);
    };

    useEffect(() => {
        window.clearTimeout(timer);
        timer = window.setTimeout(slideRight, 5000);
    }, [index]);

    return (
        <Root>
            <Title sx={{ margin: { xs: 0, md: "3rem" } }} text="Thuốc" link="/category/medicine" />
            <BoxContainer>
                <DesktopCardContainer>
                    {cardData.map((person, i) => {
                        let position = ChoosePosition({ index, i }) || {};
                        return (
                            <RoundedCard
                                key={i}
                                index={i}
                                handlePointerEvent={(e: PointerProps) => handlePointerEvent(e)}
                                handlePageChange={handlePageChange}
                                {...person}
                                cardStyle={position}
                                activeStyle={i === index ? activeStyle : {}}
                            />
                        );
                    })}
                    <Paginator dataLength={cardData.length} activeIndex={index} handlePageChange={handlePageChange} />
                </DesktopCardContainer>
            </BoxContainer>
        </Root>
    );
};

export default CarouselSection;

interface Position {
    index: number;
    i: number;
}
interface Touch {
    clientX: number;
}

interface PointerProps {
    touches: Touch[];
    clientX: number;
    type: string;
    target: EventTarget & { style: { left: string } };
}

const Root = styled("div")(({ theme }) => ({
    margin: "10% 5%",
    paddingBottom: "5%"
}));

const BoxContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: "0.3rem"
}));

const DesktopCardContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "70%",
    height: "30rem",
    paddingBottom: "5%",
    [theme.breakpoints.down("sm")]: {
        overflow: "hidden",
        width: "100%",
        padding: 0
    }
}));

const activeCard = {
    left: "50%",
    transition: "all 1s ease-in-out",
    transform: { xs: "translateX(-9rem)", sm: "translateX(-10.5rem)", lg: "translateX(-85%) scale(1.3)" },
    zIndex: "1"
};

const prevCard = {
    left: "0%",
    transform: "translateX(-40%)",
    transition: "all 1s ease-in-out",
    opacity: { xs: "0", md: "1" }
};

const nextCard = {
    left: "100%",
    transform: "translateX(-115%)",
    transition: "all 1s ease-in-out",
    opacity: { xs: "0", md: "1" }
};

const hidePrevCard = {
    left: "-5%",
    transform: "translateX(-40%)",
    transition: "all 1s ease-in-out",
    opacity: 0
};

const hideNextCard = {
    left: "105%",
    transform: "translateX(-70%)",
    transition: "all 1s ease-in-out",
    opacity: 0
};

const activeStyle = {
    backgroundColor: "var(--palette-02)",
    color: "var(--palette-06)",
    border: "solid 2px var(--palette-06)"
};
