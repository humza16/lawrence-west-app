import React from 'react'
import { Typography, Stack, Divider } from '@mui/material';
import Quote from './Quote';
import CrownSvg from 'assets/logos/CrownSvg';
import YellowBrushMark from "assets/images/YellowBrushMark.svg";



const QuoteCard = () => {
    return (
        <>
            <Stack width='100%' display='flex' alignItems='center' mb={10}>
                <Stack maxWidth="1080px" spacing={4}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h3' fontWeight={700}>What Peopl
                            <Typography variant='h3' fontWeight={700}
                                textAlign='center' sx={{
                                    // minHeight: { xs: 38, md: 70, lg: 90 },
                                    display: "inline",
                                    // fontSize: { xs: 24, md: 40, lg: 55 },
                                    backgroundImage: `url(${YellowBrushMark})`,
                                    backgroundPosition: "100% 100%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    maxWidth: "fit-content"
                                }}>e say ab</Typography>
                            out us</Typography>
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
                <Divider variant="middle" sx={{ padding: "10px" }} />


            </Stack>

        </>
    )
}

export default QuoteCard