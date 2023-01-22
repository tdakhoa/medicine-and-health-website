import React from 'react';
import { styled, Box, AppBar, useScrollTrigger, Typography, Grow } from '@mui/material';

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
    alignItems: 'center',
    justifyContent: 'space-between'
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
    return (
        <StyledAppBar sx={shadow({ trigger })}>
            <Image src={logo} alt="logo" width={40} />
            <Box sx={{ display: 'flex', alignItems: 'stretch', width: '100%', padding: '0rem 3rem' }}>
                {dir.map((item, i) => (
                    <NavItem trigger={trigger} key={i} content={item}></NavItem>
                ))}
            </Box>

            <NavItem trigger={trigger} icon={<SearchOutlined />}></NavItem>
        </StyledAppBar>
    );
};
export default NavBar;

const dir = [
    { title: 'giới thiệu' },
    { title: 'y học\ncổ truyền' },
    { title: 'thuốc', items: ['thuốc', 'thuốc cấm lưu hành'] },
    { title: 'tim mạch' },
    {
        title: 'bệnh học',
        items: [
            'nha khoa',
            'nhi khoa',
            'sản khoa',
            'nội tiết',
            'ung thư',
            'tai - mũi - họng',
            'cơ - xương khớp',
            'tâm thần',
            'tiêu hóa',
            'dinh dưỡng',
            'làm đẹp',
            'thực phẩm chức năng'
        ]
    },
    { title: 'thông tin\ny dược' },
    { title: 'pháp luật\ny tế' },
    { title: 'góc bạn đọc' }
];

const StyledNavItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        bottom: '-24px',
        width: '100%',
        height: 5,
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'all .5s ease-in-out',
        borderRadius: '10px 10px 0px 0px'
    },
    '&:hover::before': {
        transform: 'scaleX(1)'
    },
    '&:hover': {
        '& .MuiBox-root': {
            visibility: 'visible',
            transform: 'scaleX(1)',
            opacity: '1'
        }
    }
}));

interface Content {
    title?: string;
    items?: string[];
}
interface NavItemProps {
    content?: Content;
    icon?: React.ReactNode;
    trigger: Boolean;
}
const NavItem = ({ content = { title: '' }, icon, trigger, ...props }: NavItemProps) => {
    const dropdown = content.title == 'thuốc' || content.title == 'bệnh học';
    const len = content.items?.length || 0;
    return (
        <>
            <StyledNavItem
                sx={{
                    '&:before': {
                        bottom: icon ? '-34px' : '-24px',
                        backgroundColor: trigger ? 'var(--palette-03)' : 'var(--palette-06)'
                    }
                }}
                {...props}>
                <Typography>
                    {content.title}
                    {icon}
                </Typography>
                {dropdown ? (
                    <Box
                        sx={{
                            position: 'absolute',
                            marginTop: '4.2rem',
                            minWidth: '15vw',
                            left: 0,
                            top: 0,
                            visibility: 'hidden',
                            opacity: 0,
                            transform: 'scaleX(0.3)',
                            transformOrigin: 'center',
                            transition: 'all .5s ease-in-out'
                        }}>
                        {content.items?.map((item, i) => (
                            <Box
                                sx={{
                                    padding: '0.8rem 1rem',
                                    backgroundColor: trigger ? 'var(--palette-03)' : 'transaprent',
                                    borderRadius: i == len - 1 ? '0px 0px 6px 6px' : 'none'
                                }}>
                                <Typography sx={{ textTransform: 'uppercase' }}>{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <></>
                )}
            </StyledNavItem>
        </>
    );
};
