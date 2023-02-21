import React from "react";
import Image from "next/image";
import { styled, Box, Grid, Link } from "@mui/material";
import { ArrowForwardOutlined, EmailOutlined, FacebookOutlined, LocationOn, PhoneOutlined } from "@mui/icons-material";

import Typography from ".././Typography/Typography";
import Button from "../Button/Button";
import { footerItems } from "../../constants";
import logo from "../../../public/Logo.svg";

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
                                filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.6))"
                            }}
                        />
                        <Typography component="h1" size="h6" weight="bold" color="#DE221F">
                            THUỐC VÀ SỨC KHOẺ
                        </Typography>
                        <Typography component="h2" size="p" weight="light" color="white">
                            Lorem Ipsum is simply dummy text of the printing
                        </Typography>
                    </Box>
                    <Button
                        bgcolor="primary"
                        endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
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
                        <Typography component="h1" color="white" weight="light">
                            126A Trần Quốc Thảo, Quận 3, Thành phố Hồ Chí Minh
                        </Typography>
                    </Address>
                </AddressContainer>

                <LinkContainer container columnSpacing={{ xs: 2, lg: 0 }}>
                    {footerItems.map((item, id) => (
                        <Grid className="footer-item" item xs={4} key={id}>
                            <Typography size="h6" weight="bold" transform="uppercase">
                                {item.title}
                            </Typography>
                            <Box sx={StyleDivider} />
                            {item.links.map((li, i) => (
                                <Link className="footer-link" href={li.link} key={i} color="inherit" underline="none">
                                    {li.aliases}
                                </Link>
                            ))}
                        </Grid>
                    ))}
                    <SocialContainer container>
                        <Grid item xs={12} className="social-title">
                            <Typography size="h6" weight="bold" transform="uppercase">
                                contact us
                            </Typography>
                            <Box sx={StyleDivider} />
                        </Grid>

                        {socialItems.map((item, id) => (
                            <Grid item key={id} xs={12} lg={4} className="social-item">
                                {item.icon}
                                <Link className="footer-link" href={item.link} color="inherit" underline="none">
                                    {item.link}
                                </Link>
                            </Grid>
                        ))}
                    </SocialContainer>
                </LinkContainer>
            </MainRectangle>

            <Typography size="small" color="white" weight="light" format="center" sx={FooterTypo}>
                Copyright &#169; 2023. All rights reserved.
            </Typography>
        </Root>
    );
};

export default Footer;

const socialItems = [
    { icon: <PhoneOutlined />, link: "(+84) 384 375  64" },
    { icon: <EmailOutlined />, link: "thuocsk@gmail.com" },
    { icon: <FacebookOutlined />, link: "https://www.facebook.com" }
];

const Root = styled("div")(({ theme }) => ({
    marginTop: "15%",
    [theme.breakpoints.down("md")]: {
        marginTop: "10rem"
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: "6rem"
    }
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
    [theme.breakpoints.down("md")]: {
        flexDirection: "column"
    }
}));

const MainRectangle = styled(Box)(({ theme }) => ({
    padding: "0 10%",
    paddingBottom: "4%",
    position: "relative",
    backgroundColor: "var(--palette-02)",
    display: "flex",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        padding: "0 5%"
    }
}));

const Map = styled("iframe")(({ theme }) => ({
    width: "100%",
    height: "14rem",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: 24
}));

const AddressContainer = styled(Box)(({ theme }) => ({
    height: "100%",
    padding: "12% 0px 0px 0px",
    width: "40%",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "9rem"
    }
}));

const Address = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: "white",
    gap: "1rem",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
        marginTop: "2rem"
    }
}));

const LinkContainer = styled(Grid)(({ theme }) => ({
    padding: "12% 0px 0px 0px",
    textAlign: "center",
    color: "white",
    "& .footer-item": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    "& .footer-link": {
        display: "block",
        margin: "0.6rem 0rem",
        transition: "all 0.3s ease-in-out",
        fontWeight: 300,
        "&:hover": {
            color: "var(--palette-01)"
        }
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "1rem",
        padding: 0
    }
}));
const SocialContainer = styled(Grid)(({ theme }) => ({
    marginTop: "4rem",
    "& .social-title": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    "& .social-item": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.3rem"
    },
    [theme.breakpoints.down("md")]: {
        margin: "2rem 0rem",
        "& .social-item": {
            justifyContent: "center"
        }
    }
}));

const StyleDivider = {
    height: 2,
    width: 50,
    backgroundColor: "white",
    margin: "0.8rem 0px",
    borderRadius: 999
};

const FooterTypo = {
    padding: "0.5rem 0rem",
    width: "100%",
    backgroundColor: "var(--palette-01)"
};
