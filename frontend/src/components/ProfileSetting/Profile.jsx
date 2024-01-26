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
import { useSelector, useDispatch } from 'react-redux'
import { useEditProfileMutation } from 'apis/userProfile.api';
import { LoadingButton } from '@mui/lab';
import toast from 'react-hot-toast';
import { loginSuccess } from 'slices/userSlice';


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is not valid").required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
});

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.user?.userInfo)

  const [onEditProfile, { isLoading }] = useEditProfileMutation()
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user?.email,
      first_name: user?.first_name,
      last_name: user?.last_name,
    },
  });

  const onSubmit = async (values) => {
    onEditProfile(values).unwrap().then((response) => {
      toast.success("Profile updated Successfully")
      dispatch(loginSuccess(response));
    }).catch(e => {
      toast.error("Something went wrong")
      console.log(e);
    })
    console.log(values);
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" mt={2}>
      <Box width="100%" maxWidth="450px">
        <Typography variant="h5" fontWeight={700}>Profile Settings</Typography>
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
              // fullWidth
              variant="contained"
              sx={{ mt: 2, float: 'right' }}
              loading={isLoading}
            >
              Save Changes
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box >
    </Box >
  )
}

export default Profile