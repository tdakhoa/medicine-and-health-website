import { useState } from "react";
import { Box, CardMedia, Grid, styled } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../../components";

const RoundedCard = ({
    index,
    handlePointerEvent,
    handlePageChange,
    title,
    content,
    img,
    cardStyle,
    activeStyle
}: CardProps) => {
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
                    <Typography component="h1" size="h6" weight="bold">
                        {title}
                    </Typography>
                    <Typography size="p" sx={{ fontSize: "0.9rem" }}>
                        {content}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", height: "50%" }}>
                        <Button
                            sx={CardBottomStyle({ activeStyle, hover })}
                            bgcolor="primary"
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

interface PointerProps {
    touches: Touch[];
    clientX: number;
    type: string;
    target: EventTarget & { style: { left: string } };
}

interface CardProps {
    index: number;
    handlePointerEvent: (e: PointerProps) => void;
    handlePageChange: (index: number) => void;
    title: string;
    content: string;
    img: string;
    cardStyle: object;
    activeStyle: object;
}

interface StyleProps {
    activeStyle: object;
    hover: Boolean;
}

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
    color: "var(--palette-02)",
    [theme.breakpoints.down("sm")]: {
        width: "50%"
    },
    [theme.breakpoints.down("md")]: {
        width: "80%"
    }
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
    },
    [theme.breakpoints.between("sm", "md")]: {
        height: "28rem",
        width: "20rem"
    }
}));

const CardBottomStyle = ({ activeStyle, hover }: StyleProps) => {
    return {
        padding: "0.3rem 0.4rem 0.3rem 0.6rem",
        color: hover ? "var(--palette-06)" : "var(--palette-02)",
        backgroundColor: hover ? "var(--palette-02)" : "var(--palette-06)",
        border: hover ? "solid 2px var(--palette-06)" : "solid 2px var(--palette-02)",
        ...activeStyle
    };
};
