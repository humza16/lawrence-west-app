import React from 'react'
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { Typography, Box, Button, Stack, FormControl } from "@mui/material";
import InputField from 'components/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from "react-hook-form";
import CenteredBox from 'components/CenteredBox';
import StyledCard from 'components/StyledCard';

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Email format is not valid"),
});
const ForgetPassword = () => {
    const navigate = useNavigate();
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { errors },
    } = methods;

    const onSubmit = async (values) => {
        console.log(values);
    };

    const handleBack = () => {
        navigate("/login")
    }
    return (
        <CenteredBox>
            <StyledCard>
                <ForgetPasswordHeader title="Forgot your Password" description="Enter Email Address for verification process and we’ll send you a 4-digit verification code" />
                <FormProvider {...methods}>
                    <Box component='form' onSubmit={methods.handleSubmit(onSubmit)}>
                        <Typography variant="body2" fontWeight={400} fontSize="14px" color="#171717" mt={2} gutterBottom>
                            Email address
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <InputField
                                id="email"
                                name="email"
                                placeholder="Enter email address or phone number"
                                autoFocus
                            />
                        </FormControl>
                        <Stack spacing={2} mt={2} mb={2}>
                            <Button variant='contained' type='submit' >Send Code</Button>
                            <Button color="secondary" onClick={handleBack}>Back</Button>
                        </Stack>
                    </Box>
                </FormProvider>
            </StyledCard>
        </CenteredBox>
    )
}

export default ForgetPassword