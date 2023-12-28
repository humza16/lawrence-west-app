import React from 'react'
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { Typography, Box, Button, Stack, Card, FormControl } from "@mui/material";
import InputField from 'components/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FormProvider, } from "react-hook-form";
import CenteredBox from 'components/CenteredBox';
import StyledCard from 'components/StyledCard';

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Email format is not valid"),
});
const ForgetPassword = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { errors },
    } = methods;
    return (
        <CenteredBox>
            <StyledCard>
                <ForgetPasswordHeader title="Forgot your Password" description="Enter Email Address for verification process and we’ll send you a 4-digit verification code" />
                <FormProvider {...methods} >
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
                </FormProvider>
                <Stack spacing={2} mt={2} mb={2}>

                    <Button variant='contained' >Send Code</Button>
                    <Button color="secondary" >Back</Button>

                </Stack>
            </StyledCard>
        </CenteredBox>
    )
}

export default ForgetPassword