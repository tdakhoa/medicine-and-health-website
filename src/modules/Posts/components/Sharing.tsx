import React, { useState } from "react";
import { Box, styled, Avatar } from "@mui/material";
import { ContentCopy, EmailOutlined, Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

import { Typography } from "../../../components";

const Sharing = () => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText("https://instagram.com/@mals.home");
        setCopied(true);
        setTimeout(function () {
            setCopied(false);
        }, 1000);
    };

    return (
        <Root>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    border: "0.5px solid rgba(23, 96, 118, 0.4)",
                    borderRadius: "10px",
                    margin: "2rem 0rem",
                    padding: "2rem 3rem",
                    gap: "1rem"
                }}>
                <Typography size="h5" weight="bold" color="secondary" transform="uppercase">
                    Chia sẻ bài viết
                </Typography>
                <Box sx={{ display: "flex", gap: "1.5rem" }}>
                    {socials.map((item, i) => (
                        <SocialBox bgColor={item.bgColor}>
                            <item.icon />
                        </SocialBox>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "70%",
                        border: "0.5px solid rgba(23, 96, 118, 0.4)",
                        borderRadius: "10px",
                        padding: "0.5rem 1rem"
                    }}>
                    {copied ? (
                        <Typography>Copied!</Typography>
                    ) : (
                        <Typography>https://instagram.com/@mals.home</Typography>
                    )}

                    <ContentCopy sx={{ color: "var(--palette-02)", cursor: "pointer" }} onClick={handleClick} />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    border: "0.5px solid rgba(23, 96, 118, 0.4)",
                    borderRadius: "10px",
                    padding: "2.5rem",
                    gap: "2rem"
                }}>
                <Avatar
                    alt="Lam Ngan"
                    src={avatar}
                    sx={{ width: 80, height: 80, boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.25)" }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Typography size="h6" weight="bold">
                        Ngan Lam
                    </Typography>
                    <Typography weight="regular">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old.
                    </Typography>
                </Box>
            </Box>
        </Root>
    );
};

export default Sharing;

const avatar =
    "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/326096520_670444968197841_461525136651728368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ebmBbb9a2mQAX88ojWU&tn=_JWBHwD98b41WzaG&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfD_7Q91aOT7VXNTtbk8qGnBFC2JvJRbNxDJo-rSf2bkmw&oe=63D5713F";

const socials = [
    {
        icon: Facebook,
        bgColor: "#4267B2"
    },
    {
        icon: Instagram,
        bgColor: "linear-gradient(90deg, #405DE6 0%, #5851DB 25.52%, #833AB4 52.08%, #E1306C 76.04%, #FD1D1D 100%)"
    },
    {
        icon: YouTube,
        bgColor: "#FF0000"
    },
    {
        icon: Twitter,
        bgColor: "#1DA1F2"
    },
    {
        icon: EmailOutlined,
        bgColor: "#DB4437"
    }
];

interface SocialsProps {
    bgColor: string;
}

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%"
}));

const SocialBox = styled(Box)<SocialsProps>(({ theme, bgColor }) => ({
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
    color: "white",
    background: "#757575",
    animation: "opacity1 .3s forwards",
    "&:hover": {
        cursor: "pointer",
        background: bgColor,
        animation: "opacity .3s forwards"
    },
    "@keyframes opacity": {
        "0%": { opacity: "0.9" },
        "25%": { opacity: "0.925" },
        "50%": { opacity: "0.95" },
        "75%": { opacity: "0.975" },
        "100%": { opacity: "1" }
    }
}));
