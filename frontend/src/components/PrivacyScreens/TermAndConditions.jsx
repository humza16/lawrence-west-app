import React from 'react'
import { Box, Typography } from "@mui/material";
import StyledTabs from 'components/StyledTabs';

const TermAndConditions = () => {
    return (
        <Box
            width="100%"
            height="100vh" // Set the height of the container
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <StyledTabs/>
            <Box
                maxWidth="708px"
                display="flex"
                flexDirection="column"
                sx={{ backgroundColor: "#FAFBFD" }}
                padding={4}

            >
                <Typography fontWeight={600} fontSize={17} mb={2}>
                    Terms & Conditions of Reel Moment
                </Typography>
                <Typography fontWeight={400} fontSize={16} color='#686363'>
                    Welcome to Reel Moment! Your access and use of our online platform are subject to the following terms and conditions. By using our service, you agree to comply with these terms, which govern your access and use of Reel Moment. Our platform allows users to create and share moments using various multimedia content, including videos, images, and text. To access certain features, you may need to create an account and are responsible for maintaining its confidentiality and accuracy of information provided. You agree to use Reel Moment in compliance with applicable laws and regulations, refraining from any action that disrupts its functioning. While you retain ownership of your uploaded content, you grant Reel Moment a license to use, modify, reproduce, and distribute it to facilitate the Service. Our Privacy Policy governs the handling of personal information collected through the Service. Reel Moment is not liable for damages arising from your use or inability to use the platform, provided on an "as is" and "as available" basis. We reserve the right to modify these Terms at any time, with your continued use signifying acceptance of any changes. We may terminate or suspend accounts or access without notice at our discretion. These Terms and Conditions are governed by the laws of [Jurisdiction], and any disputes will be subject to its jurisdiction. If you have questions or concerns, please contact us at [contact email].
                    <br />
                    Last updated: [Dec 28,2023]

                </Typography>
            </Box>


        </Box>
    )
}

export default TermAndConditions