import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LegalAgreementBanner from 'assets/images/LegalAgreementBanner.svg'

const Banner = ({ title, description }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${LegalAgreementBanner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "50vh",
                width: "100%"
            }}
        >
            <Stack alignItems="center" justifyContent="center" height="100%" >
                <Typography variant='h4' fontWeight={500} gutterBottom>{title}</Typography>
                <Typography >{description}</Typography>
                {/* <Typography>{description}</Typography> */}
            </Stack>
        </Box>
    )
}

export default Banner