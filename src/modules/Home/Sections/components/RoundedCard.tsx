import { useState } from "react";
import { Box, CardMedia, Grid, styled } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../../components";

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
    marginTop: "3rem",
    color: "var(--palette-02)"
}));

const GridCard = styled(Grid)(({ theme }) => ({
    position: "absolute",
    height: "24rem",
    width: "18rem",
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

interface StyleTypes {
    activeStyle: object;
    hover: Boolean;
}

const CardBottomStyle = ({ activeStyle, hover }: StyleTypes) => {
    return {
        padding: "0.3rem 0.4rem 0.3rem 0.6rem",
        color: hover ? "var(--palette-06)" : "var(--palette-02)",
        backgroundColor: hover ? "var(--palette-02)" : "var(--palette-06)",
        border: hover ? "solid 2px var(--palette-06)" : "solid 2px var(--palette-02)",
        ...activeStyle
    };
};

interface PointerTypes {
    touches: Touch[];
    clientX: number;
    type: string;
    target: EventTarget & { style: { left: string } };
}

interface CardTypes {
    index: number;
    handlePointerEvent: (e: PointerTypes) => void;
    handlePageChange: (index: number) => void;
    title: string;
    description: string;
    img: string;
    cardStyle: object;
    activeStyle: object;
}

const RoundedCard = ({
    index,
    handlePointerEvent,
    handlePageChange,
    title,
    description,
    img,
    cardStyle,
    activeStyle
}: CardTypes) => {
    const [hover, setHover] = useState(false);
    return (
        <ArticleBox sx={cardStyle}>
            <GridCard
                sx={{ ...activeStyle, border: "none" }}
                direction="column"
                container
                onClick={() => handlePageChange(index)}
                onMouseDown={(e: any) => handlePointerEvent(e)}
                onTouchStart={(e: any) => handlePointerEvent(e)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <Grid item xs={5}>
                    <StyledCardMedia image={img} title="" />
                </Grid>
                <Grid sx={{ padding: "1.2rem" }} item xs={6}>
                    <Typography size="h6" weight="bold">
                        {title}
                    </Typography>
                    <Typography size="p" sx={{ fontSize: "0.9rem" }}>
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", height: "50%" }}>
                        <Button
                            sx={CardBottomStyle({ activeStyle, hover })}
                            bgColor="primary"
                            endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                            <Typography size="p">Tìm hiểu thêm</Typography>
                        </Button>
                    </Box>
                </Grid>
            </GridCard>
        </ArticleBox>
    );
};

export default RoundedCard;
