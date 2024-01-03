import React from 'react'
import { FormControl, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Controller, useFormContext } from 'react-hook-form'
import { appToggleButtonBorder } from 'theme/colors';
import AnimatedBox from './AnimatedBox';


const MiuToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "blue",
        backgroundColor: 'light blue',
        border: `1px solid blue !important`,

    },
    border: `1px solid ${appToggleButtonBorder}!important`,
    marginBottom: '12px',
    borderRadius: '8px !important'
}));

const OnboardingGenderForm = ({ genericHeight }) => {
    const { control } = useFormContext();
    const genders = [
        "Male",
        "Female",
        "Rather Not say"
    ]


    return (
        <AnimatedBox genericHeight={genericHeight} height={genericHeight}>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) =>
                        <ToggleButtonGroup
                            orientation="vertical"
                            exclusive
                            {...field}
                            className='Animate_Opacity'
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
        </AnimatedBox>
    )
}

export default OnboardingGenderForm