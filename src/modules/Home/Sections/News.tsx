import React from "react";
import { Box, CardMedia, styled, Grid } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import { mainNews, newsData } from "../../../constants";

const News = () => {
  var currentTime = new Date();
  var month = `${currentTime.getMonth() + 1}`;
  var day = `${currentTime.getDate()}`;
  var year = currentTime.getFullYear();

  if (currentTime.getDate() < 10) day = "0" + day;
  if (currentTime.getMonth() < 10) month = "0" + month;

  return (
    <Root>
      <Box sx={{ position: "relative", top: "-90px" }} id="news" />
      <ContentBox>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            transform="uppercase"
            size={{ lg: "h3", md: "h4", xs: "h4" }}
            weight="bold"
            color="secondary"
            format={{ lg: "left", md: "center", xs: "center" }}
          >
            Tin mới nhất
          </Typography>
          <Typography
            size={{ lg: "h5", md: "h6", xs: "h6" }}
            weight="semiBold"
            color="secondary"
            format={{ lg: "left", md: "center", xs: "center" }}
          >
            Ngày {day} tháng {month} năm {year}
          </Typography>
        </Box>
        <Button
          bgcolor="primary"
          sx={{ marginTop: "1.4rem", display: { xs: "none" } }}
          endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}
        >
          <Typography size="p">Đọc thêm</Typography>
        </Button>
      </ContentBox>

      <ArticleContainer>
        <Article sx={{ width: "70%" }}>
          <Box className="media-container">
            <Box className="media-overlay overlay-main"></Box>
            <CardMedia image={mainNews.img} title="" className="media-image" />
          </Box>
          <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
            <Typography sx={{ zIndex: "100" }} size="h2" weight="bold">
              {mainNews.title}
            </Typography>
            <Typography sx={{ zIndex: "100" }} size="p">
              {mainNews.description}
            </Typography>
          </Box>
        </Article>
        <Article
          className="article-sub"
          sx={{ display: "flex", flexDirection: "column", width: "50%", gap: "1rem" }}
        >
          {newsData.map((item, i) => (
            <Box key={i} sx={{ flexGrow: 1, position: "relative" }}>
              <Box className="media-container">
                <Box className="media-overlay overlay-sub"></Box>
                <CardMedia image={item.img} title="" className="media-image" />
              </Box>
              <Box sx={{ position: "absolute", bottom: 0, right: 0, width: "100%" }}>
                <Typography sx={{ zIndex: "100000" }} size="p" weight="bold">
                  {item.title}
                </Typography>
                <Typography sx={{ zIndex: "100000" }} size="0.9rem" weight="regular">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Article>
      </ArticleContainer>
    </Root>
  );
};

export default News;

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  margin: "5% 10%",
}));

const ArticleContainer = styled(Box)(({ theme }) => ({
  height: "600px",
  borderRadius: "60px",
  overflow: "hidden",
  width: "100%",
  display: "flex",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Article = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  "& .media-container": {
    position: "relative",
    width: "100%",
    height: "100%",
    "& .media-image": {
      width: "100%",
      height: "100%",
    },
    "& .media-overlay": {
      position: "absolute",
      width: "100%",
      height: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
    "& .overlay-main": {
      textAlign: "left",
      background: "linear-gradient(360deg, #71BFDA 0%, rgba(217, 217, 217, 0) 100%)",
      justifyContent: "end",
      transition: "all .5s ease-in-out",
      padding: "4rem",
      "&:hover": {
        color: "white",
        background: "none",
      },
      "&::before": {
        color: "white",
        background: "linear-gradient(360deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)",
        position: "absolute",
        content: '""',
        inset: 0,
        opacity: 0,
        transition: "all .5s ease-in-out",
      },
      "&:hover::before": {
        opacity: "1",
      },
    },
    "& .overlay-sub": {
      textAlign: "right",
      background: "linear-gradient(270deg, #71BFDA 15%, rgba(217, 217, 217, 0) 100%)",
      justifyContent: "center",
      transition: "all .5s ease-in-out",
      padding: "2rem",
      width: "60%",
      right: 0,
      "&:hover": {
        color: "white",
        background: "none",
      },
      "&::before": {
        color: "white",
        background: "linear-gradient(270deg, #071B21 0%, rgba(217, 217, 217, 0) 100%)",
        position: "absolute",
        content: '""',
        inset: 0,
        opacity: 0,
        transition: "all .5s ease-in-out",
      },
      "&:hover::before": {
        opacity: "1",
      },
    },
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "3rem",
}));
