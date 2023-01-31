import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled, Box, AppBar, useScrollTrigger, IconButton, Backdrop, Divider, Fade, Drawer } from "@mui/material";
import { SearchOutlined, MenuOutlined, ChevronRightOutlined, KeyboardArrowUp } from "@mui/icons-material";

import logo from "../../../public/Logo.png";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
import { MenuItems } from "../../constants";
import Typography from "../Typography/Typography";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    const handleToggleOpen = () => {
        setOpen(open !== true);
    };

    return (
        <>
            <AppBarDesktop trigger={trigger} open={open}>
                <Link href="/">
                    <Image priority src={logo} alt="logo" width={40} />
                </Link>
                <StyledNavContainer>
                    {MenuItems.map((item, i) => (
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

            <AppBarMobile variant="persistent" anchor="right" open={open}>
                <AppBarMobileHeader>
                    <IconButton onClick={handleToggleOpen}>
                        <ChevronRightOutlined />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                </AppBarMobileHeader>
                <Divider />
                <CategoryAccordion data={MenuItems} />
            </AppBarMobile>

            <Fade in={Boolean(trigger)}>
                <ScrollTop size="small" onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardArrowUp />
                </ScrollTop>
            </Fade>
        </>
    );
};
export default NavBar;

const NavItem = ({ content = { title: [""], link: [""] }, sx = {}, trigger, ...props }: NavItemProps) => {
    return (
        <StyledNavItem trigger={trigger} {...props}>
            <Link href={content.link[0]}>
                <Typography>{content.title[0]}</Typography>
            </Link>
            {content.title.length > 1 ? (
                <NavContentBox id="shadow">
                    {content.title.map((item, i) =>
                        i !== 0 ? (
                            <Link key={i} href={content.link[i]}>
                                <NavItemBox trigger={trigger} i={i} length={content.title.length - 1}>
                                    <Typography transform="uppercase" alignn="center">
                                        {item}
                                    </Typography>
                                </NavItemBox>
                            </Link>
                        ) : (
                            <div key={i}></div>
                        )
                    )}
                </NavContentBox>
            ) : (
                <></>
            )}
        </StyledNavItem>
    );
};

interface AppBarDesktopProps {
    trigger: boolean;
    open?: boolean;
    i?: number;
    length?: number;
}
interface Content {
    title: string[];
    link: string[];
}
interface NavItemProps {
    content?: Content;
    trigger: boolean;
    sx?: object;
}

const drawerWidth = 280;

const AppBarDesktop = styled(AppBar)<AppBarDesktopProps>(({ theme, trigger, open }) => ({
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
    zIndex: open ? "1000" : "10001",
    padding: "0rem 3rem",
    [theme.breakpoints.down("md")]: {
        padding: "1rem 3rem"
    }
}));

const StyledNavContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    padding: "0 3rem"
}));

const AppBarMobile = styled(Drawer)(() => ({
    display: "none",
    position: "fixed",
    zIndex: 10000,
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
        backgroundColor: "none",
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
    zIndex: 9999,
    display: "none"
}));

const StyledNavItem = styled(Box)<AppBarDesktopProps>(({ theme, trigger }) => ({
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

const NavItemBox = styled(Box)<AppBarDesktopProps>(({ theme, trigger, i = 0, length }) => ({
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
    borderRadius: i === length ? "0px 0px 6px 6px" : i === 1 ? "0px 6px 0px 0px" : "none",
    animationDelay: `${i * 0.05}s`,
    "&:hover": {
        backgroundColor: trigger ? "#34BEE8" : "#E8E6E6"
    }
}));
