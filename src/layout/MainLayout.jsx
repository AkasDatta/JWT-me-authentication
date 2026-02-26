import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Box
      w="100vw"
      minH="100vh"
      bgGradient="linear(to-r, #10263b, #0a111b)"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* navbar */}
      <Box pos={"fixed"} top={0} left={0} w={"100%"} color={"white"}>
        NavBar
      </Box>
      <Outlet></Outlet>
    </Box>
  );
};

export default MainLayout;
