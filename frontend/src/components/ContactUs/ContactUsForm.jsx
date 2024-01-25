import React from 'react'
import InputField from "components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import {
    Box,
    FormControl,
    Typography,
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import toast from 'react-hot-toast';
import { appWhite } from 'theme/colors';
import { usePostQueryMutation } from 'apis/helpCenter.api';



const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email format is not valid"),
    subject: yup.string().required(),
    help_request: yup.string().required(),
});


const ContactUsForm = () => {

    const [onPostQuery, { isLoading }] = usePostQueryMutation()
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        onPostQuery(values).unwrap().then(() => {
            toast.success("Your Query Posted Successfully")
        }).catch(e => {
            console.log(e);
        })
        console.log(values);
    };

    const backgroundWhite = {
        "& .MuiInputBase-root": {
            backgroundColor: appWhite
        }
    };

    return (
        <Box display="flex" justifyContent="flex-start" alignItems="center" minHeight="80vh" px={10}>
            <Box width="100%" maxWidth="450px">
                <Typography variant="h4" fontWeight={500}>Get in Touch With us</Typography>
                <FormProvider {...methods}>
                    <Box
                        component="form"
                        mb={2}
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" gutterBottom>
                                Email
                            </Typography>
                            <InputField
                                name="email"
                                placeholder="Enter email"
                                sx={backgroundWhite}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" gutterBottom>
                                Subject
                            </Typography>
                            <InputField
                                name="subject"
                                placeholder="Enter subject"
                                sx={backgroundWhite}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" gutterBottom>
                                Note
                            </Typography>
                            <InputField
                                name="help_request"
                                sx={{ '& .MuiInputBase-root': { height: "auto", backgroundColor: appWhite } }}
                                type='text'
                                placeholder="Write your note"
                                multiline={true}
                                minRows={4}
                                maxRows={4}
                            />
                        </FormControl>
                        <LoadingButton
                            type="submit"
                            size='large'
                            // fullWidth
                            variant="contained"
                            sx={{ mt: 2, float: 'float' }}
                            loading={isLoading}
                        >
                            Send
                        </LoadingButton>
                    </Box>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default ContactUsForm