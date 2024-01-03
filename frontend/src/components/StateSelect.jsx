import { useCallback, useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { AsyncSelect } from './AsyncSelect';
import { useLazyGetStatesQuery } from 'apis/userProfile';
import useAddressOptions from 'shared/hooks/useAddressOptions';


export const StateSelect = (props) => {
    const form = useFormContext();
    const country = form.watch("country");
    const [getStates] = useLazyGetStatesQuery();
    const { loadOptions } = useAddressOptions(getStates, { country })

    useEffect(() => {
        form.setValue("state", "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country])

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
