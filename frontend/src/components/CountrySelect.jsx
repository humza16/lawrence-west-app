import { useCallback } from 'react';
import { Typography, Stack } from '@mui/material';
import { AsyncSelect } from './AsyncSelect';
import { useLazyGetCountriesQuery } from 'apis/userProfile';
import useAddressOptions from 'shared/hooks/useAddressOptions';

export const CountrySelect = (props) => {
    const [getCountries] = useLazyGetCountriesQuery();
    const { loadOptions } = useAddressOptions(getCountries, {});

    const formatOptionLabel = useCallback((option) => {
        return (
            <Stack spacing={2}>
                <Typography variant='caption' color={theme => theme.palette.text.primary}>
                    {option.name}
                </Typography>
            </Stack>
        );
    }, []);

    return (
        <>
            <AsyncSelect
                {...props}
                loadOptions={loadOptions}
                formatOptionLabel={formatOptionLabel}
            />
        </>
    );
};
