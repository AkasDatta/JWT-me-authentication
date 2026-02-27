import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      w={{ base: "90%", md: "400px" }}
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="5px 10px 50px 2px #0003"
      color="white"
      border={"1px"}
      borderColor={"gray.800"}
    >
      <Heading mb={6} textAlign="center">
        Login
      </Heading>
      <form>
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              borderColor={"gray.300"}
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              borderColor={"gray.300"}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="cyan"
            color={"black"}
            type="submit"
            width={"full"}
          >
            Login
          </Button>
          <ChakraLink
            colorScheme="cyan"
            color={"black"}
            type="submit"
            width={"full"}
            to="/login"
          >
            Create an account
          </ChakraLink>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
