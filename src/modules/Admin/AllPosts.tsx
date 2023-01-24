import { styled, Box, Grid } from "@mui/material";
import React from "react";
import { Button, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";
import { AccessTimeOutlined, CancelOutlined, SaveOutlined } from "@mui/icons-material";
import DataTable from "./components/DataTable";

const NewPost = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ToggleDrawer />
        <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
          <Typography size="h2" weight="bold" color="secondary">
            TẤT CẢ BÀI VIẾT
          </Typography>
          <DataTable />
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
