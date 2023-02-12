import React from "react";
import { styled, Box, CardMedia, Grid } from "@mui/material";
import { FacebookOutlined, Instagram, MailOutline, PhoneOutlined, Place, YouTube } from "@mui/icons-material";

import { Typography } from "../../../components";

const Contact = () => {
    return (
        <Root>
            <TextContainer>
                <Typography size={{ lg: "h2", md: "h3" }} weight="extraBold" color="secondary" transform="uppercase">
                    Tìm chúng tôi tại
                </Typography>
                <Grid
                    container
                    direction="row"
                    sx={{
                        justifyContent: { xs: "space-between", md: "end" },
                        textAlign: "left",
                        gap: "1rem"
                    }}>
                    {ContactItems.map((item, i) => (
                        <Grid item xs={5} key={i} sx={{ display: "flex" }}>
                            {item.icon}
                            <Typography sx={{ width: "80%", wordWrap: "break-word", paddingLeft: "0.5rem" }}>
                                {item.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </TextContainer>
            <CardMedia
                sx={{
                    width: { xs: "90%", md: "40%" },
                    minHeight: { xs: 320, md: 400 },
                    borderRadius: "0px 100px",
                    boxShadow: "0px 0px 50px rgba(23, 96, 118, 0.3)"
                }}
                component="img"
                image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80"
            />
        </Root>
    );
};

export default Contact;

const ContactItems = [
    {
        icon: <PhoneOutlined />,
        text: "0945293031"
    },
    {
        icon: <Place />,
        text: "224 Nguyễn Văn Cừ, P6, Q5, TPHCM"
    },
    {
        icon: <MailOutline />,
        text: "nganlamforwork@gmail.com"
    },
    {
        icon: <FacebookOutlined />,
        text: "fb.com/@nganlam2104"
    },
    {
        icon: <Instagram />,
        text: "instagram.com/mals.home"
    },
    {
        icon: <YouTube />,
        text: "youtube.com/@malshome"
    }
];

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "stretch",
    padding: "5% 10%",
    gap: "7%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
        alignItems: "center",
        padding: "10% 5%",
        gap: "2.5rem",
        textAlign: "center"
    }
}));

const TextContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "2rem"
}));
