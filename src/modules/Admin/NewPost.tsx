import { styled, Box, Grid } from "@mui/material";
import React from "react";
import { Button, Dropdown, TextField, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";
import TextEditor from "../../components/Input/TextEditor";
import { AccessTimeOutlined, CancelOutlined, SaveOutlined } from "@mui/icons-material";

const InputContainer = styled(Grid)(() => ({
  width: "100%",
  margin: 0,
}));

const NewPost = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ToggleDrawer />
        <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
          <Typography size="h2" weight="bold" color="secondary">
            THÊM BÀI VIẾT
          </Typography>
          <InputContainer container spacing={3}>
            <Grid item xs={6}>
              <TextField label="Tiêu đề" placeholder="Nhập tiêu đề bài viết" />
            </Grid>
            <Grid item xs={6}>
              <Dropdown label="Danh mục" placeholder="Chọn danh mục" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Từ khoá"
                placeholder="Nhập các từ khoá của bài viết, mỗi từ khoá cách nhau một dấu phẩy, nhập tối đa 20 từ khoá "
                numberOfRows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextEditor label="Nội dung bài viết" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Tác giả" placeholder="Nhập tác giả bài viết" />
            </Grid>
          </InputContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "end",
              gap: "2rem",
              mt: "3rem",
            }}
          >
            <Button
              bgColor="primary"
              borderRadius="10px"
              endIcon={<SaveOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
            >
              <Typography size="p">Lưu và đăng ngay</Typography>
            </Button>
            <Button
              bgColor="secondary"
              borderRadius="10px"
              endIcon={<AccessTimeOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
            >
              <Typography size="p">Lưu thành bản nháp</Typography>
            </Button>
            <Button
              bgColor="gray"
              borderRadius="10px"
              endIcon={<CancelOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}
            >
              <Typography size="p">Huỷ và không lưu</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewPost;
