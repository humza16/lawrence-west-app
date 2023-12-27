import { Box, Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

const OnboardingGenderForm = () => {
    const genders = [
        "Female",
        "Male",
        "Rather Not say"

    ]


    return (
        <Box
            maxWidth="330px" display="flex" flexDirection="column"
        >
            <ToggleButtonGroup
                orientation="vertical"
                exclusive

            >
                {genders.map((gender) => {
                    return (
                        <ToggleButton
                            key={gender}
                            value={gender}
                            aria-label={gender}
                            fullWidth
                            disableRipple
                            sx={{ border: '1px solid #E1E6EF !important', marginBottom: '12px', borderRadius: '8px !important' }}>

                            {gender}
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
            <Stack spacing={1} mb={4} >
                <Button type="submit" fullWidth variant="contained" >
                    Next
                </Button>
                <Button fullWidth color="secondary">
                    Back
                </Button>
            </Stack>
        </Box>
    )
}

export default OnboardingGenderForm