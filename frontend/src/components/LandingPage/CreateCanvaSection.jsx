import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import lady from "assets/images/lady.svg";
import family from "assets/images/family.svg";
import Birthday from "assets/images/Birthday.svg";
import mountains from "assets/images/mountains.svg";
import flowers from "assets/images/Flowers.svg";
import party from "assets/images/party.svg";
import anniversary from "assets/images/anniversary.svg";


const CreateCanvaSection = () => {
    return (
        <>
            <Box
                // Width='100%'
                display="flex"
                justifyContent="start"
                alignItems="start"
                marginTop="35px"
                marginBottom="35px"

            >
                <Box
                    flexDirection="column"
                >
                    <Typography
                        fontWeight={700}
                        textAlign='start'
                        sx={{
                            fontSize: { xs: 24, md: 40, lg: 55 }
                        }}
                    >
                        Create reels
                    </Typography>
                    <Typography
                        fontWeight={700}
                        textAlign='start'
                        sx={{
                            fontSize: { xs: 24, md: 40, lg: 55 }
                        }}
                    >
                        with our Templates
                    </Typography>
                </Box>
            </Box >
            <Grid container spacing={0.5}  gap={1} m={1}>
                <Grid item xs={6} md={1.5}>
                    <img src={party} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={mountains} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid xs={6} md={3}>
                    <img src={Birthday} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid xs={6} md={3}>
                    <img src={flowers} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid xs={6} md={2}>
                    <img src={family} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid xs={6} md={5}>
                    <img src={anniversary} style={{ borderRadius: "18px" }} />
                </Grid>
                <Grid xs={6} md={3}>
                    <img src={lady} style={{ borderRadius: "18px" }} />
                </Grid>
            </Grid>
        </>
    )
}

export default CreateCanvaSection