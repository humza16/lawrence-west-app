import { Box, Button, FormControl, Stack, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  DOB: yup.date()
    .typeError('Please enter a valid date')
    .required('Date is required'),
});

const OnboardingAgeForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    formState: { errors },
  } = methods;
  return (
    <div>
      <Box
        maxWidth="330px" display="flex" flexDirection="column"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormProvider {...methods}>
            <FormControl sx={{ marginBottom: '8px' }}>
              <Controller
                name="DOB"
                control={methods.control}
                render={({ field }) => {
                  return <DatePicker {...field}
                  />
                }}


              >
              </Controller>
              <Typography
                color="error"
                fontSize={10}
                margin="auto"
                p={0}
                mt={0.5}
                display="contents"
              >
                {errors?.selectedDate?.message}
              </Typography>
            </FormControl>
            <Stack spacing={1} mb={4} >
              <Button type="submit" fullWidth variant="contained" >
                Next
              </Button>
              <Button fullWidth color="secondary">
                Back
              </Button>
            </Stack>

          </FormProvider>
        </LocalizationProvider>


      </Box>
    </div>
  )
}

export default OnboardingAgeForm