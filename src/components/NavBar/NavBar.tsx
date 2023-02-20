import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled, Box, AppBar, useScrollTrigger, IconButton, Backdrop, Divider, Fade, Drawer } from "@mui/material";
import { SearchOutlined, MenuOutlined, ChevronRightOutlined, KeyboardArrowUp } from "@mui/icons-material";

import logo from "../../../public/Logo.png";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
import { homeData } from "../../constants";
import Typography from "../Typography/Typography";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [prior, setPrior] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    const handleToggleOpen = () => {
        setOpen(open !== true);
        document.body.style.overflow = !open ? "hidden" : "auto";
    };

    useEffect(() => {
        if (open) setPrior(true);
        else
            setTimeout(function () {
                setPrior(false);
            }, 500);
    }, [open]);

    return (
        <>
            <AppBarDesktop trigger={trigger} prior={prior}>
                <Link href="/">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image priority src={logo} alt="logo" width={40} />
                    </Box>
                </Link>
                <StyledNavContainer>
                    {homeData.map((item, i) => (
                        <NavItem trigger={trigger} key={i} content={item}></NavItem>
                    ))}
                </StyledNavContainer>

                <StyledNavItem trigger={trigger} sx={{ "&:before": { bottom: "-10px" } }}>
                    <SearchOutlined />
                </StyledNavItem>

                <StyledIconButton onClick={handleToggleOpen}>
                    <MenuOutlined />
                </StyledIconButton>
            </AppBarDesktop>

            <StyledBackdrop open={open} onClick={handleToggleOpen} />

            <AppBarMobile variant="persistent" anchor="right" open={open} prior={prior}>
                <AppBarMobileHeader>
                    <IconButton onClick={handleToggleOpen}>
                        <ChevronRightOutlined />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                </AppBarMobileHeader>
                <Divider />
                <CategoryAccordion data={homeData} />
            </AppBarMobile>

            <Fade in={trigger && !open}>
                <ScrollTop size="small" onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardArrowUp />
                </ScrollTop>
            </Fade>
        </>
    );
};
export default NavBar;

const NavItem = ({ content = { title: "", link: "", item: [] }, sx = {}, trigger, ...props }: NavItemProps) => {
    return (
        <StyledNavItem trigger={trigger} {...props}>
            <Link href={content.link}>
                <Typography component="h1">{content.title}</Typography>
            </Link>
            <NavContentBox id="shadow">
                {content.item?.map((item, i) => (
                    <Link key={i} href={item.link}>
                        <NavItemBox trigger={trigger} i={i} length={(content.item?.length || 0) - 1}>
                            <Typography component="h1" transform="uppercase" sx={{ textAlign: "left !important" }}>
                                {item.title}
                            </Typography>
                        </NavItemBox>
                    </Link>
                ))}
            </NavContentBox>
        </StyledNavItem>
    );
};

interface AppBarDesktopProps {
    trigger: boolean;
    prior?: boolean;
    i?: number;
    length?: number;
}
interface Content {
    title: string;
    link: string;
    item?: Content[];
}
interface NavItemProps {
    content?: Content;
    trigger: boolean;
    sx?: object;
}

interface mobileProps {
    prior: boolean;
}

const drawerWidth = 280;

const AppBarDesktop = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "prior" && prop !== "trigger"
})<AppBarDesktopProps>(({ theme, trigger, prior }) => ({
    position: "fixed",
    width: "100%",
    transition: "all .4s ease-in-out",
    background: "linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)",
    backdropFilter: "blur(2px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: trigger ? "4px 4px 25px rgba(0, 0, 0, 0.6)" : "none",
    backgroundColor: trigger ? "var(--palette-02)" : "transparent",
    zIndex: prior ? "10001" : "10002",
    padding: "0rem 3rem",
    [theme.breakpoints.down("sm")]: {
        padding: "1rem",
        paddingLeft: "2rem"
    }
}));

const StyledNavContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    padding: "0 3rem",
    [theme.breakpoints.down("md")]: {
        padding: "2rem 0"
    }
}));

const AppBarMobile = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "prior" && prop !== "trigger"
})<mobileProps>(({ prior }) => ({
    position: "fixed",
    zIndex: prior ? 10002 : 0,
    height: "100vh",
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box"
    }
}));

const AppBarMobileHeader = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem"
}));

const ScrollTop = styled(IconButton)(() => ({
    color: "var(--palette-06)",
    backgroundColor: "var(--palette-02)",
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 100000,
    boxShadow: "0px 0px 15px rgba(255,255,255,0.6)",
    transition: "all .4s ease-in-out !important",
    border: "2px solid transparent",
    "&:hover": {
        color: "var(--palette-02)",
        backgroundColor: "var(--palette-06)",
        border: "2px solid var(--palette-02)"
    }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "var(--palette-06)",
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "inline-flex"
    }
}));

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    color: "var(--palette-06)",
    zIndex: 10002,
    position: "fixed",
    height: "100vh"
}));

const StyledNavItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "trigger"
})<AppBarDesktopProps>(({ theme, trigger }) => ({
    position: "relative",
    cursor: "pointer",
    flexGrow: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "10rem",
    padding: "1rem 0",
    "& .MuiTypography-root": {
        textTransform: "uppercase",
        fontSize: "0.9rem",
        whiteSpace: "pre-line",
        textAlign: "center",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    "&:before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 4,
        transform: "scaleX(0)",
        transformOrigin: "center",
        transition: "all .5s ease-in-out",
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)"
    },
    "&:hover::before": {
        transform: "scaleX(1)"
    },
    "&:hover": {
        "& .MuiBox-root": {
            display: "block"
        },
        "& #shadow": {
            animation: "shadow 0.3s ease-in-out forwards",
            animationDelay: `0.5s`,
            "@keyframes shadow": {
                "0%": { boxShadow: "none" },
                "100%": { boxShadow: "0px 15px 25px rgba(255, 255, 255, 0.35)" }
            }
        }
    },
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

const NavContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "4.7rem",
    minWidth: 200,
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

const NavItemBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "trigger"
})<AppBarDesktopProps>(({ theme, trigger, i = 0, length }) => ({
    display: "none",
    padding: "0.6rem 1rem",
    opacity: 0,
    backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
    color: trigger ? "var(--palette-06) !important" : "var(--palette-01)",
    transformOrigin: "top center",
    transition: "all 0.3s ease-in-out",
    animation: "animate 0.3s ease-in-out forwards",
    "@keyframes animate": {
        "0%": { transform: "rotateX(-90deg)", opacity: 0 },
        "50%": { transform: "rotateX(20deg)" },
        "100%": { transform: "rotate(0deg)", opacity: 1 }
    },
    borderRadius: i === length ? "0px 0px 6px 6px" : i === 0 ? "0px 6px 0px 0px" : "none",
    animationDelay: `${i * 0.05}s`,
    "&:hover": {
        backgroundColor: trigger ? "#34BEE8" : "#E8E6E6"
    }
}));
