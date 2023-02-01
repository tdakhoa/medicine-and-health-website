import { ChangeEventHandler, useState } from "react";
import { styled, Box, Grid } from "@mui/material";
import { AccessTimeOutlined, CancelOutlined, SaveOutlined } from "@mui/icons-material";
import { VariantType } from "notistack";

import { Button, Dropdown, TextField, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";
import TextEditor from "../../components/Input/TextEditor";
import Popup from "./components/Popup";

const NewPost = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({ title: "", description: "", link: "" });
    const [snackbar, setSnackbar] = useState<SnackbarState>({ title: "", variant: "default" });
    const [data, setData] = useState({ title: "", category: "", keyword: "", author: "" });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        if (i === 0) setData({ ...data, title: e.currentTarget.value });
        else if (i === 1) setData({ ...data, keyword: e.currentTarget.value });
        else if (i === 2) setData({ ...data, author: e.currentTarget.value });
    };

    return (
        <Root>
            <ToggleDrawer />
            <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
                <Typography size="h2" weight="bold" color="secondary">
                    THÊM BÀI VIẾT
                </Typography>
                <InputContainer container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            label="Tiêu đề"
                            placeholder="Nhập tiêu đề bài viết"
                            value={data.title}
                            onChange={
                                ((e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 0)) as ChangeEventHandler<
                                    HTMLInputElement | HTMLTextAreaElement
                                >
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown label="Danh mục" placeholder="Chọn danh mục" data={data} setData={setData} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Từ khoá"
                            placeholder="Nhập các từ khoá của bài viết, mỗi từ khoá cách nhau một dấu phẩy, nhập tối đa 20 từ khoá "
                            numberOfRows={4}
                            value={data.keyword}
                            onChange={
                                ((e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 1)) as ChangeEventHandler<
                                    HTMLInputElement | HTMLTextAreaElement
                                >
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextEditor label="Nội dung bài viết" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Tác giả"
                            placeholder="Nhập tác giả bài viết"
                            value={data.author}
                            onChange={
                                ((e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 2)) as ChangeEventHandler<
                                    HTMLInputElement | HTMLTextAreaElement
                                >
                            }
                        />
                    </Grid>
                </InputContainer>
                <ButtonBox>
                    <Button
                        bgcolor="primary"
                        borderradius="10px"
                        endIcon={<SaveOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
                        onClick={handleSave}>
                        <Typography size="p">Lưu và đăng ngay</Typography>
                    </Button>
                    <Button
                        bgcolor="secondary"
                        borderradius="10px"
                        endIcon={<AccessTimeOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
                        onClick={handleDraft}>
                        <Typography size="p">Lưu thành bản nháp</Typography>
                    </Button>
                    <Button
                        bgcolor="gray"
                        borderradius="10px"
                        endIcon={<CancelOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
                        onClick={handleExit}>
                        <Typography size="p">Huỷ và không lưu</Typography>
                    </Button>
                </ButtonBox>
            </Box>
            <Popup content={content} snackbar={snackbar} open={open} setOpen={setOpen} />
        </Root>
    );
};

export default NewPost;

interface SnackbarState {
    title: string;
    variant: VariantType;
}

const Root = styled(Box)(({ theme }) => ({
    display: "flex"
}));

const InputContainer = styled(Grid)(() => ({
    width: "100%",
    margin: 0
}));

const ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "end",
    gap: "2rem",
    mt: "3rem"
}));
