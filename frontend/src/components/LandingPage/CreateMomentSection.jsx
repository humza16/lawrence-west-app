import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Balloon from "assets/images/Balloon.png";
import Tree from "assets/images/Tree.png";
import Bottle from "assets/images/Bottle.png";
import Kid from "assets/images/Kid.png";


const Images = [
  {
    id: 1,
    Image: Balloon
  },
  {
    id: 2,
    Image: Tree
  },
  {
    id: 3,
    Image: Bottle
  },
  {
    id: 4,
    Image: Kid
  }
]

const typographyStyle = { fontSize: { xs: 24, md: 40, lg: 55 } };
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
      >
        <Typography
          fontWeight={700}
          textAlign='center'
          sx={typographyStyle}
        >
          Create Moments to Share
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          sx={typographyStyle}
        >
          With your loved ones
        </Typography>
        <Grid container spacing={2}>
          {Images.map(item =>
            <Grid
              key={item.id}
              item
            >
              <LazyLoadImage src={item.Image} style={{ borderRadius: '30px' }} alt='' effect='blur' />
            </Grid>)}
        </Grid>
      </Box>

    </Box >
  )
}

export default CreateMomentSection