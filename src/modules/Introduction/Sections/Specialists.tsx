import React from "react";
import { styled, Box, CardMedia, Grid } from "@mui/material";

import Title from "../../Home/Sections/components/Title";
import { Button, Typography } from "../../../components";
import { ArrowForwardOutlined } from "@mui/icons-material";

const Contact = () => {
    return (
        <Root>
            <Title
                sx={{
                    "& .see-more": {
                        display: "none"
                    }
                }}
                text="Đội ngũ chuyên gia"
            />

            <Grid container spacing={4}>
                {ImageData.map((item, i) => (
                    <ContentGrid key={i} item xs={4}>
                        <Box className="media-container" sx={{ borderRadius: "60px 0 0 60px" }}>
                            <Box className="media-overlay" />
                            <Box className="media-text">
                                <Typography size="h5" weight="bold" alignn="center">
                                    Bác sĩ {item.name}
                                </Typography>
                                <Box className="media-subText">
                                    <Typography sx={{ py: 1 }} size="p" alignn="center">
                                        {item.position}
                                    </Typography>
                                    <Button
                                        bgcolor="white"
                                        sx={{ color: "var(--palette-01)" }}
                                        endIcon={
                                            <ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />
                                        }>
                                        <Typography size="p" weight="medium">
                                            Đọc thêm
                                        </Typography>
                                    </Button>
                                </Box>
                            </Box>
                            <img className="media-image" src={item.image} />
                        </Box>
                    </ContentGrid>
                ))}
            </Grid>
        </Root>
    );
};

export default Contact;

const ImageData = [
    {
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Usman Yousaf",
        position: "Tai - mũi - họng",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Humberto Chavez",
        position: "Tiêu hóa",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Austin Distel",
        position: "Cơ - xương khớp",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        name: "Bruno Rodrigues",
        position: "Tâm thần",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Rian Ramirez",
        position: "Nội tiết",
        description: "Lorem ispum"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661766752153-9f0c3fad728f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Trần Văn Hùng",
        position: "Nhi Khoa",
        description: "Lorem ispum"
    }
];

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "5% 10%",
    gap: "7%",
    justifyContent: "space-between"
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        color: "var(--palette-06)",
        height: "30rem",
        width: "100%",
        "& .media-image": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        "& .media-overlay": {
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "50%",
            background: "linear-gradient(180deg, rgba(7, 27, 33, 0) 0%, #071B21 88.54%)",
            transition: "all .4s ease-in-out",
            transformOrigin: "bottom center",
            zIndex: "10000"
        },
        "& .media-text": {
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column",
            transition: "all .4s ease-in-out",
            padding: "1.5rem",
            zIndex: "10000",
            animation: "slideOut1 0.4s forwards",
            "@keyframes slideOut1": {
                "0%": { transform: "translateY(-20%)" }
            },
            "& .media-subText": {
                display: "none"
            }
        }
    },
    "&:hover": {
        "& .media-overlay": {
            transform: "scaleY(2)"
        },
        "& .media-text": {
            animation: "slideIn1 0.4s forwards",
            "@keyframes slideIn1": {
                "0%": { transform: "translateY(20%)" }
            },
            "& .media-subText": {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                animation: "slideIn2 0.4s forwards",
                "@keyframes slideIn2": {
                    "0%": { transform: "translateY(20%)" }
                }
            }
        }
    }
}));
