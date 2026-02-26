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

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { useForm } from "react-hook-form";
import { useRegister } from "../services/auth/auth";

const Register = () => {
  // this toast like a alert. i can use sweetalert instead of it
  const toast = useToast();
  const { mutateAsync: registerUser } = useRegister();
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

  const onSubmit = async (formData) => {
    try {
      await registerUser(formData);
      toast({
        title: "Registration successful",
        description: "You can now log in with your credentials.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: error?.response?.data?.message || "Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
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
          <FormControl id="username" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              borderColor={"gray.300"}
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>
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
          <FormControl isInvalid={errors.role}>
            <FormLabel>Role</FormLabel>
            <Select
              color={"gray.400"}
              {...register("role", { required: "Role is required" })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </Select>
            <FormErrorMessage>{errors?.role?.message}</FormErrorMessage>
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
