import React from "react";
import { Box, CardMedia, styled, Grid } from "@mui/material";

import { Typography } from "../../components";
import { mainNews } from "../../constants";
import MainCard from "./components/MainCard";
import { mainData } from "../../constants";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginRight: "3%"
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
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

const CardGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    border: "0.5px solid rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    padding: "3rem",
    marginTop: "7%"
}));

const Divider = styled(Box)(({ theme }) => ({
    height: "1px",
    background: "linear-gradient(90deg, rgba(23, 96, 118, 0) 0.04%, rgba(23, 96, 118, 0.6) 55.73%)",
    margin: "1.2rem 0rem"
}));

const Main = () => {
    return (
        <Root>
            <Grid container direction="row">
                <MainGrid xs={12} item sx={{ minHeight: 600 }}>
                    <Box className="media-container" sx={{}}>
                        <Box className="media-overlay media-bgMain">
                            <Typography size="h2" weight="bold" sx={{ textAlign: "start" }}>
                                THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ
                            </Typography>
                            <Typography size="p" sx={{ textAlign: "start" }}>
                                17 Jan 2023
                            </Typography>
                        </Box>
                        <CardMedia image={mainNews.img} title="" className="media-image" />
                    </Box>
                </MainGrid>
                <CardGrid xs={12} item>
                    {mainData.map((item, i) => (
                        <Grid key={i} xs={12} item>
                            <MainCard
                                title={item?.title}
                                date={item?.date}
                                description={item?.description}
                                img={item?.img}
                            />
                            {i !== mainData.length - 1 ? <Divider /> : <></>}
                        </Grid>
                    ))}
                </CardGrid>
            </Grid>
        </Root>
    );
};

export default Main;
