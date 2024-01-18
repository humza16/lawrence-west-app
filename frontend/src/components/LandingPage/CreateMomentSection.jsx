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
      // maxWidth="1200px"
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
            fontSize: { xs: 24, md: 40, lg: 55 }
          }}
        >
          With your loved ones
        </Typography>
        <Grid container spacing={2}>
          {Images.map((item, index) => {
            console.log("pics", item.Image);
            return (
              <Grid item>
                <img key={item.id} src={item.Image} style={{ borderRadius: '30px' }} />
              </Grid>
            )
          })}


        </Grid>
      </Box>

    </Box >
  )
}

export default CreateMomentSection