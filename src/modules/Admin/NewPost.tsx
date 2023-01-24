import { styled, Box, Grid } from "@mui/material";
import React from "react";
import { Dropdown, TextField, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";

const InputContainer = styled(Grid)(() => ({
  width: "100%",
}));
const RowItem = { flexGrow: 1 };

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
              <TextField label="Tác giả" placeholder="Nhập tác giả bài viết" />
            </Grid>
          </InputContainer>
        </Box>
      </Box>
    </>
  );
};

export default NewPost;
