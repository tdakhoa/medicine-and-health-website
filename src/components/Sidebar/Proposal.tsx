import React from "react";
import { Box } from "@mui/material";
import Typography from "../Typography/Typography";
import Carousel from "../Carousel/Carousel";
import SimpleCard from "../../modules/Home/Sections/components/SimpleCard";

const Proposal = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "0.5px solid rgba(23, 96, 118, 0.4)",
        borderRadius: "10px",
        padding: "1.5rem",
      }}
    >
      <Typography
        size="h5"
        weight="bold"
        color="secondary"
        sx={{ textAlign: "center", textTransform: "uppercase", mb: 2 }}
      >
        Đề xuất
      </Typography>
      <Carousel listData={dataList} indicators={false} />
    </Box>
  );
};

export default Proposal;

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "TĂNG HUYẾT ÁP VÔ CĂN VÀ THẬN",
    content: "Ở người trưởng thành, mỗi quả thận cân độ 150g và chứa đựng khoảng 1 triệu nêphron",
  },
];

const dataList = cardData.map((item) => (
  <SimpleCard
    img={item.img}
    title={item.title}
    content={item.content}
    borderRadius="10px 10px 0px 0px"
    imgRatio={8}
    contentRatio={4}
    sx={{ height: 310 }}
  />
));
