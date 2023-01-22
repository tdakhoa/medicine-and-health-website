import React from "react";
import AlternateCard from "./components/AlternateCard";
import { styled } from "@mui/material";
import Title from "./components/Title";

const Root = styled("div")(({ theme }) => ({
  margin: "5% 10%",
}));
const AlternateSection = () => {
  return (
    <Root>
      <Title text="BỆNH HỌC" />
      {cardData.map((data, id) => (
        <AlternateCard
          direction={id % 2 == 1 ? "row" : "row-reverse"}
          sx={{
            minHeight: 300,
            marginBottom: "3rem",
          }}
          img={data.img}
          title={data.title}
          content={data.content}
        />
      ))}
    </Root>
  );
};

export default AlternateSection;

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, tổn thương đầu tiên là ở gan và tiếp theo là hệ thần kinh trung ương, gan mãn tính bao gồm...",
  },
  {
    img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, tổn thương đầu tiên là ở gan và tiếp theo là hệ thần kinh trung ương, gan mãn tính bao gồm...",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, tổn thương đầu tiên là ở gan và tiếp theo là hệ thần kinh trung ương, gan mãn tính bao gồm...",
  },
  {
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, tổn thương đầu tiên là ở gan và tiếp theo là hệ thần kinh trung ương, gan mãn tính bao gồm...",
  },
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, tổn thương đầu tiên là ở gan và tiếp theo là hệ thần kinh trung ương, gan mãn tính bao gồm...",
  },
];
