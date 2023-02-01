import React from "react";
import { styled, Box, CardMedia, Grid } from "@mui/material";
import { FacebookOutlined, Instagram, MailOutline, PhoneOutlined, Place, YouTube } from "@mui/icons-material";

import { Typography } from "../../../components";

const Contact = () => {
    return (
        <Root>
            <TextContainer>
                <Typography size="h2" weight="extraBold" color="secondary" transform="uppercase">
                    Tìm chúng tôi tại
                </Typography>
                <Grid container direction="row" columnSpacing={8} rowSpacing={4} sx={{ justifyContent: "end" }}>
                    {ContactItems.map((item, i) => (
                        <Grid item xs={5} key={i} sx={{ display: "flex" }}>
                            {item.icon}
                            <Typography sx={{ width: "100%", wordWrap: "break-word", paddingLeft: "0.5rem" }}>
                                {item.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </TextContainer>
            <CardMedia
                sx={{
                    width: "40%",
                    minHeight: 400,
                    borderRadius: "100px 0px",
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
        text: "https://fb.com/@nganlam2104"
    },
    {
        icon: <Instagram />,
        text: "https://www.instagram.com/mals.home/"
    },
    {
        icon: <YouTube />,
        text: "https://www.youtube.com/@malshome"
    }
];

const Root = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "stretch",
    padding: "5% 10%",
    gap: "7%",
    justifyContent: "space-between"
}));

const TextContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "1rem"
}));
