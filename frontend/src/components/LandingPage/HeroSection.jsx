import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styled from '@emotion/styled';
import HeroImage from "assets/images/heroSection.svg";

const StyledButton = styled(Button)(({ theme }) => ({
    border: `2px solid #1053D4`,
    marginTop: "10px",
    borderRadius: "30px!important",
    minWidth: "219px",
    fontWeight: "400 !important",
    height: "42px",
    color: '#FFFFFF',
    backgroundColor: "#1053D4"


}));
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
                    Every Experience Deserves a Reel Moment What will you create?
                </Typography>
                
                <StyledButton>
                    Create Moment
                </StyledButton>
            </Box>
        </Box>
    )
}

export default HeroSection