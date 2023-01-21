import React from 'react';
import { styled, Box, AppBar, Toolbar, useScrollTrigger, Typography } from '@mui/material';

import Image from 'next/image';
import searchIcon from '../public/icons/Search.png';
import logo from '../public/Logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '2rem 3rem',
    background: 'linear-gradient(180deg, rgba(23, 96, 118, 0.64) 0%, rgba(23, 96, 118, 0) 100%)',
    backdropFilter: 'blur(2px)'
}));

interface shadow {
    trigger: boolean;
}

function shadow({ trigger }: shadow) {
    return {
        boxShadow: `${trigger ? '5px 0px 27px -5px var(--black--color)' : 'none'}`
    };
}

const dir = ['giới thiệu', 'y học\ncổ truyền', 'thuốc', 'tim mạch', 'bệnh học', 'thông tin\ny dược', 'pháp luật\ny tế', 'góc bạn đọc'];

const NavBar = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50
    });

    return (
        <StyledAppBar style={shadow({ trigger })}>
            <Toolbar sx={{ padding: '0px !important'}}>
                <Image src={logo} alt="logo" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '1rem' }}>
                    {dir.map((item, i) => (
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                whiteSpace: 'pre-line',
                                textAlign: 'center',
                                flex: '1'
                            }}
                            key={i}>
                            {item}
                        </Typography>
                    ))}
                </Box>
                <Image src={searchIcon} alt="search" />
            </Toolbar>
        </StyledAppBar>
    );
};
export default NavBar;
