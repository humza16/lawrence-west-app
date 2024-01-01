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
import { useGoogleLogin } from "@react-oauth/google";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LoadingButton from '@mui/lab/LoadingButton';
import Google from "assets/logos/Google";
import Apple from "assets/logos/Apple"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Link from "components/Link";
import FacebookButton from "components/FacebookButton";
import { useSigninMutation, useSignupMutation } from "apis/auth.api";
import { loginSuccess } from "slices/userSlice";
import { localstorageService } from "utils/localStorageService";
// import { useLazyGetGoogleUserProfileQuery } from 'apis/auth.api';

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email format is not valid"),
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean(),
});

const Login = () => {
  // const [getProfile, { data }] = useLazyGetGoogleUserProfileQuery();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [onSignIn, { isLoading: isSignInLoading }] = useSigninMutation();

  const onGoogleLoginSuccess = async (response) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
          Accept: 'application/json'
        }
      })
      .then((res) => {
        handleLogin({ ...res.data, access_token: response.access_token });
      })
      .catch((err) => console.log(err));
    console.log(response);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: (error) => console.log(error),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { isValid },
  } = methods;

  const onSubmit = async (values) => {
    handleLogin(values)
  };
  const goToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = (values) => {
    onSignIn(values)
      .unwrap()
      .then(result => {
        localstorageService.setToken(result?.data?.token);
        const userDetail = {
          username: result?.data?.username,
          email: result?.data?.email,
          name: result?.data?.name
        }
        dispatch(loginSuccess(userDetail));
        navigate("/");
      })
      .catch(error => console.log(error));
  }

  const facebookResponse = (response) => {
    console.log(response, "fb response");
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
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
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
                <Button
                  startIcon={<Google />}
                  color="secondary"
                  onClick={loginWithGoogle}
                >
                  Sign in with Google
                </Button>
                <FacebookLogin
                  appId="205989385836842"
                  fields="name,email,picture"
                  callback={facebookResponse}
                  render={renderProps => (
                    <FacebookButton
                      onClick={renderProps.onClick}
                    />
                  )}
                />
                <Button
                  startIcon={<Apple />}
                  color="secondary"
                >
                  Sign in with Apple
                </Button>
              </Stack>
              <Link to='/signup' textAlign="center" onClick={goToSignup} sx={{ cursor: 'pointer' }}>
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
