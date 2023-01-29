import React from "react";
import { Box, styled } from "@mui/material";

import { Button, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";
import { CreateOutlined } from "@mui/icons-material";
import StaffTable from "./components/StaffTable";

const Root = styled(Box)(({ theme }) => ({
    display: "flex"
}));

const HeaderBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end"
}));

const NewPost = () => {
    return (
        <Root>
            <ToggleDrawer />
            <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
                <HeaderBox>
                    <Typography size="h2" weight="bold" color="secondary">
                        QUẢN LÝ NHÂN SỰ
                    </Typography>
                    <Button
                        bgcolor="secondary"
                        borderradius="10px"
                        endIcon={<CreateOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}>
                        <Typography size="p">Thêm nhân sự</Typography>
                    </Button>
                </HeaderBox>

                <StaffTable />
            </Box>
        </Root>
    );
};

export default NewPost;
