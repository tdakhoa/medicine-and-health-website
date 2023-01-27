import React from "react";
import { Box } from "@mui/material";
import Typography from "../Typography/Typography";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
const CategoryBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "0.5px solid rgba(23, 96, 118, 0.4)",
        borderRadius: "10px",
        padding: "1.5rem",
      }}
    >
      <Typography
        size="h5"
        weight="bold"
        color="secondary"
        sx={{ textAlign: "center", textTransform: "uppercase" }}
      >
        danh mục bài viết
      </Typography>
      <CategoryAccordion data={MenuItems} />
    </Box>
  );
};

export default CategoryBox;

const MenuItems = [
  { title: ["Y học cổ truyền"] },
  { title: ["Thuốc", "Thuốc cấm lưu hành", "Thuốc khác"] },
  { title: ["Tim mạch"] },
  {
    title: [
      "Bệnh học",
      "Nha khoa",
      "Nhi khoa",
      "Sản khoa",
      "Nội tiết",
      "Ung thư",
      "Tai - Mũi - Họng",
      "Cơ - Xương khớp",
      "Tâm thần",
      "Tiêu hoá",
    ],
  },
  { title: ["Thông tin y dược"] },
  { title: ["Pháp luật y tế"] },
];
