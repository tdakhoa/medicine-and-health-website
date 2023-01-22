import React from "react";
import { styled, Box, Typography as MuiTypography } from "@mui/material";

const StyledTypography = styled(MuiTypography)((props: TypographyProps) => ({
  margin: 0,
  color:
    props.color === "primary"
      ? "var(--palette-01)"
      : props.color === "secondary"
      ? "var(--palette-02)"
      : props.color,
  fontSize:
    props.size === "h1"
      ? "var(--text-h1)"
      : props.size === "h2"
      ? "var(--text-h2)"
      : props.size === "h3"
      ? "var(--text-h3)"
      : props.size === "h4"
      ? "var(--text-h4)"
      : props.size === "h5"
      ? "var(--text-h5)"
      : props.size === "h6"
      ? "var(--text-h6)"
      : props.size === "p"
      ? "var(--text-para)"
      : props.size === "small"
      ? "var(--text-small)"
      : props.size === "tiny"
      ? "var(--text-tiny)"
      : props.size,
  fontWeight:
    props.weight === "extraBold"
      ? 800
      : props.weight === "bold"
      ? 700
      : props.weight === "semiBold"
      ? 600
      : props.weight === "medium"
      ? 500
      : props.weight === "regular"
      ? 400
      : props.weight === "light"
      ? 300
      : 300,
}));

interface TypographyProps {
  color?: "primary" | "secondary" | "white" | "black" | "inherit";
  text?: string;
  size?: string;
  weight?: string;
  sx?: object;
  children: React.ReactNode;
}

const Typography = ({
  color = "inherit",
  text = "",
  size = "p",
  weight = "regular",
  sx = {},
  children,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight}
      sx={sx}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
