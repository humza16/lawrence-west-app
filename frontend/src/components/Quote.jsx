import React from 'react';
import { Typography, Stack } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Carousel from 'assets/images/Carousel.png';
import { FooterLinkPrimary } from 'theme/colors';
import { styled } from '@mui/material/styles'

const CircleContainer = styled(Stack)(({ isActive }) => ({
  borderRadius: "30px",
  border: `1px solid ${FooterLinkPrimary}`,
  padding: 3
}));

const Quote = ({ userImage, description, name, designation }) => {
  return (
    <Stack direction='column' spacing={2} >
      <img src={Carousel} alt="pic" width={60} height={60} />
      <Typography variant='h4'>
        {description}
      </Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography display='flex' gap={4}> <Typography variant='caption' fontWeight={600}>___________</Typography>{name} - {designation}</Typography>
        <Stack direction='row' spacing={2}>
          <CircleContainer>
            <WestIcon />
          </CircleContainer>
          <CircleContainer>
            <EastIcon />
          </CircleContainer>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Quote