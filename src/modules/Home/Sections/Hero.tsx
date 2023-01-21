import { Typography, Box } from '@mui/material';
import React from 'react';

import heroImg from '../../../../public/imgs/Hero1.png';

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: 0,
                width: '100%',
                height: '90vh'
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    background: 'linear-gradient(70deg, transparent 50%, rgba(113, 191, 218, 0.6) 50%)',
                    width: '90%',
                    height: 'inherit'
                }}></Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: 'rgba(113, 191, 218, 0.6)',
                    width: '10%',
                    height: 'inherit'
                }}></Box>
        </Box>
    );
};

export default Hero;
