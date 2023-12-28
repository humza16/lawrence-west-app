import React from 'react'
import { FormControl, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Controller, useFormContext } from 'react-hook-form'
import { appToggleButtonBorder } from 'theme/colors';


const MiuToggleButton = styled(ToggleButton)(({ theme }) => ({
    border: `1px solid ${appToggleButtonBorder}!important`,
    marginBottom: '12px',
    borderRadius: '8px !important'
}));

const OnboardingGenderForm = () => {
    const { control } = useFormContext();
    const genders = [
        "Female",
        "Male",
        "Rather Not say"
    ]


    return (
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <Controller
                name="gender"
                control={control}
                render={({ field }) => <ToggleButtonGroup
                    orientation="vertical"
                    exclusive
                    {...field}
                >
                    {genders.map((gender) => {
                        return (
                            <MiuToggleButton
                                color='primary'
                                key={gender}
                                value={gender}
                                aria-label={gender}
                                fullWidth
                                disableRipple
                            >
                                {gender}
                            </MiuToggleButton>
                        )
                    })}
                </ToggleButtonGroup>
                }
            />
        </FormControl>
    )
}

export default OnboardingGenderForm