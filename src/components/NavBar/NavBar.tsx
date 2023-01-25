import React from "react";
import Image from "next/image";
import {
  styled,
  Box,
  AppBar,
  useScrollTrigger,
  Typography,
  IconButton,
  Backdrop,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { SearchOutlined, MenuOutlined, ExpandMoreOutlined, ChevronRightOutlined } from "@mui/icons-material";

import logo from "../../../public/Logo.png";

const drawerWidth = 280;

const AppBarDesktop = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  zIndex: "1000 !important",
  width: "100%",
  boxShadow: "none",
  background: "linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)",
  backdropFilter: "blur(2px)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledNavContainer = styled(Box)(() => ({
  alignItems: "stretch",
  width: "100%",
  padding: "0 3rem",
}));

const AppBarMobile = styled(Drawer)(() => ({
  position: "fixed",
  zIndex: 10000,
  height: "100vh",
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const AppBarMobileHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
}));

const Accordion = styled(MuiAccordion)(() => ({
  border: "none",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
}));

interface ListItem {
  title: string[];
}

const RenderListItem = (item: ListItem, index: number) => {
  if (item.title.length == 1)
    return (
      <ListItemButton key={index}>
        <ListItemText primary={item.title[0]} sx={{ "& .MuiTypography-root": { fontWeight: 700 } }} />
      </ListItemButton>
    );
  else
    return (
      <Accordion disableGutters key={index}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ fontWeight: 700 }}>{item.title[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {item.title.map((e, i) =>
            i != 0 ? (
              <ListItemButton key={i}>
                <ListItemText primary={e} />
              </ListItemButton>
            ) : null
          )}
        </AccordionDetails>
      </Accordion>
    );
};

interface shadow {
  trigger: boolean;
}

function shadow({ trigger }: shadow) {
  return {
    boxShadow: `${trigger ? "4px 4px 25px rgba(0, 0, 0, 0.35)" : "none"}`,
    backgroundColor: `${trigger ? "var(--palette-02)" : "transparent"}`,
  };
}

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleToggleOpen = () => {
    setOpen(open !== true);
  };

  return (
    <>
      <AppBarDesktop
        sx={{
          padding: { xs: "1rem 3rem", lg: "0rem 3rem" },
          ...shadow({ trigger }),
        }}
      >
        <Image src={logo} alt="logo" width={40} />
        <StyledNavContainer sx={{ display: { xs: "none", lg: "flex" } }}>
          {dir.map((item, i) => (
            <NavItem trigger={trigger} key={i} content={item}></NavItem>
          ))}
        </StyledNavContainer>

        <NavItem
          trigger={trigger}
          icon={<SearchOutlined />}
          sx={{ display: { xs: "none", lg: "flex" } }}
        ></NavItem>

        <IconButton
          sx={{ color: "white", display: { xs: "inline-flex", lg: "none" } }}
          onClick={handleToggleOpen}
        >
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
        <List>{MenuItems.map((item, i) => RenderListItem(item, i))}</List>
      </AppBarMobile>
    </>
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
      "thực phẩm chức năng",
    ],
  },
  { title: "thông tin\ny dược" },
  { title: "pháp luật\ny tế" },
  { title: "góc bạn đọc" },
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
    alignItems: "center",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: 4,
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "all .5s ease-in-out",
    borderRadius: "10px 10px 0px 0px",
  },
  "&:hover::before": {
    transform: "scaleX(1)",
  },
  "&:hover": {
    "& .MuiBox-root": {
      display: "block",
    },
    "& #shadow": {
      animation: "shadow 0.3s ease-in-out forwards",
      animationDelay: `0.5s`,
      "@keyframes shadow": {
        "0%": { boxShadow: "none" },
        "100%": { boxShadow: "0px 15px 25px rgba(255, 255, 255, 0.35)" },
      },
    },
  },
}));

interface Content {
  title?: string;
  items?: string[];
}
interface NavItemProps {
  content?: Content;
  icon?: React.ReactNode;
  trigger: Boolean;
  sx?: object;
}
const NavItem = ({ content = { title: "" }, icon, sx = {}, trigger, ...props }: NavItemProps) => {
  const dropdown = content.title == "thuốc" || content.title == "bệnh học";
  const len = content.items?.length || 0;
  return (
    <StyledNavItem
      sx={{
        "&:before": {
          bottom: icon ? "-10px" : "0",
          backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
        },
        ...sx,
      }}
      {...props}
    >
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
            minWidth: 200,
            left: 0,
            top: 0,
          }}
        >
          {content.items?.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "none",
                padding: "0.6rem 1rem",
                backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
                color: trigger ? "var(--palette-06)" : "var(--palette-01)",
                borderRadius: i == len - 1 ? "0px 0px 6px 6px" : i == 0 ? "0px 6px 0px 0px" : "none",
                transition: "all 0.3s ease-in-out",
                animation: "animate 0.3s ease-in-out forwards",
                animationDelay: `${i * 0.05}s`,
                "@keyframes animate": {
                  "0%": { transform: "rotateX(-90deg)", opacity: 0 },
                  "50%": { transform: "rotateX(20deg)" },
                  "100%": { transform: "rotate(0deg)", opacity: 1 },
                },
                transformOrigin: "top center",
                opacity: 0,
                "&:hover": {
                  backgroundColor: trigger ? "#34BEE8" : "#E8E6E6",
                },
              }}
            >
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
  );
};

const MenuItems = [
  { title: ["Giới thiệu"] },
  { title: ["Thuốc", "Thuốc cấm lưu hành", "Thuốc khác"] },
  { title: ["Y học cổ truyền"] },
  { title: ["Tim mạch"] },
  {
    title: [
      "Bệnh học",
      "Nha khoa",
      "Nhi khoa",
      "Sản khoa",
      "Nội tiết",
      "Ung thư",
      "Tai - Mũi - Họng",
      "Cơ - Xương khớp",
      "Tâm thần",
      "Tiêu hoá",
    ],
  },
  { title: ["Thông tin y dược"] },
  { title: ["Pháp luật y tế"] },
  { title: ["Góc bạn đọc"] },
];
