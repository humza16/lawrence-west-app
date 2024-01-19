import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styled from '@emotion/styled';
import HeroImage from "assets/images/heroSection.svg";
import CreateBG from "assets/images/create-bg.svg";


const HeroSection = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"

            sx={{
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "100vh",
                maxWidth: "100%"
                // width: "100%"
            }}
        >
            <Box

                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"


            >
                <Typography
                    fontWeight={700}
                    textAlign='center'
                    sx={{
                        fontSize: { xs: 24, md: 40, lg: 55 }
                    }}
                // marginTop={16}
                >
                    Every Experience Deserves a <br /> Reel Moment What will you <Typography fontWeight={700}
                        textAlign='center' sx={{
                            minHeight: { xs: 38, md: 70, lg: 90 },
                            display: "inline-block",
                            fontSize: { xs: 24, md: 40, lg: 55 },
                            backgroundImage: `url(${CreateBG})`,
                            backgroundPosition: "100% 108%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            maxWidth: "fit-content"
                        }}>create?</Typography>
                </Typography>

                <Button variant='contained' color='secondary' sx={{ borderRadius: '30px!important', paddingX: 4, paddingY: 1.5 }} >Creat Moment</Button>

            </Box>
        </Box >
    )
}

export default HeroSection