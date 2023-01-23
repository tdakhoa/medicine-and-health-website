import React from "react";
import Image from "next/image";
import { Link, Box } from "@mui/material";
import { styled, Grid } from "@mui/material";
import { Button, Typography } from "../../../components";
import news1 from "../../../../public/imgs/News1.png";
import news2 from "../../../../public/imgs/News2.png";
import { ArrowForwardOutlined } from "@mui/icons-material";

const StyleTitle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    margin: "5% 10%"
};
const NewsGrid = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    transition: "all .1s ease-in-out",
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
            padding: "4rem",
            "&:hover": {
                background:
                    "linear-gradient(360deg, #71BFDA 43.23%, rgba(113, 191, 218, 0) 60.42%, rgba(113, 191, 218, 0) 100%)"
            }
        },
        "& .media-bgComp": {
            background: "linear-gradient(270deg, #71BFDA 0%, rgba(217, 217, 217, 0) 100%)",
            justifyContent: "center",
            "&:hover": {
                background:
                    "linear-gradient(270deg, #71BFDA 46.87%, rgba(113, 191, 218, 0) 63.02%, rgba(113, 191, 218, 0) 100%)"
            }
        }
    },
    "&:hover": {
        color: "var(--palette-02)"
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
        <Box sx={StyleTitle}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0 40px",
                    marginBottom: "3rem"
                }}>
                <Box>
                    <Typography sx={{ textTransform: "uppercase" }} size="h2" weight="bold" color="secondary">
                        Tin mới nhất
                    </Typography>
                    <Typography size="h3" weight="semiBold" color="secondary">
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
                <NewsGrid xs={7.5} item container>
                    <Grid item className="media-container" sx={{ borderRadius: "60px 0 0 60px" }}>
                        <Box className="media-overlay media-bgMain">
                            <Typography size="h1" weight="bold" sx={{ textAlign: "start" }}>
                                {mainNews.title}
                            </Typography>
                            <Typography size="p" sx={{ textAlign: "start" }}>
                                {mainNews.description}
                            </Typography>
                        </Box>
                        <Image src={mainNews.img} alt="image" className="media-image" />
                    </Grid>
                </NewsGrid>
                <NewsGrid xs={4.5} direction="column" item container>
                    {newsData.map((item, i) => (
                        <Grid xs={3.8} item className="media-container" sx={item.style}>
                            <Box
                                sx={{ paddingLeft: "50%", paddingRight: "1rem" }}
                                className="media-overlay media-bgComp">
                                <Typography size="h6" weight="bold" sx={{ textAlign: "start" }}>
                                    {item.title}
                                </Typography>
                                <Typography size="p" sx={{ textAlign: "start" }}>
                                    {item.description}
                                </Typography>
                            </Box>
                            <Image src={item.img} alt="image" className="media-image" />
                        </Grid>
                    ))}
                </NewsGrid>
            </Grid>
        </Box>
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
        style: { borderRadius: "0 40px 0 0 " }
    },
    {
        img: news2,
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)",
        style: { margin: "1rem 0" }
    },
    {
        img: news2,
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        description: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron (đơn vị thận)",
        style: { borderRadius: "0 0 40px 0 " }
    }
];
