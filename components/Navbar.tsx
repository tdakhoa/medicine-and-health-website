import React from 'react';
import { styled, Box, AppBar, Toolbar, useScrollTrigger, Typography } from '@mui/material';

import Image from 'next/image';
import logo from '../public/Logo.png';
import { SearchOutlined } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '1rem 3rem',
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
            <Image src={logo} alt="logo" width={40} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', width: '100%', padding: '0rem 3rem' }}>
                {dir.map((item, i) => (
                    <NavItem
                        key={i}
                        content={item}
                    >
                    </NavItem>
                ))}
            </Box>
            <NavItem icon={<SearchOutlined />}>
            </NavItem>
        </StyledAppBar>
    );
};
export default NavBar;

const dir = ['giới thiệu', 'y học\ncổ truyền', 'thuốc', 'tim mạch', 'bệnh học', 'thông tin\ny dược', 'pháp luật\ny tế', 'góc bạn đọc'];

const StyledNavItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    flexGrow: '1',
    '& .MuiTypography-root':{
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        whiteSpace: 'pre-line',
        textAlign: 'center',
    },
    '&:before':{
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
    '&:hover::before':{
        transform: 'scaleX(1)',
    }
}));

interface NavItemProps {
    content?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}
const NavItem = ({content = '', icon, children, ...props}: NavItemProps) => {
    return (
        <StyledNavItem {...props}>
            <Typography>{content}</Typography>
            {children}
            {icon}
        </StyledNavItem>
    );

}