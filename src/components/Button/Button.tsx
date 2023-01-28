import React from "react";
import { styled, Button as MuiButton } from "@mui/material";

const MyButton = styled(MuiButton)((props: ButtonProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: props.borderradiuss,
    cursor: "pointer",
    padding: "0.5rem 1rem",
    color: "white",
    textTransform: "initial",
    backgroundColor:
        props.bgcolor === "primary"
            ? "var(--palette-01)"
            : props.bgcolor === "secondary"
            ? "var(--palette-02)"
            : props.bgcolor === "white"
            ? "var(--palette-06)"
            : props.bgcolor,
    border: "2px solid transparent",
    fontFamily: "Nunito",
    "&:hover": {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor:
            props.bgcolor === "primary"
                ? "var(--palette-01)"
                : props.bgcolor === "secondary"
                ? "var(--palette-02)"
                : props.bgcolor === "white"
                ? "var(--palette-06)"
                : props.bgcolor,
        color:
            props.bgcolor === "primary"
                ? "var(--palette-01)"
                : props.bgcolor === "secondary"
                ? "var(--palette-02)"
                : props.bgcolor === "white"
                ? "var(--palette-06)"
                : props.bgcolor
    }
}));

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    bgcolor: string;
    borderradiuss?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    sx?: object;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}

const Button = ({
    onClick,
    bgcolor = "primary",
    borderradiuss = "30px",
    disabled,
    children,
    startIcon,
    endIcon,
    sx = {},
    ...props
}: ButtonProps) => {
    return (
        <MyButton
            bgcolor={bgcolor}
            borderradiuss={borderradiuss}
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
