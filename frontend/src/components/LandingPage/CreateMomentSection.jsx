import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import Balloon from "assets/images/Balloon.svg";
import Mug from "assets/images/Mug.svg";
import WomenAndKid from "assets/images/WomenAndKid.svg";
import ChrismisTree from "assets/images/ChrismisTree.svg";


const Images = [
  {
    id: 1,
    Image: Balloon
  },
  {
    id: 2,
    Image: ChrismisTree
  },
  {
    id: 3,
    Image: Mug
  },
  {
    id: 4,
    Image: WomenAndKid
  }
]


const CreateMomentSection = () => {
  return (
    <Box
      Width='100%'
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="35px"
      marginBottom="35px"
    >
      <Box
      // sx={{
      //   height: { xs: '400px', md: '500px', } // Adjust height values as needed
      // }}
      >
        <Typography
          fontWeight={700}
          textAlign='center'
          sx={{
            fontSize: { xs: 24, md: 40, lg: 55 }
          }}
        >
          Create Moments to Share
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          sx={{
            fontSize: { xs: 24, md: 40, lg: 55 },
          }}
        >
          With your loved ones
        </Typography>
        <Grid container spacing={2}>
          {Images.map(item =>
            <Grid
              key={item.id}
              item
            // sx={{
            //   height: { xs: 400, md: 'auto' }
            // }}
            >
              <img src={item.Image} style={{ borderRadius: '30px' }} alt='' loading='lazy' />
            </Grid>)}
        </Grid>
      </Box>

    </Box >
  )
}

export default CreateMomentSection