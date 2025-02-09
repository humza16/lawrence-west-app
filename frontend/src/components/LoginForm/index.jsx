import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "assets/logos/Logo";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputField from "components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LoadingButton from '@mui/lab/LoadingButton';
import Apple from "assets/logos/Apple"
import Link from "components/Link";
import SingInWithGoogle from "components/SocialButtons/SignInWithGoogle";
import SignInWithFacebook from "components/SocialButtons/SignInWithFacebook";
import useSignIn from "shared/hooks/useSignIn";
import SignInWithApple from "components/SocialButtons/SignInWithApple";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email format is not valid"),
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean(),
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const { onSignIn, isSignInLoading } = useSignIn();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { isValid },
  } = methods;

  const onSubmit = async (values) => {
    handleLogin({ ...values, username: values.email })
  };
  const goToSignup = () => {
    navigate("/register");
  };

  const handleLogin = (values) => {
    onSignIn(values);
  }

  return (
    <>
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxWidth="330px" display="flex" flexDirection="column">
          <Logo />
          <Typography variant="h5" fontWeight={600} mt={2}>
            Sign In
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
                  id="email"
                  name="email"
                  placeholder="Enter email address or phone number"
                  autoFocus
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Typography variant="body2" gutterBottom>
                  Password
                </Typography>
                <InputField
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )
                  }}
                />
              </FormControl>
              <Link
                to="/forget-password"
                variant="caption"
                mt={2}
                display="flex"
                justifyContent="right">
                Forgot Password?
              </Link>
              <Box display="flex" alignItems="center" mt={2} mb={2}>
                <Controller
                  name="rememberMe"
                  control={methods.control}
                  render={({ field }) => {
                    return <Checkbox {...field} />;
                  }}
                />
                <Typography variant="caption">Remember me</Typography>
              </Box>
              <Stack spacing={1} mb={2}>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  loading={isSignInLoading}
                >
                  Sign In
                </LoadingButton>
                <SingInWithGoogle />
                <SignInWithFacebook />
                {/* <SignInWithApple /> */}
                {/* <Button
                  startIcon={<Apple />}
                  color="secondary"
                >
                  Sign in with Apple
                </Button> */}
              </Stack>
              <Link to='/register' textAlign="center" onClick={goToSignup} sx={{ cursor: 'pointer' }}>
                Create a New Account
              </Link>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};

export default Login;
