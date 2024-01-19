import React from 'react';
import { Grid, Stack, Typography, Switch } from '@mui/material'
import PriceCard from 'components/PriceCard';
import { FooterLinkPrimary } from 'theme/colors';

import { styled } from '@mui/material/styles'

const MuiSwitch = styled(Switch)(({ theme }) => ({
    width: 80,
    height: 44,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: "2px 24px 24px 24px",
        transitionDuration: '300ms',
        transform: 'translateX(-23px)',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: FooterLinkPrimary,
                opacity: 1,
                border: 0,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 40,
        height: 40,
    },
    '& .MuiSwitch-track': {
        borderRadius: 80 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const PriceCardSection = () => {
    return (
        <Stack width="100%" mb={20}>
            <Typography textAlign="center" variant='h2' fontWeight={700} mb={6}>Our Pricing</Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" gap={2} mb={4}>
                <Typography fontSize={18} sx={{ opacity: "50%" }}>Billed Monthly</Typography>
                <MuiSwitch />
                <Typography fontWeight={700} fontSize={18} color={FooterLinkPrimary}>Billed Yearly (save 15%)</Typography>
            </Stack>
            <Grid container spacing={1} paddingX={4}>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <PriceCard
                        type="Free"
                        price="0"
                        desciption="Create one moment for free."
                        includedServices={["create 1st moment free", "QR management", "Physical printing", "Edit anytime"]}
                        buttonText="Try for free"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <PriceCard
                        isActive
                        type="Free"
                        price="0"
                        desciption="Create one moment for free."
                        includedServices={["create 1st moment free", "QR management", "Physical printing", "Edit anytime"]}
                        buttonText="Try for free"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <PriceCard
                        type="Free"
                        price="0"
                        desciption="Create one moment for free."
                        includedServices={["create 1st moment free", "QR management", "Physical printing", "Edit anytime"]}
                        buttonText="Try for free"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <PriceCard
                        type="Free"
                        price="0"
                        desciption="Create one moment for free."
                        includedServices={["create 1st moment free", "QR management", "Physical printing", "Edit anytime"]}
                        buttonText="Try for free"
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default PriceCardSection