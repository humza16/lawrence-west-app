import React from 'react';
import {
    Typography,
    FormControl,
    Chip,
    Stack
} from "@mui/material";
import InputField from 'components/InputField';
import AnimatedBox from './AnimatedBox';

const OnboardingBioForm = ({ genericHeight }) => {
    return (
        <AnimatedBox genericHeight={genericHeight} height={genericHeight}>
            <FormControl fullWidth margin="normal">
                <Typography variant="body2" gutterBottom>
                    Username
                </Typography>
                <InputField
                    name="username"
                    type="text"
                    placeholder="Add Username"
                />
            </FormControl>
            <Stack direction="row" spacing={1} alignItems='center' flexWrap='wrap' rowGap='8px'>
                <Typography variant='caption'>Suggestions:</Typography>
                <Chip label="Bad_karma" />
                <Chip label="coldplay" />
                <Chip label="Jack_harlow" />
                <Chip label="Cute_cat" />
            </Stack>
            <FormControl fullWidth margin="normal">
                <Typography variant="body2" gutterBottom>
                    Bio
                </Typography>
                <InputField
                    name="bio"
                    type="text"
                    placeholder="Add to your Profile (Optional)"
                    multiline={true}
                    minRows={4}
                    maxRows={4}
                />
            </FormControl>
        </AnimatedBox>
    )
}

export default OnboardingBioForm