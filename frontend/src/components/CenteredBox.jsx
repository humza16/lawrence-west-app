import React from 'react'
import { Box } from "@mui/material";

const CenteredBox = ({ children, maxWidth = "380px" }) => {
    return (
        <Box
            width="100%"
            height="100vh" // Set the height of the container
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                maxWidth={maxWidth}
                display="flex"
                flexDirection="column"
            >
                {children}
            </Box>
        </Box>
    )
}

export default CenteredBox