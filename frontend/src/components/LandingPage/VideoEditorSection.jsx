import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import EditorBg from 'assets/images/EditorBg.svg'
import { FooterLinkPrimary } from 'theme/colors';



const MuiTypography = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    [theme.breakpoints.down('md')]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.5rem",
    },
}));

const VideoEditorSection = () => {
    return (
        <Stack sx={{
            backgroundImage: `url(${EditorBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: "100vh",
            // width: "100%"
        }}
        >
            <Stack sx={{
                marginLeft: {
                    md: 5,
                    sm: 3,
                    xs: 2,
                }
            }}
                height="100vh" direction="column" alignItems="flex-start" justifyContent="center">
                <MuiTypography color="secondary">All you need is Reel</MuiTypography>
                <MuiTypography color="secondary" >moment for every</MuiTypography>
                <MuiTypography color="secondary" gutterBottom>Special Occasion</MuiTypography>
                <Button variant='contained' color='secondary' sx={{ borderRadius: '30px!important', paddingX: 4, paddingY: 1.5 }} >Creat Moment</Button>
            </Stack>
        </Stack>
    )
}

export default VideoEditorSection