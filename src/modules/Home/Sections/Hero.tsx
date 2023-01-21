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
                height: '900vh'
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    background: '#fff',
                    width: '90%',
                    height: 'inherit'
                }}></Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    background: '#fff',
                    width: '10%',
                    height: 'inherit'
                }}></Box>
        </Box>
    );
};

export default Hero;
