import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { styled, Box, Grid } from "@mui/material";
import ToggleDrawer from "./components/Drawer";
import { CancelOutlined, CreateOutlined, SaveOutlined } from "@mui/icons-material";
import { VariantType } from "notistack";

import { Button, TextField, Typography } from "../../components";

const InputContainer = styled(Grid)(() => ({
    width: "100%",
    margin: 0
}));

interface SnackbarState {
    title: string;
    variant: VariantType;
}

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [render, setRender] = useState(false);
    const [tempValue, setTempValue] = useState(false);
    const [content, setContent] = useState({ title: "", description: "", link: "" });
    const [snackbar, setSnackbar] = useState<SnackbarState>({ title: "", variant: "default" });

    const handleExit = () => {
        setOpen(true);
        setContent({
            title: "Bạn muốn tiếp tục không?",
            description: "Tiến trình của bạn sẽ không được lưu và sẽ mất vĩnh viễn.",
            link: "/admin/all-posts"
        });
    };
    const handleDraft = () => {
        setOpen(true);
        setContent({
            title: "Bạn muốn tiếp tục không?",
            description: "Bài viết này sẽ được lưu vào bản nháp để chỉnh sửa sau",
            link: "/admin/all-posts"
        });
        setSnackbar({
            title: "Đã lưu vào bản nháp",
            variant: "success"
        });
    };
    const handleSave = () => {
        setOpen(true);
        setContent({
            title: "Bạn muốn tiếp tục không?",
            description: "Bài viết này sẽ được lưu và đăng lên ngay lập tức",
            link: "/admin/all-posts"
        });
        setSnackbar({
            title: "Đã đăng",
            variant: "success"
        });
    };

    const handlePick = (i: number) => {
        data[i].disabled = false;
        setRender(!render);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        data[i].value = e.currentTarget.value;
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <ToggleDrawer />
                <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
                    <Typography size="h2" weight="bold" color="secondary">
                        THÔNG TIN CÁ NHÂN
                    </Typography>
                    <InputContainer container spacing={3}>
                        {data.map((item, i) => (
                            <Grid item xs={6} key={i}>
                                <TextField
                                    label={item.label}
                                    disabled={item.disabled}
                                    value={item.value}
                                    endIcon={
                                        <CreateOutlined
                                            onClick={() => handlePick(i)}
                                            sx={{ fontSize: "1.2rem", ml: "0.5rem" }}
                                        />
                                    }
                                />
                            </Grid>
                        ))}
                    </InputContainer>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            justifyContent: "end",
                            gap: "2rem",
                            mt: "3rem"
                        }}>
                        <Button
                            bgColor="secondary"
                            borderRadius="10px"
                            endIcon={<SaveOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
                            onClick={handleDraft}>
                            <Typography size="p">Lưu thay đổi</Typography>
                        </Button>
                        <Button
                            bgColor="gray"
                            borderRadius="10px"
                            endIcon={<CancelOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
                            onClick={handleExit}>
                            <Typography size="p">Huỷ thay đổi</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Profile;

const data = [
    { label: "Họ và tên", disabled: true, value: "21/04/2003" },
    { label: "Họ và tên", disabled: true, value: "21/04/2003" },
    { label: "Họ và tên", disabled: true, value: "21/04/2003" },
    { label: "Họ và tên", disabled: true, value: "21/04/2003" },
    { label: "Họ và tên", disabled: true, value: "21/04/2003" },
    { label: "Họ và tên", disabled: true, value: "21/04/2003" }
];
