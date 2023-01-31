import React from "react";
import { styled, CardMedia, Grid, CardContent, CardActions } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../../components";

const Root = styled(Grid)((props: AlternateCardProps) => ({
    cursor: "pointer",
    transition: "all 0.1s ease-in-out",
    "& .content-container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: props.direction === "row" ? "start" : "end",
        textAlign: props.direction === "row" ? "left" : "right",
        "& .content-bottom": {
            width: "100%",
            display: "flex",
            flexDirection: props.direction,
            justifyContent: "space-between",
            alignItems: "end"
        }
    },
    "& .media-container": {
        "& .media-image": {
            width: "100%",
            height: "100%",
            boxShadow: "0px 4px 30px rgba(40, 165, 203, 0.35)",
            borderRadius: props.direction === "row" ? "0px 40px 40px 0px" : "40px 0px 0px 40px"
        }
    },
    "&:hover": {
        color: "var(--palette-02)"
    }
}));

interface AlternateCardProps {
    title?: string;
    content?: string;
    img?: string;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    sx?: object;
}
const AlternateCard = ({
    title = "",
    content = "",
    img = "",
    direction = "row",
    sx = {},
    ...props
}: AlternateCardProps) => {
    return (
        <Root container sx={sx} rowSpacing={0} columnSpacing={8} direction={direction} {...props}>
            <Grid item xs={6} className="content-container">
                <CardContent>
                    <Typography size="h4" weight="bold" sx={{ marginBottom: "2rem" }}>
                        {title}
                    </Typography>
                    <Typography size="p">{content}</Typography>
                </CardContent>
                <CardActions className="content-bottom">
                    <Button
                        bgcolor="primary"
                        endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                        <Typography size="p">Đọc thêm</Typography>
                    </Button>
                    <Typography size="0.9rem" weight="bold">
                        Ngày 1 tháng 1 năm 2023
                    </Typography>
                </CardActions>
            </Grid>
            <Grid item xs={6} className="media-container">
                <CardMedia image={img} title="" className="media-image" />
            </Grid>
        </Root>
    );
};

export default AlternateCard;
