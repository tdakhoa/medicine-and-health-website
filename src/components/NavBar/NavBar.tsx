import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    styled,
    Box,
    AppBar,
    useScrollTrigger,
    Typography,
    IconButton,
    Backdrop,
    Divider,
    Fade,
    Fab,
    Drawer
} from "@mui/material";
import { SearchOutlined, MenuOutlined, ChevronRightOutlined, KeyboardArrowUp } from "@mui/icons-material";

import logo from "../../../public/Logo.png";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
import { MenuItems } from "../../constants";

const drawerWidth = 280;

const AppBarDesktop = styled(AppBar)(({ theme }) => ({
    position: "fixed",
    zIndex: "1000",
    width: "100%",
    boxShadow: "none",
    background: "linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)",
    backdropFilter: "blur(2px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}));

const StyledNavContainer = styled(Box)(() => ({
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    padding: "0 3rem"
}));

const AppBarMobile = styled(Drawer)(() => ({
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

interface shadow {
    trigger: boolean;
}

function shadow({ trigger }: shadow) {
    return {
        boxShadow: `${trigger ? "4px 4px 25px rgba(0, 0, 0, 0.35)" : "none"}`,
        backgroundColor: `${trigger ? "var(--palette-02)" : "transparent"}`
    };
}

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50
    });

    const handleToggleOpen = () => {
        setOpen(open !== true);
    };

    return (
        <>
            <AppBarDesktop
                sx={{
                    zIndex: open ? "1000" : "10001",
                    padding: { xs: "1rem 3rem", lg: "0rem 3rem" },
                    ...shadow({ trigger })
                }}>
                <Link href="/">
                    <Image priority src={logo} alt="logo" width={40} />
                </Link>
                <StyledNavContainer sx={{ display: { xs: "none", lg: "flex" } }}>
                    {MenuItems.map((item, i) => (
                        <NavItem trigger={trigger} key={i} content={item}></NavItem>
                    ))}
                </StyledNavContainer>

                <StyledNavItem
                    sx={{
                        "&:before": {
                            backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
                            bottom: "-10px"
                        },
                        display: { xs: "none", lg: "flex" }
                    }}>
                    <SearchOutlined />
                </StyledNavItem>

                <IconButton
                    sx={{ color: "white", display: { xs: "inline-flex", lg: "none" } }}
                    onClick={handleToggleOpen}>
                    <MenuOutlined />
                </IconButton>
            </AppBarDesktop>

            <Backdrop
                sx={{ color: "#fff", zIndex: 9999, display: { lg: "none" } }}
                open={open}
                onClick={handleToggleOpen}
            />
            <AppBarMobile variant="persistent" anchor="right" open={open} sx={{ display: { lg: "none" } }}>
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
                <Box role="presentation" sx={{ position: "fixed", bottom: 20, right: 20 }}>
                    <Fab size="small" onClick={() => window.scrollTo(0, 0)}>
                        <KeyboardArrowUp />
                    </Fab>
                </Box>
            </Fade>
        </>
    );
};
export default NavBar;

const StyledNavItem = styled(Box)(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    flexGrow: "1",
    display: "flex",
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
        borderRadius: "10px 10px 0px 0px"
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
    }
}));

interface Content {
    title: string[];
    link: string[];
}
interface NavItemProps {
    content?: Content;
    trigger: Boolean;
    sx?: object;
}
const NavItem = ({ content = { title: [""], link: [""] }, sx = {}, trigger, ...props }: NavItemProps) => {
    return (
        <StyledNavItem
            sx={{
                "&:before": {
                    backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)"
                },
                ...sx
            }}
            {...props}>
            <Link href={content.link[0]}>
                <Typography>{content.title[0]}</Typography>
            </Link>
            {content.title.length > 1 ? (
                <Box
                    id="shadow"
                    sx={{
                        position: "absolute",
                        marginTop: "4.7rem",
                        minWidth: 200,
                        left: 0,
                        top: 0
                    }}>
                    {content.title.map((item, i) =>
                        i !== 0 ? (
                            <Link key={i} href={content.link[i]}>
                                <Box
                                    sx={{
                                        display: "none",
                                        padding: "0.6rem 1rem",
                                        backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
                                        color: trigger ? "var(--palette-06) !important" : "var(--palette-01)",
                                        borderRadius:
                                            i === content.title.length - 1
                                                ? "0px 0px 6px 6px"
                                                : i === 1
                                                ? "0px 6px 0px 0px"
                                                : "none",
                                        transition: "all 0.3s ease-in-out",
                                        animation: "animate 0.3s ease-in-out forwards",
                                        animationDelay: `${i * 0.05}s`,
                                        "@keyframes animate": {
                                            "0%": { transform: "rotateX(-90deg)", opacity: 0 },
                                            "50%": { transform: "rotateX(20deg)" },
                                            "100%": { transform: "rotate(0deg)", opacity: 1 }
                                        },
                                        transformOrigin: "top center",
                                        opacity: 0,
                                        "&:hover": {
                                            backgroundColor: trigger ? "#34BEE8" : "#E8E6E6"
                                        }
                                    }}>
                                    <Typography
                                        sx={{
                                            textAlign: "left !important",
                                            textTransform: "uppercase"
                                        }}>
                                        {item}
                                    </Typography>
                                </Box>
                            </Link>
                        ) : (
                            <div key={i}></div>
                        )
                    )}
                </Box>
            ) : (
                <></>
            )}
        </StyledNavItem>
    );
};
