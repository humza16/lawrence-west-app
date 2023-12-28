import React from 'react'
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { Typography, Box, Button, Stack, Card, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

import InputField from 'components/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FormProvider, } from "react-hook-form";
import CenteredBox from 'components/CenteredBox';
import StyledCard from 'components/StyledCard';
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
});
const ResetPassword = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { errors },
    } = methods;
    return (
        <CenteredBox>
            <StyledCard>
                <ForgetPasswordHeader title="Reset Password" description="Enter new password to your account so that you can login" />
                <FormProvider {...methods} >

                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" fontWeight={400} fontSize="14px" color="#171717" gutterBottom>
                            New Password
                        </Typography>
                        <InputField
                            id="password"
                            name="password"
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
                            placeholder="Enter email address or phone number"


                        />
                    </FormControl>
                </FormProvider>
                <Stack spacing={2} mt={2} mb={2} >

                    <Button variant='contained'  >Continue</Button>
                    <Button color="secondary" >Back</Button>

                </Stack>
            </StyledCard>
        </CenteredBox>
    )
}

export default ResetPassword