import React from "react";
import { styled, CardMedia, Grid, CardContent, CardActions } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../../components";

const AlternateCard = ({
    title = "",
    content = "",
    img = "",
    direction = "row",
    sx = {},
    ...props
}: AlternateCardProps) => {
    return (
        <Root container sx={sx} rowSpacing={2} columnSpacing={8} direction={direction} {...props}>
            <Grid item xs={12} md={6} className="content-container">
                <CardContent sx={{ padding: "0.5rem" }}>
                    <Typography size="h4" weight="bold" sx={{ marginBottom: { xs: "0.5rem", md: "2rem" } }}>
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
            <Grid item xs={12} md={6} className="media-container">
                <CardMedia image={img} title="" className="media-image" />
            </Grid>
        </Root>
    );
};

export default AlternateCard;

interface AlternateCardProps {
    title?: string;
    content?: string;
    img?: string;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    sx?: object;
}

const Root = styled(Grid)<AlternateCardProps>(({ theme, ...props }) => ({
    cursor: "pointer",
    transition: "all 0.1s ease-in-out",
    minHeight: 300,
    marginBottom: "3rem",
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
            alignItems: "end",
            padding: 0
        }
    },
    "& .media-container .media-image": {
        width: "100%",
        height: "100%",
        boxShadow: "0px 4px 30px rgba(40, 165, 203, 0.35)",
        borderRadius: props.direction === "row" ? "0px 40px 40px 0px" : "40px 0px 0px 40px"
    },
    "&:hover": {
        color: "var(--palette-02)"
    },
    [theme.breakpoints.down("md")]: {
        minWidth: "20rem",
        minHeight: "30rem",
        flexDirection: "column-reverse",
        "& .content-container": {
            height: "70%",
            gap: "0.5rem",
            textAlign: "left",
            flex: 1,
            "& .content-bottom": {
                flexDirection: "column-reverse",
                gap: "0.5rem",
                alignItems: "start"
            }
        },
        "& .media-container": {
            height: "30%",
            flex: 1,
            "& .media-image": {
                borderRadius: "30px 30px 0px 0px"
            }
        }
    }
}));
