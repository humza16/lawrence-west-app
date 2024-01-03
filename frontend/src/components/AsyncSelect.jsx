import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { Typography, FormControl } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export const AsyncSelect = ({
    loadOptions,
    formatOptionLabel,
    compact,
    name,
    group,
    additional,
    placeholder,
    label,
    ...rest
}) => {
    const form = useFormContext();
    const customStyles = () => {
        return {
            container: (base) => ({
                ...base,
                width: '100%'
            }),
            control: (base) => ({
                ...base,
                minHeight: '53px',
                borderRadius: '8px',
            }),
            option: (base) => ({
                ...base,
            }),
        };
    };

    const CustomStyles = customStyles();

    return (
        <FormControl fullWidth margin="normal">
            <Typography variant="body2" gutterBottom>
                {label}
            </Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ field: { onChange, value } }) => {
                    const onSelectChange = (
                        option
                    ) => {
                        onChange(option);
                    };

                    const getOptionValue = (value) => value.id;

                    return (
                        <AsyncPaginate
                            {...rest}
                            additional={additional}
                            value={value}
                            onChange={onSelectChange}
                            loadOptions={loadOptions}
                            getOptionValue={getOptionValue}
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            formatOptionLabel={formatOptionLabel}
                            isClearable
                            placeholder={
                                <Typography variant='caption' color={theme => theme.palette.text.primary}>
                                    {placeholder}
                                </Typography>
                            }
                            styles={CustomStyles}
                        />
                    );
                }}
            />
        </FormControl>
    );
};
