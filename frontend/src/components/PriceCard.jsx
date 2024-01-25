import React from 'react';
import { Typography, Divider, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles'
import CheckTick from 'assets/logos/CheckTick';
import { FooterLinkPrimary, appBlackcolor, appWhite } from 'theme/colors';


const Container = styled(Stack)(({ isActive }) => ({
    backgroundColor: isActive ? FooterLinkPrimary : 'inherit',
    maxWidth: "296px",
    borderRadius: "8px",
    border: `1px solid ${FooterLinkPrimary}`
}));


const PrimaryButton = styled(Button)(({ isActive }) => ({
    borderRadius: '30px!important',
    padding: '12px 8px',
    color: FooterLinkPrimary,
    border: `2px solid ${FooterLinkPrimary}`,
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: isActive ? appWhite : "inherit",
    '&:hover': {
        border: `2px solid ${FooterLinkPrimary}`,
        backgroundColor: isActive ? appWhite : "inherit"
    }
}));

const CheckedItem = ({ description, isActive = false }) => (
    <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <CheckTick fill={isActive ? "#F9FBFF" : "#DBF6FF"} />
        <Typography fontSize={18}>{description}</Typography>
    </Stack>
)


const PriceCard = ({ isActive = false, type, price, desciption, includedServices = [], buttonText }) => {
    return (
        <Stack width="100%">
            <Container
                spacing={2}
                direction='column'
                padding={3}
                isActive={isActive}
                color={isActive ? appWhite : appBlackcolor}
            >
                <Typography variant='h4' fontWeight={700}>{type}</Typography>
                <Typography variant='h5' fontWeight={700}>${price}</Typography>
                <Typography color={isActive ? appWhite : "#667085"}>{desciption}</Typography>
                <Divider sx={{
                    borderColor: '#D9D9D9'
                }} />
                <Stack mb={2} mt={1}>
                    {
                        includedServices?.map((item) => <CheckedItem description={item} isActive={isActive} />)
                    }
                </Stack>
                <PrimaryButton
                    variant='outlined'
                    isActive
                // sx={primaryButtonStyle}
                >
                    {buttonText}
                </PrimaryButton>
            </Container>
        </Stack>
    )
}

export default PriceCard