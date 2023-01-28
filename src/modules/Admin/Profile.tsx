import { ChangeEventHandler, useEffect, useState } from "react";
import { styled, Box, Grid, Avatar } from "@mui/material";
import ToggleDrawer from "./components/Drawer";
import { CancelOutlined, CreateOutlined, SaveOutlined } from "@mui/icons-material";
import { VariantType } from "notistack";
import AvatarEdit from "react-avatar-edit";

import { Button, TextField, Typography } from "../../components";
import Popup from "./components/Popup";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const InputContainer = styled(Grid)(() => ({
    width: "100%",
    margin: 0
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "180px",
    height: "180px",
    display: "flex",
    margin: "0 auto",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
        marginTop: "1rem",
        width: "120px",
        height: "120px"
    }
}));

const StyledAvatarBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.5rem",
    cursor: "pointer",
    color: "#B2B2B2"
});

const StyledDialogTitle = styled(DialogTitle)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        padding: "1rem",
        paddingTop: 0
    }
}));

interface SnackbarState {
    title: string;
    variant: VariantType;
}

const fetchData = [
    { label: "Họ và tên", disabled: true, value: "Lê Vũ Ngân Lam" },
    { label: "Ngày sinh", disabled: true, value: "21/04/2003" },
    { label: "Username", disabled: true, value: "nganlamforwork" },
    { label: "Password", disabled: true, value: "yeukhoaratnhieu" },
    { label: "Email", disabled: true, value: "nganlamforwork@gmail.com" },
    { label: "Số điện thoại", disabled: true, value: "0945293031" }
];

const tempData = [
    { label: "Họ và tên", disabled: true, value: "Lê Vũ Ngân Lam" },
    { label: "Ngày sinh", disabled: true, value: "21/04/2003" },
    { label: "Username", disabled: true, value: "nganlamforwork" },
    { label: "Password", disabled: true, value: "yeukhoaratnhieu" },
    { label: "Email", disabled: true, value: "nganlamforwork@gmail.com" },
    { label: "Số điện thoại", disabled: true, value: "0945293031" }
];

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [render, setRender] = useState(false);
    const [editing, setEditing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState(fetchData);
    const [content, setContent] = useState({ title: "", description: "", link: "" });
    const [snackbar, setSnackbar] = useState<SnackbarState>({ title: "", variant: "default" });
    const [imageCrop, setImageCrop] = useState("");
    const [dialogs, setDialogs] = useState(false);
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (!open) {
            setData(tempData);
            setEditing(false);
        }
        setRender(!render);
    }, [open]);

    const handleExit = () => {
        setOpen(true);
        setContent({
            title: "Bạn muốn tiếp tục không?",
            description: "Tiến trình của bạn sẽ không được lưu và sẽ mất vĩnh viễn.",
            link: "/admin/profile"
        });
    };
    const handleDraft = () => {
        setOpen(true);
        setContent({
            title: "Bạn muốn tiếp tục không?",
            description: "Nếu tiếp tục, thông tin bạn sẽ được cập nhật ngay lập tức.",
            link: "/admin/profile"
        });
        setSnackbar({
            title: "Đã lưu",
            variant: "success"
        });
    };

    const handlePick = (i: number) => {
        fetchData[i].disabled = false;
        setData(fetchData);
        setRender(!render);
        setEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        fetchData[i].value = e.currentTarget.value;
        setData(fetchData);
        setRender(!render);
    };

    const onCrop = (view: string) => {
        setImageCrop(view);
    };
    const onClose = () => {
        setImageCrop("");
        setRender(!render);
    };

    const saveImage = async (imageCrop: string) => {
        setAvatar(imageCrop);
        setDialogs(false);
        setEditing(true);
    };

    const handleCloseDialog = () => {
        setDialogs(false);
        setImageCrop("");
    };

    const handleOpenDialog = () => {
        setDialogs(true);
        setDisabled(true);
    };

    return (
        <>
            <Box sx={{ display: "flex", paddingBottom: "5%" }}>
                <ToggleDrawer />
                <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
                    <Typography size="h2" weight="bold" color="secondary">
                        THÔNG TIN CÁ NHÂN
                    </Typography>
                    <InputContainer container spacing={3}>
                        <Grid item xs={12}>
                            <Typography size="p" weight="bold" sx={{ marginBottom: "0.8rem", textAlign: "center" }}>
                                Ảnh đại diện
                            </Typography>
                            <StyledAvatar alt="Avatar" src={avatar || undefined} />
                            <StyledAvatarBox onClick={handleOpenDialog}>
                                <Typography>Thay đổi ảnh đại diện</Typography>
                                <CreateOutlined sx={{ fontSize: "1.2rem", ml: "0.5rem", cursor: "pointer" }} />
                            </StyledAvatarBox>

                            <StyledDialog disableScrollLock={true} open={dialogs} onClose={handleCloseDialog}>
                                <StyledDialogTitle>Change Avatar</StyledDialogTitle>

                                <Box sx={{ cursor: "pointer" }}>
                                    <AvatarEdit
                                        labelStyle={{
                                            fontSize: "20px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                            padding: "7.9rem 4.9rem"
                                        }}
                                        width={280}
                                        height={280}
                                        onClose={onClose}
                                        onCrop={onCrop}
                                        onBeforeFileLoad={() => setDisabled(false)}
                                    />
                                </Box>

                                <Box sx={{ paddingTop: "1rem", display: "flex", justifyContent: "space-between" }}>
                                    <Button bgColor="secondary" sx={{ width: "8rem" }} onClick={handleCloseDialog}>
                                        Cancel
                                    </Button>
                                    <Button
                                        bgColor={disabled ? "gray" : "secondary"}
                                        disabled={disabled}
                                        sx={{ width: "8rem" }}
                                        onClick={() => saveImage(imageCrop)}>
                                        Save
                                    </Button>
                                </Box>
                            </StyledDialog>
                        </Grid>
                        {data.map((item, i) => (
                            <Grid item xs={6} key={i}>
                                <TextField
                                    label={item.label}
                                    disabled={item.disabled}
                                    value={item.value}
                                    onChange={
                                        ((e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(e, i)) as ChangeEventHandler<
                                            HTMLInputElement | HTMLTextAreaElement
                                        >
                                    }
                                    endIcon={
                                        <CreateOutlined
                                            onClick={() => handlePick(i)}
                                            sx={{ fontSize: "1.2rem", ml: "0.5rem", cursor: "pointer" }}
                                        />
                                    }
                                />
                            </Grid>
                        ))}
                    </InputContainer>
                    <Box
                        sx={{
                            display: editing ? "flex" : "none",
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
                <Popup content={content} snackbar={snackbar} open={open} setOpen={setOpen} />
            </Box>
        </>
    );
};

export default Profile;
