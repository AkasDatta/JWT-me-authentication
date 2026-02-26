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
  VStack,
} from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
      role: "USER",
    },
  });

  const onSubmit = (formData) => {
    console.log("formdata", FormData);
  };

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
        Register
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              borderColor={"gray.300"}
              placeholder="Enter your username"
            />
            <FormErrorMessage>Username is required.</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              borderColor={"gray.300"}
              placeholder="Enter your email"
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              borderColor={"gray.300"}
              placeholder="Enter your password"
            />
            <FormErrorMessage>Password is required.</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Role</FormLabel>
            <Select color={"gray.400"}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
            <FormErrorMessage>Password is required.</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="cyan"
            color={"black"}
            type="submit"
            width={"full"}
          >
            Register
          </Button>
          <Text fontSize="sm" color={"gray.600"}>
            Already have an account?
            <ChakraLink
              as={RouterLink}
              to="/login"
              color="cyan.400"
              fontWeight="bold"
              ml={1}
            >
              Login
            </ChakraLink>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;
