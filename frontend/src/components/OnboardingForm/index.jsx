import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Stepper from 'components/Stepper';

const OnboardingForm = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Box
      width="100%"
      height="100vh" // Set the height of the container
      display="flex"
      justifyContent="center"
      alignItems="center"
      position='relative'
    >
      <Box maxWidth="330px" display="flex" flexDirection="column">
        <Stepper activeTab={activeTab} />
      </Box>

      <Box position='absolute' bottom='24px' right='24px'>
        <Button disableRipple variant='noBackground' endIcon={<KeyboardArrowRightIcon />}>Finish Onboarding</Button>
      </Box>
    </Box>
  )
}

export default OnboardingForm