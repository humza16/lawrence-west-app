import { useCallback, useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { AsyncSelect } from './AsyncSelect';
import { useLazyGetCitiesQuery } from 'apis/userProfile';
import useAddressOptions from 'shared/hooks/useAddressOptions';


export const CitySelect = (props) => {
    const form = useFormContext();
    const { country, state } = form.watch();
    const [getStates] = useLazyGetCitiesQuery();
    const { loadOptions } = useAddressOptions(getStates, { country, state })

    useEffect(() => {
        form.setValue("city", "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country, state])

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
