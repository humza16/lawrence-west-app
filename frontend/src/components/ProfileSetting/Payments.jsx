import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import {
    Box,
    FormControl,
    Typography,
    Stack,
} from "@mui/material";
import { useSelector } from 'react-redux'
import { useEditProfileMutation } from 'apis/userProfile.api';
import { LoadingButton } from '@mui/lab';
import toast from 'react-hot-toast';
import SelectInput from 'components/SelectInput';
import StripeLogo from 'assets/logos/StripeLogo';
import ChipSelect from 'components/ChipSelect';


const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email format is not valid"),
    first_name: yup.string(),
    last_name: yup.string(),
});

const Payments = () => {

    const [onEditProfile, { isLoading }] = useEditProfileMutation()
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        onEditProfile(values).unwrap().then(() => {
            toast.success("Profile updated Successfully")
        }).catch(e => {
            toast.error("Something went wrong")
            console.log(e);
        })
        console.log(values);
    };


    return (
        <Box width="100%" display="flex" justifyContent="center" mt={2}>
            <Box width="100%" maxWidth="450px">
                <Typography variant="h5" fontWeight={600}>Payments</Typography>
                <FormProvider
                    {...methods}
                >
                    <Box
                        component="form"
                        mb={2}
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" gutterBottom>
                                Payment Options
                            </Typography>
                            <Stack px={2} py={1.5} border="1px solid #CED4DA" borderRadius="8px" direction="row" justifyContent="space-between" alignItems="center">
                                <StripeLogo />
                                <Typography sx={{ backgroundColor: '#EBF5FF', cursor: 'pointer' }} borderRadius="4px" color="primary" fontSize={14} px={1} py={0.5}>Connect</Typography>
                            </Stack>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Typography variant="body2" gutterBottom>
                                Allowed Currencies
                            </Typography>
                            <ChipSelect />
                        </FormControl>

                        <SelectInput
                            name="defaultCurrencies"
                            options={[{ label: "USD", value: 'usd' }, { label: "EURO", value: "euro" }]}
                            label="Default Currencies"
                            placeholder="Default Currency"
                        />
                        <LoadingButton
                            type="submit"
                            // fullWidth
                            variant="contained"
                            sx={{ mt: 2, float: 'right' }}
                            loading={isLoading}

                        >
                            Save Changes
                        </LoadingButton>
                    </Box>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default Payments;