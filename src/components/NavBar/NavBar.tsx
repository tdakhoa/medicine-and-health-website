import React, { useState } from 'react';
import { styled, Box, AppBar, Toolbar, useScrollTrigger, Typography, Menu, Grow } from '@mui/material';

import Image from 'next/image';
import logo from '../../../public/Logo.png';
import { SearchOutlined } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    zIndex: '1000 !important',
    width: '100%',
    boxShadow: 'none',
    padding: '1.5rem 3rem',
    background: 'linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)',
    backdropFilter: 'blur(2px)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}));

interface shadow {
    trigger: boolean;
}

function shadow({ trigger }: shadow) {
    return {
        boxShadow: `${trigger ? '4px 4px 25px rgba(0, 0, 0, 0.35)' : 'none'}`,
        backgroundColor: `${trigger ? 'var(--palette-02)' : 'transparent'}`
    };
}
const NavBar = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50
    });
    console.log(trigger);
    return (
        <StyledAppBar sx={shadow({ trigger })}>
            <Image src={logo} alt="logo" width={40} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', width: '100%', padding: '0rem 3rem' }}>
                {dir.map((item, i) => (
                    <NavItem key={i} content={item}></NavItem>
                ))}
            </Box>
            <NavItem icon={<SearchOutlined sx={{ marginTop: '0.8rem' }} />}></NavItem>
        </StyledAppBar>
    );
};
export default NavBar;

const dir = ['giới thiệu', 'y học\ncổ truyền', 'thuốc', 'tim mạch', 'bệnh học', 'thông tin\ny dược', 'pháp luật\ny tế', 'góc bạn đọc'];

const StyledNavItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    flexGrow: '1',
    '& .MuiTypography-root': {
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        width: '100%',
        height: 4,
        backgroundColor: 'white',
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'all .5s ease-in-out',
        borderRadius: '6px 6px 0px 0px'
    },
    '&:hover::before': {
        transform: 'scaleX(1)'
    }
}));

interface NavItemProps {
    content?: string;
    icon?: React.ReactNode;
}
const NavItem = ({ content = '', icon, ...props }: NavItemProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [hovering, setHovering] = useState<null | String>('giới thiệu');
    const open = Boolean(anchorEl);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setHovering(event.currentTarget.textContent);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        if (event.currentTarget.textContent !== hovering)
    };

    return (
        <StyledNavItem {...props}>
            <Typography onMouseEnter={handleOpen} onMouseOut={handleClose}>{content}</Typography>
            {icon}
            <Menu keepMounted anchorEl={anchorEl} open={open}>
                {['Thuốc cấm lưu hành', 'Thuốc khác'].map((userItem, idx) => (
                    <Grow key={idx} in={open} {...(open ? { timeout: 600 * idx } : {})}>
                        <Typography sx={{ padding: 10, backgroundColor: 'black', color: 'inherit', position: 'absolute', bottom: '0' }}>
                            {userItem}
                        </Typography>
                    </Grow>
                ))}
            </Menu>
        </StyledNavItem>
    );
};
