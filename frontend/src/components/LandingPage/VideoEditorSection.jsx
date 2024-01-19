import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import EditorBg from 'assets/images/EditorBg.svg'
import { FooterLinkPrimary } from 'theme/colors';

const VideoEditorSection = () => {
    return (
        <Stack sx={{
            backgroundImage: `url(${EditorBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: "100vh",
            maxWidth: "100%"
        }}
        >
            <Stack pl={10} height="100vh" direction="column" alignItems="flex-start" width="100%" maxWidth={600} justifyContent="center">
                <Typography variant='h2' color="secondary" gutterBottom>All you need is Reel moment for every Special Occasion</Typography>
                <Button variant='contained' color='secondary' sx={{ borderRadius: '30px!important', paddingX: 4, paddingY: 1.5 }} >Creat Moment</Button>
            </Stack>
        </Stack>
    )
}

export default VideoEditorSection