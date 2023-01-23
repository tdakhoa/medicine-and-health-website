import { styled, Box, Grid, Link } from "@mui/material";
import { default as Typography } from ".././Typography/Typography";
import React from "react";
import Button from "../Button/Button";
import {
  ArrowForwardOutlined,
  EmailOutlined,
  FacebookOutlined,
  LocationOn,
  PhoneOutlined,
} from "@mui/icons-material";

import Image from "next/image";
import logo from "../../../public/Logo.svg";

const Root = styled("div")(({ theme }) => ({
  marginTop: "8%",
}));

const SubRectangle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "10%",
  right: "10%",
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
  padding: "0 10%",
  paddingBottom: "4%",
  position: "relative",
  backgroundColor: "var(--palette-02)",
  display: "flex",
  gap: "2rem",
}));

const Map = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "14rem",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
  borderRadius: 24,
}));

const AddressContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: "12% 0px 0px 0px",
  width: "40%",
}));

const Address = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  color: "white",
  gap: "1rem",
  marginTop: "1rem",
}));

const LinkContainer = styled(Grid)(({ theme }) => ({
  padding: "12% 0px 0px 0px",
  textAlign: "center",
  color: "white",
  "& .footer-item": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .footer-link": {
    display: "block",
    margin: "0.6rem 0rem",
    transition: "all 0.3s ease-in-out",
    fontWeight: 300,
    "&:hover": {
      color: "var(--palette-01)",
    },
  },
}));
const SocialContainer = styled(Grid)(({ theme }) => ({
  marginTop: "4rem",
  "& .social-title": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .social-item": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
  },
}));

const StyleDivider = {
  height: 2,
  width: 50,
  backgroundColor: "white",
  margin: "0.8rem 0px",
  borderRadius: 999,
};

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
            endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}
          >
            <Typography size="p" color="inherit" weight="medium">
              Đóng góp ý kiến
            </Typography>
          </Button>
        </SubRectangle>
        <AddressContainer>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3390401268844!2d106.68123241431714!3d10.785323861979766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe2829fc297%3A0x62c0a3fff1ed2433!2zMTI2QSBUcuG6p24gUXXhu5FjIFRo4bqjbywgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1674484736547!5m2!1svi!2s"></Map>
          <Address>
            <LocationOn color="inherit" />
            <Typography color="white" weight="bold" sx={{ flexShrink: 0 }}>
              Trụ sở chính
            </Typography>
            <Typography color="white" weight="light">
              126A Trần Quốc Thảo, Quận 3, Thành phố Hồ Chí Minh
            </Typography>
          </Address>
        </AddressContainer>
        <LinkContainer container>
          {footerItems.map((item, id) => (
            <Grid className="footer-item" item xs={4} key={id}>
              <Typography size="h6" weight="bold" sx={{ textTransform: "uppercase" }}>
                {item.title}
              </Typography>
              <Box sx={StyleDivider}></Box>
              {item.links.map((li, i) => (
                <Link className="footer-link" href={li.link} key={i} color="inherit" underline="none">
                  {li.aliases}
                </Link>
              ))}
            </Grid>
          ))}
          <SocialContainer container>
            <Grid item xs={12} className="social-title">
              <Typography size="h6" weight="bold" sx={{ textTransform: "uppercase" }}>
                contact us
              </Typography>
              <Box sx={StyleDivider}></Box>
            </Grid>
            {socialItems.map((item, id) => (
              <Grid item key={id} xs={4} className="social-item">
                {item.icon}
                <Link className="footer-link" href={item.link} color="inherit" underline="none">
                  {item.link}
                </Link>
              </Grid>
            ))}
          </SocialContainer>
        </LinkContainer>
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

const footerItems = [
  {
    title: "subtitle",
    links: [
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
    ],
  },
  {
    title: "subtitle",
    links: [
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
    ],
  },
  {
    title: "subtitle",
    links: [
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
      {
        link: "https://facebook.com",
        aliases: "Parturient Lorem",
      },
    ],
  },
];

const socialItems = [
  { icon: <PhoneOutlined />, link: "(+84) 384 375  64" },
  { icon: <EmailOutlined />, link: "thuocsk@gmail.com" },
  { icon: <FacebookOutlined />, link: "https://www.facebook.com" },
];