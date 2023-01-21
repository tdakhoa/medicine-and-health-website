import { Typography, Box } from '@mui/material';
import React from 'react';

import heroImg from '../public/imgs/Hero1.png';

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${heroImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100vh'
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    zIndex: '10',
                    background: 'linear-gradient(70deg, transparent 50%, rgba(113, 191, 218, 0.6) 50%)',
                    width: '90%',
                    height: '100%'
                }}></Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: '10',
                    background: 'rgba(113, 191, 218, 0.6)',
                    width: '10%',
                    height: '100%'
                }}></Box>
            <Typography>THUỐC VÀ SỨC KHỎE</Typography>
        </Box>
    );
};

export default Hero;
