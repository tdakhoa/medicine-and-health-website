import React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled, Box, AppBar, useScrollTrigger, Typography, Grow } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

import logo from "../../../public/Logo.png";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "fixed",
    zIndex: "1000 !important",
    width: "100%",
    boxShadow: "none",
    padding: "0 3rem",
    background: "linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)",
    backdropFilter: "blur(2px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50
    });
    return (
        <StyledAppBar sx={shadow({ trigger })}>
            <Image src={logo} alt="logo" width={40} />
            <Box sx={{ display: "flex", alignItems: "stretch", width: "100%", padding: "0 3rem" }}>
                {dir.map((item, i) => (
                    <NavItem trigger={trigger} key={i} content={item}></NavItem>
                ))}
            </Box>
            <NavItem trigger={trigger} icon={<SearchOutlined />}></NavItem>
        </StyledAppBar>
    );
};
export default NavBar;

const dir = [
    { title: "giới thiệu" },
    { title: "y học\ncổ truyền" },
    { title: "thuốc", items: ["thuốc", "thuốc cấm lưu hành"] },
    { title: "tim mạch" },
    {
        title: "bệnh học",
        items: [
            "nha khoa",
            "nhi khoa",
            "sản khoa",
            "nội tiết",
            "ung thư",
            "tai - mũi - họng",
            "cơ - xương khớp",
            "tâm thần",
            "tiêu hóa",
            "dinh dưỡng",
            "làm đẹp",
            "thực phẩm chức năng"
        ]
    },
    { title: "thông tin\ny dược" },
    { title: "pháp luật\ny tế" },
    { title: "góc bạn đọc" }
];

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
    title?: string;
    items?: string[];
}
interface NavItemProps {
    content?: Content;
    icon?: React.ReactNode;
    trigger: Boolean;
}
const NavItem = ({ content = { title: "" }, icon, trigger, ...props }: NavItemProps) => {
    const dropdown = content.title == "thuốc" || content.title == "bệnh học";
    const len = content.items?.length || 0;
    return (
        <>
            <StyledNavItem
                sx={{
                    "&:before": {
                        bottom: icon ? "-10px" : "0",
                        backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)"
                    }
                }}
                {...props}>
                <Typography>
                    {content.title}
                    {icon}
                </Typography>
                {dropdown ? (
                    <Box
                        id="shadow"
                        sx={{
                            position: "absolute",
                            marginTop: "4.7rem",
                            minWidth: "15vw",
                            left: 0,
                            top: 0
                        }}>
                        {content.items?.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "none",
                                    padding: "0.6rem 1rem",
                                    backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
                                    color: trigger ? "var(--palette-06)" : "var(--palette-01)",
                                    borderRadius:
                                        i == len - 1 ? "0px 0px 6px 6px" : i == 0 ? "0px 6px 0px 0px" : "none",
                                    animation: "animate 0.3s ease-in-out forwards",
                                    animationDelay: `${i * 0.05}s`,
                                    "@keyframes animate": {
                                        "0%": { transform: "rotateX(-90deg)", opacity: 0 },
                                        "50%": { transform: "rotateX(20deg)" },
                                        "100%": { transform: "rotate(0deg)", opacity: 1 }
                                    },
                                    transformOrigin: "top center",
                                    opacity: 0
                                }}>
                                <Typography sx={{ textAlign: "left !important", textTransform: "uppercase" }}>
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <></>
                )}
            </StyledNavItem>
        </>
    );
};
