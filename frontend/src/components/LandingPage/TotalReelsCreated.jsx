import React from 'react'
import { Box, Typography } from '@mui/material'
import HeroImage from "assets/images/heroSection.svg";
import { styled } from '@mui/material/styles'

const CounterDigitContainer = styled(Typography)(({ theme }) => ({
    backgroundColor: "#4987FF",
    color: theme.palette.text.secondary,
    fontSize: '5.9983rem',
    flex: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
    },
}));

const CounterContainer = styled(Box)(() => ({
    backgroundColor: "#1053D4",
}));

const StraightLine = styled(Typography)(() => ({
    backgroundColor: "#1053D4",
    height: '5px',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: 'absolute',
    width: '100%'
}));


const TotalReelsCreated = () => {
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
            }}
            mt={20}
            mb={20}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="100%"
                maxWidth="735px"
                gap={2}
            >
                <Typography textAlign='center' variant='h2' fontWeight={700}>Total Reels Created through ReelMoment</Typography>
                <CounterContainer borderRadius="10px" gap={1} margin="0 auto" width="80%" p={2} display="flex" position='relative' justifyContent="center">
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">0</CounterDigitContainer>
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">0</CounterDigitContainer>
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">2</CounterDigitContainer>
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">3</CounterDigitContainer>
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">8</CounterDigitContainer>
                    <CounterDigitContainer fontWeight={700} borderRadius="6px">6</CounterDigitContainer>
                    <StraightLine />
                </CounterContainer>
            </Box>
        </Box>
    )
}

export default TotalReelsCreated