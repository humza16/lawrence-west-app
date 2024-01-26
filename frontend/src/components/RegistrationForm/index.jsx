import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Grid,
  Checkbox,
  Stack,
} from "@mui/material";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from "components/Link";
import Logo from "assets/logos/Logo";
import InputField from "../InputField";
import { useSignupMutation } from "apis/auth.api";
import SingInWithGoogle from "components/SocialButtons/SignInWithGoogle";
import SignInWithFacebook from "components/SocialButtons/SignInWithFacebook";
import useSignIn from "shared/hooks/useSignIn";
import toast from "react-hot-toast";

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


const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { errors, isValid, isSubmitting },
  } = methods;
  const [onSignUp, { data: signUnResponse, isLoading: isSignUnLoading }] = useSignupMutation();
  const { onSignIn, isSignInLoading } = useSignIn();

  const onSubmit = async (values) => {
    onSignUp({ ...values, password2: values.password }).unwrap()
      .then(() => {
        onSignIn({ ...values, username: values.email })
      })
      .catch(() => toast.error("Something went wrong")
      );
  };

  return (
    <Box
      width="100%"
      height="100vh" // Set the height of the container
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxWidth="330px" display="flex" flexDirection="column" gap={1}>
        <Logo />
        <Typography variant="h5" fontWeight={600}>
          Create your account
        </Typography>
        <FormProvider {...methods}>
          <Box
            component="form"
            mb={2}
            onSubmit={methods.handleSubmit(onSubmit)}
            gap={1}
            display="flex"
            flexDirection="column"
          >
            <Grid container spacing={1} mb={1}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Typography variant="body2" gutterBottom>
                    First Name
                  </Typography>
                  <InputField
                    name="first_name"
                    type="text"
                    placeholder="Enter first name"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Typography variant="body2" gutterBottom>
                    Last Name
                  </Typography>
                  <InputField
                    name="last_name"
                    type="text"
                    placeholder="Enter last name"
                  />
                </FormControl>
              </Grid>

            </Grid>

            <FormControl fullWidth>
              <Typography variant="body2" gutterBottom>
                Email address
              </Typography>
              <InputField
                name="email"
                type="text"
                placeholder="Enter email address"
              />
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="body2" gutterBottom>
                Password
              </Typography>
              <InputField
                name="password"
                type="password"
                placeholder="Enter Password"
              />
            </FormControl>
            <FormControl fullWidth>
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
              // mt={0.5}
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
            <LoadingButton type="submit" fullWidth variant="contained" loading={isSignUnLoading || isSignInLoading}>
              Sign Up
            </LoadingButton>
          </Box>
        </FormProvider>
        <Stack spacing={1}>
          <SingInWithGoogle />
          <SignInWithFacebook />
          {/* <Button
            startIcon={<Apple />}
            color="secondary"
          >
            Sign in with Apple
          </Button> */}
        </Stack>
        <Link to="/login" textAlign="center">Already have an account?</Link>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
