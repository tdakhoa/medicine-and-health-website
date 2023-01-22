import { styled, Grid } from "@mui/material";
import React from "react";
import AlternateCard from "./components/AlternateCard";
import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";

const Root = styled("div")(({ theme }) => ({
  margin: "5% 10%",
}));

const StyleSimpleCard = {
  height: 400,
  textAlign: "center",
  borderRadius: "10px 10px 0px 0px",
};

const Mix = () => {
  return (
    <Root>
      <Title text="PHÁP LUẬT Y TẾ" />
      <AlternateCard
        direction="row"
        sx={{
          minHeight: 300,
          marginBottom: "3rem",
        }}
        img={cardData[0].img}
        title={cardData[0].title}
        content={cardData[0].content}
      />
      <Grid container rowSpacing={0} columnSpacing={2}>
        <Grid item xs={3}>
          <SimpleCard
            img={cardData[1].img}
            title={cardData[1].title}
            content={cardData[1].content}
            sx={StyleSimpleCard}
            imgRatio={4}
            contentRatio={8}
            overlay={false}
          />
        </Grid>
        <Grid item xs={3}>
          <SimpleCard
            img={cardData[2].img}
            title={cardData[2].title}
            content={cardData[2].content}
            sx={StyleSimpleCard}
            imgRatio={4}
            contentRatio={8}
            overlay={false}
          />
        </Grid>
        <Grid item xs={3}>
          <SimpleCard
            img={cardData[3].img}
            title={cardData[3].title}
            content={cardData[3].content}
            sx={StyleSimpleCard}
            imgRatio={4}
            contentRatio={8}
            overlay={false}
          />
        </Grid>
        <Grid item xs={3}>
          <SimpleCard
            img={cardData[4].img}
            title={cardData[4].title}
            content={cardData[4].content}
            sx={StyleSimpleCard}
            imgRatio={4}
            contentRatio={8}
            overlay={false}
          />
        </Grid>
      </Grid>
    </Root>
  );
};

export default Mix;

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "THỦ TỤC KÊ KHAI GIÁ TRANG THIẾT BỊ Y TẾ",
    content:
      "Việc kê khai giá trang thiết bị y tế là một trong những cách đảm bảo tính minh bạch về giá bán trang thiết bị y tế trên thị trường, góp phần hạn chế và tiến tới xóa bỏ hiện tượng đẩy giá trang",
  },
  {
    img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, ",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, ",
  },
  {
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, ",
  },
  {
    img: "https://images.unsplash.com/photo-1666214276454-09b8876cb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "VIÊM GAN TRONG BỆNH WILSON",
    content:
      "Biểu hiện đầu tiên của bệnh Wilson là tổn thương gan. Trong bệnh Wilson, ",
  },
];
