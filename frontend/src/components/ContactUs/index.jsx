import React from 'react';
import { Box } from '@mui/material'
import ContactBackground from 'assets/images/ContactBackground.svg';
import ContactUsForm from './ContactUsForm';
import Faq from 'components/faq/faq';

const ContactUs = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${ContactBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: "80vh",
                    maxWidth: "100%"
                }}
            >
                <ContactUsForm />

            </Box>
            <Box p={2}>
                <Faq />
            </Box>
        </>
    )
}

export default ContactUs