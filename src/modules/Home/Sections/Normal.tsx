import { Box } from "@mui/material";
import React from "react";
import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";

const NormalSection = () => {
  return (
    <div>
      <Title text="traditional medical" />
      <Box sx={{ width: 300 }}>
        <SimpleCard title="ung thư vô căn" img="" />
      </Box>
    </div>
  );
};

export default NormalSection;
