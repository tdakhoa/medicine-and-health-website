import React from "react";
import Image from "next/image";
import { Link, Box, CardMedia } from "@mui/material";
import { styled, Grid } from "@mui/material";
import { Button, Typography } from "../../../components";
import { ArrowForwardOutlined } from "@mui/icons-material";

const news1 =
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=547&q=80";

const news2 =
    "https://images.unsplash.com/photo-1666214280138-358232b8f5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    margin: "5% 10%"
}));
const NewsGrid = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        "& .media-image": {
            width: "100%",
            height: "100%"
        },
        "& .media-overlay": {
            position: "absolute",
            width: "100%",
            height: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column"
        },
        "& .media-bgMain": {
            background: "linear-gradient(360deg, #71BFDA 0%, rgba(217, 217, 217, 0) 100%)",
            justifyContent: "end",
            transition: "all .4s ease-in-out",
            padding: "4rem",
            "&:hover": {
                color: "white",
                background: "linear-gradient(360deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)"
            }
        },
        "& .media-bgComp": {
            background: "linear-gradient(270deg, #71BFDA 15%, rgba(217, 217, 217, 0) 100%)",
            justifyContent: "center",
            transition: "all .4s ease-in-out",
            padding: "2rem",
            width: "60%",
            right: 0,
            "&:hover": {
                color: "white",
                background: "linear-gradient(270deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)"
            }
        }
    }
}));

const News = () => {
    var currentTime = new Date();
    var month = `${currentTime.getMonth() + 1}`;
    var day = `${currentTime.getDate()}`;
    var year = currentTime.getFullYear();

    if (currentTime.getDate() < 10) day = "0" + day;
    if (currentTime.getMonth() < 10) month = "0" + month;

    return (
        <Root>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "3rem"
                }}>
                <Box>
                    <Typography sx={{ textTransform: "uppercase" }} size="h3" weight="bold" color="secondary">
                        Tin mới nhất
                    </Typography>
                    <Typography size="h5" weight="semiBold" color="secondary">
                        Ngày {day} tháng {month} năm {year}
                    </Typography>
                </Box>
                <Button
                    bgColor="primary"
                    endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                    <Typography size="p">Đọc thêm</Typography>
                </Button>
            </Box>

            <Grid container direction="row" spacing={2}>
                <NewsGrid xs={7.2} item container sx={{ minHeight: 600 }}>
                    <Box className="media-container" sx={{ borderRadius: "60px 0 0 60px" }}>
                        <Box className="media-overlay media-bgMain">
                            <Typography size="h2" weight="bold" sx={{ textAlign: "start" }}>
                                {mainNews.title}
                            </Typography>
                            <Typography size="p" sx={{ textAlign: "start" }}>
                                {mainNews.description}
                            </Typography>
                        </Box>
                        <CardMedia image={mainNews.img} title="" className="media-image" />
                    </Box>
                </NewsGrid>
                <NewsGrid xs={4.8} direction="column" item container rowSpacing={2}>
                    {newsData.map((item, i) => (
                        <Grid xs={4} item>
                            <Box className="media-container" sx={item.style}>
                                <Box className="media-overlay media-bgComp">
                                    <Typography size="p" weight="bold" sx={{ textAlign: "end" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography size="0.9rem" weight="regular" sx={{ textAlign: "end" }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                                <CardMedia image={item.img} title="" className="media-image" />
                            </Box>
                        </Grid>
                    ))}
                </NewsGrid>
            </Grid>
        </Root>
    );
};

export default News;

const mainNews = {
    img: news1,
    title: "VIÊM GAN TRONG BỆNH WILSON",
    description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
};

const newsData = [
    {
        img: news2,
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)",
        style: { borderRadius: "0 40px 0 0" }
    },
    {
        img: news2,
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)",
        style: {}
    },
    {
        img: news2,
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)",
        style: { borderRadius: "0 0 40px 0 " }
    }
];
