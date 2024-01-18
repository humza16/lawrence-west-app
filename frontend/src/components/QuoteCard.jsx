import React from 'react'
import { Typography, Stack } from '@mui/material';
import Quote from './Quote';
import CrownSvg from 'assets/logos/CrownSvg';

const QuoteCard = () => {
    return (
        <Stack width='100%' display='flex' alignItems='center' mb={2}>
            <Stack maxWidth="1080px" spacing={4}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h3' fontWeight={700}>What People say about us</Typography>
                    <CrownSvg />
                </Stack>
                <Quote
                    description='OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects.
                Templates were incredible! Love ya'
                    name="Jane Copper"
                    designation="Product Designer"
                    userImage=""
                />
            </Stack>
        </Stack>
    )
}

export default QuoteCard