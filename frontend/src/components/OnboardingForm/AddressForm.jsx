import React from 'react'
import { FormControl, Typography, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import InputField from 'components/InputField'
import SelectInput from 'components/SelectInput'
import { useGetCountriesQuery, useGetCitiesQuery, useGetStatesQuery } from 'apis/userProfile'
import { CountrySelect } from 'components/CountrySelect';
import { StateSelect } from 'components/StateSelect';
import { CitySelect } from 'components/CitySelect';

const AddressForm = () => {
    const { getValues } = useFormContext();
    // const { data: countries, isLoading: countriesLoading } = useGetCountriesQuery();
    // const { data: states, isLoading: statesLoading } = useGetStatesQuery(getValues("country"), {
    //     skip: !getValues("country")
    // });
    // const { data: cities, isLoading: citiesLoading } = useGetCitiesQuery(getValues("state"), {
    //     skip: !getValues("state")
    // });
    return (
        <Stack direction='column' spacing={3} mb={2}>
            <FormControl fullWidth margin="normal">
                <Typography variant="body2" gutterBottom>
                    Address
                </Typography>
                <InputField
                    name='address'
                    placeholder='Add your address'
                    type="text"
                />
            </FormControl>
            <Stack direction='row' spacing={1}>
                <CountrySelect
                    name='country'
                    label="Country"
                    placeholder="Select Country"
                />
                <StateSelect
                    name='state'
                    label="State"
                    placeholder="Select State"
                />
                {/* <SelectInput
                    name='country'
                    options={[{ label: "Pakistan", value: "pak" }]}
                    label="Country"
                    placeholder="Select Country"
                /> */}
                {/* <SelectInput
                    name='state'
                    options={[{ label: "Pakistan", value: "pak" }]}
                    label="State"
                    placeholder="Select State"
                /> */}
            </Stack>
            <Stack direction='row' spacing={1}>
                <CitySelect
                    name='city'
                    label="City"
                    placeholder="Select City"
                />
                {/* <CountrySelect
                    name='city'
                    label="City"
                    placeholder="Select City"
                /> */}
                {/* <SelectInput
                    name='city'
                    options={[{ label: "Pakistan", value: "pak" }]}
                    label="City"
                    placeholder="Select City"
                /> */}
                <FormControl fullWidth margin="normal">
                    <Typography variant="body2" gutterBottom>
                        Postal Code
                    </Typography>
                    <InputField name='postalcode' placeholder="Postal Code" />
                </FormControl>
            </Stack>
        </Stack>
    )
}

export default AddressForm;