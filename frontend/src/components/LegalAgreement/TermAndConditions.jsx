import React from 'react'
import { Box, Typography } from "@mui/material";
import Banner from 'components/LegalAgreement/Banner';

const TermAndConditions = () => {
    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Banner
                title="Term & Conditions"
                description="An amazing set of templates allowing everyone to generate content 3x-5x faster"
            />
            <Box
                display="flex"
                flexDirection="column"
                sx={{ backgroundColor: "#FAFBFD" }}
                p={2.5}
            >
                <Typography fontWeight={700} fontSize={17} mb={1}>
                    Terms & Conditions of Reel Moment
                </Typography>
                <Typography color='#686363'>
                    Welcome to Reel Moment! Your access and use of our online platform are subject to the following terms and
                    conditions. By using our service, you agree to comply with these terms, which govern your access and
                    use of Reel Moment. Our platform allows users to create and share moments using various multimedia
                    content, including videos, images, and text. To access certain features, you may need to create an
                    account and are responsible for maintaining its confidentiality and accuracy of information
                    provided. You agree to use Reel Moment in compliance with applicable laws and regulations,
                    refraining from any action that disrupts its functioning. While you retain ownership of your
                    uploaded content, you grant Reel Moment a license to use, modify, reproduce, and distribute it to
                    facilitate the Service. Our Privacy Policy governs the handling of personal information collected through
                    the Service. Reel Moment is not liable for damages arising from your use or inability to use the platform,
                    provided on an "as is" and "as available" basis. We reserve the right to modify these Terms at any time,
                    with your continued use signifying acceptance of any changes. We may terminate or suspend accounts or
                    access without notice at our discretion. These Terms and Conditions are governed by the laws of
                    [Jurisdiction], and any disputes will be subject to its jurisdiction. If you have questions or concerns,
                    please contact us at [contact email].
                </Typography>
                <Typography color='#686363'>
                    Last updated: [Dec 28,2023]
                </Typography>
            </Box>
        </Box>
    )
}

export default TermAndConditions