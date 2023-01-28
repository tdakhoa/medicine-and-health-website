import React from "react";
import { styled, Button as MuiButton } from "@mui/material";

const MyButton = styled(MuiButton)((props: ButtonProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: props.borderRadius,
    cursor: "pointer",
    padding: "0.5rem 1rem",
    color: "white",
    textTransform: "initial",
    backgroundColor:
        props.bgColor === "primary"
            ? "var(--palette-01)"
            : props.bgColor === "secondary"
            ? "var(--palette-02)"
            : props.bgColor === "white"
            ? "var(--palette-06)"
            : props.bgColor,
    border: "2px solid transparent",
    fontFamily: "Nunito",
    "&:hover": {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor:
            props.bgColor === "primary"
                ? "var(--palette-01)"
                : props.bgColor === "secondary"
                ? "var(--palette-02)"
                : props.bgColor === "white"
                ? "var(--palette-06)"
                : props.bgColor,
        color:
            props.bgColor === "primary"
                ? "var(--palette-01)"
                : props.bgColor === "secondary"
                ? "var(--palette-02)"
                : props.bgColor === "white"
                ? "var(--palette-06)"
                : props.bgColor
    }
}));

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    bgColor: string;
    borderRadius?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    sx?: object;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}

const Button = ({
    onClick,
    bgColor = "primary",
    borderRadius = "30px",
    disabled,
    children,
    startIcon,
    endIcon,
    sx = {},
    ...props
}: ButtonProps) => {
    return (
        <MyButton
            bgColor={bgColor}
            borderRadius={borderRadius}
            disabled={disabled}
            sx={sx}
            onClick={onClick}
            {...props}>
            {startIcon}
            {children}
            {endIcon}
        </MyButton>
    );
};

export default Button;
