import CenteredBox from 'components/CenteredBox'
import React from 'react'
import InputField from "components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  FormProvider, useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  Typography,
} from "@mui/material";
import { useSelector } from 'react-redux'
import { useEditProfileMutation } from 'apis/userProfile.api';
import { LoadingButton } from '@mui/lab';
import toast from 'react-hot-toast';


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is not valid"),
  first_name: yup.string(),
  last_name: yup.string(),
});

const Profile = () => {
  const user = useSelector(state => state?.user?.userInfo)

  const [onEditProfile, { isLoading, isSuccess }] = useEditProfileMutation()
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user?.email,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  });
  const {
    formState: { isValid },
  } = methods;
  const onSubmit = async (values) => {
    onEditProfile(values).unwrap().then(() => {
      toast.success("Profile updated Successfully")
  }).catch(e => {
      console.log(e);
  })
  console.log(values);
};
  

  return (
    <CenteredBox alignItems='start' mt={5}>
      <Typography variant="h5" fontWeight={600} mt={2}>Profile</Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          mb={2}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
              First Name
            </Typography>
            <InputField
              id="first_name"
              name="first_name"
              placeholder="Enter first name"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
              Last Name
            </Typography>
            <InputField
              id="last_name"
              name="last_name"
              placeholder="Enter last name"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
              Email address
            </Typography>
            <InputField
              id="email"
              name="email"
              placeholder="Enter email address or phone number"
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

export default Profile