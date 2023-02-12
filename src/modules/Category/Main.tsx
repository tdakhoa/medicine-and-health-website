import React, { useState } from "react";
import { Box, CardMedia, styled, Grid, Pagination, useMediaQuery, useTheme } from "@mui/material";

import { Typography } from "../../components";
import { mainNews } from "../../constants";
import MainCard from "./components/MainCard";
import { mainData } from "../../constants";

const Main = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Root>
            <Grid container direction="row">
                <MainGrid xs={12} item sx={{ minHeight: 500 }}>
                    <Box className="media-container">
                        <Box className="media-overlay">
                            <Typography size={{ lg: "h2", md: "h3" }} weight="bold">
                                THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ
                            </Typography>
                            <Typography size="p">17 Jan 2023</Typography>
                        </Box>
                        <CardMedia image={mainNews.img} title="" className="media-image" />
                    </Box>
                </MainGrid>
                <CardGrid xs={12} item>
                    {mainData[page % 2].map((item, i) => (
                        <Grid key={i} xs={12} item>
                            <MainCard
                                title={item?.title}
                                date={item?.date}
                                description={item?.description}
                                img={item?.img}
                            />
                            {i !== mainData[page % 2].length - 1 ? <Divider /> : <></>}
                        </Grid>
                    ))}
                </CardGrid>
            </Grid>
            <PaginationBox>
                <Pagination
                    page={page}
                    onChange={handleChange}
                    count={10}
                    siblingCount={0}
                    boundaryCount={matches ? 1 : 2}
                    size={matches ? "medium" : "large"}
                />
            </PaginationBox>
        </Root>
    );
};

export default Main;

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
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
        color: "var(--palette-06)",
        "& .media-image": {
            width: "100%",
            height: "100%"
        },
        "& .media-overlay": {
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column",
            background: "rgba(7, 27, 33, 0.3)",
            transition: "all .4s ease-in-out",
            padding: "4rem",
            zIndex: "10000"
        }
    },
    "&:hover": {
        "& .media-image": {
            transition: "all .4s ease-in-out",
            transform: "scale(1.1)"
        }
    },
    [theme.breakpoints.down("sm")]: {
        margin: "2rem 0rem",
        "& .media-container": {
            "& .media-overlay": {
                padding: "1.5rem",
                paddingBottom: "2.5rem",
                textAlign: "center"
            }
        }
    }
}));

const CardGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    border: "0.5px solid rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    padding: "3rem 2rem",
    marginTop: "4%",
    [theme.breakpoints.down("sm")]: {
        padding: "2rem"
    }
}));

const Divider = styled(Box)(({ theme }) => ({
    height: "1px",
    background: "linear-gradient(90deg, rgba(23, 96, 118, 0) 0.04%, rgba(23, 96, 118, 0.6) 55.73%)",
    margin: "1.2rem 0rem"
}));

const PaginationBox = styled(Box)(({ theme }) => ({
    position: "relative",
    right: "-1rem",
    padding: "3% 0",
    [theme.breakpoints.down("sm")]: {
        right: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0rem"
    }
}));
