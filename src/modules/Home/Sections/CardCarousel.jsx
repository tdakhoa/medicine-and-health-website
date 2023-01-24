import { useState } from "react";
import { Box, CardMedia, Grid, styled } from "@mui/material";
import { ArrowBackOutlined, ArrowForwardOutlined, Article } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import Title from "./components/Title";

const Root = styled("div")(({ theme }) => ({
    margin: "10%",
    paddingBottom: "5%"
}));

const BoxContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
}));

const CardContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "70%",
    height: "30rem",
    paddingBottom: "5%"
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "40px 40px 0 0"
}));

const ArticleBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "12rem",
    height: "100%",
    marginTop: "1rem",
    color: "var(--palette-02)"
}));

const GridCard = styled(Grid)(({ theme }) => ({
    position: "absolute",
    height: "30rem",
    width: "20rem",
    backgroundColor: "var(--palette-06)",
    boxSizing: "border-box",
    userSelect: "none",
    borderRadius: "40px",
    boxShadow: "8px 8px 20px rgba(40, 165, 203, 0.3)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "var(--palette-02)",
        color: "var(--palette-06)"
    }
}));

const DotBox = styled(Box)(({ theme }) => ({
    height: "1rem",
    width: "1rem",
    borderRadius: "50%",
    backgroundColor: "gray",
    zIndex: "1",
    transition: "all 1s",
    "&:hover": {
        cursor: "pointer"
    }
}));

const activeCard = {
    left: "50%",
    transition: "all 1s ease-in-out",
    transform: "translateX(-90%) scale(1.2)",
    zIndex: "1"
};

const prevCard = {
    left: "0%",
    transform: "translateX(-50%)",
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
    backgroundColor: "var(--palette-02) !important",
    color: "var(--palette-06)",
    border: "solid 2px var(--palette-06)"
};

const paginator = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "-8rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "30rem",
    height: "2rem"
};

const hr = {
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "gray"
};

const Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
    let dots = [];
    for (let index = 1; index < dataLength - 1; index++) {
        dots.push(
            <DotBox
                key={index}
                sx={activeIndex === index ? { boxShadow: "0 0 0 4px grey", backgroundColor: "white" } : {}}
                onClick={() => handlePageChange(index)}></DotBox>
        );
    }
    return (
        <div style={paginator}>
            <div style={hr}></div>
            {dots.map((dot) => dot)}
        </div>
    );
};

const Card = ({ handlePointerEvent, title, description, img, cardStyle, activeStyle }) => {
    var currentTime = new Date();
    var month = `${currentTime.getMonth() + 1}`;
    var day = `${currentTime.getDate()}`;
    var year = currentTime.getFullYear();

    if (currentTime.getDate() < 10) day = "0" + day;
    if (currentTime.getMonth() < 10) month = "0" + month;
    return (
        <ArticleBox sx={cardStyle}>
            <GridCard
                sx={{ ...activeStyle, border: "none" }}
                direction="column"
                container
                onMouseDown={handlePointerEvent}
                onTouchStart={handlePointerEvent}>
                <Grid item xs={6}>
                    <StyledCardMedia image={img} title="" />
                </Grid>
                <Grid sx={{ padding: "1.2rem" }} item xs={6}>
                    <Typography size="h6" weight="bold">
                        {title}
                    </Typography>
                    <Typography size="p" sx={{ fontSize: "0.9rem" }}>
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "50%" }}>
                        <Typography size="p" sx={{ fontSize: "0.9rem" }}>
                            {day}/{month}/{year}
                        </Typography>
                        <Button
                            sx={{ color: "var(--palette-02)", border: "solid 2px var(--palette-02)", ...activeStyle }}
                            endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                            <Typography size="p">Tìm hiểu thêm</Typography>
                        </Button>
                    </Box>
                </Grid>
            </GridCard>
        </ArticleBox>
    );
};

const CardCarousel = () => {
    const [index, setIndex] = useState(1);

    const slideLeft = () => {
        if (index - 1 >= 1) {
            setIndex(index - 1);
        } else setIndex(data.length - 2);
    };

    const slideRight = () => {
        if (index + 1 <= data.length - 2) {
            setIndex(index + 1);
        } else setIndex(1);
    };

    const handlePageChange = (page) => {
        let n = page - index;
        setIndex(index + n);
    };

    const handlePointerEvent = (e) => {
        let isTouchEvent = e.type === "touchstart" ? true : false;
        let card = e.target;
        let offset = 0;
        let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

        document.onmousemove = onPointerMove;
        document.onmouseup = onPointerEnd;
        document.ontouchmove = onPointerMove;
        document.ontouchend = onPointerEnd;

        function onPointerMove(e) {
            offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
            if (offset <= -100) {
                slideRight();
                if (index === data.length - 1) {
                    card.style.left = 0;
                } else {
                    setTimeout(() => {
                        card.style.left = 0;
                    }, 1000);
                }
                return;
            }
            if (offset >= 100) {
                slideLeft();
                if (index === 0) {
                    card.style.left = 0;
                } else {
                    setTimeout(() => {
                        card.style.left = 0;
                    }, 1000);
                }
                return;
            }
            card.style.left = offset + "px";
        }

        function onPointerEnd(e) {
            if (offset < 0 && offset > -100) {
                card.style.left = 0;
            }
            if (offset > 0 && offset < 100) {
                card.style.left = 0;
            }

            document.onmousemove = null;
            document.onmouseup = null;
            document.ontouchmove = null;
            document.ontouchend = null;
        }
    };

    return (
        <Root>
            <Title text="Thuốc" />
            <BoxContainer>
                <Button
                    onClick={slideLeft}
                    bgColor="primary"
                    endIcon={<ArrowBackOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}></Button>
                <CardContainer>
                    {data.map((person, i) => {
                        let position;
                        if (i === index) position = activeCard;
                        else if (i === index - 1) position = prevCard;
                        else if (i === index + 1) position = nextCard;
                        else position = hideCard;
                        return (
                            <Card
                                key={i}
                                handlePointerEvent={handlePointerEvent}
                                {...person}
                                cardStyle={position}
                                activeStyle={i === index ? activeStyle : {}}
                            />
                        );
                    })}
                    <Paginator dataLength={data.length} activeIndex={index} handlePageChange={handlePageChange} />
                </CardContainer>
                <Button
                    onClick={slideRight}
                    bgColor="primary"
                    endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}></Button>
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
