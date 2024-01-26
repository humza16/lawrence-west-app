import React from 'react'
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { Typography, Box, Button, Stack, FormControl } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import InputField from 'components/InputField';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from "react-hook-form";
import toast from 'react-hot-toast';
import CenteredBox from 'components/CenteredBox';
import StyledCard from 'components/StyledCard';
import { useSendResetEmailMutation } from 'apis/auth.api';

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Email format is not valid"),
});
const ForgetPassword = () => {
    const [sendResetEmail, { isLoading }] = useSendResetEmailMutation();
    const navigate = useNavigate();
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        sendResetEmail(values).unwrap().then(() => {
            toast.success("Reset email sent")
        }).catch(e => {
            toast.error("Something went wrong")
            console.log(e);
        })
        console.log(values);
    };

    const handleBack = () => {
        navigate("/login")
    }
    return (
        <CenteredBox>
            <StyledCard>
                <ForgetPasswordHeader title="Forgot your Password" description="Enter Email Address for verification process and we’ll send you a reset link" />
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
                            <LoadingButton
                                variant='contained'
                                type='submit'
                                loading={isLoading}
                            >
                                Send Email
                            </LoadingButton>
                            <Button color="secondary" onClick={handleBack}>Back</Button>
                        </Stack>
                    </Box>
                </FormProvider>
            </StyledCard>
        </CenteredBox>
    )
}

export default ForgetPassword