import React from "react";
import {
    styled,
    Box,
    TextField as MuiTextField,
    FilledTextFieldProps as MuiTextFieldProps,
    CardMedia
} from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../components";

const ConsulationForm = () => {
    return (
        <Root>
            <FormContainer>
                <TitleContainer>
                    <Typography size="h3" weight="bold" color="secondary" transform="uppercase">
                        Tư vấn pháp luật y tế miễn phí
                    </Typography>
                    <Typography size="p" weight="semiBold" color="secondary" transform="uppercase">
                        HÃY ĐỂ LẠI THÔNG TIN LIÊN HỆ CỦA BẠN
                    </Typography>
                    <Box className="divider"></Box>
                </TitleContainer>
                <TextFieldContainer>
                    <TextField label="Tên" required variant="filled" fullWidth />
                    <TextField label="Số điện thoại" required variant="filled" fullWidth />
                    <TextField label="Email" variant="filled" fullWidth />
                    <TextField label="Vấn đề cần tư vấn" variant="filled" required fullWidth multiline rows={4} />
                    <Button
                        bgcolor="primary"
                        sx={{ marginTop: "1.4rem" }}
                        endIcon={<ArrowForwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                        <Typography size="p" color="inherit" weight="medium">
                            Gửi
                        </Typography>
                    </Button>
                </TextFieldContainer>
            </FormContainer>
            <CardMedia
                sx={StyleCardMedia}
                component="img"
                image="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="form img"
            />
        </Root>
    );
};

export default ConsulationForm;

const TextField = ({ label = "", variant = "filled", ...props }: TextFieldProps) => {
    const sx = {
        "& .MuiFilledInput-root": {
            borderRadius: 2,
            fontFamily: "'Nunito', san-serif",
            padding: "auto 0.6rem",
            border: "1px solid rgba(23, 96, 118, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            "&:before": {
                border: "none !important"
            },
            "&::after": {
                border: "none !important"
            }
        },
        "& .MuiFormLabel-root": {
            fontFamily: "'Nunito', san-serif"
        },
        "& .Mui-focused": {
            color: "var(--palette-02)"
        }
    };
    return <MuiTextField label={label} variant={variant} {...props} sx={sx} />;
};

interface TextFieldProps extends MuiTextFieldProps {}

const Root = styled(Box)(() => ({
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    padding: "3rem 10%"
}));

const FormContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    background: "linear-gradient(180deg, rgba(40, 165, 203, 0.3) 0%, rgba(40, 165, 203, 0) 100%)",
    borderRadius: "40px",
    padding: "3rem",
    [theme.breakpoints.down("md")]: {
        width: "100%"
    }
}));

const TitleContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    textAlign: "right",
    "& .divider": {
        height: 2,
        width: 50,
        backgroundColor: "var(--palette-02)",
        margin: "0.8rem 0px"
    },
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        textAlign: "center"
    }
}));

const TextFieldContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "2rem",
    paddingLeft: "30%",
    alignItems: "end",
    [theme.breakpoints.down("md")]: {
        paddingLeft: "0%"
    }
}));

const StyleCardMedia = (theme: any) => ({
    width: "32%",
    height: "60%",
    position: "absolute",
    bottom: 0,
    left: "10%",
    borderRadius: "40px",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
});
