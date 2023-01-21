import React from 'react';
import { Box, styled, Typography, Button as MuiButton } from '@mui/material';

const MyButton = styled(Box)((props: ButtonProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: props.borderRadius,
    cursor: 'pointer',
    width: '100%',
    padding: '0.5rem',
    color: 'var(--palette-06)',
    backgroundColor: props.type === 'primary' ? 'var(--palette-01)' : props.type === 'secondary' ? 'var(--palette-02)' : 'var(--palette-06)',
    border: '2px solid transparent',
    transition: 'var(--trans-btn)',
    '&:hover': {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: props.type === 'primary' ? 'var(--palette-01)' : props.type === 'secondary' ? 'var(--palette-02)' : 'var(--palette-06)',
        backgroundColor: 'transparent',
        color: props.type === 'primary' ? 'var(--palette-01)' : props.type === 'secondary' ? 'var(--palette-02)' : 'var(--palette-06)'
    }
}));

interface ButtonProps {
    onClick?: () => void;
    type: 'primary' | 'secondary' | 'white';
    borderRadius?: string;
    children: React.ReactNode;
}

const Button = ({ onClick, type, borderRadius = '30px', children, ...props }: ButtonProps) => {
    return (
        <MyButton type={type} borderRadius={borderRadius} {...props}>
            <Box sx={{ display: 'flex', gap: '12px' }}>{children}</Box>
        </MyButton>
    );
};

export default Button;
