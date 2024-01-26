import React from 'react'
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { Typography, Box, Button, Stack, FormControl } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useSearchParams, useNavigate } from 'react-router-dom'
import InputField from 'components/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FormProvider, } from "react-hook-form";
import toast from 'react-hot-toast';
import CenteredBox from 'components/CenteredBox';
import StyledCard from 'components/StyledCard';
import { useResetPasswordMutation } from 'apis/auth.api';
const schema = yup.object().shape({
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
});
const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const uid = searchParams.get("uid");
    const token = searchParams.get("token")
    const [resetPassword, { isLoading }] = useResetPasswordMutation()
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { errors },
    } = methods;

    const onSubmit = async (values) => {
        resetPassword({ uid, token, new_password: values.password }).unwrap().then(() => {
            toast.success("Password Reset Successfully");
            navigate("/login");
        }).catch(e => {
            toast.error("Something went wrong")
            console.log(e);
        })
    };
    return (
        <CenteredBox>
            <StyledCard>
                <ForgetPasswordHeader title="Reset Password" description="Enter new password to your account so that you can login" />
                <FormProvider {...methods} >
                    <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" fontWeight={400} fontSize="14px" color="#171717" gutterBottom>
                                New Password
                            </Typography>
                            <InputField
                                id="password"
                                name="password"
                                type='password'
                                placeholder="Enter Password"
                                autoFocus

                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal' >
                            <Typography variant="body2" fontWeight={400} fontSize="14px" color="#171717" gutterBottom>
                                Confirm Password
                            </Typography>
                            <InputField
                                id="confirmPassword"
                                name="confirmPassword"
                                type='password'
                                placeholder="Confirm Password"


                            />
                        </FormControl>
                        <Stack spacing={2} mt={2} mb={2} >
                            <LoadingButton
                                variant='contained'
                                type='submit'
                                loading={isLoading}
                            >
                                Continue
                            </LoadingButton>
                            {/* <Button variant='contained' type='submit'>Continue</Button> */}
                            {/* <Button color="secondary" >Back</Button> */}
                        </Stack>
                    </Box>
                </FormProvider>
            </StyledCard>
        </CenteredBox>
    )
}

export default ResetPassword