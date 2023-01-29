import React from "react";
import { styled, Box, CardMedia } from "@mui/material";
import { ArrowDownwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../components";

const Root = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "stretch",
  padding: "5% 10%",
  gap: "7%",
  justifyContent: "space-between",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "1rem",
}));

const Contact = () => {
  return (
    <Root>
      <TextContainer>
        <Typography size="h2" weight="extraBold" color="secondary" sx={{ textTransform: "uppercase" }}>
          Tìm chúng tôi tại
        </Typography>
      </TextContainer>
      <CardMedia
        sx={{
          width: "40%",
          minHeight: 400,
          borderRadius: "100px 0px",
          boxShadow: "0px 0px 50px rgba(23, 96, 118, 0.3)",
        }}
        component="img"
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80"
      />
    </Root>
  );
};

export default Contact;
