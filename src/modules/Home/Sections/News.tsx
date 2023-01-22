import React from 'react';
import Image from 'next/image';
import { Link, Box } from '@mui/material';

import { Typography } from '../../../components';
import news1 from '../../../../public/imgs/News1.png';
import news2 from '../../../../public/imgs/News2.png';

const StyleDivider = {
    height: 2,
    width: 50,
    backgroundColor: 'var(--palette-02)',
    margin: '0.8rem 0px'
};
const StyleTitle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    margin: '5% 10%'
};

const News = () => {
    var currentTime = new Date();
    var month = `${currentTime.getMonth() + 1}`;
    var day = `${currentTime.getDate()}`;
    var year = currentTime.getFullYear();

    if (currentTime.getDate() < 10) day = '0' + day;
    if (currentTime.getMonth() < 10) month = '0' + month;

    return (
        <div>
            <Box sx={StyleTitle}>
                <Typography sx={{ textTransform: 'uppercase' }} size="h2" weight="bold" color="secondary">
                    Tin mới nhất
                </Typography>
                <Typography size="h3" weight="semiBold" color="secondary">
                    Ngày {day} tháng {month} năm {year}
                </Typography>
                <Box sx={StyleDivider}></Box>
            </Box>
            <Box>
                <Image src={news1} alt="news" />
            </Box>
        </div>
    );
};

export default News;
