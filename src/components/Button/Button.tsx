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
      : "var(--palette-06)",
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor:
      props.bgColor === "primary"
        ? "var(--palette-01)"
        : props.bgColor === "secondary"
        ? "var(--palette-02)"
        : "var(--palette-06)",
    color:
      props.bgColor === "primary"
        ? "var(--palette-01)"
        : props.bgColor === "secondary"
        ? "var(--palette-02)"
        : "var(--palette-06)",
  },
}));

interface ButtonProps {
  onClick?: () => void;
  bgColor: "primary" | "secondary" | "white";
  borderRadius?: string;
  children: React.ReactNode;
  sx?: object;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const Button = ({
  onClick,
  bgColor,
  borderRadius = "30px",
  children,
  startIcon,
  endIcon,
  sx = {},
  ...props
}: ButtonProps) => {
  return (
    <MyButton bgColor={bgColor} borderRadius={borderRadius} sx={sx} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </MyButton>
  );
};

export default Button;
