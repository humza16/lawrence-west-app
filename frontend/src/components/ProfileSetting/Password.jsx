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
import { useChangePasswordMutation } from 'apis/userProfile.api';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';


const schema = yup.object().shape({
    old_password: yup.string().required(),

    new_password: yup
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
    new_password2: yup
        .string()
        .label("confirm password")
        .required()
        .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});
const Password = () => {
    const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation();

    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const {
        formState: { isValid },
        reset,
        resetField
    } = methods;
    const onSubmit = async (values) => {
        console.log("value password in onsub function:", values)
        changePassword(values).unwrap().then(() => {
            toast.success("Password changed successfully")
            reset({
                old_password: "",
                new_password: "",
                new_password2: ""
            })
        }).catch(e => {
            console.log(e);
        })
        console.log(values);
    };


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
                            id="old_password"
                            name="old_password"
                            placeholder="Enter current password"
                            type="password"
                            autoFocus
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" gutterBottom>
                            New Password
                        </Typography>
                        <InputField
                            id="new_password"
                            name="new_password"
                            placeholder="Enter new password"
                            type="password"


                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Typography variant="body2" gutterBottom>
                            Confirm password
                        </Typography>
                        <InputField
                            id="new_password2"
                            name="new_password2"
                            placeholder="Enter confirm password"
                            type="password"

                        />
                    </FormControl>
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        loading={isLoading}
                    >
                        Save
                    </LoadingButton>


                </Box>
            </FormProvider>
        </CenteredBox>
    )
}

export default Password