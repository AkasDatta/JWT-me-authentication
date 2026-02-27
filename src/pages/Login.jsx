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
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/auth/auth";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const { setTokens } = useAuthStore();
  // this toast like a alert. i can use sweetalert instead of it
  const toast = useToast();
  const { mutateAsync: login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("formData:", data);
    try {
      const response = await login(data);
      const { accessToken, refreshToken } = response.data;
      setTokens({
        accessToken,
        refreshToken,
      });

      navigate("/product");

      toast({
        title: "Login successful",
        description: "You are now logged in.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (errors) {
      console.error("Login error:", errors);
      toast({
        title: "Login Failed",
        description: errors?.response?.data?.message || "Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const navigate = useNavigate();
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            variant={"outline"}
            colorScheme="cyan"
            width={"full"}
            onClick={() => navigate("/register")}
          >
            Create an account
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
