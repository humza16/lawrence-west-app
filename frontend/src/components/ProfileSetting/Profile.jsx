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
  email: yup
    .string()
    .email("Email format is not valid"),
  firstname: yup.string(),
  lastname: yup.string(),
});

const Profile = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { isValid },
  } = methods;
  const onSubmit = async (values) => {
    handleLogin({ ...values, username: values.email })
  };
  const handleLogin = (values) => {
    console.log("values profile", values)
    // onSignIn(values);
  }
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
              id="firstname"
              name="firstname"
              placeholder="Enter first name"
              autoFocus
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
              Last Name
            </Typography>
            <InputField
              id="lastname"
              name="lastname"
              placeholder="Enter last name"
              autoFocus
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

export default Profile