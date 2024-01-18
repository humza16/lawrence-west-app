import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styled from '@emotion/styled';
import ReelScreen from "assets/images/ReelScreen.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid #1053D4`,
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "30px!important",
  minWidth: "180px",
  fontWeight: "400 !important",
  height: "42px",
  color: '#FFFFFF',
  backgroundColor: "#1053D4"


}));
const CreateReelSection = () => {
  return (
    <Box
      Width='100%'

    // sx={{
    //   backgroundImage: `url(${HeroImage})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   height: "500px",
    //   maxHeight: '800px',
    // }}
    >
      <Box

        display="flex"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        maxWidth='80%'
        // marginLeft={10}
        margin="0 auto"

      >
        <Typography
          fontWeight={700}
          textAlign='left'
          sx={{
            fontSize: { xs: 24, md: 40, lg: 55 }
          }}
        >
          Create in seconds using

        </Typography>
        <Typography
          fontWeight={700}
          textAlign='left'
          sx={{
            fontSize: { xs: 24, md: 40, lg: 55 }
          }}
        >
    
          Reel moment
        </Typography>
        <Typography
          variant="body1"
        >
          Welcome to Reel Moment! Your access and use of our online platform are subject to
        </Typography>
        <Typography
          variant="body1"
        >
          the following terms and conditions. By using our service, you agree to comply with
        </Typography>
        <Typography
          variant="body1"
        >
          these terms, which govern your access and use of Reel Moment. 
        </Typography>
        <StyledButton>
          Learn More
        </StyledButton>
        <img src={ReelScreen} style={{ maxWidth: "100%", height: "auto" }} />
      </Box>


    </Box>
  )
}

export default CreateReelSection