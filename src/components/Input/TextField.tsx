import { TextField as MuiTextField, Box, styled } from "@mui/material";
import React from "react";
import Typography from "../Typography/Typography";

const MyTextField = styled(MuiTextField)(() => ({
  "& .MuiFilledInput-root": {
    borderRadius: 10,
    fontFamily: "'Nunito', san-serif",
    padding: "auto 0.6rem",
    "&:before": {
      border: "none !important",
    },
    "&::after": {
      border: "none !important",
    },
  },
}));

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  numberOfRows?: number;
  sx?: object;
  children?: React.ReactNode;
}

const TextField = ({
  label = "",
  placeholder = "",
  numberOfRows = 1,
  sx = {},
  children,
  ...props
}: TextFieldProps) => {
  return (
    <Box sx={{ ...sx }} {...props}>
      <Typography size="p" weight="bold" sx={{ marginBottom: "0.8rem" }}>
        {label}
      </Typography>
      <MyTextField
        hiddenLabel
        placeholder={placeholder}
        variant="filled"
        fullWidth
        multiline={numberOfRows > 1}
        maxRows={numberOfRows}
      />
      {children}
    </Box>
  );
};

export default TextField;
