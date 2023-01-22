import React from "react";
import Image from "next/image";
import { Link, Box } from "@mui/material";
import { styled, Grid } from "@mui/material";
import NewsCard from "./components/NewsCard";
import { Typography } from "../../../components";
import news1 from "../../../../public/imgs/News1.png";
import news2 from "../../../../public/imgs/News2.png";

const StyleDivider = {
    height: 2,
    width: 50,
    backgroundColor: "var(--palette-02)",
    margin: "0.8rem 0px"
};
const StyleTitle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    margin: "5% 10%"
};
const Root = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        "& .media-image": {
            width: "100%",
            height: "100%"
        },
        "& .media-overlay": {
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(360deg, #71BFDA 0%, rgba(217, 217, 217, 0) 100%)"
        }
    },
    "&:hover": {
        color: "var(--palette-02)",
        "& .media-overlay": {
            background: "none"
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
        <div>
            <Box sx={StyleTitle}>
                <Typography sx={{ textTransform: "uppercase" }} size="h2" weight="bold" color="secondary">
                    Tin mới nhất
                </Typography>
                <Typography size="h3" weight="semiBold" color="secondary">
                    Ngày {day} tháng {month} năm {year}
                </Typography>
                <Box sx={StyleDivider}></Box>
                <Grid container direction="row">
                    <Root xs={8} container>
                        <Grid sx={{ width: "100%", height: "100%" }}>
                            <Box sx={{ position: "absolute", marginTop: "400px", bottom: 0, left: 0 }}>
                                <Typography size="h6" weight="bold">
                                    HI
                                </Typography>
                                <Typography size="p">Bye</Typography>
                            </Box>
                            <Image src={news1} alt="image" style={{ width: "100%" }} />
                        </Grid>
                    </Root>
                    <Root xs={4} container>
                        <Grid item className="media-container">
                            <Box className="media-overlay">
                                <Typography size="h6" weight="bold">
                                    HI
                                </Typography>
                                <Typography size="p">Bye</Typography>
                            </Box>
                            <Image src={news1} alt="image" style={{ width: "100%" }} />
                        </Grid>
                    </Root>
                </Grid>
            </Box>
        </div>
    );
};

export default News;

const cardData = [
    {
        img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron"
    },
    {
        img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron"
    },
    {
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron"
    },
    {
        img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron"
    },
    {
        img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
        content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron"
    }
];
