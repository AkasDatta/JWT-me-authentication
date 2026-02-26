import { Box, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"gray.800"}
    >
      <Button color={"cyan"}>JWT</Button>
    </Box>
  );
}

export default App;
