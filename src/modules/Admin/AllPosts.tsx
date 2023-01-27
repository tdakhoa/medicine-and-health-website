import { Box } from "@mui/material";
import React from "react";
import { Button, Typography } from "../../components";
import ToggleDrawer from "./components/Drawer";
import { CreateOutlined } from "@mui/icons-material";
import DataTable from "./components/DataTable";
import Link from "next/link";

const NewPost = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <ToggleDrawer />
                <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                        <Typography size="h2" weight="bold" color="secondary">
                            TẤT CẢ BÀI VIẾT
                        </Typography>
                        <Link href="/admin/new-post">
                            <Button
                                bgColor="secondary"
                                borderRadius="10px"
                                endIcon={<CreateOutlined sx={{ fontSize: "1.4rem", pl: "0.3rem" }} />}>
                                <Typography size="p">Thêm bài viết mới</Typography>
                            </Button>
                        </Link>
                    </Box>

                    <DataTable />
                </Box>
            </Box>
        </>
    );
};

export default NewPost;
