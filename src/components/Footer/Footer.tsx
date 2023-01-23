import { styled, Box } from "@mui/material";
import { default as Typography } from ".././Typography/Typography";
import React from "react";
import Button from "../Button/Button";
import { ArrowForwardOutlined } from "@mui/icons-material";

import Image from "next/image";
import logo from "../../../public/Logo.svg";

const Root = styled("div")(({ theme }) => ({
  marginTop: "8%",
}));

const SubRectangle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "12.42%",
  right: "12.42%",
  transform: "translateY(-50%)",
  backgroundColor: "red",
  background: "linear-gradient(90deg, #00AACD 0.04%, #71BFDA 99.96%)",
  borderRadius: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.2rem 1.6rem",
  textAlign: "center",
}));

const MainRectangle = styled(Box)(({ theme }) => ({
  height: 400,
  position: "relative",
  backgroundColor: "var(--palette-02)",
}));

const Footer = () => {
  return (
    <Root>
      <MainRectangle>
        <SubRectangle>
          <Box>
            <Image
              src={logo}
              alt="logo"
              width={50}
              style={{
                filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.6))",
              }}
            />
            <Typography size="h6" weight="bold" color="#DE221F">
              THUỐC VÀ SỨC KHOẺ
            </Typography>
            <Typography size="p" weight="light" color="white">
              Lorem Ipsum is simply dummy text of the printing
            </Typography>
          </Box>
          <Button
            bgColor="primary"
            endIcon={
              <ArrowForwardOutlined
                sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }}
              />
            }
          >
            <Typography size="p" color="inherit" weight="medium">
              Đóng góp ý kiến
            </Typography>
          </Button>
        </SubRectangle>
        <Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3390401268844!2d106.68123241431714!3d10.785323861979766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe2829fc297%3A0x62c0a3fff1ed2433!2zMTI2QSBUcuG6p24gUXXhu5FjIFRo4bqjbywgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1674484736547!5m2!1svi!2s"></iframe>
          <Typography color="white" weight="light">
            126A Trần Quốc Thảo, Quận 3, Thành phố Hồ Chí Minh
          </Typography>
        </Box>
      </MainRectangle>

      <Typography
        size="small"
        color="white"
        weight="light"
        sx={{
          padding: "0.5rem 0rem",
          width: "100%",
          backgroundColor: "var(--palette-01)",
          textAlign: "center",
        }}
      >
        Copyright &#169; 2023. All rights reserved.
      </Typography>
    </Root>
  );
};

export default Footer;
