import { useEffect, useState } from "react";
import { styled } from "@mui/material";

import Title from "./components/Title";
import Paginator from "./components/Paginator";
import RoundedCard from "./components/RoundedCard";

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

const CardContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "70%",
    height: "30rem",
    paddingBottom: "5%"
}));

const activeCard = {
    left: "50%",
    transition: "all 1s ease-in-out",
    transform: "translateX(-85%) scale(1.3)",
    zIndex: "1"
};

const prevCard = {
    left: "0%",
    transform: "translateX(-40%)",
    transition: "all 1s ease-in-out"
};

const nextCard = {
    left: "100%",
    transform: "translateX(-115%)",
    transition: "all 1s ease-in-out"
};

const hideCard = {
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 0.3s ease-in-out",
    opacity: 0
};

const activeStyle = {
    backgroundColor: "var(--palette-02)",
    color: "var(--palette-06)",
    border: "solid 2px var(--palette-06)"
};

interface Position {
    index: number;
    i: number;
}
interface Touch {
    clientX: number;
}

interface PointerTypes {
    touches: Touch[];
    clientX: number;
    type: string;
    target: EventTarget & { style: { left: string } };
}

const ChoosePosition = ({ index, i }: Position) => {
    if (index >= 1 && index <= data.length - 2) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else return hideCard;
    } else if (index == 0) {
        if (i === index) return activeCard;
        else if (i === data.length - 1) return prevCard;
        else if (i === index + 1) return nextCard;
        else return hideCard;
    } else if (index == data.length - 1) {
        if (i === index) return activeCard;
        else if (i === index - 1) return prevCard;
        else if (i === 0) return nextCard;
        else return hideCard;
    }
};

const CardCarousel = () => {
    const [index, setIndex] = useState(0);

    const slideLeft = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else setIndex(data.length - 1);
    };

    const slideRight = () => {
        if (index + 1 <= data.length - 1) {
            setIndex(index + 1);
        } else setIndex(0);
    };

    const handlePageChange = (page: number) => {
        setIndex(page);
    };

    const handlePointerEvent = (e: PointerTypes) => {
        let isTouchEvent = e.type === "touchstart" ? true : false;
        let card = e.target;
        let offset = 0;
        let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

        function onPointerEnd(e: PointerTypes | MouseEvent) {
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
        function onPointerMove(e: PointerTypes | MouseEvent) {
            if (e && "touches" in e) offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
            else offset = e.clientX - initialX;
            if (offset <= -100) {
                slideRight();
                if (index === data.length - 1) {
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
        var highestTimeoutId = setTimeout(";");
        for (var i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
        setTimeout(slideRight, 5000);
    }, [index]);

    return (
        <Root>
            <Title text="Thuốc" />
            <BoxContainer>
                <CardContainer>
                    {data.map((person, i) => {
                        let position = ChoosePosition({ index, i }) || {};
                        return (
                            <RoundedCard
                                key={i}
                                index={i}
                                handlePointerEvent={(e: PointerTypes) => handlePointerEvent(e)}
                                handlePageChange={handlePageChange}
                                {...person}
                                cardStyle={position}
                                activeStyle={i === index ? activeStyle : {}}
                            />
                        );
                    })}
                    <Paginator dataLength={data.length} activeIndex={index} handlePageChange={handlePageChange} />
                </CardContainer>
            </BoxContainer>
        </Root>
    );
};

export default CardCarousel;

const data = [
    {
        img: "https://images.unsplash.com/photo-1666214280138-358232b8f5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)"
    },
    {
        img: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)"
    },
    {
        img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)"
    },
    {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)"
    },
    {
        img: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)"
    }
];
