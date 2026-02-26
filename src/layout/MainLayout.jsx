import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Box pos={"fixed"} top={0} left={0} w={"100%"} h={"100vh"}>
      NavBar
      {/* navbar */}
      <Outlet></Outlet>
    </Box>
  );
};

export default MainLayout;
