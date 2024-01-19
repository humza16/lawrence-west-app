import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, Typography, Select, MenuItem } from '@mui/material'

const SelectInput = ({ name, options, label, placeholder, defaultValue }) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
                {label}
            </Typography>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <Select
                        {...field}
                        fullWidth
                        defaultValue=" "
                        renderValue={(selected) => (selected === " " ? <em>{placeholder}</em> : selected)}
                    >
                        {options.map(({ label, value }) => <MenuItem value={value}>{label}</MenuItem>)}
                    </Select>
                }
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
        </FormControl>
    )
}

export default SelectInput