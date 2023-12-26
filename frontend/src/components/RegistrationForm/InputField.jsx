import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext } from "react-hook-form";

const InputField = ({ name, placeholder, autoFocus, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              type={type}
              placeholder={placeholder}
              autoFocus={autoFocus}
            />
          );
        }}
      />
      <Typography
        color="error"
        fontSize={10}
        margin="auto"
        p={0}
        mt={0.5}
        display="contents"
      >
        {errors?.[name]?.message}
      </Typography>
    </>
  );
};

export default InputField;
