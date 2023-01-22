import { styled, Grid } from "@mui/material";
import React from "react";
import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";

const Root = styled("div")(({ theme }) => ({
  margin: "5% 10%",
}));

const NormalSection = () => {
  return (
    <Root>
      <Title text="Y HỌC CỔ TRUYỀN" />
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={4}>
          <SimpleCard
            img={cardData[0].img}
            title={cardData[0].title}
            content={cardData[0].content}
            sx={{ height: 300 }}
          />
          <SimpleCard
            img={cardData[1].img}
            title={cardData[1].title}
            content={cardData[0].content}
            sx={{ height: 300 }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleCard
            img={cardData[2].img}
            imgRatio={9}
            title={cardData[2].title}
            content={cardData[0].content}
            contentRatio={3}
            overlay={false}
            sx={{ height: 600 }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleCard
            img={cardData[3].img}
            title={cardData[3].title}
            content={cardData[0].content}
            sx={{ height: 300 }}
          />
          <SimpleCard
            img={cardData[4].img}
            title={cardData[4].title}
            content={cardData[0].content}
            sx={{ height: 300 }}
          />
        </Grid>
      </Grid>
    </Root>
  );
};

export default NormalSection;

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content:
      "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content:
      "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content:
      "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content:
      "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content:
      "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
];
