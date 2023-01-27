import * as React from "react";
import Link from "next/link";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
    Box,
    IconButton,
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemButton as MuiListItemButton,
    ListItemIcon,
    Avatar,
    Badge
} from "@mui/material";
import {
    PeopleAltOutlined,
    MenuOutlined,
    NotificationsNoneOutlined,
    AutoStoriesOutlined,
    LogoutOutlined,
    AccountCircleOutlined
} from "@mui/icons-material";
import { Typography } from "../../../components";

const avatar =
    "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/326096520_670444968197841_461525136651728368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ebmBbb9a2mQAX88ojWU&tn=_JWBHwD98b41WzaG&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfD_7Q91aOT7VXNTtbk8qGnBFC2JvJRbNxDJo-rSf2bkmw&oe=63D5713F";

const drawerWidth = 250;
const miniDrawerWidth = "6rem";

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden",
    color: "white",
    backgroundColor: "var(--palette-01)"
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    display: "flex",
    flexDirection: "column",
    width: miniDrawerWidth,
    overflowX: "hidden",
    color: "white",
    backgroundColor: "var(--palette-01)"
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
    color: "white",
    backgroundColor: "var(--palette-01)",
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open
        ? {
              ...openedMixin(theme),
              "& .MuiDrawer-paper": openedMixin(theme)
          }
        : {
              ...closedMixin(theme),
              "& .MuiDrawer-paper": closedMixin(theme)
          })
}));

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
    minWidth: 0,
    padding: "0.8rem",
    borderRadius: 10,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1) !important"
    },
    marginBottom: "0.8rem"
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
    flexDirection: "column",
    alignItems: "center",
    gap: "0.8rem",
    margin: "2rem 0rem"
}));

export default function ToggleDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleToggleOpen = () => {
        setOpen(open !== true);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader
                sx={{
                    justifyContent: open ? "space-between" : "center"
                }}>
                <IconButton onClick={handleToggleOpen}>
                    <MenuOutlined sx={{ color: "white" }} />
                </IconButton>
                <IconButton aria-label="notification" sx={{ display: open ? "initial" : "none" }}>
                    <Badge
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                        }}
                        color="secondary"
                        variant="dot">
                        <NotificationsNoneOutlined sx={{ color: "white" }} />
                    </Badge>
                </IconButton>
            </DrawerHeader>

            <AvatarContainer sx={{ display: open ? "flex" : "none" }}>
                <Avatar alt="Lam Ngan" src={avatar} sx={{ width: 80, height: 80 }} />
                <Typography size="h6" weight="bold">
                    Ngân Lam
                </Typography>
                <Typography size="p">Admin</Typography>
            </AvatarContainer>

            <List className="full">
                {menuItems.map((item, index) => (
                    <Link href={item.link}>
                        <ListItem key={index} sx={{ padding: theme.spacing(0, 2), display: "block" }}>
                            <ListItemButton
                                sx={{
                                    justifyContent: open ? "initial" : "center"
                                }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 0,
                                        justifyContent: "center",
                                        color: "white"
                                    }}>
                                    {item.icon}
                                </ListItemIcon>
                                <Typography
                                    size="p"
                                    sx={{
                                        display: open ? "initial" : "none",
                                        lineHeight: 0,
                                        color: "var(--palette-06)"
                                    }}>
                                    {item.text}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}

const menuItems = [
    {
        text: "Danh sách bài viết",
        icon: <AutoStoriesOutlined />,
        link: "/admin/all-posts"
    },
    {
        text: "Quản lý nhân sự",
        icon: <PeopleAltOutlined />,
        link: "/admin/all-staffs"
    },
    {
        text: "Thông tin cá nhân",
        icon: <AccountCircleOutlined />,
        link: "/"
    },
    {
        text: "Đăng xuất",
        icon: <LogoutOutlined />,
        link: "/"
    }
];
