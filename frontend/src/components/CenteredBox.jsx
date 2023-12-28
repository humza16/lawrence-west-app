import React from 'react'
import {  Box } from "@mui/material";

const CenteredBox = ({ children }) => {
    return (
        <Box
            width="100%"
            height="100vh" // Set the height of the container
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                maxWidth="380px"
                display="flex"
                flexDirection="column"
            >
                {children}
            </Box>
        </Box>
    )
}

export default CenteredBox