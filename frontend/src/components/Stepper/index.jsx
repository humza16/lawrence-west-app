import React from 'react';
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material';

const MuiStepper = styled(Box)(({ theme, active = false }) => ({
    backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary.light,
    width: '61px',
    height: '5px',
    borderRadius: '10px',
}));


const Stepper = ({ activeTab = 1, ...props }) => {
    return (
        <Box {...props} display='flex' gap='6px'>
            {[1, 2, 3, 4, 5].map((item) => <MuiStepper key={item} active={Boolean(item <= activeTab)} />)}
        </Box>
    )
}

export default Stepper