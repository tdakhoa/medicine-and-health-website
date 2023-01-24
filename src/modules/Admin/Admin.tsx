import { Box } from "@mui/material";
import React from "react";
import { Typography } from "../../components";
import MiniDrawer from "./Drawer";

const Admin = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography size="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
            Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
            tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
            commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
            quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
            fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
