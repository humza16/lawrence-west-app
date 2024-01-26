import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReelScreen from "assets/images/ReelScreen.png";

const typographyStyle = { fontSize: { xs: 24, md: 40, lg: 55 } }

const CreateReelSection = () => {
  return (
    <Box
      Width='100%'
      sx={{
        backgroundColor: "#EBFAFF"
      }}
      marginBottom="50px"
      marginTop="50px"
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
          sx={typographyStyle}
          marginTop="20px"
        >
          Create in seconds using
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='left'
          sx={typographyStyle}
        >
          Reel moment
        </Typography>
        <Typography
          variant="body1"
          marginTop={2}
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
        <Button
          variant='contained'
          color='secondary'
          sx={{ borderRadius: '30px!important', paddingX: 4, paddingY: 1.5, marginTop: "20px", marginBottom: "30px" }}
        >
          Learn More
        </Button>
        <LazyLoadImage src={ReelScreen} style={{ maxWidth: "100%", height: "auto", marginBottom: "50px" }} alt='"Reel-screen' />
      </Box>
    </Box>
  )
}

export default CreateReelSection