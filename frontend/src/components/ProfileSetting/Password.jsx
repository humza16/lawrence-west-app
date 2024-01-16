import CenteredBox from 'components/CenteredBox'
import React from 'react'
import InputField from "components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
    Box,
    Button,
    FormControl,
    Typography,
} from "@mui/material";

const schema = yup.object().shape({

    newPassword: yup
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
        .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});
const Password = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { isValid },
    } = methods;
    const onSubmit = async (values) => {
        console.log("value password in onsub function:", values)
        handleLogin({ ...values, username: values.email })
    };
    const handleLogin = (values) => {
        console.log("value password:", values)
    }
    return (
        <CenteredBox alignItems='start' mt={5}>
            <Typography variant="h5" fontWeight={600} mt={2}>Password</Typography>
            <FormProvider {...methods}>
                <Box
                    component="form"
                    mb={2}
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" gutterBottom>
                            Current Password
                        </Typography>
                        <InputField
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Enter current password"
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" gutterBottom>
                            New Password
                        </Typography>
                        <InputField
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter new password"

                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" gutterBottom>
                            confirm password
                        </Typography>
                        <InputField
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Enter confirm password"
                            autoFocus
                        />
                    </FormControl>



                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Save
                    </Button>


                </Box>
            </FormProvider>
        </CenteredBox>
    )
}

export default Password