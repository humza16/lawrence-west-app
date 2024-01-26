import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styled from '@emotion/styled';
import moment from "assets/images/moment.svg";

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

const typographyStyle = { fontSize: { xs: 24, md: 40, lg: 55 } };

const MomentSection = () => {
    return (
        <Box
            display="flex"
            justifyContent="Start"
            alignItems="start"
            marginTop="20px"
            sx={{
                backgroundImage: `url(${moment})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "150vh",
                maxWidth: "100%"
                // width: "100%"
            }}
        >
            <Box

                textAlign='left'
                color="white"
                mt="50px"
                ml="20px"
            >
                <Typography
                    fontWeight={700}
                    textAlign='left'
                    sx={typographyStyle}
                >
                    All you need is Reel
                </Typography>
                <Typography
                    fontWeight={700}
                    textAlign='center'
                    sx={typographyStyle}
                >
                    moment for every
                </Typography>
                <Typography
                    fontWeight={700}
                    textAlign='center'
                    sx={typographyStyle}
                >
                    Special Occasion
                </Typography>

                <StyledButton>
                    Create Moment
                </StyledButton>
            </Box>
        </Box>
    )
}

export default MomentSection