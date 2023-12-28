import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Button,
  Checkbox,
  Stack,
} from "@mui/material";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGoogleLogin } from "@react-oauth/google";
import Logo from "assets/logos/Logo";
import Google from "assets/logos/Google";
import Apple from "assets/logos/Apple";
import InputField from "../InputField";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email format is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  termsAgreement: yup.boolean().required("Please Agree to the terms"),
  rememberMe: yup.boolean(),
});

const onGoogleLoginSuccess = (response) => {
  console.log(response);
};

const RegistrationForm = () => {
  const login = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: (error) => console.log(error),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { errors },
  } = methods;

  const onSubmit = async (values) => { };

  return (
    <Box
      width="100%"
      height="100vh" // Set the height of the container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxWidth="330px" display="flex" flexDirection="column">
        <Logo />
        <Typography variant="h5" fontWeight={600} mt={2}>
          Create your account
        </Typography>
        <FormProvider {...methods}>
          <Box
            component="form"
            mb={2}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" gutterBottom>
                Email address
              </Typography>
              <InputField
                name="email"
                type="text"
                placeholder="Enter email address"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" gutterBottom>
                Password
              </Typography>
              <InputField
                name="password"
                type="password"
                placeholder="Enter Password"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" gutterBottom>
                Confirm Password
              </Typography>
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Repeat Password"
              />
            </FormControl>
            <Box display="flex" alignItems="center">
              <Controller
                name="termsAgreement"
                control={methods.control}
                render={({ field }) => {
                  return <Checkbox {...field} />;
                }}
              />
              <Typography variant="caption">
                By continuing, I agree to the{" "}
                <Typography
                  fontWeight={600}
                  variant="caption"
                  display="contents"
                >
                  Terms of Service.
                </Typography>
              </Typography>
            </Box>
            <Typography
              color="error"
              fontSize={10}
              margin="auto"
              p={0}
              mt={0.5}
              display="contents"
            >
              {errors?.termsAgreement?.message}
            </Typography>
            <Box display="flex" alignItems="center">
              <Controller
                name="rememberMe"
                control={methods.control}
                render={({ field }) => {
                  return <Checkbox {...field} />;
                }}
              />
              <Typography variant="caption">Remember me</Typography>
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>
        </FormProvider>
        <Stack spacing={1} mb={2}>
          <Button startIcon={<Google />} color="secondary" onClick={login}>
            Sign in with Google
          </Button>
          <Button startIcon={<Apple />} color="secondary">
            Sign in with Apple
          </Button>
        </Stack>
        <Typography textAlign="center">Already have an account?</Typography>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
