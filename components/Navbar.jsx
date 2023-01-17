import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    styled,
    Box,
    Switch,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
    List,
    ListItem,
    ListItemIcon,
    Drawer,
    Grow,
    Collapse,
    useScrollTrigger,
    Fade,
    Fab
} from '@mui/material';
import {
    AccountCircle,
    MenuOutlined,
    Reviews,
    Logout,
    ExpandMore,
    ExpandLess,
    ChevronLeft,
    Restaurant,
    Hotel,
    Attractions,
    KeyboardArrowUp,
    ModeNight,
    GridOn,
    PlaceOutlined,
    FavoriteBorder,
    Casino,
    ShoppingCart
} from '@mui/icons-material';

import Image from 'next/image';
import logo from '../public/Logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    padding: '0 1rem',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none'
}));

function shadow({ trigger }) {
    return {
        boxShadow: `${trigger ? '5px 0px 27px -5px var(--black--color)' : 'none'}`
    };
}

const NavBar = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50
    });

    return (
        <StyledAppBar style={shadow({ trigger })}>
            <Toolbar>
                <Image src={logo} alt="logo" width="42" height="46" />
                <Box></Box>
            </Toolbar>
        </StyledAppBar>
    );
};
export default NavBar;
